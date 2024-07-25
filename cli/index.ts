#!/usr/bin/env node
/* tslint:disable:no-implicit-dependencies */
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import { compile } from 'handlebars';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { dirname, join, resolve, extname as getExtName } from 'path';

import * as zlib from 'zlib';

// @ts-ignore
import { createStore, loadAndBundleSpec, Redoc } from '@dop/redoc';

import { watch } from 'chokidar';
import {
  createReadStream,
  existsSync,
  lstatSync,
  readFileSync,
  ReadStream,
  writeFileSync,
} from 'fs';
import * as mkdirp from 'mkdirp';

import * as YargsParser from 'yargs';
// eslint-disable-next-line import/no-extraneous-dependencies
import { findConfig } from '@redocly/openapi-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { parseYaml } from '@redocly/openapi-core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Config } from '@redocly/openapi-core';

interface Options {
  ssr?: boolean;
  watch?: boolean;
  cdn?: boolean;
  output?: string;
  title?: string;
  disableGoogleFont?: boolean;
  port?: number;
  templateFileName?: string;
  templateOptions?: any;
  redocOptions?: any;
}

export const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
};

const BUNDLES_DIR = dirname(require.resolve('@dop/redoc'));

const builderForBuildCommand = yargs => {
  yargs.positional('spec', {
    describe: 'path or URL to your spec',
  });

  yargs.option('o', {
    describe: 'Output file',
    alias: 'output',
    type: 'string',
    default: 'redoc-static.html',
  });

  yargs.options('title', {
    describe: 'Page Title',
    type: 'string',
  });

  yargs.options('disableGoogleFont', {
    describe: 'Disable Google Font',
    type: 'boolean',
    default: false,
  });

  yargs.option('cdn', {
    describe: 'Do not include ReDoc source code into html page, use link to CDN instead',
    type: 'boolean',
    default: false,
  });

  yargs.demandOption('spec');
  return yargs;
};

const handlerForBuildCommand = async (argv: any) => {
  const config = {
    ssr: true,
    output: argv.o as string,
    cdn: argv.cdn as boolean,
    title: argv.title as string,
    disableGoogleFont: argv.disableGoogleFont as boolean,
    templateFileName: argv.template as string,
    templateOptions: argv.templateOptions || {},
    redocOptions: getObjectOrJSON(argv.options),
  };

  try {
    await bundle(argv.spec, config);
  } catch (e) {
    handleError(e);
  }
};

YargsParser.command(
  'serve <spec>',
  'start the server',
  yargs => {
    yargs.positional('spec', {
      describe: 'path or URL to your spec',
    });

    yargs.options('title', {
      describe: 'Page Title',
      type: 'string',
    });

    yargs.option('s', {
      alias: 'ssr',
      describe: 'Enable server-side rendering',
      type: 'boolean',
    });

    yargs.option('h', {
      alias: 'host',
      type: 'string',
      default: '127.0.0.1',
    });

    yargs.option('p', {
      alias: 'port',
      type: 'number',
      default: 8080,
    });

    yargs.option('w', {
      alias: 'watch',
      type: 'boolean',
    });

    yargs.options('disable-google-font', {
      describe: 'Disable Google Font',
      type: 'boolean',
      default: false,
    });

    yargs.demandOption('spec');
    return yargs;
  },
  async argv => {
    const config: Options = {
      ssr: argv.ssr as boolean,
      title: argv.title as string,
      watch: argv.watch as boolean,
      disableGoogleFont: argv.disableGoogleFont as boolean,
      templateFileName: argv.template as string,
      templateOptions: argv.templateOptions || {},
      redocOptions: getObjectOrJSON(argv.options),
    };

    try {
      await serve(argv.host as string, argv.port as number, argv.spec as string, config);
    } catch (e) {
      handleError(e);
    }
  },
  [
    res => {
      console.log(
        `\n⚠️ This command is deprecated. Use "npx @redocly/cli preview-docs petstore.yaml"\n`,
      );
      return res;
    },
  ],
)
  .command(
    'build <spec>',
    'build definition into zero-dependency HTML-file',
    builderForBuildCommand,
    handlerForBuildCommand,
  )
  .command(
    'bundle <spec>',
    'bundle spec into zero-dependency HTML-file [deprecated]',
    builderForBuildCommand,
    handlerForBuildCommand,
    [
      res => {
        console.log(`\n⚠️ This command is deprecated. Use "build" command instead.\n`);
        return res;
      },
    ],
  )
  .demandCommand()
  .options('t', {
    alias: 'template',
    describe: 'Path to handlebars page template, see https://git.io/vh8fP for the example ',
    type: 'string',
  })
  .options('templateOptions', {
    describe:
      'Additional options that you want pass to template. Use dot notation, e.g. templateOptions.metaDescription',
  })
  .options('options', {
    describe: 'ReDoc options, use dot notation, e.g. options.nativeScrollbars',
  }).argv;

