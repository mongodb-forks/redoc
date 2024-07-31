import { palette } from '@leafygreen-ui/palette';

export const globalStyles = `
  :root {
    --middle-panel-bg-color: unset;
    --sidebar-bg-color: ${palette.gray.light3};
    --right-panel-bg-color: ${palette.black};
    --sidebar-text-color: black;
    --text-primary-color: ${palette.gray.dark3};
    --text-secondary-color: #3e647c;
    --api-header-color: ${palette.green.dark2};

    --resource-version-pill-bg: ${palette.gray.light2};
    --resource-version-pill-color: ${palette.black};
    --download-btn-border-color: #000000;

    --colors-primary-main: ${palette.black};
    --colors-primary-main-light: #006591;
    --colors-primary-main-dark: #000000;

    --colors-success-main: #1d8127;
    --colors-success-main-light: #86e490;
    --colors-success-main-dark: #0a2e0e;

    --absolute-border-color: none;
    --section-divider-color: rgba(0, 0, 0, 0.2);

    --sidebar-hover: ${palette.gray.light2};
    --sidebar-active-bg: ${palette.green.light3};
    --sidebar-active-color: ${palette.green.dark3};
    --sidebar-hl: #E7EEEC;
    --back-btn-label-color: ${palette.gray.dark1};

    --underlined-header-color: rgba(38, 50, 56, 0.5);
    --underlined-header-border-color: rgba(38, 50, 56, 0.3);
    --link-blue: ${palette.blue.base};
    --schema-lines-color: ${palette.black};

    --type-name-color: ${palette.gray.dark3};
    --type-prefix-color: rgba(28, 45, 56, 0.9);

    --responses-success-color: ${palette.green.dark2};
    --responses-success-bg: ${palette.green.light3};

    --responses-error-color: ${palette.red.base};
    --responses-error-bg: ${palette.red.light3};

    --http-get-bg: ${palette.blue.light3};
    --http-get-border: ${palette.blue.light2};
    --http-get-color: ${palette.blue.dark1};

    --http-post-bg: ${palette.green.light3};
    --http-post-border: ${palette.green.light2};
    --http-post-color: ${palette.green.dark2};

    --http-patch-bg: ${palette.yellow.light3};
    --http-patch-border: ${palette.yellow.light2};
    --http-patch-color: ${palette.yellow.dark2};

    --http-put-bg: ${palette.yellow.light3};
    --http-put-border: ${palette.yellow.light2};
    --http-put-color: ${palette.yellow.dark2};

    --http-delete-bg: ${palette.red.light3};
    --http-delete-border: ${palette.red.light2};
    --http-delete-color: ${palette.red.dark2};

    --gray-pill-bg: ${palette.gray.light3};
    --gray-pill-border: ${palette.gray.light2};
    --gray-pill-color: ${palette.gray.dark3};

    --blue-pill-bg: ${palette.blue.light3};
    --blue-pill-border: ${palette.blue.light2};
    --blue-pill-color: ${palette.blue.base};

    --require-label-color: ${palette.red.base};
    --securities-col-bg: rgb(245, 245, 245);

    --typography-code-color: ${palette.gray.dark3};
    --typography-code-bg: ${palette.gray.light3};

    --select-btn-color: ${palette.black};
    --select-btn-bg: ${palette.white};
    --select-btn-border: ${palette.gray.base};
    --select-btn-hover-shadow-color: ${palette.gray.light2};
    --select-btn-focus-shadow-color: ${palette.blue.light1};

    --select-ul-border: ${palette.gray.light2};
    --select-ul-shadow-color: rgba(0,30,43,0.25);
    --select-ul-bg: ${palette.white};

    --select-disabled-color: ${palette.gray.base};
    --select-enabled-hover-bg: ${palette.gray.light2};

    --select-li-color: ${palette.gray.dark3};
    --select-li-focus-color: ${palette.blue.dark2};
    --select-li-focus-bg: ${palette.blue.light3};
    --select-li-before-focus-bg: ${palette.blue.base};

    --html-select-bg: ${palette.white};
    --html-select-color: #263238;
    --html-select-border: rgba(38, 50, 56, 0.5);

    --arrow-icon: initial;

    --one-of-btn-bg: ${palette.white};
    --one-of-btn-color: ${palette.black};

    --one-of-btn-bg-active: ${palette.black};
    --one-of-btn-color-active: ${palette.white};

    --button-color: ${palette.gray.dark1};
    --button-color-on-hover: ${palette.black};
    --button-bg-on-hover: ${palette.gray.light2};
  }

  .dark-theme {
    --middle-panel-bg-color: ${palette.black};
    --sidebar-bg-color: ${palette.gray.dark4};
    --right-panel-bg-color: ${palette.black};
    --sidebar-text-color: ${palette.gray.light2};
    --text-primary-color: ${palette.gray.light2};
    --text-secondary-color: #f7f7f7;
    --api-header-color: ${palette.gray.light2};

    --resource-version-pill-bg: ${palette.gray.dark3};
    --resource-version-pill-color: ${palette.gray.light2};
    --download-btn-border-color: ${palette.gray.dark1};

    --colors-primary-main: ${palette.gray.light2};
    --colors-primary-main-light: #afc0b9;
    --colors-primary-main-dark: ${palette.white};

    --colors-success-main: ${palette.green.light1};
    --colors-success-main-light: ${palette.green.dark2};
    --colors-success-main-dark: ${palette.green.dark3};

    --absolute-border-color: ${palette.gray.dark2};
    --section-divider-color: rgba(232, 237, 235, 0.2);

    --sidebar-hover: ${palette.gray.dark3};
    --sidebar-active-bg: ${palette.green.dark3};
    --sidebar-active-color: ${palette.green.light3};
    --sidebar-hl: ${palette.gray.dark2};
    --back-btn-label-color: ${palette.gray.base};

    --underlined-header-color: ${palette.gray.light1};
    --underlined-header-border-color: ${palette.gray.light1};
    --link-blue: ${palette.blue.light1};
    --schema-lines-color: ${palette.gray.base};

    --type-name-color: ${palette.gray.light2};
    --type-prefix-color: rgba(232,237,235,0.9);

    --responses-success-color: ${palette.green.light2};
    --responses-success-bg: ${palette.green.dark3};

    --responses-error-color: ${palette.red.light2};
    --responses-error-bg: ${palette.red.dark3};

    --http-get-bg: ${palette.blue.dark2};
    --http-get-border: ${palette.blue.dark1};
    --http-get-color: ${palette.blue.light2};

    --http-post-bg: ${palette.green.dark3};
    --http-post-border: ${palette.green.dark2};
    --http-post-color: ${palette.green.base};

    --http-patch-bg: ${palette.yellow.dark3};
    --http-patch-border: ${palette.yellow.dark2};
    --http-patch-color: ${palette.yellow.light2};

    --http-put-bg: ${palette.yellow.dark3};
    --http-put-border: ${palette.yellow.dark2};
    --http-put-color: ${palette.yellow.light2};

    --http-delete-bg: ${palette.red.dark3};
    --http-delete-border: ${palette.red.dark2};
    --http-delete-color: ${palette.red.light2};

    --gray-pill-bg: ${palette.gray.dark1};
    --gray-pill-border: ${palette.gray.base};
    --gray-pill-color: ${palette.gray.light3};

    --blue-pill-bg: ${palette.blue.dark2};
    --blue-pill-border: ${palette.blue.dark1};
    --blue-pill-color: ${palette.blue.light2};

    --require-label-color: ${palette.red.light1};
    --securities-col-bg: ${palette.gray.dark3};

    --typography-code-color: ${palette.gray.light3};
    --typography-code-bg: ${palette.gray.dark1};

    --select-btn-color: ${palette.gray.light2};
    --select-btn-bg: ${palette.gray.dark4};
    --select-btn-border: ${palette.gray.base};
    --select-btn-hover-shadow-color: ${palette.gray.dark2};
    --select-btn-focus-shadow-color: #0497ec;

    --select-ul-border: ${palette.gray.dark2};
    --select-ul-shadow-color: rgba(0, 0, 0, 0.15);
    --select-ul-bg: ${palette.gray.dark4};

    --select-disabled-color: ${palette.gray.dark1};
    --select-enabled-hover-bg: ${palette.gray.dark2};

    --select-li-color: ${palette.gray.light2};
    --select-li-focus-color: rgb(225, 247, 255);
    --select-li-focus-bg: rgb(12, 38, 87);
    --select-li-before-focus-bg: rgb(1, 107, 248);

    --html-select-bg: ${palette.gray.dark4};
    --html-select-color: ${palette.gray.base};
    --html-select-border: ${palette.gray.base};

    --arrow-icon: ${palette.gray.light1};

    --one-of-btn-bg: ${palette.black};
    --one-of-btn-color: ${palette.gray.light1};

    --one-of-btn-bg-active: ${palette.white};
    --one-of-btn-color-active: ${palette.black};

    --button-color: ${palette.gray.light1};
    --button-color-on-hover: ${palette.gray.light3};
    --button-bg-on-hover: ${palette.gray.dark2};
  }
`;