async function serve(host: string, port: number, pathToSpec: string, options: Options = {}) {
  let spec = await loadAndBundleSpec(isURL(pathToSpec) ? pathToSpec : resolve(pathToSpec));
  let pageHTML = await getPageHTML(spec, pathToSpec, options);
  const server = createServer((request, response) => {
    console.time('GET ' + request.url);
    if (request.url === '/redoc.standalone.js') {
      respondWithGzip(
        createReadStream(join(BUNDLES_DIR, 'redoc.standalone.js'), 'utf8'),
        request,
        response,
        {
          'Content-Type': 'application/javascript',
        },
      );
    } else if (request.url === '/') {
      respondWithGzip(pageHTML, request, response, {
        'Content-Type': 'text/html',
      });
    } else if (request.url === '/spec.json') {
      const specStr = JSON.stringify(spec, null, 2);
      respondWithGzip(specStr, request, response, {
        'Content-Type': 'application/json',
      });
    } else {
      try {
        const filePath = join(dirname(pathToSpec), request.url || '');
        const extname = String(getExtName(filePath)).toLowerCase() as keyof typeof mimeTypes;

        const contentType = mimeTypes[extname] || 'application/octet-stream';
        respondWithGzip(createReadStream(filePath), request, response, {
          'Content-Type': contentType,
        });
      } catch (e) {
        response.writeHead(404);
        response.write('Not found');
        response.end();
      }
    }

    console.timeEnd('GET ' + request.url);
  });

  console.log();

  server.listen(port, host, () => console.log(`Server started: http://${host}:${port}`));

  if (options.watch && existsSync(pathToSpec)) {
    const pathToSpecDirectory = resolve(dirname(pathToSpec));
    const watchOptions = {
      ignored: [/(^|[\/\\])\../, /___jb_[a-z]+___$/],
      ignoreInitial: true,
    };

    const watcher = watch(pathToSpecDirectory, watchOptions);
    const log = console.log.bind(console);

    const handlePath = async _path => {
      try {
        spec = await loadAndBundleSpec(resolve(pathToSpec));
        pageHTML = await getPageHTML(spec, pathToSpec, options);
        log('Updated successfully');
      } catch (e) {
        console.error('Error while updating: ', e.message);
      }
    };

    watcher
      .on('change', async path => {
        log(`${path} changed, updating docs`);
        handlePath(path);
      })
      .on('add', async path => {
        log(`File ${path} added, updating docs`);
        handlePath(path);
      })
      .on('addDir', path => {
        log(`↗  Directory ${path} added. Files in here will trigger reload.`);
      })
      .on('error', error => console.error(`Watcher error: ${error}`))
      .on('ready', () => log(`👀  Watching ${pathToSpecDirectory} for changes...`));
  }
}

async function bundle(pathToSpec, options: Options = {}) {
  const start = Date.now();
  const spec = await loadAndBundleSpec(isURL(pathToSpec) ? pathToSpec : resolve(pathToSpec));
  const pageHTML = await getPageHTML(spec, pathToSpec, { ...options, ssr: true });

  mkdirp.sync(dirname(options.output!));
  writeFileSync(options.output!, pageHTML);
  const sizeInKiB = Math.ceil(Buffer.byteLength(pageHTML) / 1024);
  const time = Date.now() - start;
  console.log(
    `\n🎉 bundled successfully in: ${options.output!} (${sizeInKiB} KiB) [⏱ ${time / 1000}s]`,
  );
}

async function getPageHTML(
  spec: any,
  pathToSpec: string,
  {
    ssr,
    cdn,
    title,
    disableGoogleFont,
    templateFileName,
    templateOptions,
    redocOptions = {},
  }: Options,
) {
  let html;
  let css;
  let state;
  let redocStandaloneSrc;
  if (ssr) {
    console.log('Prerendering docs');

    const specUrl = redocOptions.specUrl || (isURL(pathToSpec) ? pathToSpec : undefined);
    const store = await createStore(spec, specUrl, redocOptions);
    const sheet = new ServerStyleSheet();
    // @ts-ignore
    html = renderToString(sheet.collectStyles(React.createElement(Redoc, { store })));
    css = sheet.getStyleTags();
    state = await store.toJS();

    if (!cdn) {
      redocStandaloneSrc = readFileSync(join(BUNDLES_DIR, 'redoc.standalone.js'));
    }
  }

  templateFileName = templateFileName ? templateFileName : join(__dirname, './template.hbs');
  const template = compile(readFileSync(templateFileName).toString());
  return template({
    redocHTML: `
    <div id="redoc">${(ssr && html) || ''}</div>
    <script>
    ${(ssr && `const __redoc_state = ${sanitizeJSONString(JSON.stringify(state))};`) || ''}

    var container = document.getElementById('redoc');
    Redoc.${
      ssr
        ? 'hydrate(__redoc_state, container)'
        : `init("spec.json", ${JSON.stringify(redocOptions)}, container)`
    };

    </script>`,
    redocHead: ssr
      ? (cdn
          ? '<script src="https://unpkg.com/redoc@latest/bundles/redoc.standalone.js"></script>'
          : `<script>${redocStandaloneSrc}</script>`) +
        css +
        `
          <script>
            !function () {
              try {
                var d = document.documentElement.classList;
                d.remove("light-theme", "dark-theme");
                var e = JSON.parse(localStorage.getItem("mongodb-docs"))?.["theme"];
                if ("system" === e || (!e)) {
                  var t = "(prefers-color-scheme: dark)",
                    m = window.matchMedia(t);
                  m.media !== t || m.matches ? d.add("dark-theme", "system") : d.add("light-theme", "system");
                } else if (e) {
                  var x = { "light-theme": "light-theme", "dark-theme": "dark-theme" };
                  x[e] && d.add(x[e]);
                }
              } catch (e) {
                console.error(e);
              }
            }();
          </script>` +
        `
          <style>
            :root {
              --middle-panel-bg-color: unset;
              --sidebar-bg-color: #F9FBFA;
              --right-panel-bg-color: #001E2B;
              --sidebar-text-color: black;
              --text-primary-color: #1C2D38;
              --text-secondary-color: #3e647c;
              --api-header-color: #00684A;

              --resource-version-pill-bg: #E8EDEB;
              --resource-version-pill-color: #001E2B;
              --download-btn-border-color: #000000;

              --colors-primary-main: #001E2B;
              --colors-primary-main-light: #006591;
              --colors-primary-main-dark: #000000;

              --colors-success-main: #1d8127;
              --colors-success-main-light: #86e490;
              --colors-success-main-dark: #0a2e0e;

              --absolute-border-color: none;
              --section-divider-color: rgba(0, 0, 0, 0.2);

              --sidebar-hover: #E8EDEB;
              --sidebar-active-bg: #E3FCF7;
              --sidebar-active-color: #023430;
              --sidebar-hl: #E7EEEC;
              --back-btn-label-color: #5C6C75;

              --underlined-header-color: rgba(38, 50, 56, 0.5);
              --underlined-header-border-color: rgba(38, 50, 56, 0.3);
              --link-blue: #016BF8;
              --schema-lines-color: #001E2B;

              --type-name-color: #1C2D38;
              --type-prefix-color: rgba(28, 45, 56, 0.9);

              --responses-success-color: #00684A;
              --responses-success-bg: #E3FCF7;

              --responses-error-color: #DB3030;
              --responses-error-bg: #FFEAE5;

              --http-get-bg: #E1F7FF;
              --http-get-border: #C3E7FE;
              --http-get-color: #1254B7;

              --http-post-bg: #E3FCF7;
              --http-post-border: #C0FAE6;
              --http-post-color: #00684A;

              --http-patch-bg: #FEF7DB;
              --http-patch-border: #FFEC9E;
              --http-patch-color: #944F01;

              --http-put-bg: #FEF7DB;
              --http-put-border: #FFEC9E;
              --http-put-color: #944F01;

              --http-delete-bg: #FFEAE5;
              --http-delete-border: #FFCDC7;
              --http-delete-color: #970606;

              --gray-pill-bg: #F9FBFA;
              --gray-pill-border: #E8EDEB;
              --gray-pill-color: #1C2D38;

              --blue-pill-bg: #E1F7FF;
              --blue-pill-border: #C3E7FE;
              --blue-pill-color: #016BF8;

              --require-label-color: #DB3030;
              --securities-col-bg: rgb(245, 245, 245);

              --typography-code-color: #1C2D38;
              --typography-code-bg: #F9FBFA;

              --select-btn-color: #001e2b;
              --select-btn-bg: white;
              --select-btn-border: #889397;
              --select-btn-hover-shadow-color: #E8EDEB;
              --select-btn-focus-shadow-color: #0498EC;

              --select-ul-border: #E8EDEB;
              --select-ul-shadow-color: rgba(0,30,43,0.25);
              --select-ul-bg: white;

              --select-disabled-color: #889397;
              --select-enabled-hover-bg: #E8EDEB;

              --select-li-color: #1C2D38;
              --select-li-focus-color: #083C90;
              --select-li-focus-bg: #E1F7FF;
              --select-li-before-focus-bg: #016BF8;
            }

            .dark-theme {
              --middle-panel-bg-color: #001E2B;
              --sidebar-bg-color: #112733;
              --right-panel-bg-color: #001E2B;
              --sidebar-text-color: #E8EDEB;
              --text-primary-color: #E8EDEB;
              --text-secondary-color: #f7f7f7;
              --api-header-color: #E8EDEB;

              --resource-version-pill-bg: #1C2D38;
              --resource-version-pill-color: #E8EDEB;
              --download-btn-border-color: #5C6C75;

              --colors-primary-main: #E8EDEB;
              --colors-primary-main-light: #afc0b9;
              --colors-primary-main-dark: #fff;

              --colors-success-main: #71F6BA;
              --colors-success-main-light: #00684A;
              --colors-success-main-dark: #023430;

              --absolute-border-color: #3D4F58;
              --section-divider-color: rgba(232, 237, 235, 0.2);

              --sidebar-hover: #1C2D38;
              --sidebar-active-bg: #023430;
              --sidebar-active-color: #E3FCF7;
              --sidebar-hl: #3D4F58;
              --back-btn-label-color: #889397;

              --underlined-header-color: #C1C7C6;
              --underlined-header-border-color: #C1C7C6;
              --link-blue: #0498EC;
              --schema-lines-color: #889397;

              --type-name-color: #E8EDEB;
              --type-prefix-color: rgba(232,237,235,0.9);

              --responses-success-color: #C0FAE6;
              --responses-success-bg: #023430;

              --responses-error-color: #FFCDC7;
              --responses-error-bg: #5B0000;

              --http-get-bg: #083C90;
              --http-get-border: #1254B7;
              --http-get-color: #C3E7FE;

              --http-post-bg: #023430;
              --http-post-border: #00684A;
              --http-post-color: #00ED64;

              --http-patch-bg: #4C2100;
              --http-patch-border: #944F01;
              --http-patch-color: #FFEC9E;

              --http-put-bg: #4C2100;
              --http-put-border: #944F01;
              --http-put-color: #FFEC9E;

              --http-delete-bg: #5B0000;
              --http-delete-border: #970606;
              --http-delete-color: #FFCDC7;

              --gray-pill-bg: #5c6c75;
              --gray-pill-border: #889397;
              --gray-pill-color: #f9fbfa;

              --blue-pill-bg: #083C90;
              --blue-pill-border: #1254B7;
              --blue-pill-color: #C3E7FE;

              --require-label-color: #FF6960;
              --securities-col-bg: #1C2D38;

              --typography-code-color: #f9fbfa;
              --typography-code-bg: #5c6c75;

              --select-btn-color: #e8edeb;
              --select-btn-bg: #112733;
              --select-btn-border: #889397;
              --select-btn-hover-shadow-color: #3d4f58;
              --select-btn-focus-shadow-color: #0497ec;

              --select-ul-border: #3d4f58;
              --select-ul-shadow-color: rgba(0, 0, 0, 0.15);
              --select-ul-bg: #112733;

              --select-disabled-color: #5c6c75;
              --select-enabled-hover-bg: #3d4f58;

              --select-li-color: #e8edeb;
              --select-li-focus-color: rgb(225, 247, 255);
              --select-li-focus-bg: rgb(12, 38, 87);
              --select-li-before-focus-bg: rgb(1, 107, 248);
            }
          </style>
          `
      : '<script src="redoc.standalone.js"></script>',
    title: title || spec.info.title || 'ReDoc documentation',
    disableGoogleFont,
    templateOptions,
  });
}

// TODO: Not sure if sleect enabled hover bg is right on dark mode...

// credits: https://stackoverflow.com/a/9238214/1749888
function respondWithGzip(
  contents: string | ReadStream,
  request: IncomingMessage,
  response: ServerResponse,
  headers = {},
) {
  let compressedStream;
  const acceptEncoding = (request.headers['accept-encoding'] as string) || '';
  if (acceptEncoding.match(/\bdeflate\b/)) {
    response.writeHead(200, { ...headers, 'content-encoding': 'deflate' });
    compressedStream = zlib.createDeflate();
  } else if (acceptEncoding.match(/\bgzip\b/)) {
    response.writeHead(200, { ...headers, 'content-encoding': 'gzip' });
    compressedStream = zlib.createGzip();
  } else {
    response.writeHead(200, headers);
    if (typeof contents === 'string') {
      response.write(contents);
      response.end();
    } else {
      contents.pipe(response);
    }
    return;
  }

  if (typeof contents === 'string') {
    compressedStream.write(contents);
    compressedStream.pipe(response);
    compressedStream.end();
    return;
  } else {
    contents.pipe(compressedStream).pipe(response);
  }
}

function isURL(str: string): boolean {
  return /^(https?:)\/\//m.test(str);
}

function sanitizeJSONString(str: string) {
  return escapeClosingScriptTag(escapeUnicode(str));
}

// see http://www.thespanner.co.uk/2011/07/25/the-json-specification-is-now-wrong/
function escapeClosingScriptTag(str) {
  return str.replace(/<\/script>/g, '<\\/script>');
}

// see http://www.thespanner.co.uk/2011/07/25/the-json-specification-is-now-wrong/
function escapeUnicode(str) {
  return str.replace(/\u2028|\u2029/g, m => '\\u202' + (m === '\u2028' ? '8' : '9'));
}

function handleError(error: Error) {
  console.error(error.stack);
  process.exit(1);
}

function getObjectOrJSON(options) {
  switch (typeof options) {
    case 'object':
      return options;
    case 'string':
      try {
        if (existsSync(options) && lstatSync(options).isFile()) {
          return JSON.parse(readFileSync(options, 'utf-8'));
        } else {
          return JSON.parse(options);
        }
      } catch (e) {
        console.log(
          `Encountered error:\n\n${options}\n\nis neither a file with a valid JSON object neither a stringified JSON object.`,
        );
        handleError(e);
      }
    default:
      const configFile = findConfig();
      if (configFile) {
        console.log(`Found ${configFile} and using features.openapi options`);
        try {
          const config = parseYaml(readFileSync(configFile, 'utf-8')) as Config;

          return config['features.openapi'];
        } catch (e) {
          console.warn(`Found ${configFile} but failed to parse: ${e.message}`);
        }
      }
      return {};
  }
}
