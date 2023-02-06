/*! For license information please see redoc.lib.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Redoc=t():e.Redoc=t()}(this,(function(){return function(){var e={295:function(e,t,r){"use strict";var n=r(15),o=r.n(n),i=r(645),s=r.n(i)()(o());s.push([e.id,".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y,.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y{opacity:.6}.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:hover>.ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x.ps--clicking .ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:hover>.ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style: none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.ps{overflow:auto!important}}\n","",{version:3,sources:["webpack://./node_modules/perfect-scrollbar/css/perfect-scrollbar.css"],names:[],mappings:"AAGA,IACE,yBAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,qBAAA,CAMF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,WAAA,CAEA,QAAA,CAEA,iBAAA,CAGF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,UAAA,CAEA,OAAA,CAEA,iBAAA,CAGF,oDAEE,aAAA,CACA,4BAAA,CAGF,oJAME,UAAA,CAGF,kJAME,qBAAA,CACA,UAAA,CAMF,aACE,qBAAA,CAnEF,iBAAA,CAqEE,6DAAA,CACA,qEAAA,CACA,UAAA,CAEA,UAAA,CAEA,iBAAA,CAGF,aACE,qBAAA,CA/EF,iBAAA,CAiFE,4DAAA,CACA,oEAAA,CACA,SAAA,CAEA,SAAA,CAEA,iBAAA,CAGF,oGAGE,qBAAA,CACA,WAAA,CAGF,oGAGE,qBAAA,CACA,UAAA,CAIF,qCACE,IACE,uBAAA,CAAA,CAIJ,wEACE,IACE,uBAAA,CAAA",sourcesContent:["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"],sourceRoot:""}]),t.Z=s},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},15:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var r,n,o=(n=4,function(e){if(Array.isArray(e))return e}(r=e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,o,i=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){a=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw o}}return i}}(r,n)||function(e,r){if(e){if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[1],s=o[3];if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),c="/*# ".concat(l," */"),p=s.sources.map((function(e){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(e," */")}));return[i].concat(p).concat([c]).join("\n")}return[i].join("\n")}},177:function(e,t,r){"use strict";r.d(t,{ZP:function(){return i}});var n=require("lunr"),o=(e,t,r)=>new Promise(((n,o)=>{var i=e=>{try{a(r.next(e))}catch(e){o(e)}},s=e=>{try{a(r.throw(e))}catch(e){o(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,s);a((r=r.apply(e,t)).next())}));class i{constructor(){this.add=u,this.done=d,this.search=y,this.toJS=h,this.load=f,this.dispose=g,this.fromExternalJS=m}}let s,a,l,c=[];function p(){s=new n.Builder,s.field("title"),s.field("description"),s.ref("ref"),s.pipeline.add(n.trimmer,n.stopWordFilter,n.stemmer),l=new Promise((e=>{a=e}))}function u(e,t,r){const n=c.push(r)-1,o={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};s.add(o)}function d(){return o(this,null,(function*(){a(s.build())}))}function h(){return o(this,null,(function*(){return{store:c,index:(yield l).toJSON()}}))}function m(e,t){return o(this,null,(function*(){try{if(importScripts(e),!self[t])throw new Error("Broken index file format");f(self[t])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function f(e){return o(this,null,(function*(){c=e.store,a(n.Index.load(e.index))}))}function g(){return o(this,null,(function*(){c=[],p()}))}function y(e,t=0){return o(this,null,(function*(){if(0===e.trim().length)return[];let r=(yield l).query((t=>{e.trim().toLowerCase().split(/\s+/).forEach((e=>{if(1===e.length)return;const r=(e=>{const t=n.trimmer(new n.Token(e,{}));return"*"+n.stemmer(t)+"*"})(e);t.term(r,{})}))}));return t>0&&(r=r.slice(0,t)),r.map((e=>({meta:c[e.ref],score:e.score})))}))}n.tokenizer.separator=/\s+/,p()},342:function(e,t,r){"use strict";const n=r(376),o={}.NODE_DISABLE_COLORS?{red:"",yellow:"",green:"",normal:""}:{red:"[31m",yellow:"[33;1m",green:"[32m",normal:"[0m"};function i(e,t){function r(e,t){return n.stringify(e)===n.stringify(Object.assign({},e,t))}return r(e,t)&&r(t,e)}function s(e){let t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}String.prototype.toCamelCase=function(){return this.toLowerCase().replace(/[-_ \/\.](.)/g,(function(e,t){return t.toUpperCase()}))},e.exports={colour:o,uniqueOnly:function(e,t,r){return r.indexOf(e)===t},hasDuplicates:function(e){return new Set(e).size!==e.length},allSame:function(e){return new Set(e).size<=1},distinctArray:function(e){return e.length===function(e){let t=[];for(let r of e)t.find((function(e,t,n){return i(e,r)}))||t.push(r);return t}(e).length},firstDupe:function(e){return e.find((function(t,r,n){return e.indexOf(t)<r}))},hash:function(e){let t,r=0;if(0===e.length)return r;for(let n=0;n<e.length;n++)t=e.charCodeAt(n),r=(r<<5)-r+t,r|=0;return r},parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],sanitise:s,sanitiseAll:function(e){return s(e.split("/").join("_"))}}},856:function(e,t,r){"use strict";const n=r(147),o=r(17),i=r(416),s=r(416),a=r(66),l=r(53).jptr,c=r(401).recurse,p=r(683).clone,u=r(593).dereference,d=r(592).isRef,h=r(342);function m(e,t,r,n,o,s){let a=s.externalRefs[r+n].paths[0],u=i.parse(o),m={},f=1;for(;f;)f=0,c(e,{identityDetection:!0},(function(e,r,n){if(d(e,r))if(e[r].startsWith("#"))if(m[e[r]]||e.$fixed){if(!e.$fixed){let t=(a+"/"+m[e[r]]).split("/#/").join("/");n.parent[n.pkey]={$ref:t,"x-miro":e[r],$fixed:!0},s.verbose>1&&console.warn("Replacing with",t),f++}}else{let o=p(l(t,e[r]));if(s.verbose>1&&console.warn((!1===o?h.colour.red:h.colour.green)+"Fragment resolution",e[r],h.colour.normal),!1===o){if(n.parent[n.pkey]={},s.fatal){let t=new Error("Fragment $ref resolution failed "+e[r]);if(!s.promise)throw t;s.promise.reject(t)}}else f++,n.parent[n.pkey]=o,m[e[r]]=n.path.replace("/%24ref","")}else if(u.protocol){let t=i.resolve(o,e[r]).toString();s.verbose>1&&console.warn(h.colour.yellow+"Rewriting external url ref",e[r],"as",t,h.colour.normal),e["x-miro"]=e[r],s.externalRefs[e[r]]&&(s.externalRefs[t]||(s.externalRefs[t]=s.externalRefs[e[r]]),s.externalRefs[t].failed=s.externalRefs[e[r]].failed),e[r]=t}else if(!e["x-miro"]){let t=i.resolve(o,e[r]).toString(),n=!1;s.externalRefs[e[r]]&&(n=s.externalRefs[e[r]].failed),n||(s.verbose>1&&console.warn(h.colour.yellow+"Rewriting external ref",e[r],"as",t,h.colour.normal),e["x-miro"]=e[r],e[r]=t)}}));return c(e,{},(function(e,t,r){d(e,t)&&void 0!==e.$fixed&&delete e.$fixed})),s.verbose>1&&console.warn("Finished fragment resolution"),e}function f(e,t){if(!t.filters||!t.filters.length)return e;for(let r of t.filters)e=r(e,t);return e}function g(e,t,r,s){var c=i.parse(r.source),u=r.source.split("\\").join("/").split("/");u.pop()||u.pop();let d="",h=t.split("#");h.length>1&&(d="#"+h[1],t=h[0]),u=u.join("/");let g=(y=i.parse(t).protocol,b=c.protocol,y&&y.length>2?y:b&&b.length>2?b:"file:");var y,b;let x;if(x="file:"===g?o.resolve(u?u+"/":"",t):i.resolve(u?u+"/":"",t),r.cache[x]){r.verbose&&console.warn("CACHED",x,d);let e=p(r.cache[x]),n=r.externalRef=e;if(d&&(n=l(n,d),!1===n&&(n={},r.fatal))){let e=new Error("Cached $ref resolution failed "+x+d);if(!r.promise)throw e;r.promise.reject(e)}return n=m(n,e,t,d,x,r),n=f(n,r),s(p(n),x,r),Promise.resolve(n)}if(r.verbose&&console.warn("GET",x,d),r.handlers&&r.handlers[g])return r.handlers[g](u,t,d,r).then((function(e){return r.externalRef=e,e=f(e,r),r.cache[x]=e,s(e,x,r),e})).catch((function(e){throw r.verbose&&console.warn(e),e}));if(g&&g.startsWith("http")){const e=Object.assign({},r.fetchOptions,{agent:r.agent});return r.fetch(x,e).then((function(e){if(200!==e.status){if(r.ignoreIOErrors)return r.verbose&&console.warn("FAILED",t),r.externalRefs[t].failed=!0,'{"$ref":"'+t+'"}';throw new Error(`Received status code ${e.status}: ${x}`)}return e.text()})).then((function(e){try{let n=a.parse(e,{schema:"core",prettyErrors:!0});if(e=r.externalRef=n,r.cache[x]=p(e),d&&!1===(e=l(e,d))&&(e={},r.fatal)){let e=new Error("Remote $ref resolution failed "+x+d);if(!r.promise)throw e;r.promise.reject(e)}e=f(e=m(e,n,t,d,x,r),r)}catch(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)}return s(e,x,r),e})).catch((function(e){if(r.verbose&&console.warn(e),r.cache[x]={},!r.promise||!r.fatal)throw e;r.promise.reject(e)}))}{const e='{"$ref":"'+t+'"}';return function(e,t,r,o,i){return new Promise((function(s,a){n.readFile(e,t,(function(e,t){e?r.ignoreIOErrors&&i?(r.verbose&&console.warn("FAILED",o),r.externalRefs[o].failed=!0,s(i)):a(e):s(t)}))}))}(x,r.encoding||"utf8",r,t,e).then((function(e){try{let n=a.parse(e,{schema:"core",prettyErrors:!0});if(e=r.externalRef=n,r.cache[x]=p(e),d&&!1===(e=l(e,d))&&(e={},r.fatal)){let e=new Error("File $ref resolution failed "+x+d);if(!r.promise)throw e;r.promise.reject(e)}e=f(e=m(e,n,t,d,x,r),r)}catch(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)}return s(e,x,r),e})).catch((function(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)}))}}function y(e){return new Promise((function(t,r){(function(e){return new Promise((function(t,r){function n(t,r,n){if(t[r]&&d(t[r],"$ref")){let i=t[r].$ref;if(!i.startsWith("#")){let s="";if(!o[i]){let t=Object.keys(o).find((function(e,t,r){return i.startsWith(e+"/")}));t&&(e.verbose&&console.warn("Found potential subschema at",t),s="/"+(i.split("#")[1]||"").replace(t.split("#")[1]||""),s=s.split("/undefined").join(""),i=t)}if(o[i]||(o[i]={resolved:!1,paths:[],extras:{},description:t[r].description}),o[i].resolved)if(o[i].failed);else if(e.rewriteRefs){let n=o[i].resolvedAt;e.verbose>1&&console.warn("Rewriting ref",i,n),t[r]["x-miro"]=i,t[r].$ref=n+s}else t[r]=p(o[i].data);else o[i].paths.push(n.path),o[i].extras[n.path]=s}}}let o=e.externalRefs;if(e.resolver.depth>0&&e.source===e.resolver.base)return t(o);c(e.openapi.definitions,{identityDetection:!0,path:"#/definitions"},n),c(e.openapi.components,{identityDetection:!0,path:"#/components"},n),c(e.openapi,{identityDetection:!0},n),t(o)}))})(e).then((function(t){for(let r in t)if(!t[r].resolved){let n=e.resolver.depth;n>0&&n++,e.resolver.actions[n].push((function(){return g(e.openapi,r,e,(function(e,n,o){if(!t[r].resolved){let i={};i.context=t[r],i.$ref=r,i.original=p(e),i.updated=e,i.source=n,o.externals.push(i),t[r].resolved=!0}let i=Object.assign({},o,{source:"",resolver:{actions:o.resolver.actions,depth:o.resolver.actions.length-1,base:o.resolver.base}});o.patch&&t[r].description&&!e.description&&"object"==typeof e&&(e.description=t[r].description),t[r].data=e;let s=(a=t[r].paths,[...new Set(a)]);var a;s=s.sort((function(e,t){const r=e.startsWith("#/components/")||e.startsWith("#/definitions/"),n=t.startsWith("#/components/")||t.startsWith("#/definitions/");return r&&!n?-1:n&&!r?1:0}));for(let n of s)if(t[r].resolvedAt&&n!==t[r].resolvedAt&&n.indexOf("x-ms-examples/")<0)o.verbose>1&&console.warn("Creating pointer to data at",n),l(o.openapi,n,{$ref:t[r].resolvedAt+t[r].extras[n],"x-miro":r+t[r].extras[n]});else{t[r].resolvedAt?o.verbose>1&&console.warn("Avoiding circular reference"):(t[r].resolvedAt=n,o.verbose>1&&console.warn("Creating initial clone of data at",n));let i=p(e);l(o.openapi,n,i)}0===o.resolver.actions[i.resolver.depth].length&&o.resolver.actions[i.resolver.depth].push((function(){return y(i)}))}))}))}})).catch((function(t){e.verbose&&console.warn(t),r(t)}));let n={options:e};n.actions=e.resolver.actions[e.resolver.depth],t(n)}))}function b(e,t,r){e.resolver.actions.push([]),y(e).then((function(n){var o;(o=n.actions,o.reduce(((e,t)=>e.then((e=>t().then(Array.prototype.concat.bind(e))))),Promise.resolve([]))).then((function(){if(e.resolver.depth>=e.resolver.actions.length)return console.warn("Ran off the end of resolver actions"),t(!0);e.resolver.depth++,e.resolver.actions[e.resolver.depth].length?setTimeout((function(){b(n.options,t,r)}),0):(e.verbose>1&&console.warn(h.colour.yellow+"Finished external resolution!",h.colour.normal),e.resolveInternal&&(e.verbose>1&&console.warn(h.colour.yellow+"Starting internal resolution!",h.colour.normal),e.openapi=u(e.openapi,e.original,{verbose:e.verbose-1}),e.verbose>1&&console.warn(h.colour.yellow+"Finished internal resolution!",h.colour.normal)),c(e.openapi,{},(function(t,r,n){d(t,r)&&(e.preserveMiro||delete t["x-miro"])})),t(e))})).catch((function(t){e.verbose&&console.warn(t),r(t)}))})).catch((function(t){e.verbose&&console.warn(t),r(t)}))}function x(e){if(e.cache||(e.cache={}),e.fetch||(e.fetch=s),e.source){let t=i.parse(e.source);(!t.protocol||t.protocol.length<=2)&&(e.source=o.resolve(e.source))}e.externals=[],e.externalRefs={},e.rewriteRefs=!0,e.resolver={},e.resolver.depth=0,e.resolver.base=e.source,e.resolver.actions=[[]]}e.exports={optionalResolve:function(e){return x(e),new Promise((function(t,r){e.resolve?b(e,t,r):t(e)}))},resolve:function(e,t,r){return r||(r={}),r.openapi=e,r.source=t,r.resolve=!0,x(r),new Promise((function(e,t){b(r,e,t)}))}}},804:function(e){"use strict";function t(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}e.exports={getDefaultState:t,walkSchema:function e(r,n,o,i){if(void 0===o.depth&&(o=t()),null==r)return r;if(void 0!==r.$ref){let e={$ref:r.$ref};return o.allowRefSiblings&&r.description&&(e.description=r.description),i(e,n,o),e}if(o.combine&&(r.allOf&&Array.isArray(r.allOf)&&1===r.allOf.length&&delete(r=Object.assign({},r.allOf[0],r)).allOf,r.anyOf&&Array.isArray(r.anyOf)&&1===r.anyOf.length&&delete(r=Object.assign({},r.anyOf[0],r)).anyOf,r.oneOf&&Array.isArray(r.oneOf)&&1===r.oneOf.length&&delete(r=Object.assign({},r.oneOf[0],r)).oneOf),i(r,n,o),o.seen.has(r))return r;if("object"==typeof r&&null!==r&&o.seen.set(r,!0),o.top=!1,o.depth++,void 0!==r.items&&(o.property="items",e(r.items,r,o,i)),r.additionalItems&&"object"==typeof r.additionalItems&&(o.property="additionalItems",e(r.additionalItems,r,o,i)),r.additionalProperties&&"object"==typeof r.additionalProperties&&(o.property="additionalProperties",e(r.additionalProperties,r,o,i)),r.properties)for(let t in r.properties){let n=r.properties[t];o.property="properties/"+t,e(n,r,o,i)}if(r.patternProperties)for(let t in r.patternProperties){let n=r.patternProperties[t];o.property="patternProperties/"+t,e(n,r,o,i)}if(r.allOf)for(let t in r.allOf){let n=r.allOf[t];o.property="allOf/"+t,e(n,r,o,i)}if(r.anyOf)for(let t in r.anyOf){let n=r.anyOf[t];o.property="anyOf/"+t,e(n,r,o,i)}if(r.oneOf)for(let t in r.oneOf){let n=r.oneOf[t];o.property="oneOf/"+t,e(n,r,o,i)}return r.not&&(o.property="not",e(r.not,r,o,i)),o.depth--,r}}},683:function(e){"use strict";e.exports={nop:function(e){return e},clone:function(e){return JSON.parse(JSON.stringify(e))},shallowClone:function(e){let t={};for(let r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},deepClone:function e(t){let r=Array.isArray(t)?[]:{};for(let n in t)(t.hasOwnProperty(n)||Array.isArray(t))&&(r[n]="object"==typeof t[n]?e(t[n]):t[n]);return r},fastClone:function(e){return Object.assign({},e)},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);try{var n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map((n=>({[n]:e(t[n],r)}))))}}},593:function(e,t,r){"use strict";const n=r(401).recurse,o=r(683).shallowClone,i=r(53).jptr,s=r(592).isRef;e.exports={dereference:function e(t,r,a){a||(a={}),a.cache||(a.cache={}),a.state||(a.state={}),a.state.identityDetection=!0,a.depth=a.depth?a.depth+1:1;let l=a.depth>1?t:o(t),c={data:l},p=a.depth>1?r:o(r);a.master||(a.master=l);let u=function(e){return e&&e.verbose?{warn:function(){var e=Array.prototype.slice.call(arguments);console.warn.apply(console,e)}}:{warn:function(){}}}(a),d=1;for(;d>0;)d=0,n(c,a.state,(function(t,r,n){if(s(t,r)){let o=t[r];if(d++,a.cache[o]){let e=a.cache[o];if(e.resolved)u.warn("Patching %s for %s",o,e.path),n.parent[n.pkey]=e.data,a.$ref&&"object"==typeof n.parent[n.pkey]&&(n.parent[n.pkey][a.$ref]=o);else{if(o===e.path)throw new Error(`Tight circle at ${e.path}`);u.warn("Unresolved ref"),n.parent[n.pkey]=i(e.source,e.path),!1===n.parent[n.pkey]&&(n.parent[n.pkey]=i(e.source,e.key)),a.$ref&&"object"==typeof n.parent[n.pkey]&&(n.parent[a.$ref]=o)}}else{let t={};t.path=n.path.split("/$ref")[0],t.key=o,u.warn("Dereffing %s at %s",o,t.path),t.source=p,t.data=i(t.source,t.key),!1===t.data&&(t.data=i(a.master,t.key),t.source=a.master),!1===t.data&&u.warn("Missing $ref target",t.key),a.cache[o]=t,t.data=n.parent[n.pkey]=e(i(t.source,t.key),t.source,a),a.$ref&&"object"==typeof n.parent[n.pkey]&&(n.parent[n.pkey][a.$ref]=o),t.resolved=!0}}}));return c.data}}},592:function(e){"use strict";e.exports={isRef:function(e,t){return"$ref"===t&&!!e&&"string"==typeof e[t]}}},53:function(e){"use strict";function t(e){return e.replace(/\~1/g,"/").replace(/~0/g,"~")}e.exports={jptr:function(e,r,n){if(void 0===e)return!1;if(!r||"string"!=typeof r||"#"===r)return void 0!==n?n:e;if(r.indexOf("#")>=0){let e=r.split("#");if(e[0])return!1;r=e[1],r=decodeURIComponent(r.slice(1).split("+").join(" "))}r.startsWith("/")&&(r=r.slice(1));let o=r.split("/");for(let r=0;r<o.length;r++){o[r]=t(o[r]);let i=void 0!==n&&r==o.length-1,s=parseInt(o[r],10);if(!Array.isArray(e)||isNaN(s)||s.toString()!==o[r]?s=Array.isArray(e)&&"-"===o[r]?-2:-1:o[r]=r>0?o[r-1]:"",-1!=s||e&&e.hasOwnProperty(o[r]))if(s>=0)i&&(e[s]=n),e=e[s];else{if(-2===s)return i?(Array.isArray(e)&&e.push(n),n):void 0;i&&(e[o[r]]=n),e=e[o[r]]}else{if(void 0===n||"object"!=typeof e||Array.isArray(e))return!1;e[o[r]]=i?n:"0"===o[r+1]||"-"===o[r+1]?[]:{},e=e[o[r]]}}return e},jpescape:function(e){return e.replace(/\~/g,"~0").replace(/\//g,"~1")},jpunescape:t}},401:function(e,t,r){"use strict";const n=r(53).jpescape;e.exports={recurse:function e(t,r,o){if(r||(r={depth:0}),r.depth||(r=Object.assign({},{path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1},r)),"object"!=typeof t)return;let i=r.path;for(let s in t){if(r.key=s,r.path=r.path+"/"+encodeURIComponent(n(s)),r.identityPath=r.seen.get(t[s]),r.identity=void 0!==r.identityPath,t.hasOwnProperty(s)&&o(t,s,r),"object"==typeof t[s]&&!r.identity){r.identityDetection&&!Array.isArray(t[s])&&null!==t[s]&&r.seen.set(t[s],r.path);let n={};n.parent=t,n.path=r.path,n.depth=r.depth?r.depth+1:1,n.pkey=s,n.payload=r.payload,n.seen=r.seen,n.identity=!1,n.identityDetection=r.identityDetection,e(t[s],n,o)}r.path=i}}}},433:function(e,t,r){"use strict";r.r(t);var n=r(379),o=r.n(n),i=r(795),s=r.n(i),a=r(569),l=r.n(a),c=r(565),p=r.n(c),u=r(216),d=r.n(u),h=r(589),m=r.n(h),f=r(295),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),o()(f.Z,g),t.default=f.Z&&f.Z.locals?f.Z.locals:void 0},379:function(e){"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},s=[],a=0;a<e.length;a++){var l=e[a],c=n.base?l[0]+n.base:l[0],p=i[c]||0,u="".concat(c," ").concat(p);i[c]=p+1;var d=r(u),h={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var m=o(h,n);n.byIndex=a,t.splice(a,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var i=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=r(i[s]);t[a].references--}for(var l=n(e,o),c=0;c<i.length;c++){var p=r(i[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=l}}},569:function(e){"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,r){"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},925:function(e,t,r){"use strict";const n=r(147),o=r(416),i=(r(17),r(766)),s=r(416),a=r(66),l=r(53),c=l.jptr,p=r(592).isRef,u=r(683).clone,d=r(683).circularClone,h=r(401).recurse,m=r(856),f=r(804),g=r(342),y=r(711).statusCodes,b=r(109).i8,x="3.0.0";let v;class w extends Error{constructor(e){super(e),this.name="S2OError"}}function k(e,t){let r=new w(e);if(r.options=t,!t.promise)throw r;t.promise.reject(r)}function O(e,t,r){r.warnOnly?t[r.warnProperty||"x-s2o-warning"]=e:k(e,r)}function E(e,t){f.walkSchema(e,{},{},(function(e,r,n){!function(e,t){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName){e.discriminator=e["x-discriminator"],delete e["x-discriminator"];for(let t in e.discriminator.mapping){let r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}}}(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type))if(r.patch){if(r.patches++,0===e.type.length)delete e.type;else{e.oneOf||(e.oneOf=[]);for(let t of e.type){let r={};if("null"===t)e.nullable=!0;else{r.type=t;for(let t of g.arrayProperties)void 0!==e.prop&&(r[t]=e[t],delete e[t])}r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&O("Lost properties from oneOf",e,r),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}else k("(Patchable) schema type must not be an array",r);e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),void 0!==e.allowEmptyValue&&(r.patches++,delete e.allowEmptyValue)}(e,r,t)}))}function S(e,t,r){let n=r.payload.options;if(p(e,t)){if(e[t].startsWith("#/components/"));else if("#/consumes"===e[t])delete e[t],r.parent[r.pkey]=u(n.openapi.consumes);else if("#/produces"===e[t])delete e[t],r.parent[r.pkey]=u(n.openapi.produces);else if(e[t].startsWith("#/definitions/")){let r=e[t].replace("#/definitions/","").split("/");const o=l.jpunescape(r[0]);let i=v.schemas[decodeURIComponent(o)];i?r[0]=i:O("Could not resolve reference "+e[t],e,n),e[t]="#/components/schemas/"+r.join("/")}else if(e[t].startsWith("#/parameters/"))e[t]="#/components/parameters/"+g.sanitise(e[t].replace("#/parameters/",""));else if(e[t].startsWith("#/responses/"))e[t]="#/components/responses/"+g.sanitise(e[t].replace("#/responses/",""));else if(e[t].startsWith("#")){let r=u(l.jptr(n.openapi,e[t]));if(!1===r)O("direct $ref not found "+e[t],e,n);else if(n.refmap[e[t]])e[t]=n.refmap[e[t]];else{let i=e[t];i=i.replace("/properties/headers/",""),i=i.replace("/properties/responses/",""),i=i.replace("/properties/parameters/",""),i=i.replace("/properties/schemas/","");let s="schemas",a=i.lastIndexOf("/schema");if(s=i.indexOf("/headers/")>a?"headers":i.indexOf("/responses/")>a?"responses":i.indexOf("/example")>a?"examples":i.indexOf("/x-")>a?"extensions":i.indexOf("/parameters/")>a?"parameters":"schemas","schemas"===s&&E(r,n),"responses"!==s&&"extensions"!==s){let i=s.substr(0,s.length-1);"parameter"===i&&r.name&&r.name===g.sanitise(r.name)&&(i=encodeURIComponent(r.name));let a=1;for(e["x-miro"]&&(o=(o=e["x-miro"]).indexOf("#")>=0?o.split("#")[1].split("/").pop():o.split("/").pop().split(".")[0],i=encodeURIComponent(g.sanitise(o)),a="");l.jptr(n.openapi,"#/components/"+s+"/"+i+a);)a=""===a?2:++a;let c="#/components/"+s+"/"+i+a,p="";"examples"===s&&(r={value:r},p="/value"),l.jptr(n.openapi,c,r),n.refmap[e[t]]=c+p,e[t]=c+p}}}if(delete e["x-miro"],Object.keys(e).length>1){const o=e[t],i=r.path.indexOf("/schema")>=0;"preserve"===n.refSiblings||(i&&"allOf"===n.refSiblings?(delete e.$ref,r.parent[r.pkey]={allOf:[{$ref:o},e]}):r.parent[r.pkey]={$ref:o})}}var o;if("x-ms-odata"===t&&"string"==typeof e[t]&&e[t].startsWith("#/")){let r=e[t].replace("#/definitions/","").replace("#/components/schemas/","").split("/"),o=v.schemas[decodeURIComponent(r[0])];o?r[0]=o:O("Could not resolve reference "+e[t],e,n),e[t]="#/components/schemas/"+r.join("/")}}function $(e){for(let t in e)for(let r in e[t]){let n=g.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function R(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){let r={},n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),void 0!==e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,void 0!==e.name&&(t.patch?(t.patches++,delete e.name):k("(Patchable) oauth2 securitySchemes should not have name property",t))}}function j(e){return e&&!e["x-s2o-delete"]}function C(e,t){if(e.$ref)e.$ref=e.$ref.replace("#/responses/","#/components/responses/");else{e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type&&(e.items.collectionFormat!==e.collectionFormat&&O("Nested collectionFormats are not supported",e,t),delete e.items.collectionFormat),"array"===e.type?("ssv"===e.collectionFormat?O("collectionFormat:ssv is no longer supported for headers",e,t):"pipes"===e.collectionFormat?O("collectionFormat:pipes is no longer supported for headers",e,t):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(O("collectionFormat:tsv is no longer supported",e,t),e["x-collectionFormat"]="tsv"):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(t.patch?(t.patches++,delete e.collectionFormat):k("(Patchable) collectionFormat is only applicable to header.type array",t)),delete e.type;for(let t of g.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t]);for(let t of g.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}}function P(e,t){if(e.$ref.indexOf("#/parameters/")>=0){let t=e.$ref.split("#/parameters/");e.$ref=t[0]+"#/components/parameters/"+g.sanitise(t[1])}e.$ref.indexOf("#/definitions/")>=0&&O("Definition used as parameter",e,t)}function A(e,t,r,n,o,i,s){let a,l={},p=!0;if(t&&t.consumes&&"string"==typeof t.consumes){if(!s.patch)return k("(Patchable) operation.consumes must be an array",s);s.patches++,t.consumes=[t.consumes]}Array.isArray(i.consumes)||delete i.consumes;let d=((t?t.consumes:null)||i.consumes||[]).filter(g.uniqueOnly);if(e&&e.$ref&&"string"==typeof e.$ref){P(e,s);let t=decodeURIComponent(e.$ref.replace("#/components/parameters/","")),r=!1,n=i.components.parameters[t];if(n&&!n["x-s2o-delete"]||!e.$ref.startsWith("#/")||(e["x-s2o-delete"]=!0,r=!0),r){let t=e.$ref,r=c(i,e.$ref);!r&&t.startsWith("#/")?O("Could not resolve reference "+t,e,s):r&&(e=r)}}if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(s.patch?(s.patches++,e.type="string"):k("(Patchable) parameter.type is mandatory for non-body parameters",s)),e.type&&"object"==typeof e.type&&e.type.$ref&&(e.type=c(i,e.type.$ref)),"file"===e.type&&(e["x-s2o-originalType"]=e.type,a=e.type),e.description&&"object"==typeof e.description&&e.description.$ref&&(e.description=c(i,e.description.$ref)),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(s.patch?(s.patches++,delete e.collectionFormat):k("(Patchable) collectionFormat is only applicable to param.type array",s)),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":O("collectionFormat:ssv is no longer supported except for in:query parameters",e,s)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":O("collectionFormat:pipes is no longer supported except for in:query parameters",e,s)),"multi"===t&&(e.explode=!0),"tsv"===t&&(O("collectionFormat:tsv is no longer supported",e,s),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in)if(e.items&&e.schema)O("parameter has array,items and schema",e,s);else{e.schema&&s.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,h(e.schema.items,null,(function(r,n,o){"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&O("Nested collectionFormats are not supported",e,s),delete r[n])})));for(let t of g.parameterTypeProperties)void 0!==e[t]&&(e.schema[t]=e[t]),delete e[t]}e.schema&&E(e.schema,s),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){p=!1,l.content={};let t="application/x-www-form-urlencoded";if(d.length&&d.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),l.content[t]={},e.schema)l.content[t].schema=e.schema,e.schema.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")));else{l.content[t].schema={},l.content[t].schema.type="object",l.content[t].schema.properties={},l.content[t].schema.properties[e.name]={};let r=l.content[t].schema,n=l.content[t].schema.properties[e.name];e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type);for(let t of g.parameterTypeProperties)void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),l.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==a&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),I(e,n)}}else e&&"file"===e.type&&(e.required&&(l.required=e.required),l.content={},l.content["application/octet-stream"]={},l.content["application/octet-stream"].schema={},l.content["application/octet-stream"].schema.type="string",l.content["application/octet-stream"].schema.format="binary",I(e,l));if(e&&"body"===e.in){l.content={},e.name&&(l["x-s2o-name"]=(t&&t.operationId?g.sanitiseAll(t.operationId):"")+("_"+e.name).toCamelCase()),e.description&&(l.description=e.description),e.required&&(l.required=e.required),t&&s.rbname&&e.name&&(t[s.rbname]=e.name),e.schema&&e.schema.$ref?l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")):e.schema&&"array"===e.schema.type&&e.schema.items&&e.schema.items.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.items.$ref.replace("#/components/schemas/",""))+"Array"),d.length||d.push("application/json");for(let t of d)l.content[t]={},l.content[t].schema=u(e.schema||{}),E(l.content[t].schema,s);I(e,l)}if(Object.keys(l).length>0&&(e["x-s2o-delete"]=!0,t)&&(t.requestBody&&p?(t.requestBody["x-s2o-overloaded"]=!0,O("Operation "+(t.operationId||o)+" has multiple requestBodies",t,s)):(t.requestBody||(t=r[n]=function(e,t){let r={};for(let n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,s)),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&l.content["multipart/form-data"]&&l.content["multipart/form-data"].schema&&l.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,l.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(l.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&l.content["application/x-www-form-urlencoded"]&&l.content["application/x-www-form-urlencoded"].schema&&l.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,l.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(l.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,l),t.requestBody["x-s2o-name"]||(t.requestBody.schema&&t.requestBody.schema.$ref?t.requestBody["x-s2o-name"]=decodeURIComponent(t.requestBody.schema.$ref.replace("#/components/schemas/","")).split("/").join(""):t.operationId&&(t.requestBody["x-s2o-name"]=g.sanitiseAll(t.operationId)))))),e&&!e["x-s2o-delete"]){delete e.type;for(let t of g.parameterTypeProperties)delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(s.patch?(s.patches++,e.required=!0):k("(Patchable) path parameters must be required:true ["+e.name+" in "+o+"]",s))}return t}function I(e,t){for(let r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function T(e,t,r,n,o){if(!e)return!1;if(e.$ref&&"string"==typeof e.$ref)e.$ref.indexOf("#/definitions/")>=0?O("definition used as response: "+e.$ref,e,o):e.$ref.startsWith("#/responses/")&&(e.$ref="#/components/responses/"+g.sanitise(decodeURIComponent(e.$ref.replace("#/responses/",""))));else{if((void 0===e.description||null===e.description||""===e.description&&o.patch)&&(o.patch?"object"!=typeof e||Array.isArray(e)||(o.patches++,e.description=y[e]||""):k("(Patchable) response.description is mandatory",o)),void 0!==e.schema){if(E(e.schema,o),e.schema.$ref&&"string"==typeof e.schema.$ref&&e.schema.$ref.startsWith("#/responses/")&&(e.schema.$ref="#/components/responses/"+g.sanitise(decodeURIComponent(e.schema.$ref.replace("#/responses/","")))),r&&r.produces&&"string"==typeof r.produces){if(!o.patch)return k("(Patchable) operation.produces must be an array",o);o.patches++,r.produces=[r.produces]}n.produces&&!Array.isArray(n.produces)&&delete n.produces;let t=((r?r.produces:null)||n.produces||[]).filter(g.uniqueOnly);t.length||t.push("*/*"),e.content={};for(let r of t){if(e.content[r]={},e.content[r].schema=u(e.schema),e.examples&&e.examples[r]){let t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(let t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(let t in e.headers)"status code"===t.toLowerCase()?o.patch?(o.patches++,delete e.headers[t]):k('(Patchable) "Status Code" is not a valid header',o):C(e.headers[t],o)}}function _(e,t,r,n,i){for(let s in e){let a=e[s];a&&a["x-trace"]&&"object"==typeof a["x-trace"]&&(a.trace=a["x-trace"],delete a["x-trace"]),a&&a["x-summary"]&&"string"==typeof a["x-summary"]&&(a.summary=a["x-summary"],delete a["x-summary"]),a&&a["x-description"]&&"string"==typeof a["x-description"]&&(a.description=a["x-description"],delete a["x-description"]),a&&a["x-servers"]&&Array.isArray(a["x-servers"])&&(a.servers=a["x-servers"],delete a["x-servers"]);for(let e in a)if(g.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let p=a[e];if(p&&p.parameters&&Array.isArray(p.parameters)){if(a.parameters)for(let t of a.parameters)"string"==typeof t.$ref&&(P(t,r),t=c(i,t.$ref)),p.parameters.find((function(e,r,n){return e.name===t.name&&e.in===t.in}))||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(p=A(t,p,a,e,s,i,r),r.rbname&&""===p[r.rbname]&&delete p[r.rbname]);for(let t of p.parameters)p=A(t,p,a,e,e+":"+s,i,r);r.rbname&&""===p[r.rbname]&&delete p[r.rbname],r.debug||p.parameters&&(p.parameters=p.parameters.filter(j))}if(p&&p.security&&$(p.security),"object"==typeof p){if(!p.responses){let e={description:"Default response"};p.responses={default:e}}for(let e in p.responses)T(p.responses[e],0,p,i,r)}if(p&&p["x-servers"]&&Array.isArray(p["x-servers"]))p.servers=p["x-servers"],delete p["x-servers"];else if(p&&p.schemes&&p.schemes.length)for(let e of p.schemes)if((!i.schemes||i.schemes.indexOf(e)<0)&&(p.servers||(p.servers=[]),Array.isArray(i.servers)))for(let t of i.servers){let r=u(t),n=o.parse(r.url);n.protocol=e,r.url=n.format(),p.servers.push(r)}if(r.debug&&(p["x-s2o-consumes"]=p.consumes||[],p["x-s2o-produces"]=p.produces||[]),p){if(delete p.consumes,delete p.produces,delete p.schemes,p["x-ms-examples"]){for(let e in p["x-ms-examples"]){let t=p["x-ms-examples"][e],r=g.sanitiseAll(e);if(t.parameters)for(let r in t.parameters){let n=t.parameters[r];for(let t of(p.parameters||[]).concat(a.parameters||[]))t.$ref&&(t=l.jptr(i,t.$ref)),t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(let n in t.responses){if(t.responses[n].headers)for(let e in t.responses[n].headers){let r=t.responses[n].headers[e];for(let t in p.responses[n].headers)t===e&&(p.responses[n].headers[t].example=r)}if(t.responses[n].body&&(i.components.examples[r]={value:u(t.responses[n].body)},p.responses[n]&&p.responses[n].content))for(let t in p.responses[n].content){let o=p.responses[n].content[t];o.examples||(o.examples={}),o.examples[e]={$ref:"#/components/examples/"+r}}}}delete p["x-ms-examples"]}if(p.parameters&&0===p.parameters.length&&delete p.parameters,p.requestBody){let r=p.operationId?g.sanitiseAll(p.operationId):g.sanitiseAll(e+s).toCamelCase(),o=g.sanitise(p.requestBody["x-s2o-name"]||r||"");delete p.requestBody["x-s2o-name"];let i=JSON.stringify(p.requestBody),a=g.hash(i);if(!n[a]){let e={};e.name=o,e.body=p.requestBody,e.refs=[],n[a]=e}let c="#/"+t+"/"+encodeURIComponent(l.jpescape(s))+"/"+e+"/requestBody";n[a].refs.push(c)}}}if(a&&a.parameters){for(let e in a.parameters)A(a.parameters[e],null,a,null,s,i,r);!r.debug&&Array.isArray(a.parameters)&&(a.parameters=a.parameters.filter(j))}}}function L(e){return e&&e.url&&"string"==typeof e.url?(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,(function(t,r){e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e):e}function D(e,t,r){if(void 0===e.info||null===e.info){if(!t.patch)return r(new w("(Patchable) info object is mandatory"));t.patches++,e.info={version:"",title:""}}if("object"!=typeof e.info||Array.isArray(e.info))return r(new w("info must be an object"));if(void 0===e.info.title||null===e.info.title){if(!t.patch)return r(new w("(Patchable) info.title cannot be null"));t.patches++,e.info.title=""}if(void 0===e.info.version||null===e.info.version){if(!t.patch)return r(new w("(Patchable) info.version cannot be null"));t.patches++,e.info.version=""}if("string"!=typeof e.info.version){if(!t.patch)return r(new w("(Patchable) info.version must be a string"));t.patches++,e.info.version=e.info.version.toString()}if(void 0!==e.info.logo){if(!t.patch)return r(new w("(Patchable) info should not have logo property"));t.patches++,e.info["x-logo"]=e.info.logo,delete e.info.logo}if(void 0!==e.info.termsOfService){if(null===e.info.termsOfService){if(!t.patch)return r(new w("(Patchable) info.termsOfService cannot be null"));t.patches++,e.info.termsOfService=""}try{new URL(e.info.termsOfService)}catch(n){if(!t.patch)return r(new w("(Patchable) info.termsOfService must be a URL"));t.patches++,delete e.info.termsOfService}}}function z(e,t,r){if(void 0===e.paths){if(!t.patch)return r(new w("(Patchable) paths object is mandatory"));t.patches++,e.paths={}}}function N(e,t,r){return i(r,new Promise((function(r,n){if(e||(e={}),t.original=e,t.text||(t.text=a.stringify(e)),t.externals=[],t.externalRefs={},t.rewriteRefs=!0,t.preserveMiro=!0,t.promise={},t.promise.resolve=r,t.promise.reject=n,t.patches=0,t.cache||(t.cache={}),t.source&&(t.cache[t.source]=t.original),function(e,t){const r=new WeakSet;h(e,{identityDetection:!0},(function(e,n,o){"object"==typeof e[n]&&null!==e[n]&&(r.has(e[n])?t.anchors?e[n]=u(e[n]):k("YAML anchor or merge key at "+o.path,t):r.add(e[n]))}))}(e,t),e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=d(e),D(t.openapi,t,n),z(t.openapi,t,n),void m.optionalResolve(t).then((function(){return t.direct?r(t.openapi):r(t)})).catch((function(e){console.warn(e),n(e)}));if(!e.swagger||"2.0"!=e.swagger)return n(new w("Unsupported swagger/OpenAPI version: "+(e.openapi?e.openapi:e.swagger)));let o=t.openapi={};if(o.openapi="string"==typeof t.targetVersion&&t.targetVersion.startsWith("3.")?t.targetVersion:x,t.origin){o["x-origin"]||(o["x-origin"]=[]);let r={};r.url=t.source||t.origin,r.format="swagger",r.version=e.swagger,r.converter={},r.converter.url="https://github.com/mermade/oas-kit",r.converter.version=b,o["x-origin"].push(r)}if(o=Object.assign(o,d(e)),delete o.swagger,h(o,{},(function(e,t,r){null===e[t]&&!t.startsWith("x-")&&"default"!==t&&r.path.indexOf("/example")<0&&delete e[t]})),e.host)for(let t of Array.isArray(e.schemes)?e.schemes:[""]){let r={},n=(e.basePath||"").replace(/\/$/,"");r.url=(t?t+":":"")+"//"+e.host+n,L(r),o.servers||(o.servers=[]),o.servers.push(r)}else if(e.basePath){let t={};t.url=e.basePath,L(t),o.servers||(o.servers=[]),o.servers.push(t)}if(delete o.host,delete o.basePath,o["x-servers"]&&Array.isArray(o["x-servers"])&&(o.servers=o["x-servers"],delete o["x-servers"]),e["x-ms-parameterized-host"]){let t=e["x-ms-parameterized-host"],r={};r.url=t.hostTemplate+(e.basePath?e.basePath:""),r.variables={};const n=r.url.match(/\{\w+\}/g);for(let e in t.parameters){let i=t.parameters[e];i.$ref&&(i=u(c(o,i.$ref))),e.startsWith("x-")||(delete i.required,delete i.type,delete i.in,void 0===i.default&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=n[e].replace("{","").replace("}","")),r.variables[i.name]=i,delete i.name)}o.servers||(o.servers=[]),!1===t.useSchemePrefix?o.servers.push(r):e.schemes.forEach((e=>{o.servers.push(Object.assign({},r,{url:e+"://"+r.url}))})),delete o["x-ms-parameterized-host"]}D(o,t,n),z(o,t,n),"string"==typeof o.consumes&&(o.consumes=[o.consumes]),"string"==typeof o.produces&&(o.produces=[o.produces]),o.components={},o["x-callbacks"]&&(o.components.callbacks=o["x-callbacks"],delete o["x-callbacks"]),o.components.examples={},o.components.headers={},o["x-links"]&&(o.components.links=o["x-links"],delete o["x-links"]),o.components.parameters=o.parameters||{},o.components.responses=o.responses||{},o.components.requestBodies={},o.components.securitySchemes=o.securityDefinitions||{},o.components.schemas=o.definitions||{},delete o.definitions,delete o.responses,delete o.parameters,delete o.securityDefinitions,m.optionalResolve(t).then((function(){(function(e,t){let r={};v={schemas:{}},e.security&&$(e.security);for(let r in e.components.securitySchemes){let n=g.sanitise(r);r!==n&&(e.components.securitySchemes[n]&&k("Duplicate sanitised securityScheme name "+n,t),e.components.securitySchemes[n]=e.components.securitySchemes[r],delete e.components.securitySchemes[r]),R(e.components.securitySchemes[n],t)}for(let r in e.components.schemas){let n=g.sanitiseAll(r),o="";if(r!==n){for(;e.components.schemas[n+o];)o=o?++o:2;e.components.schemas[n+o]=e.components.schemas[r],delete e.components.schemas[r]}v.schemas[r]=n+o,E(e.components.schemas[n+o],t)}t.refmap={},h(e,{payload:{options:t}},S),function(e,t){for(let r in t.refmap)l.jptr(e,r,{$ref:t.refmap[r]})}(e,t);for(let r in e.components.parameters){let n=g.sanitise(r);r!==n&&(e.components.parameters[n]&&k("Duplicate sanitised parameter name "+n,t),e.components.parameters[n]=e.components.parameters[r],delete e.components.parameters[r]),A(e.components.parameters[n],null,null,null,n,e,t)}for(let r in e.components.responses){let n=g.sanitise(r);r!==n&&(e.components.responses[n]&&k("Duplicate sanitised response name "+n,t),e.components.responses[n]=e.components.responses[r],delete e.components.responses[r]);let o=e.components.responses[n];if(T(o,0,null,e,t),o.headers)for(let e in o.headers)"status code"===e.toLowerCase()?t.patch?(t.patches++,delete o.headers[e]):k('(Patchable) "Status Code" is not a valid header',t):C(o.headers[e],t)}for(let t in e.components.requestBodies){let n=e.components.requestBodies[t],o=JSON.stringify(n),i=g.hash(o),s={};s.name=t,s.body=n,s.refs=[],r[i]=s}if(_(e.paths,"paths",t,r,e),e["x-ms-paths"]&&_(e["x-ms-paths"],"x-ms-paths",t,r,e),!t.debug)for(let t in e.components.parameters)e.components.parameters[t]["x-s2o-delete"]&&delete e.components.parameters[t];t.debug&&(e["x-s2o-consumes"]=e.consumes||[],e["x-s2o-produces"]=e.produces||[]),delete e.consumes,delete e.produces,delete e.schemes;let n=[];if(e.components.requestBodies={},!t.resolveInternal){let t=1;for(let o in r){let i=r[o];if(i.refs.length>1){let r="";for(i.name||(i.name="requestBody",r=t++);n.indexOf(i.name+r)>=0;)r=r?++r:2;i.name=i.name+r,n.push(i.name),e.components.requestBodies[i.name]=u(i.body);for(let t in i.refs){let r={};r.$ref="#/components/requestBodies/"+i.name,l.jptr(e,i.refs[t],r)}}}}e.components.responses&&0===Object.keys(e.components.responses).length&&delete e.components.responses,e.components.parameters&&0===Object.keys(e.components.parameters).length&&delete e.components.parameters,e.components.examples&&0===Object.keys(e.components.examples).length&&delete e.components.examples,e.components.requestBodies&&0===Object.keys(e.components.requestBodies).length&&delete e.components.requestBodies,e.components.securitySchemes&&0===Object.keys(e.components.securitySchemes).length&&delete e.components.securitySchemes,e.components.headers&&0===Object.keys(e.components.headers).length&&delete e.components.headers,e.components.schemas&&0===Object.keys(e.components.schemas).length&&delete e.components.schemas,e.components&&0===Object.keys(e.components).length&&delete e.components})(t.openapi,t),t.direct?r(t.openapi):r(t)})).catch((function(e){console.warn(e),n(e)}))})))}function M(e,t,r){return i(r,new Promise((function(r,n){let o=null,i=null;try{o=JSON.parse(e),t.text=JSON.stringify(o,null,2)}catch(r){i=r;try{o=a.parse(e,{schema:"core",prettyErrors:!0}),t.sourceYaml=!0,t.text=e}catch(e){i=e}}o?N(o,t).then((e=>r(e))).catch((e=>n(e))):n(new w(i?i.message:"Could not parse string"))})))}e.exports={S2OError:w,targetVersion:x,convert:N,convertObj:N,convertUrl:function(e,t,r){return i(r,new Promise((function(r,n){t.origin=!0,t.source||(t.source=e),t.verbose&&console.warn("GET "+e),t.fetch||(t.fetch=s);const o=Object.assign({},t.fetchOptions,{agent:t.agent});t.fetch(e,o).then((function(t){if(200!==t.status)throw new w(`Received status code ${t.status}: ${e}`);return t.text()})).then((function(e){M(e,t).then((e=>r(e))).catch((e=>n(e)))})).catch((function(e){n(e)}))})))},convertStr:M,convertFile:function(e,t,r){return i(r,new Promise((function(r,o){n.readFile(e,t.encoding||"utf8",(function(n,i){n?o(n):(t.sourceFile=e,M(i,t).then((e=>r(e))).catch((e=>o(e))))}))})))},convertStream:function(e,t,r){return i(r,new Promise((function(r,n){let o="";e.on("data",(function(e){o+=e})).on("end",(function(){M(o,t).then((e=>r(e))).catch((e=>n(e)))}))})))}}},711:function(e,t,r){"use strict";const n=r(685);e.exports={statusCodes:Object.assign({},{default:"Default response","1XX":"Informational",103:"Early hints","2XX":"Successful","3XX":"Redirection","4XX":"Client Error","5XX":"Server Error","7XX":"Developer Error"},n.STATUS_CODES)}},980:function(e,t,r){var n=r(314),o=["add","done","toJS","fromExternalJS","load","dispose","search","Worker"];e.exports=function(){var e=new Worker(URL.createObjectURL(new Blob(['/*! For license information please see 0a6ad30060afff00cb34.worker.js.LICENSE.txt */\n!function(){var e={336:function(e,t,r){var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,Q,k,S,E,L,P,b,T,O,I,R=function(e){var t=new R.Builder;return t.pipeline.add(R.trimmer,R.stopWordFilter,R.stemmer),t.searchPipeline.add(R.stemmer),e.call(t,t),t.build()};R.version="2.3.9",R.utils={},R.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),R.utils.asString=function(e){return null==e?"":e.toString()},R.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},R.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},R.FieldRef.joiner="/",R.FieldRef.fromString=function(e){var t=e.indexOf(R.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new R.FieldRef(n,r,e)},R.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+R.FieldRef.joiner+this.docRef),this._stringValue},R.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},R.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},R.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},R.Set.prototype.contains=function(e){return!!this.elements[e]},R.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===R.Set.complete)return this;if(e===R.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new R.Set(i)},R.Set.prototype.union=function(e){return e===R.Set.complete?R.Set.complete:e===R.Set.empty?this:new R.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},R.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},R.Token=function(e,t){this.str=e||"",this.metadata=t||{}},R.Token.prototype.toString=function(){return this.str},R.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},R.Token.prototype.clone=function(e){return e=e||function(e){return e},new R.Token(e(this.str,this.metadata),this.metadata)},R.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new R.Token(R.utils.asString(e).toLowerCase(),R.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(R.tokenizer.separator)||s==n){if(a>0){var u=R.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new R.Token(r.slice(o,s),u))}o=s+1}}return i},R.tokenizer.separator=/[\\s\\-]+/,R.Pipeline=function(){this._stack=[]},R.Pipeline.registeredFunctions=Object.create(null),R.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&R.utils.warn("Overwriting existing registered function: "+t),e.label=t,R.Pipeline.registeredFunctions[e.label]=e},R.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||R.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\\n",e)},R.Pipeline.load=function(e){var t=new R.Pipeline;return e.forEach((function(e){var r=R.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},R.Pipeline.prototype.add=function(){var e=Array.prototype.slice.call(arguments);e.forEach((function(e){R.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},R.Pipeline.prototype.after=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},R.Pipeline.prototype.before=function(e,t){R.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},R.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},R.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},R.Pipeline.prototype.runString=function(e,t){var r=new R.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},R.Pipeline.prototype.reset=function(){this._stack=[]},R.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return R.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},R.Vector=function(e){this._magnitude=0,this.elements=e||[]},R.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},R.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},R.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},R.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},R.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},R.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},R.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},R.Vector.prototype.toJSON=function(){return this.elements},R.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},u="[aeiouy]",l="[^aeiou][^aeiouy]*",c=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),h=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*"),d=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*([aeiouy][aeiou]*)?$"),f=new RegExp("^([^aeiou][^aeiouy]*)?[aeiouy]"),p=/^(.+?)(ss|i)es$/,y=/^(.+?)([^s])s$/,m=/^(.+?)eed$/,g=/^(.+?)(ed|ing)$/,x=/.$/,v=/(at|bl|iz)$/,w=new RegExp("([^aeiouylsz])\\\\1$"),Q=new RegExp("^"+l+u+"[^aeiouwxy]$"),k=/^(.+?[^aeiou])y$/,S=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,E=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,L=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,P=/^(.+?)(s|t)(ion)$/,b=/^(.+?)e$/,T=/ll$/,O=new RegExp("^"+l+u+"[^aeiouwxy]$"),I=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=y,(i=p).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=g,(i=m).test(e)){var I=i.exec(e);(i=c).test(I[1])&&(i=x,e=e.replace(i,""))}else s.test(e)&&(t=(I=s.exec(e))[1],(s=f).test(t)&&(u=w,l=Q,(s=v).test(e=t)?e+="e":u.test(e)?(i=x,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=k).test(e)&&(e=(t=(I=i.exec(e))[1])+"i"),(i=S).test(e)&&(t=(I=i.exec(e))[1],r=I[2],(i=c).test(t)&&(e=t+o[r])),(i=E).test(e)&&(t=(I=i.exec(e))[1],r=I[2],(i=c).test(t)&&(e=t+a[r])),s=P,(i=L).test(e)?(t=(I=i.exec(e))[1],(i=h).test(t)&&(e=t)):s.test(e)&&(t=(I=s.exec(e))[1]+I[2],(s=h).test(t)&&(e=t)),(i=b).test(e)&&(t=(I=i.exec(e))[1],s=d,u=O,((i=h).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=h,(i=T).test(e)&&s.test(e)&&(i=x,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(I)}),R.Pipeline.registerFunction(R.stemmer,"stemmer"),R.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},R.stopWordFilter=R.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),R.Pipeline.registerFunction(R.stopWordFilter,"stopWordFilter"),R.trimmer=function(e){return e.update((function(e){return e.replace(/^\\W+/,"").replace(/\\W+$/,"")}))},R.Pipeline.registerFunction(R.trimmer,"trimmer"),R.TokenSet=function(){this.final=!1,this.edges={},this.id=R.TokenSet._nextId,R.TokenSet._nextId+=1},R.TokenSet._nextId=1,R.TokenSet.fromArray=function(e){for(var t=new R.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},R.TokenSet.fromClause=function(e){return"editDistance"in e?R.TokenSet.fromFuzzyString(e.term,e.editDistance):R.TokenSet.fromString(e.term)},R.TokenSet.fromFuzzyString=function(e,t){for(var r=new R.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new R.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else a=new R.TokenSet,i.node.edges["*"]=a;if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else u=new R.TokenSet,i.node.edges["*"]=u;1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new R.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},R.TokenSet.fromString=function(e){for(var t=new R.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new R.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},R.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},R.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},R.TokenSet.prototype.intersect=function(e){for(var t=new R.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new R.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}return t},R.TokenSet.Builder=function(){this.previousWord="",this.root=new R.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},R.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new R.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},R.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},R.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},R.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},R.Index.prototype.search=function(e){return this.query((function(t){new R.QueryParser(e,t).parse()}))},R.Index.prototype.query=function(e){for(var t=new R.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new R.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=R.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=R.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===R.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++)s[F=l.fields[y]]=R.Set.empty;break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<l.fields.length;y++){var w=x[F=l.fields[y]],Q=Object.keys(w),k=g+"/"+F,S=new R.Set(Q);if(l.presence==R.Query.presence.REQUIRED&&(c=c.union(S),void 0===s[F]&&(s[F]=R.Set.complete)),l.presence!=R.Query.presence.PROHIBITED){if(n[F].upsert(v,l.boost,(function(e,t){return e+t})),!i[k]){for(var E=0;E<Q.length;E++){var L,P=Q[E],b=new R.FieldRef(P,F),T=w[P];void 0===(L=r[b])?r[b]=new R.MatchData(g,F,T):L.add(g,F,T)}i[k]=!0}}else void 0===o[F]&&(o[F]=R.Set.empty),o[F]=o[F].union(S)}}}if(l.presence===R.Query.presence.REQUIRED)for(y=0;y<l.fields.length;y++)s[F=l.fields[y]]=s[F].intersect(c)}var O=R.Set.complete,I=R.Set.empty;for(a=0;a<this.fields.length;a++){var F;s[F=this.fields[a]]&&(O=O.intersect(s[F])),o[F]&&(I=I.union(o[F]))}var C=Object.keys(r),N=[],j=Object.create(null);if(t.isNegated())for(C=Object.keys(this.fieldVectors),a=0;a<C.length;a++){b=C[a];var _=R.FieldRef.fromString(b);r[b]=new R.MatchData}for(a=0;a<C.length;a++){var D=(_=R.FieldRef.fromString(C[a])).docRef;if(O.contains(D)&&!I.contains(D)){var A,B=this.fieldVectors[_],z=n[_.fieldName].similarity(B);if(void 0!==(A=j[D]))A.score+=z,A.matchData.combine(r[_]);else{var V={ref:D,score:z,matchData:r[_]};j[D]=V,N.push(V)}}}return N.sort((function(e,t){return t.score-e.score}))},R.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:R.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},R.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new R.TokenSet.Builder,a=R.Pipeline.load(e.pipeline);e.version!=R.version&&R.utils.warn("Version mismatch when loading serialised index. Current version of lunr \'"+R.version+"\' does not match serialized index \'"+e.version+"\'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new R.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new R.Index(t)},R.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=R.tokenizer,this.pipeline=new R.Pipeline,this.searchPipeline=new R.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},R.Builder.prototype.ref=function(e){this._ref=e},R.Builder.prototype.field=function(e,t){if(/\\//.test(e))throw new RangeError("Field \'"+e+"\' contains illegal character \'/\'");this._fields[e]=t||{}},R.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},R.Builder.prototype.k1=function(e){this._k1=e},R.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new R.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},R.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=R.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},R.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=R.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new R.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(y=R.idf(this.invertedIndex[x],this.documentCount),n[x]=y):y=n[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},R.Builder.prototype.createTokenSet=function(){this.tokenSet=R.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},R.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new R.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},R.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},R.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},R.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},R.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},R.Query=function(e){this.clauses=[],this.allFields=e},R.Query.wildcard=new String("*"),R.Query.wildcard.NONE=0,R.Query.wildcard.LEADING=1,R.Query.wildcard.TRAILING=2,R.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},R.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=R.Query.wildcard.NONE),e.wildcard&R.Query.wildcard.LEADING&&e.term.charAt(0)!=R.Query.wildcard&&(e.term="*"+e.term),e.wildcard&R.Query.wildcard.TRAILING&&e.term.slice(-1)!=R.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=R.Query.presence.OPTIONAL),this.clauses.push(e),this},R.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=R.Query.presence.PROHIBITED)return!1;return!0},R.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,R.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},R.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},R.QueryParseError.prototype=new Error,R.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},R.QueryLexer.prototype.run=function(){for(var e=R.QueryLexer.lexText;e;)e=e(this)},R.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},R.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},R.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},R.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return R.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},R.QueryLexer.prototype.width=function(){return this.pos-this.start},R.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},R.QueryLexer.prototype.backup=function(){this.pos-=1},R.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=R.QueryLexer.EOS&&this.backup()},R.QueryLexer.prototype.more=function(){return this.pos<this.length},R.QueryLexer.EOS="EOS",R.QueryLexer.FIELD="FIELD",R.QueryLexer.TERM="TERM",R.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",R.QueryLexer.BOOST="BOOST",R.QueryLexer.PRESENCE="PRESENCE",R.QueryLexer.lexField=function(e){return e.backup(),e.emit(R.QueryLexer.FIELD),e.ignore(),R.QueryLexer.lexText},R.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(R.QueryLexer.TERM)),e.ignore(),e.more())return R.QueryLexer.lexText},R.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.EDIT_DISTANCE),R.QueryLexer.lexText},R.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(R.QueryLexer.BOOST),R.QueryLexer.lexText},R.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(R.QueryLexer.TERM)},R.QueryLexer.termSeparator=R.tokenizer.separator,R.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==R.QueryLexer.EOS)return R.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return R.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(R.QueryLexer.TERM),R.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(R.QueryLexer.PRESENCE),R.QueryLexer.lexText;if(t.match(R.QueryLexer.termSeparator))return R.QueryLexer.lexTerm}else e.escapeCharacter()}},R.QueryParser=function(e,t){this.lexer=new R.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},R.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=R.QueryParser.parseClause;e;)e=e(this);return this.query},R.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},R.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},R.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},R.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case R.QueryLexer.PRESENCE:return R.QueryParser.parsePresence;case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value \'"+t.str+"\'"),new R.QueryParseError(r,t.start,t.end)}},R.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=R.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=R.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator\'"+t.str+"\'";throw new R.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n)throw r="expecting term or field, found nothing",new R.QueryParseError(r,t.start,t.end);switch(n.type){case R.QueryLexer.FIELD:return R.QueryParser.parseField;case R.QueryLexer.TERM:return R.QueryParser.parseTerm;default:throw r="expecting term or field, found \'"+n.type+"\'",new R.QueryParseError(r,n.start,n.end)}}},R.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"\'"+e+"\'"})).join(", "),n="unrecognised field \'"+t.str+"\', possible fields: "+r;throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw n="expecting term, found nothing",new R.QueryParseError(n,t.start,t.end);if(i.type===R.QueryLexer.TERM)return R.QueryParser.parseTerm;throw n="expecting term, found \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}},R.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:var n="Unexpected lexeme type \'"+r.type+"\'";throw new R.QueryParseError(n,r.start,r.end)}else e.nextClause()}},R.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},R.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new R.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case R.QueryLexer.TERM:return e.nextClause(),R.QueryParser.parseTerm;case R.QueryLexer.FIELD:return e.nextClause(),R.QueryParser.parseField;case R.QueryLexer.EDIT_DISTANCE:return R.QueryParser.parseEditDistance;case R.QueryLexer.BOOST:return R.QueryParser.parseBoost;case R.QueryLexer.PRESENCE:return e.nextClause(),R.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new R.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return R})?n.call(t,r,t,e):n)||(e.exports=i)}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};!function(){"use strict";r.d(n,{add:function(){return l},dispose:function(){return p},done:function(){return c},fromExternalJS:function(){return d},load:function(){return f},search:function(){return y},toJS:function(){return h}});var e=r(336),t=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{a(r.next(e))}catch(e){i(e)}},o=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((r=r.apply(e,t)).next())}));let i,s,o,a=[];function u(){i=new e.Builder,i.field("title"),i.field("description"),i.ref("ref"),i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),o=new Promise((e=>{s=e}))}function l(e,t,r){const n=a.push(r)-1,s={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};i.add(s)}function c(){return t(this,null,(function*(){s(i.build())}))}function h(){return t(this,null,(function*(){return{store:a,index:(yield o).toJSON()}}))}function d(e,r){return t(this,null,(function*(){try{if(importScripts(e),!self[r])throw new Error("Broken index file format");f(self[r])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function f(r){return t(this,null,(function*(){a=r.store,s(e.Index.load(r.index))}))}function p(){return t(this,null,(function*(){a=[],u()}))}function y(r,n=0){return t(this,null,(function*(){if(0===r.trim().length)return[];let t=(yield o).query((t=>{r.trim().toLowerCase().split(/\\s+/).forEach((r=>{if(1===r.length)return;const n=(t=>{const r=e.trimmer(new e.Token(t,{}));return"*"+e.stemmer(r)+"*"})(r);t.term(n,{})}))}));return n>0&&(t=t.slice(0,n)),t.map((e=>({meta:a[e.ref],score:e.score})))}))}e.tokenizer.separator=/\\s+/,u(),addEventListener("message",(function(e){var t,r=e.data,i=r.type,s=r.method,o=r.id,a=r.params;"RPC"===i&&s&&((t=n[s])?Promise.resolve().then((function(){return t.apply(n,a)})):Promise.reject("No such method")).then((function(e){postMessage({type:"RPC",id:o,result:e})})).catch((function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:o,error:t})}))})),postMessage({type:"RPC",method:"ready"})}()}();\n//# sourceMappingURL=0a6ad30060afff00cb34.worker.js.map'])),{name:"[fullhash].worker.js"});return n(e,o),e}},314:function(e){e.exports=function(e,t){var r=0,n={};e.addEventListener("message",(function(t){var r=t.data;if("RPC"===r.type)if(r.id){var o=n[r.id];o&&(delete n[r.id],r.error?o[1](Object.assign(Error(r.error.message),r.error)):o[0](r.result))}else{var i=document.createEvent("Event");i.initEvent(r.method,!1,!1),i.data=r.params,e.dispatchEvent(i)}})),t.forEach((function(t){e[t]=function(){var o=arguments;return new Promise((function(i,s){var a=++r;n[a]=[i,s],e.postMessage({type:"RPC",id:a,method:t,params:[].slice.call(o)})}))}}))}},766:function(e){"use strict";e.exports=require("call-me-maybe")},376:function(e){"use strict";e.exports=require("fast-safe-stringify")},322:function(e){"use strict";e.exports=require("stickyfill")},66:function(e){"use strict";e.exports=require("yaml")},147:function(e){"use strict";e.exports=require("fs")},685:function(e){"use strict";e.exports=require("http")},17:function(e){"use strict";e.exports=require("path")},416:function(e){"use strict";e.exports=void 0},109:function(e){"use strict";e.exports={i8:"7.0.6"}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={id:n,exports:{}};return e[n](i,i.exports,r),i.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nc=void 0;var n={};return function(){"use strict";r.r(n),r.d(n,{AUTH_TYPES:function(){return tc},ApiContentWrap:function(){return Xu},ApiInfo:function(){return dc},ApiInfoModel:function(){return Hr},ApiLogo:function(){return gc},AppStore:function(){return ic},ArraySchema:function(){return ll},BackgroundStub:function(){return Ku},BodyContent:function(){return ap},COMPONENT_REGEXP:function(){return Qr},CallbackModel:function(){return hn},ClipboardService:function(){return Ns},ContentItem:function(){return xu},ContentItems:function(){return bu},DiscriminatorDropdown:function(){return Za},Dropdown:function(){return us},DropdownLabel:function(){return ra},DropdownOrLabel:function(){return xs},DropdownWrapper:function(){return na},ErrorBoundary:function(){return ie},Example:function(){return Ks},ExampleModel:function(){return Qn},ExternalExample:function(){return ea},FieldModel:function(){return Jn},GROUP_DEPTH:function(){return Zo},GroupModel:function(){return qo},HistoryService:function(){return Wt},IS_BROWSER:function(){return l},InvertedSimpleDropdown:function(){return oa},JsonPointer:function(){return Se},JsonViewer:function(){return Ys},LEGACY_REGEXP:function(){return Fr},Loading:function(){return ce},MDX_COMPONENT_REGEXP:function(){return Br},Markdown:function(){return Ps},MarkdownRenderer:function(){return Wr},MarkerService:function(){return Jt},MediaContentModel:function(){return eo},MediaTypeModel:function(){return Zn},MediaTypesSwitch:function(){return Xc},MenuBreak:function(){return _c},MenuBuilder:function(){return Go},MenuItem:function(){return Du},MenuItemLabel:function(){return Tc},MenuItemLi:function(){return Pc},MenuItemTitle:function(){return Lc},MenuItemUl:function(){return Cc},MenuItems:function(){return ju},MenuLink:function(){return Ac},MenuStore:function(){return ri},MiddlePanel:function(){return li},MimeLabel:function(){return ta},NoSampleLabel:function(){return ia},OLD_SECURITY_DEFINITIONS_JSX_NAME:function(){return ft},ObjectSchema:function(){return Ga},OneOfButton:function(){return bl},OneOfSchema:function(){return xl},OpenAPIParser:function(){return $n},Operation:function(){return pu},OperationBadge:function(){return Rc},OperationItem:function(){return ku},OperationMenuItemContent:function(){return zu},OperationModel:function(){return bo},OptionsConsumer:function(){return me},OptionsContext:function(){return de},OptionsProvider:function(){return he},Parameters:function(){return ip},PayloadSamples:function(){return Bp},Redoc:function(){return ld},RedocAttribution:function(){return Dc},RedocNormalizedOptions:function(){return H},RedocStandalone:function(){return cd},RedocWrap:function(){return Gu},RequestBodyModel:function(){return to},ResponseDetails:function(){return vp},ResponseHeaders:function(){return mp},ResponseModel:function(){return uo},ResponseSamples:function(){return tu},ResponseTitle:function(){return lp},ResponseView:function(){return wp},ResponsesList:function(){return Op},RightPanel:function(){return pi},Row:function(){return di},SCHEMA_DEFINITION_JSX_NAME:function(){return gt},SECTION_ATTR:function(){return ti},SECURITY_DEFINITIONS_JSX_NAME:function(){return mt},SECURITY_SCHEMES_SECTION_PREFIX:function(){return yt},Schema:function(){return Pl},SchemaDefinition:function(){return Nl},SchemaModel:function(){return Mn},ScrollService:function(){return si},SearchBox:function(){return ad},SearchStore:function(){return ai},Section:function(){return ci},SectionItem:function(){return wu},SecurityDefs:function(){return rc},SecuritySchemeModel:function(){return jo},SecuritySchemesModel:function(){return Co},SideMenu:function(){return Mu},SideMenuBackButton:function(){return qu},SideNavStyleEnum:function(){return D},SimpleDropdown:function(){return ds},SourceCode:function(){return Zs},SourceCodeWithCopy:function(){return Gs},SpecStore:function(){return Do},StickyResponsiveSidebar:function(){return Ju},StoreBuilder:function(){return ki},StoreConsumer:function(){return wi},StoreContext:function(){return xi},StoreProvider:function(){return vi},StyledMarkdownBlock:function(){return ks},ThemeProvider:function(){return ee},Throttle:function(){return Rt},alphabeticallyByProp:function(){return Ft},appendToMdHeading:function(){return x},argValueToBoolean:function(){return W},buildComponentComment:function(){return Ur},concatRefStacks:function(){return Sn},convertSwagger2OpenAPI:function(){return ve},createGlobalStyle:function(){return X},createStore:function(){return oc},css:function(){return G},debugTime:function(){return jt},debugTimeEnd:function(){return Ct},detectType:function(){return Ue},escapeHTMLAttrChars:function(){return P},expandDefaultServerVariables:function(){return dt},extensionsHook:function(){return ne},extractExtensions:function(){return wt},flattenByProp:function(){return g},getBasePath:function(){return $},getContentWithLegacyExamples:function(){return Ot},getDefinitionName:function(){return ot},getOperationSummary:function(){return Be},getSerializedValue:function(){return et},getStatusCodeType:function(){return Me},highlight:function(){return $t},history:function(){return Vt},html2Str:function(){return p},humanizeConstraints:function(){return at},humanizeNumberRange:function(){return st},isAbsoluteUrl:function(){return E},isArray:function(){return I},isBoolean:function(){return T},isFormUrlEncoded:function(){return He},isJsonLike:function(){return Ve},isNamedDefinition:function(){return nt},isNumeric:function(){return b},isObject:function(){return w},isOperationName:function(){return Fe},isPayloadSample:function(){return go},isPrimitiveType:function(){return We},isRedocExtension:function(){return vt},isStatusCode:function(){return Ne},keyframes:function(){return K},langFromMime:function(){return tt},loadAndBundleSpec:function(){return xe},mapLang:function(){return St},mapValues:function(){return f},mapWithLast:function(){return m},media:function(){return te},memoize:function(){return qt},menuItemDepth:function(){return Ic},mergeObjects:function(){return v},mergeParams:function(){return pt},mergeSimilarMediaTypes:function(){return ut},normalizeServers:function(){return ht},pluralizeType:function(){return kt},pushRef:function(){return En},querySelector:function(){return c},removeQueryStringAndHash:function(){return j},resolveUrl:function(){return S},safeSlugify:function(){return O},scrollIntoViewIfNeeded:function(){return u},serializeParameterValue:function(){return Ke},serializeParameterValueWithMime:function(){return Xe},setSecuritySchemePrefix:function(){return bt},shortenHTTPVerb:function(){return xt},sortByField:function(){return ct},sortByRequired:function(){return lt},stripTrailingSlash:function(){return y},styled:function(){return re},titleize:function(){return R},unescapeHTMLChars:function(){return A},urlFormEncodePayload:function(){return Ge},useStore:function(){return Oi}});var e=require("react"),t=require("polished"),o=require("@leafygreen-ui/palette");const i='"Euclid Circular A", Akzidenz, "Helvetica Neue", Helvetica, Arial, sans-serif',s={spacing:{unit:4,sectionHorizontal:({spacing:e})=>8*e.unit,sectionVertical:16},breakpoints:{small:"768px",medium:"1024px",large:"1200px"},colors:{tonalOffset:.2,primary:{main:o.palette.black,light:({colors:e})=>(0,t.lighten)(e.tonalOffset,e.primary.main),dark:({colors:e})=>(0,t.darken)(e.tonalOffset,e.primary.main),contrastText:({colors:e})=>(0,t.readableColor)(e.primary.main)},success:{main:"#1d8127",light:({colors:e})=>(0,t.lighten)(2*e.tonalOffset,e.success.main),dark:({colors:e})=>(0,t.darken)(e.tonalOffset,e.success.main),contrastText:({colors:e})=>(0,t.readableColor)(e.success.main)},warning:{main:o.palette.gray.light1,light:({colors:e})=>(0,t.lighten)(e.tonalOffset,e.warning.main),dark:({colors:e})=>(0,t.darken)(e.tonalOffset,e.warning.main),contrastText:o.palette.gray.dark1},error:{main:o.palette.red.base,light:({colors:e})=>(0,t.lighten)(e.tonalOffset,e.error.main),dark:({colors:e})=>(0,t.darken)(e.tonalOffset,e.error.main),contrastText:({colors:e})=>(0,t.readableColor)(e.error.main)},gray:{50:"#FAFAFA",100:"#F5F5F5"},text:{primary:o.palette.gray.dark3,secondary:({colors:e})=>(0,t.lighten)(e.tonalOffset,e.text.primary)},border:{dark:"rgba(0,0,0, 0.1)",light:"#ffffff"},responses:{success:{color:o.palette.green.dark2,backgroundColor:o.palette.green.light3,tabTextColor:o.palette.green.base},error:{color:o.palette.red.base,backgroundColor:o.palette.red.light3,tabTextColor:o.palette.red.base},redirect:{color:({colors:e})=>e.warning.main,backgroundColor:({colors:e})=>(0,t.transparentize)(.9,e.responses.redirect.color),tabTextColor:({colors:e})=>e.responses.redirect.color},info:{color:"#87ceeb",backgroundColor:({colors:e})=>(0,t.transparentize)(.9,e.responses.info.color),tabTextColor:({colors:e})=>e.responses.info.color}},http:{get:{light:{backgroundColor:o.palette.blue.light3,borderColor:o.palette.blue.light2,color:o.palette.blue.dark1},dark:{backgroundColor:o.palette.blue.dark2,borderColor:o.palette.blue.dark1,color:o.palette.blue.light2}},post:{light:{backgroundColor:o.palette.green.light3,borderColor:o.palette.green.light2,color:o.palette.green.dark2},dark:{backgroundColor:o.palette.green.dark3,borderColor:o.palette.green.dark2,color:o.palette.green.base}},put:{light:{backgroundColor:o.palette.yellow.light3,borderColor:o.palette.yellow.light2,color:o.palette.yellow.dark2},dark:{backgroundColor:o.palette.yellow.dark3,borderColor:o.palette.yellow.dark2,color:o.palette.yellow.light2}},options:"#947014",patch:{light:{backgroundColor:o.palette.yellow.light3,borderColor:o.palette.yellow.light2,color:o.palette.yellow.dark2},dark:{backgroundColor:o.palette.yellow.dark3,borderColor:o.palette.yellow.dark2,color:o.palette.yellow.light2}},delete:{light:{backgroundColor:o.palette.red.light3,borderColor:o.palette.red.light2,color:o.palette.red.dark2},dark:{backgroundColor:o.palette.red.dark3,borderColor:o.palette.red.dark2,color:o.palette.red.light2}},basic:"#707070",link:"#07818F",head:"#A23DAD"}},schema:{linesColor:o.palette.black,defaultDetailsWidth:"75%",typeNameColor:o.palette.gray.dark3,typeTitleColor:e=>e.schema.typeNameColor,requireLabelColor:o.palette.red.base,labelsTextSize:"0.9em",nestingSpacing:"1em",nestedBackground:"#fafafa",arrow:{size:"1.1em",color:e=>e.colors.text.secondary}},typography:{fontSize:"16px",lineHeight:"24px",fontWeightRegular:"400",fontWeightBold:"600",fontWeightLight:"300",fontFamily:i,smoothing:"antialiased",optimizeSpeed:!0,headings:{fontFamily:i,fontWeight:"400",lineHeight:"1.6em"},code:{fontSize:"13px",fontFamily:"Source Code Pro",lineHeight:({typography:e})=>e.lineHeight,fontWeight:({typography:e})=>e.fontWeightRegular,color:o.palette.gray.dark3,backgroundColor:o.palette.gray.light3,wrap:!1},links:{color:o.palette.blue.base,visited:o.palette.blue.base,hover:o.palette.blue.base,textDecoration:"auto",hoverTextDecoration:"auto"}},sidebar:{width:"268px",backgroundColor:o.palette.gray.light3,textColor:o.palette.black,activeTextColor:o.palette.green.dark3,groupItems:{activeBackgroundColor:o.palette.green.light3,activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"uppercase"},level1Items:{activeBackgroundColor:o.palette.green.light3,activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"none"},arrow:{size:"1.5em",color:e=>e.sidebar.textColor}},logo:{maxHeight:({sidebar:e})=>e.width,maxWidth:({sidebar:e})=>e.width,gutter:"2px"},rightPanel:{backgroundColor:o.palette.black,width:"40%",textColor:"#ffffff",servers:{overlay:{backgroundColor:o.palette.gray.dark3,textColor:o.palette.white},url:{backgroundColor:o.palette.gray.dark3}}},codeBlock:{backgroundColor:o.palette.gray.dark3},fab:{backgroundColor:"#f2f2f2",color:"#0065FB"},badges:{border:"1px solid",borderRadius:"5px"}};var a=s;const l="undefined"!=typeof window&&"HTMLElement"in window;function c(e){return"undefined"!=typeof document?document.querySelector(e):null}function p(e){return e.split(/<[^>]+>/).map((e=>e.trim())).filter((e=>e.length>0)).join(" ")}function u(e,t=!0){const r=e.parentNode;if(!r)return;const n=window.getComputedStyle(r,void 0),o=parseInt(n.getPropertyValue("border-top-width"),10),i=parseInt(n.getPropertyValue("border-left-width"),10),s=e.offsetTop-r.offsetTop<r.scrollTop,a=e.offsetTop-r.offsetTop+e.clientHeight-o>r.scrollTop+r.clientHeight,l=e.offsetLeft-r.offsetLeft<r.scrollLeft,c=e.offsetLeft-r.offsetLeft+e.clientWidth-i>r.scrollLeft+r.clientWidth,p=s&&!a;(s||a)&&t&&(r.scrollTop=e.offsetTop-r.offsetTop-r.clientHeight/2-o+e.clientHeight/2),(l||c)&&t&&(r.scrollLeft=e.offsetLeft-r.offsetLeft-r.clientWidth/2-i+e.clientWidth/2),(s||a||l||c)&&!t&&e.scrollIntoView(p)}var d=require("slugify"),h=r.n(d);function m(e,t){const r=[];for(let n=0;n<e.length-1;n++)r.push(t(e[n],!1));return 0!==e.length&&r.push(t(e[e.length-1],!0)),r}function f(e,t){const r={};for(const n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n,e));return r}function g(e,t){const r=[],n=e=>{for(const o of e)r.push(o),o[t]&&n(o[t])};return n(e),r}function y(e){return e.endsWith("/")?e.substring(0,e.length-1):e}function b(e){return!isNaN(parseFloat(e))&&isFinite(e)}function x(e,t,r){const n=new RegExp(`(^|\\n)#\\s?${t}\\s*\\n`,"i"),o=new RegExp(`((\\n|^)#\\s*${t}\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)`,"i");if(n.test(e))return e.replace(o,`$1\n\n${r}\n$4`);{const n=""===e||e.endsWith("\n\n")?"":e.endsWith("\n")?"\n":"\n\n";return`${e}${n}# ${t}\n\n${r}`}}const v=(e,...t)=>{if(!t.length)return e;const r=t.shift();return void 0===r?e:(k(e)&&k(r)&&Object.keys(r).forEach((t=>{k(r[t])?(e[t]||(e[t]={}),v(e[t],r[t])):e[t]=r[t]})),v(e,...t))},w=e=>null!==e&&"object"==typeof e,k=e=>w(e)&&!I(e);function O(e){return h()(e)||e.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function E(e){return/(?:^[a-z][a-z0-9+.-]*:|\/\/)/i.test(e)}function S(e,t){let r;if(t.startsWith("//"))try{r=`${new URL(e).protocol||"https:"}${t}`}catch(e){r=`https:${t}`}else if(E(t))r=t;else if(t.startsWith("/"))try{const n=new URL(e);n.pathname=t,r=n.href}catch(e){r=t}else r=y(e)+"/"+t;return y(r)}function $(e){try{return C(e).pathname}catch(t){return e}}function R(e){return e.charAt(0).toUpperCase()+e.slice(1)}function j(e){try{const t=C(e);return t.search="",t.hash="",t.toString()}catch(t){return e}}function C(e){return"undefined"==typeof URL?new(r(416).URL)(e):new URL(e)}function P(e){return e.replace(/["\\]/g,"\\$&")}function A(e){return e.replace(/&#(\d+);/g,((e,t)=>String.fromCharCode(parseInt(t,10)))).replace(/&amp;/g,"&").replace(/&quot;/g,'"')}function I(e){return Array.isArray(e)}function T(e){return"boolean"==typeof e}const _={enum:"Enum",enumSingleValue:"Value",enumArray:"Items",default:"Default",deprecated:"Deprecated",example:"Example",examples:"Examples",recursive:"Recursive",arrayOf:"Array of ",webhook:"Event",const:"Value",noResultsFound:"No results found",download:"Download",downloadSpecification:"Download OpenAPI specification",responses:"Responses",callbackResponses:"Callback responses",requestSamples:"Request samples",responseSamples:"Response samples"};function L(e,t){const r=_[e];return void 0!==t?r[t]:r}var D=(e=>(e.SummaryOnly="summary-only",e.PathOnly="path-only",e.IdOnly="id-only",e))(D||{}),z=Object.defineProperty,N=Object.defineProperties,M=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,Q=(e,t,r)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,U=(e,t)=>{for(var r in t||(t={}))F.call(t,r)&&Q(e,r,t[r]);if(q)for(var r of q(t))B.call(t,r)&&Q(e,r,t[r]);return e};function W(e,t){return void 0===e?t||!1:"string"==typeof e?"false"!==e:e}function V(e){return"string"==typeof e?parseInt(e,10):"number"==typeof e?e:void 0}class H{static normalizeExpandResponses(e){if("all"===e)return"all";if("string"==typeof e){const t={};return e.split(",").forEach((e=>{t[e.trim()]=!0})),t}return void 0!==e&&console.warn(`expandResponses must be a string but received value "${e}" of type ${typeof e}`),{}}static normalizeHideHostname(e){return!!e}static normalizeScrollYOffset(e){if("string"==typeof e&&!b(e)){const t=c(e);t||console.warn("scrollYOffset value is a selector to non-existing element. Using offset 0 by default");const r=t&&t.getBoundingClientRect().bottom||0;return()=>r}return"number"==typeof e||b(e)?()=>"number"==typeof e?e:parseFloat(e):"function"==typeof e?()=>{const t=e();return"number"!=typeof t&&console.warn(`scrollYOffset should return number but returned value "${t}" of type ${typeof t}`),t}:(void 0!==e&&console.warn("Wrong value for scrollYOffset ReDoc option: should be string, number or function"),()=>0)}static normalizeShowExtensions(e){if(void 0===e)return!1;if(""===e)return!0;if("string"!=typeof e)return e;switch(e){case"true":return!0;case"false":return!1;default:return e.split(",").map((e=>e.trim()))}}static normalizeSideNavStyle(e){const t=D.SummaryOnly;if("string"!=typeof e)return t;switch(e){case t:return e;case D.PathOnly:return D.PathOnly;case D.IdOnly:return D.IdOnly;default:return t}}static normalizePayloadSampleIdx(e){return"number"==typeof e?Math.max(0,e):"string"==typeof e&&isFinite(e)?parseInt(e,10):0}static normalizeJsonSampleExpandLevel(e){return"all"===e?1/0:isNaN(Number(e))?2:Math.ceil(Number(e))}static normalizeGeneratedPayloadSamplesMaxDepth(e){return isNaN(Number(e))?10:Math.max(0,Number(e))}constructor(e,t={}){var r,n,o,i,s;const l=(e=U(U({},t),e)).theme&&e.theme.extensionsHook;var c,p;(null==(r=e.theme)?void 0:r.menu)&&!(null==(n=e.theme)?void 0:n.sidebar)&&(console.warn('Theme setting "menu" is deprecated. Rename to "sidebar"'),e.theme.sidebar=e.theme.menu),(null==(o=e.theme)?void 0:o.codeSample)&&!(null==(i=e.theme)?void 0:i.codeBlock)&&(console.warn('Theme setting "codeSample" is deprecated. Rename to "codeBlock"'),e.theme.codeBlock=e.theme.codeSample),this.theme=function(e){const t={};let r=0;const n=(o,i)=>{Object.keys(o).forEach((s=>{const a=(i?i+".":"")+s,l=o[s];"function"==typeof l?Object.defineProperty(o,s,{get(){if(!t[a]){if(r++,r>1e3)throw new Error(`Theme probably contains circular dependency at ${a}: ${l.toString()}`);t[a]=l(e)}return t[a]},enumerable:!0}):"object"==typeof l&&n(l,a)}))};return n(e,""),JSON.parse(JSON.stringify(e))}(v({},a,(c=U({},e.theme),N(c,M({extensionsHook:void 0}))))),this.theme.extensionsHook=l,p=e.labels,Object.assign(_,p),this.scrollYOffset=H.normalizeScrollYOffset(e.scrollYOffset),this.hideHostname=H.normalizeHideHostname(e.hideHostname),this.expandResponses=H.normalizeExpandResponses(e.expandResponses),this.requiredPropsFirst=W(e.requiredPropsFirst),this.sortPropsAlphabetically=W(e.sortPropsAlphabetically),this.sortEnumValuesAlphabetically=W(e.sortEnumValuesAlphabetically),this.sortOperationsAlphabetically=W(e.sortOperationsAlphabetically),this.sortTagsAlphabetically=W(e.sortTagsAlphabetically),this.nativeScrollbars=W(e.nativeScrollbars),this.pathInMiddlePanel=W(e.pathInMiddlePanel),this.untrustedSpec=W(e.untrustedSpec),this.hideDownloadButton=W(e.hideDownloadButton),this.downloadFileName=e.downloadFileName,this.downloadDefinitionUrl=e.downloadDefinitionUrl,this.disableSearch=W(e.disableSearch),this.onlyRequiredInSamples=W(e.onlyRequiredInSamples),this.showExtensions=H.normalizeShowExtensions(e.showExtensions),this.sideNavStyle=H.normalizeSideNavStyle(e.sideNavStyle),this.hideSingleRequestSampleTab=W(e.hideSingleRequestSampleTab),this.menuToggle=W(e.menuToggle,!0),this.jsonSampleExpandLevel=H.normalizeJsonSampleExpandLevel(e.jsonSampleExpandLevel),this.enumSkipQuotes=W(e.enumSkipQuotes),this.hideSchemaTitles=W(e.hideSchemaTitles),this.simpleOneOfTypeLabel=W(e.simpleOneOfTypeLabel),this.payloadSampleIdx=H.normalizePayloadSampleIdx(e.payloadSampleIdx),this.expandSingleSchemaField=W(e.expandSingleSchemaField),this.schemaExpansionLevel=function(e,t=0){return"all"===e?1/0:V(e)||t}(e.schemaExpansionLevel),this.showObjectSchemaExamples=W(e.showObjectSchemaExamples),this.showSecuritySchemeType=W(e.showSecuritySchemeType),this.hideSecuritySection=W(e.hideSecuritySection),this.unstable_ignoreMimeParameters=W(e.unstable_ignoreMimeParameters),this.allowedMdComponents=e.allowedMdComponents||{},this.expandDefaultServerVariables=W(e.expandDefaultServerVariables),this.maxDisplayedEnumValues=V(e.maxDisplayedEnumValues);const u=I(e.ignoreNamedSchemas)?e.ignoreNamedSchemas:null==(s=e.ignoreNamedSchemas)?void 0:s.split(",").map((e=>e.trim()));this.ignoreNamedSchemas=new Set(u),this.hideSchemaPattern=W(e.hideSchemaPattern),this.generatedPayloadSamplesMaxDepth=H.normalizeGeneratedPayloadSamplesMaxDepth(e.generatedPayloadSamplesMaxDepth),this.nonce=e.nonce,this.hideFab=W(e.hideFab),this.minCharacterLengthToInitSearch=V(e.minCharacterLengthToInitSearch)||3,this.showWebhookVerb=W(e.showWebhookVerb),this.backNavigationPath=e.backNavigationPath,this.ignoreIncompatibleTypes=W(e.ignoreIncompatibleTypes),this.siteTitle=e.siteTitle}}var J=require("styled-components"),Y=r.n(J);const{default:Z,css:G,createGlobalStyle:X,keyframes:K,ThemeProvider:ee}=J,te={lessThan:(e,t,r)=>(...n)=>G`
      @media ${t?"print, ":""} screen and (max-width: ${t=>t.theme.breakpoints[e]}) ${r||""} {
        ${G(...n)};
      }
    `,greaterThan:e=>(...t)=>G`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) {
        ${G(...t)};
      }
    `,between:(e,t)=>(...r)=>G`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) and (max-width: ${e=>e.theme.breakpoints[t]}) {
        ${G(...r)};
      }
    `};var re=Z;function ne(e){return t=>{if(t.theme.extensionsHook)return t.theme.extensionsHook(e,t)}}const oe=re.div`
  padding: 20px;
  color: red;
`;class ie extends e.Component{constructor(e){super(e),this.state={error:void 0}}componentDidCatch(e){return this.setState({error:e}),!1}render(){return this.state.error?e.createElement(oe,null,e.createElement("h1",null,"Something went wrong..."),e.createElement("small",null," ",this.state.error.message," "),e.createElement("p",null,e.createElement("details",null,e.createElement("summary",null,"Stack trace"),e.createElement("pre",null,this.state.error.stack))),e.createElement("small",null," ReDoc Version: ","0.0.1-dop-3460.0")," ",e.createElement("br",null),e.createElement("small",null," Commit: ","6421641")):e.createElement(e.Fragment,null,e.Children.only(this.props.children))}}const se=K`
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
  }
`,ae=re((t=>e.createElement("svg",{className:t.className,version:"1.1",width:"512",height:"512",viewBox:"0 0 512 512"},e.createElement("path",{d:"M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z"}),e.createElement("path",{d:"M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z"}),e.createElement("path",{d:"M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z"}),e.createElement("path",{d:"M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z"}),e.createElement("path",{d:"M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z"}),e.createElement("path",{d:"M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z"}),e.createElement("path",{d:"M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z"}),e.createElement("path",{d:"M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z"}))))`
  animation: 2s ${se} linear infinite;
  width: 50px;
  height: 50px;
  content: '';
  display: inline-block;
  margin-left: -25px;

  path {
    fill: ${e=>e.color};
  }
`,le=re.div`
  font-family: helvetica, sans;
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 30px 0 20px 0;
  color: ${e=>e.color};
`;class ce extends e.PureComponent{render(){return e.createElement("div",{style:{textAlign:"center"}},e.createElement(le,{color:this.props.color},"Loading ..."),e.createElement(ae,{color:this.props.color}))}}var pe=require("prop-types"),ue=require("@mdb/consistent-nav");const de=e.createContext(new H({})),he=de.Provider,me=de.Consumer;var fe=require("mobx"),ge=require("@redocly/openapi-core/lib/bundle"),ye=require("@redocly/openapi-core/lib/config/config"),be=r(925);function xe(e){return t=this,null,n=function*(){const t=new ye.Config({}),n={config:t,base:l?window.location.href:process.cwd()};l&&(t.resolve.http.customFetch=r.g.fetch),"object"==typeof e&&null!==e?n.doc={source:{absoluteRef:""},parsed:e}:n.ref=e;const{bundle:{parsed:o}}=yield(0,ge.bundle)(n);return void 0!==o.swagger?ve(o):o},new Promise(((e,r)=>{var o=e=>{try{s(n.next(e))}catch(e){r(e)}},i=e=>{try{s(n.throw(e))}catch(e){r(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(o,i);s((n=n.apply(t,null)).next())}));var t,n}function ve(e){return console.warn("[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0"),new Promise(((t,r)=>(0,be.convertObj)(e,{patch:!0,warnOnly:!0,text:"{}",anchors:!0},((e,n)=>{if(e)return r(e);t(n&&n.openapi)}))))}var we=require("decko"),ke=require("eventemitter3"),Oe=require("json-pointer");const Ee=Oe.parse;class Se{static baseName(e,t=1){const r=Se.parse(e);return r[r.length-t]}static dirName(e,t=1){const r=Se.parse(e);return Oe.compile(r.slice(0,r.length-t))}static relative(e,t){const r=Se.parse(e);return Se.parse(t).slice(r.length)}static parse(e){let t=e;return"#"===t.charAt(0)&&(t=t.substring(1)),Ee(t)}static join(e,t){const r=Se.parse(e).concat(t);return Oe.compile(r)}static get(e,t){return Oe.get(e,t)}static compile(e){return Oe.compile(e)}static escape(e){return Oe.escape(e)}}Oe.parse=Se.parse,Object.assign(Se,Oe);var $e=r(17),Re=require("url-template"),je=Object.defineProperty,Ce=Object.defineProperties,Pe=Object.getOwnPropertyDescriptors,Ae=Object.getOwnPropertySymbols,Ie=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,_e=(e,t,r)=>t in e?je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Le=(e,t)=>{for(var r in t||(t={}))Ie.call(t,r)&&_e(e,r,t[r]);if(Ae)for(var r of Ae(t))Te.call(t,r)&&_e(e,r,t[r]);return e},De=(e,t)=>Ce(e,Pe(t));function ze(e){return"string"==typeof e&&/\dxx/i.test(e)}function Ne(e){return"default"===e||b(e)||ze(e)}function Me(e,t=!1){if("default"===e)return t?"error":"success";let r="string"==typeof e?parseInt(e,10):e;if(ze(e)&&(r*=100),r<100||r>599)throw new Error("invalid HTTP code");let n="success";return r>=300&&r<400?n="redirect":r>=400?n="error":r<200&&(n="info"),n}const qe={get:!0,post:!0,put:!0,head:!0,patch:!0,delete:!0,options:!0,$ref:!0};function Fe(e){return e in qe}function Be(e){return e.summary||e.operationId||e.description&&e.description.substring(0,50)||e.pathName||"<no summary>"}const Qe={multipleOf:"number",maximum:"number",exclusiveMaximum:"number",minimum:"number",exclusiveMinimum:"number",maxLength:"string",minLength:"string",pattern:"string",contentEncoding:"string",contentMediaType:"string",items:"array",maxItems:"array",minItems:"array",uniqueItems:"array",maxProperties:"object",minProperties:"object",required:"object",additionalProperties:"object",unevaluatedProperties:"object",properties:"object",patternProperties:"object"};function Ue(e){if(void 0!==e.type&&!I(e.type))return e.type;const t=Object.keys(Qe);for(const r of t){const t=Qe[r];if(void 0!==e[r])return t}return"any"}function We(e,t=e.type){if(e["x-circular-ref"])return!0;if(void 0!==e.oneOf||void 0!==e.anyOf)return!1;if(e.if&&e.then||e.if&&e.else)return!1;let r=!0;const n=I(t);return("object"===t||n&&(null==t?void 0:t.includes("object")))&&(r=void 0!==e.properties?0===Object.keys(e.properties).length:void 0===e.additionalProperties&&void 0===e.unevaluatedProperties&&void 0===e.patternProperties),!I(e.items)&&!I(e.prefixItems)&&(void 0!==e.items&&!T(e.items)&&("array"===t||n&&(null==t?void 0:t.includes("array")))&&(r=We(e.items,e.items.type)),r)}function Ve(e){return-1!==e.search(/json/i)}function He(e){return"application/x-www-form-urlencoded"===e}function Je(e,t,r){return I(e)?e.map((e=>e.toString())).join(r):"object"==typeof e?Object.keys(e).map((t=>`${t}${r}${e[t]}`)).join(r):t+"="+e.toString()}function Ye(e,t){return I(e)?(console.warn("deepObject style cannot be used with array value:"+e.toString()),""):"object"==typeof e?Object.keys(e).map((r=>`${t}[${r}]=${e[r]}`)).join("&"):(console.warn("deepObject style cannot be used with non-object value:"+e.toString()),"")}function Ze(e,t,r){const n="__redoc_param_name__",o=t?"*":"";return Re.parse(`{?${n}${o}}`).expand({[n]:r}).substring(1).replace(/__redoc_param_name__/g,e)}function Ge(e,t={}){if(I(e))throw new Error("Payload must have fields: "+e.toString());return Object.keys(e).map((r=>{const n=e[r],{style:o="form",explode:i=!0}=t[r]||{};switch(o){case"form":return Ze(r,i,n);case"spaceDelimited":return Je(n,r,"%20");case"pipeDelimited":return Je(n,r,"|");case"deepObject":return Ye(n,r);default:return console.warn("Incorrect or unsupported encoding style: "+o),""}})).join("&")}function Xe(e,t){return Ve(t)?JSON.stringify(e):(console.warn(`Parameter serialization as ${t} is not supported`),"")}function Ke(e,t){const{name:r,style:n,explode:o=!1,serializationMime:i}=e;if(i)switch(e.in){case"path":case"header":return Xe(t,i);case"cookie":case"query":return`${r}=${Xe(t,i)}`;default:return console.warn("Unexpected parameter location: "+e.in),""}if(!n)return console.warn(`Missing style attribute or content for parameter ${r}`),"";switch(e.in){case"path":return function(e,t,r,n){const o=r?"*":"";let i="";"label"===t?i=".":"matrix"===t&&(i=";");const s="__redoc_param_name__";return Re.parse(`{${i}${s}${o}}`).expand({[s]:n}).replace(/__redoc_param_name__/g,e)}(r,n,o,t);case"query":return function(e,t,r,n){switch(t){case"form":return Ze(e,r,n);case"spaceDelimited":return I(n)?r?Ze(e,r,n):`${e}=${n.join("%20")}`:(console.warn("The style spaceDelimited is only applicable to arrays"),"");case"pipeDelimited":return I(n)?r?Ze(e,r,n):`${e}=${n.join("|")}`:(console.warn("The style pipeDelimited is only applicable to arrays"),"");case"deepObject":return!r||I(n)||"object"!=typeof n?(console.warn("The style deepObject is only applicable for objects with explode=true"),""):Ye(n,e);default:return console.warn("Unexpected style for query: "+t),""}}(r,n,o,t);case"header":return function(e,t,r){if("simple"===e){const e=t?"*":"",n="__redoc_param_name__",o=Re.parse(`{${n}${e}}`);return decodeURIComponent(o.expand({[n]:r}))}return console.warn("Unexpected style for header: "+e),""}(n,o,t);case"cookie":return function(e,t,r,n){return"form"===t?Ze(e,r,n):(console.warn("Unexpected style for cookie: "+t),"")}(r,n,o,t);default:return console.warn("Unexpected parameter location: "+e.in),""}}function et(e,t){return e.in?decodeURIComponent(Ke(e,t)):t}function tt(e){return-1!==e.search(/xml/i)?"xml":-1!==e.search(/csv/i)?"csv":-1!==e.search(/plain/i)?"tex":"clike"}const rt=/^#\/components\/(schemas|pathItems)\/([^/]+)$/;function nt(e){return rt.test(e||"")}function ot(e){var t;const[r]=(null==(t=null==e?void 0:e.match(rt))?void 0:t.reverse())||[];return r}function it(e,t,r){let n;return void 0!==t&&void 0!==r?n=t===r?`= ${t} ${e}`:`[ ${t} .. ${r} ] ${e}`:void 0!==r?n=`<= ${r} ${e}`:void 0!==t&&(n=1===t?"non-empty":`>= ${t} ${e}`),n}function st(e){var t,r;const n="number"==typeof e.exclusiveMinimum?Math.min(e.exclusiveMinimum,null!=(t=e.minimum)?t:1/0):e.minimum,o="number"==typeof e.exclusiveMaximum?Math.max(e.exclusiveMaximum,null!=(r=e.maximum)?r:-1/0):e.maximum,i="number"==typeof e.exclusiveMinimum||e.exclusiveMinimum,s="number"==typeof e.exclusiveMaximum||e.exclusiveMaximum;return void 0!==n&&void 0!==o?`${i?"( ":"[ "}${n} .. ${o}${s?" )":" ]"}`:void 0!==o?`${s?"< ":"<= "}${o}`:void 0!==n?`${i?"> ":">= "}${n}`:void 0}function at(e){const t=[],r=it("characters",e.minLength,e.maxLength);void 0!==r&&t.push(r);const n=it("items",e.minItems,e.maxItems);void 0!==n&&t.push(n);const o=it("properties",e.minProperties,e.maxProperties);void 0!==o&&t.push(o);const i=function(e){if(void 0===e)return;const t=e.toString(10);return/^0\.0*1$/.test(t)?`decimal places <= ${t.split(".")[1].length}`:`multiple of ${t}`}(e.multipleOf);void 0!==i&&t.push(i);const s=st(e);return void 0!==s&&t.push(s),e.uniqueItems&&t.push("unique"),t}function lt(e,t=[]){const r=[],n=[],o=[];return e.forEach((e=>{e.required?t.includes(e.name)?n.push(e):o.push(e):r.push(e)})),n.sort(((e,r)=>t.indexOf(e.name)-t.indexOf(r.name))),[...n,...o,...r]}function ct(e,t){return[...e].sort(((e,r)=>e[t].localeCompare(r[t])))}function pt(e,t=[],r=[]){const n={};return r.forEach((t=>{({resolved:t}=e.deref(t)),n[t.name+"_"+t.in]=!0})),(t=t.filter((t=>(({resolved:t}=e.deref(t)),!n[t.name+"_"+t.in])))).concat(r)}function ut(e){const t={};return Object.keys(e).forEach((r=>{const n=e[r],o=r.split(";")[0].trim();t[o]?t[o]=Le(Le({},t[o]),n):t[o]=n})),t}function dt(e,t={}){return e.replace(/(?:{)([\w-.]+)(?:})/g,((e,r)=>t[r]&&t[r].default||e))}function ht(e,t){const r=void 0===e?j((()=>{if(!l)return"";const e=window.location.href;return e.endsWith(".html")?(0,$e.dirname)(e):e})()):(0,$e.dirname)(e);return 0===t.length&&(t=[{url:"/"}]),t.map((e=>{return De(Le({},e),{url:(t=e.url,S(r,t)),description:e.description||""});var t}))}const mt="SecurityDefinitions",ft="security-definitions",gt="SchemaDefinition";let yt="section/Authentication/";function bt(e){yt=e}const xt=e=>({delete:"del",options:"opts"}[e]||e);function vt(e){return e in{"x-circular-ref":!0,"x-parentRefs":!0,"x-refsStack":!0,"x-code-samples":!0,"x-codeSamples":!0,"x-displayName":!0,"x-examples":!0,"x-ignoredHeaderParameters":!0,"x-logo":!0,"x-nullable":!0,"x-servers":!0,"x-tagGroups":!0,"x-traitTag":!0,"x-additionalPropertiesName":!0,"x-explicitMappingOnly":!0}}function wt(e,t){return Object.keys(e).filter((e=>!0===t?e.startsWith("x-")&&!vt(e):e.startsWith("x-")&&t.indexOf(e)>-1)).reduce(((t,r)=>(t[r]=e[r],t)),{})}function kt(e){return e.split(" or ").map((e=>e.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/,"$1s$2"))).join(" or ")}function Ot(e){let t=e.content;const r=e["x-examples"],n=e["x-example"];if(r){t=Le({},t);for(const e of Object.keys(r)){const n=r[e];t[e]=De(Le({},t[e]),{examples:n})}}else if(n){t=Le({},t);for(const e of Object.keys(n)){const r=n[e];t[e]=De(Le({},t[e]),{example:r})}}return t}var Et=require("prismjs");require("prismjs/components/prism-bash.js"),require("prismjs/components/prism-c.js"),require("prismjs/components/prism-clike.js"),require("prismjs/components/prism-coffeescript.js"),require("prismjs/components/prism-cpp.js"),require("prismjs/components/prism-csharp.js"),require("prismjs/components/prism-go.js"),require("prismjs/components/prism-http.js"),require("prismjs/components/prism-java.js"),require("prismjs/components/prism-lua.js"),require("prismjs/components/prism-markup-templating.js"),require("prismjs/components/prism-markup.js"),require("prismjs/components/prism-objectivec.js"),require("prismjs/components/prism-perl.js"),require("prismjs/components/prism-php.js"),require("prismjs/components/prism-python.js"),require("prismjs/components/prism-q.js"),require("prismjs/components/prism-ruby.js"),require("prismjs/components/prism-scala.js"),require("prismjs/components/prism-sql.js"),require("prismjs/components/prism-swift.js"),require("prismjs/components/prism-yaml.js"),require("prismjs/components/prism-csv.js");function St(e){return{json:"js","c++":"cpp","c#":"csharp","objective-c":"objectivec",shell:"bash",viml:"vim"}[e]||"clike"}function $t(e,t="clike"){t=t.toLowerCase();let r=Et.languages[t];return r||(r=Et.languages[St(t)]),Et.highlight(e.toString(),r,t)}function Rt(e){return(t,r,n)=>{n.value=function(e,t){let r,n,o,i=null,s=0;const a=()=>{s=(new Date).getTime(),i=null,o=e.apply(r,n),i||(r=n=null)};return function(){const l=(new Date).getTime(),c=t-(l-s);return r=this,n=arguments,c<=0||c>t?(i&&(clearTimeout(i),i=null),s=l,o=e.apply(r,n),i||(r=n=null)):i||(i=setTimeout(a,c)),o}}(n.value,e)}}function jt(e){}function Ct(e){}Et.languages.insertBefore("javascript","string",{"property string":{pattern:/([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,lookbehind:!0}},void 0),Et.languages.insertBefore("javascript","punctuation",{property:{pattern:/([{,]\s*)[a-z]\w*(?=\s*:)/i,lookbehind:!0}},void 0);var Pt=Object.defineProperty,At=Object.defineProperties,It=Object.getOwnPropertyDescriptors,Tt=Object.getOwnPropertySymbols,_t=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable,Dt=(e,t,r)=>t in e?Pt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,zt=(e,t)=>{for(var r in t||(t={}))_t.call(t,r)&&Dt(e,r,t[r]);if(Tt)for(var r of Tt(t))Lt.call(t,r)&&Dt(e,r,t[r]);return e},Nt=(e,t)=>At(e,It(t));const Mt={};function qt(e,t,r){if("function"==typeof r.value)return function(e,t,r){if(!r.value||r.value.length>0)throw new Error("@memoize decorator can only be applied to methods of zero arguments");const n=`_memoized_${t}`,o=r.value;return e[n]=Mt,Nt(zt({},r),{value(){return this[n]===Mt&&(this[n]=o.call(this)),this[n]}})}(e,t,r);if("function"==typeof r.get)return function(e,t,r){const n=`_memoized_${t}`,o=r.get;return e[n]=Mt,Nt(zt({},r),{get(){return this[n]===Mt&&(this[n]=o.call(this)),this[n]}})}(e,t,r);throw new Error("@memoize decorator can be applied to methods or getters, got "+String(r.value)+" instead")}function Ft(e){let t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),(r,n)=>-1==t?n[e].localeCompare(r[e]):r[e].localeCompare(n[e])}var Bt=Object.defineProperty,Qt=Object.getOwnPropertyDescriptor;const Ut="hashchange";class Wt{constructor(){this.emit=()=>{this._emiter.emit(Ut,this.currentId)},this._emiter=new ke.EventEmitter,this.bind()}get currentId(){return l?decodeURIComponent(window.location.hash.substring(1)):""}linkForId(e){return e?"#"+e:""}subscribe(e){const t=this._emiter.addListener(Ut,e);return()=>t.removeListener(Ut,e)}bind(){l&&window.addEventListener("hashchange",this.emit,!1)}dispose(){l&&window.removeEventListener("hashchange",this.emit)}replace(e,t=!1){l&&null!=e&&e!==this.currentId&&(t?window.history.replaceState(null,"",window.location.href.split("#")[0]+this.linkForId(e)):(window.history.pushState(null,"",window.location.href.split("#")[0]+this.linkForId(e)),this.emit()))}}((e,t,r,n)=>{for(var o,i=Qt(t,r),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,r,i)||i);i&&Bt(t,r,i)})([we.bind,we.debounce],Wt.prototype,"replace");const Vt=new Wt;var Ht=require("mark.js");class Jt{constructor(){this.map=new Map,this.prevTerm=""}add(e){this.map.set(e,new Ht(e))}delete(e){this.map.delete(e)}addOnly(e){this.map.forEach(((t,r)=>{-1===e.indexOf(r)&&(t.unmark(),this.map.delete(r))}));for(const t of e)this.map.has(t)||this.map.set(t,new Ht(t))}clearAll(){this.unmark(),this.map.clear()}mark(e){(e||this.prevTerm)&&(this.map.forEach((t=>{t.unmark(),t.mark(e||this.prevTerm)})),this.prevTerm=e||this.prevTerm)}unmark(){this.map.forEach((e=>e.unmark())),this.prevTerm=""}}let Yt={baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1};const Zt=/[&<>"']/,Gt=/[&<>"']/g,Xt=/[<>"']|&(?!#?\w+;)/,Kt=/[<>"']|&(?!#?\w+;)/g,er={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tr=e=>er[e];function rr(e,t){if(t){if(Zt.test(e))return e.replace(Gt,tr)}else if(Xt.test(e))return e.replace(Kt,tr);return e}const nr=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function or(e){return e.replace(nr,((e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}const ir=/(^|[^\[])\^/g;function sr(e,t){e="string"==typeof e?e:e.source,t=t||"";const r={replace:(t,n)=>(n=(n=n.source||n).replace(ir,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}const ar=/[^\w:]/g,lr=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function cr(e,t,r){if(e){let e;try{e=decodeURIComponent(or(r)).replace(ar,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!lr.test(r)&&(r=function(e,t){pr[" "+e]||(ur.test(e)?pr[" "+e]=e+"/":pr[" "+e]=yr(e,"/",!0));const r=-1===(e=pr[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(dr,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(hr,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}const pr={},ur=/^[^:]+:\/*[^/]*$/,dr=/^([^:]+:)[\s\S]*$/,hr=/^([^:]+:\/*[^/]*)[\s\S]*$/,mr={exec:function(){}};function fr(e){let t,r,n=1;for(;n<arguments.length;n++)for(r in t=arguments[n],t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}function gr(e,t){const r=e.replace(/\|/g,((e,t,r)=>{let n=!1,o=t;for(;--o>=0&&"\\"===r[o];)n=!n;return n?"|":" |"})).split(/ \|/);let n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function yr(e,t,r){const n=e.length;if(0===n)return"";let o=0;for(;o<n;){const i=e.charAt(n-o-1);if(i!==t||r){if(i===t||!r)break;o++}else o++}return e.slice(0,n-o)}function br(e){e&&e.sanitize&&!e.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")}function xr(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function vr(e,t,r,n){const o=t.href,i=t.title?rr(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;const e={type:"link",raw:r,href:o,title:i,text:s,tokens:n.inlineTokens(s,[])};return n.state.inLink=!1,e}return{type:"image",raw:r,href:o,title:i,text:rr(s)}}class wr{constructor(e){this.options=e||Yt}space(e){const t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){const t=this.rules.block.code.exec(e);if(t){const e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:yr(e,"\n")}}}fences(e){const t=this.rules.block.fences.exec(e);if(t){const e=t[0],r=function(e,t){const r=e.match(/^(\s+)(?:```)/);if(null===r)return t;const n=r[1];return t.split("\n").map((e=>{const t=e.match(/^\s+/);if(null===t)return e;const[r]=t;return r.length>=n.length?e.slice(n.length):e})).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim():t[2],text:r}}}heading(e){const t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){const t=yr(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}const r={type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:[]};return this.lexer.inline(r.text,r.tokens),r}}hr(e){const t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){const t=this.rules.block.blockquote.exec(e);if(t){const e=t[0].replace(/^ *>[ \t]?/gm,"");return{type:"blockquote",raw:t[0],tokens:this.lexer.blockTokens(e,[]),text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,o,i,s,a,l,c,p,u,d,h,m=t[1].trim();const f=m.length>1,g={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");const y=new RegExp(`^( {0,3}${m})((?:[\t ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=y.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0],p=e.split("\n",1)[0],this.options.pedantic?(i=2,d=c.trimLeft()):(i=t[2].search(/[^ ]/),i=i>4?1:i,d=c.slice(i),i+=t[1].length),a=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){const t=new RegExp(`^ {0,${Math.min(3,i-1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`),n=new RegExp(`^ {0,${Math.min(3,i-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);for(;e&&(u=e.split("\n",1)[0],c=u,this.options.pedantic&&(c=c.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!t.test(c))&&!n.test(e);){if(c.search(/[^ ]/)>=i||!c.trim())d+="\n"+c.slice(i);else{if(a)break;d+="\n"+c}a||c.trim()||(a=!0),r+=u+"\n",e=e.substring(u.length+1)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d),n&&(o="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,""))),g.items.push({type:"list_item",raw:r,task:!!n,checked:o,loose:!1,text:d}),g.raw+=r}g.items[g.items.length-1].raw=r.trimRight(),g.items[g.items.length-1].text=d.trimRight(),g.raw=g.raw.trimRight();const b=g.items.length;for(s=0;s<b;s++){this.lexer.state.top=!1,g.items[s].tokens=this.lexer.blockTokens(g.items[s].text,[]);const e=g.items[s].tokens.filter((e=>"space"===e.type)),t=e.every((e=>{const t=e.raw.split("");let r=0;for(const e of t)if("\n"===e&&(r+=1),r>1)return!0;return!1}));!g.loose&&e.length&&t&&(g.loose=!0,g.items[s].loose=!0)}return g}}html(e){const t=this.rules.block.html.exec(e);if(t){const e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};return this.options.sanitize&&(e.type="paragraph",e.text=this.options.sanitizer?this.options.sanitizer(t[0]):rr(t[0]),e.tokens=[],this.lexer.inline(e.text,e.tokens)),e}}def(e){const t=this.rules.block.def.exec(e);if(t)return t[3]&&(t[3]=t[3].substring(1,t[3].length-1)),{type:"def",tag:t[1].toLowerCase().replace(/\s+/g," "),raw:t[0],href:t[2],title:t[3]}}table(e){const t=this.rules.block.table.exec(e);if(t){const e={type:"table",header:gr(t[1]).map((e=>({text:e}))),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,o,i,s=e.align.length;for(r=0;r<s;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(s=e.rows.length,r=0;r<s;r++)e.rows[r]=gr(e.rows[r],e.header.length).map((e=>({text:e})));for(s=e.header.length,n=0;n<s;n++)e.header[n].tokens=[],this.lexer.inlineTokens(e.header[n].text,e.header[n].tokens);for(s=e.rows.length,n=0;n<s;n++)for(i=e.rows[n],o=0;o<i.length;o++)i[o].tokens=[],this.lexer.inlineTokens(i[o].text,i[o].tokens);return e}}}lheading(e){const t=this.rules.block.lheading.exec(e);if(t){const e={type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}paragraph(e){const t=this.rules.block.paragraph.exec(e);if(t){const e={type:"paragraph",raw:t[0],text:"\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}text(e){const t=this.rules.block.text.exec(e);if(t){const e={type:"text",raw:t[0],text:t[0],tokens:[]};return this.lexer.inline(e.text,e.tokens),e}}escape(e){const t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:rr(t[1])}}tag(e){const t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):rr(t[0]):t[0]}}link(e){const t=this.rules.inline.link.exec(e);if(t){const e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;const t=yr(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{const e=function(e,t){if(-1===e.indexOf(t[1]))return-1;const r=e.length;let n=0,o=0;for(;o<r;o++)if("\\"===e[o])o++;else if(e[o]===t[0])n++;else if(e[o]===t[1]&&(n--,n<0))return o;return-1}(t[2],"()");if(e>-1){const r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){const e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),vr(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:n?n.replace(this.rules.inline._escapes,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(e=t[e.toLowerCase()],!e||!e.href){const e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return vr(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n)return;if(n[3]&&r.match(/[\p{L}\p{N}]/u))return;const o=n[1]||n[2]||"";if(!o||o&&(""===r||this.rules.inline.punctuation.exec(r))){const r=n[0].length-1;let o,i,s=r,a=0;const l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(o=n[1]||n[2]||n[3]||n[4]||n[5]||n[6],!o)continue;if(i=o.length,n[3]||n[4]){s+=i;continue}if((n[5]||n[6])&&r%3&&!((r+i)%3)){a+=i;continue}if(s-=i,s>0)continue;if(i=Math.min(i,i+s+a),Math.min(r,i)%2){const t=e.slice(1,r+n.index+i);return{type:"em",raw:e.slice(0,r+n.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}const t=e.slice(2,r+n.index+i-1);return{type:"strong",raw:e.slice(0,r+n.index+i+1),text:t,tokens:this.lexer.inlineTokens(t,[])}}}}codespan(e){const t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," ");const r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return r&&n&&(e=e.substring(1,e.length-1)),e=rr(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){const t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){const t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2],[])}}autolink(e,t){const r=this.rules.inline.autolink.exec(e);if(r){let e,n;return"@"===r[2]?(e=rr(this.options.mangle?t(r[1]):r[1]),n="mailto:"+e):(e=rr(r[1]),n=e),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])e=rr(this.options.mangle?t(r[0]):r[0]),n="mailto:"+e;else{let t;do{t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0]}while(t!==r[0]);e=rr(r[0]),n="www."===r[1]?"http://"+e:e}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){const r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):rr(r[0]):r[0]:rr(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}const kr={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:mr,lheading:/^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};kr.def=sr(kr.def).replace("label",kr._label).replace("title",kr._title).getRegex(),kr.bullet=/(?:[*+-]|\d{1,9}[.)])/,kr.listItemStart=sr(/^( *)(bull) */).replace("bull",kr.bullet).getRegex(),kr.list=sr(kr.list).replace(/bull/g,kr.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+kr.def.source+")").getRegex(),kr._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",kr._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,kr.html=sr(kr.html,"i").replace("comment",kr._comment).replace("tag",kr._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),kr.paragraph=sr(kr._paragraph).replace("hr",kr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kr._tag).getRegex(),kr.blockquote=sr(kr.blockquote).replace("paragraph",kr.paragraph).getRegex(),kr.normal=fr({},kr),kr.gfm=fr({},kr.normal,{table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"}),kr.gfm.table=sr(kr.gfm.table).replace("hr",kr.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kr._tag).getRegex(),kr.gfm.paragraph=sr(kr._paragraph).replace("hr",kr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",kr.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",kr._tag).getRegex(),kr.pedantic=fr({},kr.normal,{html:sr("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",kr._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:mr,paragraph:sr(kr.normal._paragraph).replace("hr",kr.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",kr.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()});const Or={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:mr,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,rDelimUnd:/^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:mr,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function Er(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function Sr(e){let t,r,n="";const o=e.length;for(t=0;t<o;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}Or._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",Or.punctuation=sr(Or.punctuation).replace(/punctuation/g,Or._punctuation).getRegex(),Or.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,Or.escapedEmSt=/\\\*|\\_/g,Or._comment=sr(kr._comment).replace("(?:--\x3e|$)","--\x3e").getRegex(),Or.emStrong.lDelim=sr(Or.emStrong.lDelim).replace(/punct/g,Or._punctuation).getRegex(),Or.emStrong.rDelimAst=sr(Or.emStrong.rDelimAst,"g").replace(/punct/g,Or._punctuation).getRegex(),Or.emStrong.rDelimUnd=sr(Or.emStrong.rDelimUnd,"g").replace(/punct/g,Or._punctuation).getRegex(),Or._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,Or._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,Or._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,Or.autolink=sr(Or.autolink).replace("scheme",Or._scheme).replace("email",Or._email).getRegex(),Or._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,Or.tag=sr(Or.tag).replace("comment",Or._comment).replace("attribute",Or._attribute).getRegex(),Or._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Or._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,Or._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,Or.link=sr(Or.link).replace("label",Or._label).replace("href",Or._href).replace("title",Or._title).getRegex(),Or.reflink=sr(Or.reflink).replace("label",Or._label).replace("ref",kr._label).getRegex(),Or.nolink=sr(Or.nolink).replace("ref",kr._label).getRegex(),Or.reflinkSearch=sr(Or.reflinkSearch,"g").replace("reflink",Or.reflink).replace("nolink",Or.nolink).getRegex(),Or.normal=fr({},Or),Or.pedantic=fr({},Or.normal,{strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:sr(/^!?\[(label)\]\((.*?)\)/).replace("label",Or._label).getRegex(),reflink:sr(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Or._label).getRegex()}),Or.gfm=fr({},Or.normal,{escape:sr(Or.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/}),Or.gfm.url=sr(Or.gfm.url,"i").replace("email",Or.gfm._extended_email).getRegex(),Or.breaks=fr({},Or.gfm,{br:sr(Or.br).replace("{2,}","*").getRegex(),text:sr(Or.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()});class $r{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Yt,this.options.tokenizer=this.options.tokenizer||new wr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const t={block:kr.normal,inline:Or.normal};this.options.pedantic?(t.block=kr.pedantic,t.inline=Or.pedantic):this.options.gfm&&(t.block=kr.gfm,this.options.breaks?t.inline=Or.breaks:t.inline=Or.gfm),this.tokenizer.rules=t}static get rules(){return{block:kr,inline:Or}}static lex(e,t){return new $r(t).lex(e)}static lexInline(e,t){return new $r(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,o,i;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,((e,t,r)=>t+"    ".repeat(r.length)));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?t.push(r):(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),n=t[t.length-1],!n||"paragraph"!==n.type&&"text"!==n.type?this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title}):(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text);else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(o=e,this.options.extensions&&this.options.extensions.startBlock){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startBlock.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(this.state.top&&(r=this.tokenizer.paragraph(o)))n=t[t.length-1],i&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),i=o.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}return this.state.top=!0,t}inline(e,t){this.inlineQueue.push({src:e,tokens:t})}inlineTokens(e,t=[]){let r,n,o,i,s,a,l=e;if(this.tokens.links){const e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(i=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(i[0].slice(i[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,i.index)+"["+xr("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(i=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,i.index)+"["+xr("a",i[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(i=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,i.index)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);for(;e;)if(s||(a=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some((n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))))if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),n=t[t.length-1],n&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,a))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,Sr))e=e.substring(r.raw.length),t.push(r);else if(this.state.inLink||!(r=this.tokenizer.url(e,Sr))){if(o=e,this.options.extensions&&this.options.extensions.startInline){let t=1/0;const r=e.slice(1);let n;this.options.extensions.startInline.forEach((function(e){n=e.call({lexer:this},r),"number"==typeof n&&n>=0&&(t=Math.min(t,n))})),t<1/0&&t>=0&&(o=e.substring(0,t+1))}if(r=this.tokenizer.inlineText(o,Er))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),s=!0,n=t[t.length-1],n&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){const t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw new Error(t)}}else e=e.substring(r.raw.length),t.push(r);return t}}class Rr{constructor(e){this.options=e||Yt}code(e,t,r){const n=(t||"").match(/\S*/)[0];if(this.options.highlight){const t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+rr(n,!0)+'">'+(r?e:rr(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:rr(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>\n${e}</blockquote>\n`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>\n`:`<h${t}>${e}</h${t}>\n`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){const n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>\n`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>\n`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>\n${e}</tr>\n`}tablecell(e,t){const r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>\n`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=cr(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+rr(e)+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>",n}image(e,t,r){if(null===(e=cr(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">",n}text(e){return e}}class jr{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class Cr{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do{n++,r=e+"-"+n}while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){const r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class Pr{constructor(e){this.options=e||Yt,this.options.renderer=this.options.renderer||new Rr,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new jr,this.slugger=new Cr}static parse(e,t){return new Pr(t).parse(e)}static parseInline(e,t){return new Pr(t).parseInline(e)}parse(e,t=!0){let r,n,o,i,s,a,l,c,p,u,d,h,m,f,g,y,b,x,v,w="";const k=e.length;for(r=0;r<k;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(v=this.options.extensions.renderers[u.type].call({parser:this},u),!1!==v||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=v||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,or(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",i=u.header.length,n=0;n<i;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",i=u.rows.length,n=0;n<i;n++){for(a=u.rows[n],l="",s=a.length,o=0;o<s;o++)l+=this.renderer.tablecell(this.parseInline(a[o].tokens),{header:!1,align:u.align[o]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,m=u.loose,i=u.items.length,p="",n=0;n<i;n++)g=u.items[n],y=g.checked,b=g.task,f="",g.task&&(x=this.renderer.checkbox(y),m?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=x+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=x+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(g.tokens,m),p+=this.renderer.listitem(f,b,y);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<k&&"text"===e[r+1].type;)u=e[++r],p+="\n"+(u.tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{const e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,o,i="";const s=e.length;for(r=0;r<s;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(o=this.options.extensions.renderers[n.type].call({parser:this},n),!1!==o||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))i+=o||"";else switch(n.type){case"escape":case"text":i+=t.text(n.text);break;case"html":i+=t.html(n.text);break;case"link":i+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":i+=t.image(n.href,n.title,n.text);break;case"strong":i+=t.strong(this.parseInline(n.tokens,t));break;case"em":i+=t.em(this.parseInline(n.tokens,t));break;case"codespan":i+=t.codespan(n.text);break;case"br":i+=t.br();break;case"del":i+=t.del(this.parseInline(n.tokens,t));break;default:{const e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw new Error(e)}}return i}}function Ar(e,t,r){if(null==e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if("function"==typeof t&&(r=t,t=null),br(t=fr({},Ar.defaults,t||{})),r){const n=t.highlight;let o;try{o=$r.lex(e,t)}catch(e){return r(e)}const i=function(e){let i;if(!e)try{t.walkTokens&&Ar.walkTokens(o,t.walkTokens),i=Pr.parse(o,t)}catch(t){e=t}return t.highlight=n,e?r(e):r(null,i)};if(!n||n.length<3)return i();if(delete t.highlight,!o.length)return i();let s=0;return Ar.walkTokens(o,(function(e){"code"===e.type&&(s++,setTimeout((()=>{n(e.text,e.lang,(function(t,r){if(t)return i(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),s--,0===s&&i()}))}),0))})),void(0===s&&i())}try{const r=$r.lex(e,t);return t.walkTokens&&Ar.walkTokens(r,t.walkTokens),Pr.parse(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+rr(e.message+"",!0)+"</pre>";throw e}}Ar.options=Ar.setOptions=function(e){var t;return fr(Ar.defaults,e),t=Ar.defaults,Yt=t,Ar},Ar.getDefaults=function(){return{baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartLists:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},Ar.defaults=Yt,Ar.use=function(...e){const t=fr({},...e),r=Ar.defaults.extensions||{renderers:{},childTokens:{}};let n;e.forEach((e=>{if(e.extensions&&(n=!0,e.extensions.forEach((e=>{if(!e.name)throw new Error("extension name required");if(e.renderer){const t=r.renderers?r.renderers[e.name]:null;r.renderers[e.name]=t?function(...r){let n=e.renderer.apply(this,r);return!1===n&&(n=t.apply(this,r)),n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw new Error("extension level must be 'block' or 'inline'");r[e.level]?r[e.level].unshift(e.tokenizer):r[e.level]=[e.tokenizer],e.start&&("block"===e.level?r.startBlock?r.startBlock.push(e.start):r.startBlock=[e.start]:"inline"===e.level&&(r.startInline?r.startInline.push(e.start):r.startInline=[e.start]))}e.childTokens&&(r.childTokens[e.name]=e.childTokens)}))),e.renderer){const r=Ar.defaults.renderer||new Rr;for(const t in e.renderer){const n=r[t];r[t]=(...o)=>{let i=e.renderer[t].apply(r,o);return!1===i&&(i=n.apply(r,o)),i}}t.renderer=r}if(e.tokenizer){const r=Ar.defaults.tokenizer||new wr;for(const t in e.tokenizer){const n=r[t];r[t]=(...o)=>{let i=e.tokenizer[t].apply(r,o);return!1===i&&(i=n.apply(r,o)),i}}t.tokenizer=r}if(e.walkTokens){const r=Ar.defaults.walkTokens;t.walkTokens=function(t){e.walkTokens.call(this,t),r&&r.call(this,t)}}n&&(t.extensions=r),Ar.setOptions(t)}))},Ar.walkTokens=function(e,t){for(const r of e)switch(t.call(Ar,r),r.type){case"table":for(const e of r.header)Ar.walkTokens(e.tokens,t);for(const e of r.rows)for(const r of e)Ar.walkTokens(r.tokens,t);break;case"list":Ar.walkTokens(r.items,t);break;default:Ar.defaults.extensions&&Ar.defaults.extensions.childTokens&&Ar.defaults.extensions.childTokens[r.type]?Ar.defaults.extensions.childTokens[r.type].forEach((function(e){Ar.walkTokens(r[e],t)})):r.tokens&&Ar.walkTokens(r.tokens,t)}},Ar.parseInline=function(e,t){if(null==e)throw new Error("marked.parseInline(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked.parseInline(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");br(t=fr({},Ar.defaults,t||{}));try{const r=$r.lexInline(e,t);return t.walkTokens&&Ar.walkTokens(r,t.walkTokens),Pr.parseInline(r,t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",t.silent)return"<p>An error occurred:</p><pre>"+rr(e.message+"",!0)+"</pre>";throw e}},Ar.Parser=Pr,Ar.parser=Pr.parse,Ar.Renderer=Rr,Ar.TextRenderer=jr,Ar.Lexer=$r,Ar.lexer=$r.lex,Ar.Tokenizer=wr,Ar.Slugger=Cr,Ar.parse=Ar,Ar.options,Ar.setOptions,Ar.use,Ar.walkTokens,Ar.parseInline,Pr.parse,$r.lex;var Ir=Object.defineProperty,Tr=Object.defineProperties,_r=Object.getOwnPropertyDescriptors,Lr=Object.getOwnPropertySymbols,Dr=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable,Nr=(e,t,r)=>t in e?Ir(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Mr=(e,t)=>{for(var r in t||(t={}))Dr.call(t,r)&&Nr(e,r,t[r]);if(Lr)for(var r of Lr(t))zr.call(t,r)&&Nr(e,r,t[r]);return e};const qr=new Ar.Renderer;Ar.setOptions({renderer:qr,highlight:(e,t)=>$t(e,t)});const Fr="^ {0,3}\x3c!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?--\x3e\\s*$",Br="(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))",Qr="(?:"+Fr+"|"+Br+")";function Ur(e){return`\x3c!-- ReDoc-Inject: <${e}> --\x3e`}class Wr{constructor(e,t){this.options=e,this.parentId=t,this.headings=[],this.headingRule=(e,t,r,n)=>(1===t?this.currentTopHeading=this.saveHeading(e,t):2===t&&this.saveHeading(e,t,this.currentTopHeading&&this.currentTopHeading.items,this.currentTopHeading&&this.currentTopHeading.id),this.originalHeadingRule(e,t,r,n)),this.parentId=t,this.parser=new Ar.Parser,this.headingEnhanceRenderer=new Ar.Renderer,this.originalHeadingRule=this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer),this.headingEnhanceRenderer.heading=this.headingRule}static containsComponent(e,t){return new RegExp(Qr.replace(/{component}/g,t),"gmi").test(e)}static getTextBeforeHading(e,t){const r=e.search(new RegExp(`^##?\\s+${t}`,"m"));return r>-1?e.substring(0,r):e}saveHeading(e,t,r=this.headings,n){e=A(e);const o={id:n?`${n}/${O(e)}`:`${this.parentId||"section"}/${O(e)}`,name:e,level:t,items:[]};return r.push(o),o}flattenHeadings(e){if(void 0===e)return[];const t=[];for(const r of e)t.push(r),t.push(...this.flattenHeadings(r.items));return t}attachHeadingsDescriptions(e){const t=e=>new RegExp(`##?\\s+${e.name.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}s*(\n|\r\n|$|s*)`),r=this.flattenHeadings(this.headings);if(r.length<1)return;let n=r[0],o=t(n),i=e.search(o);for(let s=1;s<r.length;s++){const a=r[s],l=t(a),c=e.substr(i+1).search(l)+i+1;n.description=e.substring(i,c).replace(o,"").trim(),n=a,o=l,i=c}n.description=e.substring(i).replace(o,"").trim()}renderMd(e,t=!1){const r=t?{renderer:this.headingEnhanceRenderer}:void 0;return Ar(e.toString(),r)}extractHeadings(e){this.renderMd(e,!0),this.attachHeadingsDescriptions(e);const t=this.headings;return this.headings=[],t}renderMdWithComponents(e){const t=this.options&&this.options.allowedMdComponents;if(!t||0===Object.keys(t).length)return[this.renderMd(e)];const r=Object.keys(t).join("|"),n=new RegExp(Qr.replace(/{component}/g,r),"mig"),o=[],i=[];let s=n.exec(e),a=0;for(;s;){o.push(e.substring(a,s.index)),a=n.lastIndex;const r=t[s[1]||s[2]||s[5]],p=s[3]||s[6],u=s[4];r&&i.push({component:r.component,propsSelector:r.propsSelector,props:(l=Mr(Mr({},Vr(p)),r.props),c={children:u},Tr(l,_r(c)))}),s=n.exec(e)}var l,c;o.push(e.substring(a));const p=[];for(let e=0;e<o.length;e++){const t=o[e];t&&p.push(this.renderMd(t)),i[e]&&p.push(i[e])}return p}}function Vr(e){if(!e)return{};const t=/([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim,r={};let n;for(;null!==(n=t.exec(e));)if(n[3])r[n[1]]=n[3];else if(n[2]){let e;try{e=JSON.parse(n[2])}catch(e){}r[n[1]]=e}return r}class Hr{constructor(e,t=new H({})){this.parser=e,this.options=t,Object.assign(this,e.spec.info),this.description=e.spec.info.description||"",this.summary=e.spec.info.summary||"";const r=this.description.search(/^\s*##?\s+/m);r>-1&&(this.description=this.description.substring(0,r)),this.downloadLink=this.getDownloadLink(),this.downloadFileName=this.getDownloadFileName()}getDownloadLink(){if(this.options.downloadDefinitionUrl)return this.options.downloadDefinitionUrl;if(this.parser.specUrl)return this.parser.specUrl;if(l&&window.Blob&&window.URL&&window.URL.createObjectURL){const e=new Blob([JSON.stringify(this.parser.spec,null,2)],{type:"application/json"});return window.URL.createObjectURL(e)}}getDownloadFileName(){return this.parser.specUrl||this.options.downloadDefinitionUrl?this.options.downloadFileName:this.options.downloadFileName||"openapi.json"}}var Jr=Object.defineProperty,Yr=Object.defineProperties,Zr=Object.getOwnPropertyDescriptors,Gr=Object.getOwnPropertySymbols,Xr=Object.prototype.hasOwnProperty,Kr=Object.prototype.propertyIsEnumerable,en=(e,t,r)=>t in e?Jr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class tn{constructor(e,t){const r=t.spec.components&&t.spec.components.securitySchemes||{};this.schemes=Object.keys(e||{}).map((n=>{const{resolved:o}=t.deref(r[n]),i=e[n]||[];if(!o)return void console.warn(`Non existing security scheme referenced: ${n}. Skipping`);const s=o["x-displayName"]||n;return a=((e,t)=>{for(var r in t||(t={}))Xr.call(t,r)&&en(e,r,t[r]);if(Gr)for(var r of Gr(t))Kr.call(t,r)&&en(e,r,t[r]);return e})({},o),Yr(a,Zr({id:n,sectionId:n,displayName:s,scopes:i}));var a})).filter((e=>void 0!==e))}}var rn=Object.defineProperty,nn=Object.defineProperties,on=Object.getOwnPropertyDescriptor,sn=Object.getOwnPropertyDescriptors,an=Object.getOwnPropertySymbols,ln=Object.prototype.hasOwnProperty,cn=Object.prototype.propertyIsEnumerable,pn=(e,t,r)=>t in e?rn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,un=(e,t)=>{for(var r in t||(t={}))ln.call(t,r)&&pn(e,r,t[r]);if(an)for(var r of an(t))cn.call(t,r)&&pn(e,r,t[r]);return e},dn=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?on(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&rn(t,r,i),i};class hn{constructor(e,t,r,n,o){this.expanded=!1,this.operations=[],(0,fe.makeObservable)(this),this.name=t;const{resolved:i}=e.deref(r);for(const r of Object.keys(i)){const l=i[r],c=Object.keys(l).filter(Fe);for(const i of c){const c=l[i],p=new bo(e,(s=un({},c),a={pathName:r,pointer:Se.compile([n,t,r,i]),httpVerb:i,pathParameters:l.parameters||[],pathServers:l.servers},nn(s,sn(a))),void 0,o,!0);this.operations.push(p)}}var s,a}toggle(){this.expanded=!this.expanded}}dn([fe.observable],hn.prototype,"expanded",2),dn([fe.action],hn.prototype,"toggle",1);var mn=Object.defineProperty,fn=Object.defineProperties,gn=Object.getOwnPropertyDescriptors,yn=Object.getOwnPropertySymbols,bn=Object.prototype.hasOwnProperty,xn=Object.prototype.propertyIsEnumerable,vn=(e,t,r)=>t in e?mn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,wn=(e,t)=>{for(var r in t||(t={}))bn.call(t,r)&&vn(e,r,t[r]);if(yn)for(var r of yn(t))xn.call(t,r)&&vn(e,r,t[r]);return e},kn=(e,t)=>fn(e,gn(t)),On=(e,t)=>{var r={};for(var n in e)bn.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&yn)for(var n of yn(e))t.indexOf(n)<0&&xn.call(e,n)&&(r[n]=e[n]);return r};function En(e,t){return t&&e[e.length-1]!==t?[...e,t]:e}function Sn(e,t){return t?e.concat(t):e}class $n{constructor(e,t,r=new H({})){this.options=r,this.allowMergeRefs=!1,this.byRef=e=>{let t;if(this.spec){"#"!==e.charAt(0)&&(e="#"+e),e=decodeURIComponent(e);try{t=Se.get(this.spec,e)}catch(e){}return t||{}}},this.validate(e),this.spec=e,this.allowMergeRefs=e.openapi.startsWith("3.1");const n=l?window.location.href:"";"string"==typeof t&&(this.specUrl=n?new URL(t,n).href:t)}validate(e){if(void 0===e.openapi)throw new Error("Document must be valid OpenAPI 3.0.0 definition")}isRef(e){return!!e&&void 0!==e.$ref&&null!==e.$ref}deref(e,t=[],r=!1){const n=null==e?void 0:e["x-refsStack"];if(t=Sn(t,n),this.isRef(e)){const n=ot(e.$ref);if(n&&this.options.ignoreNamedSchemas.has(n))return{resolved:{type:"object",title:n},refsStack:t};let o=this.byRef(e.$ref);if(!o)throw new Error(`Failed to resolve $ref "${e.$ref}"`);let i=t;if(t.includes(e.$ref)||t.length>999)o=Object.assign({},o,{"x-circular-ref":!0});else if(this.isRef(o)){const e=this.deref(o,t,r);i=e.refsStack,o=e.resolved}return i=En(t,e.$ref),o=this.allowMergeRefs?this.mergeRefs(e,o,r):o,{resolved:o,refsStack:i}}return{resolved:e,refsStack:Sn(t,n)}}mergeRefs(e,t,r){const n=e,{$ref:o}=n,i=On(n,["$ref"]),s=Object.keys(i);if(0===s.length)return t;if(r&&s.some((e=>!["description","title","externalDocs","x-refsStack","x-parentRefs","readOnly","writeOnly"].includes(e)))){const e=i,{description:r,title:n,readOnly:o,writeOnly:s}=e;return{allOf:[{description:r,title:n,readOnly:o,writeOnly:s},t,On(e,["description","title","readOnly","writeOnly"])]}}return wn(wn({},t),i)}mergeAllOf(e,t,r){var n;if(e["x-circular-ref"])return e;if(void 0===(e=this.hoistOneOfs(e,r)).allOf)return e;let o=kn(wn({},e),{"x-parentRefs":[],allOf:void 0,title:e.title||ot(t)});void 0!==o.properties&&"object"==typeof o.properties&&(o.properties=wn({},o.properties)),void 0!==o.items&&"object"==typeof o.items&&(o.items=wn({},o.items));const i=function(e,t){const r=new Set;return e.filter((e=>{const t=e.$ref;return!t||t&&!r.has(t)&&r.add(t)}))}(e.allOf.map((e=>{var t;const{resolved:n,refsStack:i}=this.deref(e,r,!0),s=e.$ref||void 0,a=this.mergeAllOf(n,s,i);if(!a["x-circular-ref"]||!a.allOf)return s&&(null==(t=o["x-parentRefs"])||t.push(...a["x-parentRefs"]||[],s)),{$ref:s,refsStack:En(i,s),schema:a}})).filter((e=>void 0!==e)));for(const{schema:e,refsStack:r}of i){const i=e,{type:s,enum:a,properties:l,items:c,required:p,title:u,description:d,readOnly:h,writeOnly:m,oneOf:f,anyOf:g,"x-circular-ref":y}=i,b=On(i,["type","enum","properties","items","required","title","description","readOnly","writeOnly","oneOf","anyOf","x-circular-ref"]);if(o.type===s||void 0===o.type||void 0===s||this.options.ignoreIncompatibleTypes||console.warn(`Incompatible types in allOf at "${t}": "${o.type}" and "${s}"`),void 0!==s&&(Array.isArray(s)&&Array.isArray(o.type)?o.type=[...s,...o.type]:o.type=s),void 0!==a&&(Array.isArray(a)&&Array.isArray(o.enum)?o.enum=Array.from(new Set([...a,...o.enum])):o.enum=a),void 0!==l&&"object"==typeof l){o.properties=o.properties||{};for(const e in l){const i=Sn(r,null==(n=l[e])?void 0:n["x-refsStack"]);if(o.properties[e]){if(!y){const r=this.mergeAllOf({allOf:[o.properties[e],kn(wn({},l[e]),{"x-refsStack":i})],"x-refsStack":i},t+"/properties/"+e,i);o.properties[e]=r}}else o.properties[e]=kn(wn({},l[e]),{"x-refsStack":i})}}if(void 0!==c&&!y){const n="boolean"==typeof o.items?{}:Object.assign({},o.items),i="boolean"==typeof e.items?{}:Object.assign({},e.items);o.items=this.mergeAllOf({allOf:[n,i]},t+"/items",r)}void 0!==f&&(o.oneOf=f),void 0!==g&&(o.anyOf=g),void 0!==p&&(o.required=[...o.required||[],...p]),o=wn(kn(wn({},o),{title:o.title||u,description:o.description||d,readOnly:void 0!==o.readOnly?o.readOnly:h,writeOnly:void 0!==o.writeOnly?o.writeOnly:m,"x-circular-ref":o["x-circular-ref"]||y}),b)}return o}findDerived(e){const t={},r=this.spec.components&&this.spec.components.schemas||{};for(const n in r){const{resolved:o}=this.deref(r[n]);void 0!==o.allOf&&o.allOf.find((t=>void 0!==t.$ref&&e.indexOf(t.$ref)>-1))&&(t["#/components/schemas/"+n]=[o["x-discriminator-value"]||n])}return t}hoistOneOfs(e,t){if(void 0===e.allOf)return e;const r=e.allOf;for(let e=0;e<r.length;e++){const n=r[e];if(Array.isArray(n.oneOf)){const o=r.slice(0,e),i=r.slice(e+1);return{oneOf:n.oneOf.map((e=>({allOf:[...o,e,...i],"x-refsStack":t})))}}}return e}}var Rn=Object.defineProperty,jn=Object.defineProperties,Cn=Object.getOwnPropertyDescriptor,Pn=Object.getOwnPropertyDescriptors,An=Object.getOwnPropertySymbols,In=Object.prototype.hasOwnProperty,Tn=Object.prototype.propertyIsEnumerable,_n=(e,t,r)=>t in e?Rn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ln=(e,t)=>{for(var r in t||(t={}))In.call(t,r)&&_n(e,r,t[r]);if(An)for(var r of An(t))Tn.call(t,r)&&_n(e,r,t[r]);return e},Dn=(e,t)=>jn(e,Pn(t)),zn=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?Cn(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&Rn(t,r,i),i};const Nn=class{constructor(e,t,r,n,o=!1,i=[]){this.options=n,this.refsStack=i,this.typePrefix="",this.isCircular=!1,this.activeOneOf=0,(0,fe.makeObservable)(this),this.pointer=t.$ref||r||"";const{resolved:s,refsStack:a}=e.deref(t,i,!0);this.refsStack=En(a,this.pointer),this.rawSchema=s,this.schema=e.mergeAllOf(this.rawSchema,this.pointer,this.refsStack),this.init(e,o),n.showExtensions&&(this.extensions=wt(this.schema,n.showExtensions))}activateOneOf(e){this.activeOneOf=e}hasType(e){return this.type===e||I(this.type)&&this.type.includes(e)}init(e,t){var r,n,o,i,s,a,l,c;const p=this.schema;if(this.isCircular=!!p["x-circular-ref"],this.title=p.title||nt(this.pointer)&&Se.baseName(this.pointer)||"",this.description=p.description||"",this.type=p.type||Ue(p),this.format=p.format,this.enum=p.enum||[],this.example=p.example,this.examples=p.examples,this.deprecated=!!p.deprecated,this.pattern=p.pattern,this.externalDocs=p.externalDocs,this.constraints=at(p),this.displayFormat=this.format,this.isPrimitive=We(p,this.type),this.default=p.default,this.readOnly=!!p.readOnly,this.writeOnly=!!p.writeOnly,this.const=p.const||"",this.contentEncoding=p.contentEncoding,this.contentMediaType=p.contentMediaType,this.minItems=p.minItems,this.maxItems=p.maxItems,(p.nullable||p["x-nullable"])&&(I(this.type)&&!this.type.some((e=>null===e||"null"===e))?this.type=[...this.type,"null"]:I(this.type)||null===this.type&&"null"===this.type||(this.type=[this.type,"null"])),this.displayType=I(this.type)?this.type.map((e=>null===e?"null":e)).join(" or "):this.type,!this.isCircular)if(p.if&&p.then||p.if&&p.else)this.initConditionalOperators(p,e);else if(t||void 0===Fn(p)){if(t&&I(p.oneOf)&&p.oneOf.find((e=>e.$ref===this.pointer))&&delete p.oneOf,void 0!==p.oneOf)return this.initOneOf(p.oneOf,e),this.oneOfType="One of",void(void 0!==p.anyOf&&console.warn(`oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`));if(void 0!==p.anyOf)return this.initOneOf(p.anyOf,e),void(this.oneOfType="Any of");if(this.hasType("object"))this.fields=qn(e,p,this.pointer,this.options,this.refsStack);else if(this.hasType("array")&&(I(p.items)||I(p.prefixItems)?this.fields=qn(e,p,this.pointer,this.options,this.refsStack):p.items&&(this.items=new Nn(e,p.items,this.pointer+"/items",this.options,!1,this.refsStack)),this.displayType=p.prefixItems||I(p.items)?"items":kt((null==(r=this.items)?void 0:r.displayType)||this.displayType),this.displayFormat=(null==(n=this.items)?void 0:n.format)||"",this.typePrefix=(null==(o=this.items)?void 0:o.typePrefix)||""+L("arrayOf"),this.title=this.title||(null==(i=this.items)?void 0:i.title)||"",this.isPrimitive=void 0!==(null==(s=this.items)?void 0:s.isPrimitive)?null==(a=this.items)?void 0:a.isPrimitive:this.isPrimitive,void 0===this.example&&void 0!==(null==(l=this.items)?void 0:l.example)&&(this.example=[this.items.example]),(null==(c=this.items)?void 0:c.isPrimitive)&&(this.enum=this.items.enum),I(this.type))){const e=this.type.filter((e=>"array"!==e));e.length&&(this.displayType+=` or ${e.join(" or ")}`)}this.enum.length&&this.options.sortEnumValuesAlphabetically&&this.enum.sort()}else this.initDiscriminator(p,e)}initOneOf(e,t){if(this.oneOf=e.map(((e,r)=>{const{resolved:n,refsStack:o}=t.deref(e,this.refsStack,!0),i=t.mergeAllOf(n,this.pointer+"/oneOf/"+r,o),s=nt(e.$ref)&&!i.title?Se.baseName(e.$ref):`${i.title||""}${i.const&&JSON.stringify(i.const)||""}`;return new Nn(t,Dn(Ln({},i),{title:s,allOf:[Dn(Ln({},this.schema),{oneOf:void 0,anyOf:void 0})],discriminator:n.allOf?void 0:i.discriminator}),e.$ref||this.pointer+"/oneOf/"+r,this.options,!1,o)})),this.options.simpleOneOfTypeLabel){const e=function(e){const t=new Set;return function e(r){for(const n of r.oneOf||[])n.oneOf?e(n):n.type&&t.add(n.type)}(e),Array.from(t.values())}(this);this.displayType=e.join(" or ")}else this.displayType=this.oneOf.map((e=>{let t=e.typePrefix+(e.title?`${e.title} (${e.displayType})`:e.displayType);return t.indexOf(" or ")>-1&&(t=`(${t})`),t})).join(" or ")}initDiscriminator(e,t){const r=Fn(e);this.discriminatorProp=r.propertyName;const n=t.findDerived([...this.schema["x-parentRefs"]||[],this.pointer]);if(e.oneOf)for(const t of e.oneOf){if(void 0===t.$ref)continue;const e=Se.baseName(t.$ref);n[t.$ref]=e}const o=r.mapping||{};let i=r["x-explicitMappingOnly"]||!1;0===Object.keys(o).length&&(i=!1);const s={};for(const e in o){const t=o[e];I(s[t])?s[t].push(e):s[t]=[e]}const a=Ln(i?{}:Ln({},n),s);let l=[];for(const e of Object.keys(a)){const t=a[e];if(I(t))for(const r of t)l.push({$ref:e,name:r});else l.push({$ref:e,name:t})}const c=Object.keys(o);0!==c.length&&(l=l.sort(((e,t)=>{const r=c.indexOf(e.name),n=c.indexOf(t.name);return r<0&&n<0?e.name.localeCompare(t.name):r<0?1:n<0?-1:r-n}))),this.oneOf=l.map((({$ref:e,name:r})=>{const n=new Nn(t,{$ref:e},e,this.options,!0,this.refsStack.slice(0,-1));return n.title=r,n}))}initConditionalOperators(e,t){const r=e,{if:n,else:o={},then:i={}}=r,s=((e,t)=>{var r={};for(var n in e)In.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&An)for(var n of An(e))t.indexOf(n)<0&&Tn.call(e,n)&&(r[n]=e[n]);return r})(r,["if","else","then"]),a=[{allOf:[s,i,n],title:n&&n["x-displayName"]||(null==n?void 0:n.title)||"case 1"},{allOf:[s,o],title:o&&o["x-displayName"]||(null==o?void 0:o.title)||"case 2"}];this.oneOf=a.map(((e,r)=>new Nn(t,Ln({},e),this.pointer+"/oneOf/"+r,this.options,!1,this.refsStack))),this.oneOfType="One of"}};let Mn=Nn;function qn(e,t,r,n,o){const i=t.properties||t.prefixItems||t.items||{},s=t.patternProperties||{},a=t.additionalProperties||t.unevaluatedProperties,l=t.prefixItems?t.items:t.additionalItems,c=t.default;let p=Object.keys(i||[]).map((s=>{let a=i[s];a||(console.warn(`Field "${s}" is invalid, skipping.\n Field must be an object but got ${typeof a} at "${r}"`),a={});const l=void 0!==t.required&&t.required.indexOf(s)>-1;return new Jn(e,{name:t.properties?s:`[${s}]`,required:l,schema:Dn(Ln({},a),{default:void 0===a.default&&c?c[s]:a.default})},r+"/properties/"+s,n,o)}));return n.sortPropsAlphabetically&&(p=ct(p,"name")),n.requiredPropsFirst&&(p=lt(p,n.sortPropsAlphabetically?void 0:t.required)),p.push(...Object.keys(s).map((t=>{let i=s[t];return i||(console.warn(`Field "${t}" is invalid, skipping.\n Field must be an object but got ${typeof i} at "${r}"`),i={}),new Jn(e,{name:t,required:!1,schema:i,kind:"patternProperties"},`${r}/patternProperties/${t}`,n,o)}))),"object"!=typeof a&&!0!==a||p.push(new Jn(e,{name:("object"==typeof a&&a["x-additionalPropertiesName"]||"property name").concat("*"),required:!1,schema:!0===a?{}:a,kind:"additionalProperties"},r+"/additionalProperties",n,o)),p.push(...function({parser:e,schema:t=!1,fieldsCount:r,$ref:n,options:o,refsStack:i}){return T(t)?t?[new Jn(e,{name:`[${r}...]`,schema:{}},`${n}/additionalItems`,o,i)]:[]:I(t)?[...t.map(((t,s)=>new Jn(e,{name:`[${r+s}]`,schema:t},`${n}/additionalItems`,o,i)))]:w(t)?[new Jn(e,{name:`[${r}...]`,schema:t},`${n}/additionalItems`,o,i)]:[]}({parser:e,schema:l,fieldsCount:p.length,$ref:r,options:n,refsStack:o})),p}function Fn(e){return e.discriminator||e["x-discriminator"]}zn([fe.observable],Mn.prototype,"activeOneOf",2),zn([fe.action],Mn.prototype,"activateOneOf",1);const Bn={};class Qn{constructor(e,t,r,n){this.mime=r;const{resolved:o}=e.deref(t);this.value=o.value,this.summary=o.summary,this.description=o.description,o.externalValue&&(this.externalValueUrl=new URL(o.externalValue,e.specUrl).href),He(r)&&this.value&&"object"==typeof this.value&&(this.value=Ge(this.value,n))}getExternalValue(e){return this.externalValueUrl?(this.externalValueUrl in Bn||(Bn[this.externalValueUrl]=fetch(this.externalValueUrl).then((t=>t.text().then((r=>{if(!t.ok)return Promise.reject(new Error(r));if(!Ve(e))return r;try{return JSON.parse(r)}catch(e){return r}}))))),Bn[this.externalValueUrl]):Promise.resolve(void 0)}}var Un=Object.defineProperty,Wn=Object.getOwnPropertyDescriptor,Vn=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?Wn(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&Un(t,r,i),i};const Hn={path:{style:"simple",explode:!1},query:{style:"form",explode:!0},header:{style:"simple",explode:!1},cookie:{style:"form",explode:!0}};class Jn{constructor(e,t,r,n,o){var i,s,a,l,c;this.expanded=void 0,(0,fe.makeObservable)(this);const{resolved:p}=e.deref(t);this.kind=t.kind||"field",this.name=t.name||p.name,this.in=p.in,this.required=!!p.required;let u=p.schema,d="";if(!u&&p.in&&p.content&&(d=Object.keys(p.content)[0],u=p.content[d]&&p.content[d].schema),this.schema=new Mn(e,u||{},r,n,!1,o),this.description=void 0===p.description?this.schema.description||"":p.description,this.example=p.example||this.schema.example,void 0!==p.examples||void 0!==this.schema.examples){const t=p.examples||this.schema.examples;this.examples=I(t)?t:f(t,((t,r)=>new Qn(e,t,r,p.encoding)))}d?this.serializationMime=d:p.style?this.style=p.style:this.in&&(this.style=null!=(s=null==(i=Hn[this.in])?void 0:i.style)?s:"form"),void 0===p.explode&&this.in?this.explode=null==(l=null==(a=Hn[this.in])?void 0:a.explode)||l:this.explode=!!p.explode,this.deprecated=void 0===p.deprecated?!!this.schema.deprecated:p.deprecated,n.showExtensions&&(this.extensions=wt(p,n.showExtensions)),this.const=(null==(c=this.schema)?void 0:c.const)||(null==p?void 0:p.const)||""}toggle(){this.expanded=!this.expanded}collapse(){this.expanded=!1}expand(){this.expanded=!0}}Vn([fe.observable],Jn.prototype,"expanded",2),Vn([fe.action],Jn.prototype,"toggle",1),Vn([fe.action],Jn.prototype,"collapse",1),Vn([fe.action],Jn.prototype,"expand",1);var Yn=require("openapi-sampler");class Zn{constructor(e,t,r,n,o){this.name=t,this.isRequestType=r,this.schema=n.schema&&new Mn(e,n.schema,"",o),this.onlyRequiredInSamples=o.onlyRequiredInSamples,this.generatedPayloadSamplesMaxDepth=o.generatedPayloadSamplesMaxDepth,void 0!==n.examples?this.examples=f(n.examples,(r=>new Qn(e,r,t,n.encoding))):void 0!==n.example?this.examples={default:new Qn(e,{value:e.deref(n.example).resolved},t,n.encoding)}:Ve(t)&&this.generateExample(e,n)}generateExample(e,t){const r={skipReadOnly:this.isRequestType,skipWriteOnly:!this.isRequestType,skipNonRequired:this.isRequestType&&this.onlyRequiredInSamples,maxSampleDepth:this.generatedPayloadSamplesMaxDepth};if(this.schema&&this.schema.oneOf){this.examples={};for(const n of this.schema.oneOf){const o=Yn.sample(n.rawSchema,r,e.spec);this.schema.discriminatorProp&&"object"==typeof o&&o&&(o[this.schema.discriminatorProp]=n.title),this.examples[n.title]=new Qn(e,{value:o},this.name,t.encoding)}}else this.schema&&(this.examples={default:new Qn(e,{value:Yn.sample(t.schema,r,e.spec)},this.name,t.encoding)})}}var Gn=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Kn=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?Xn(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&Gn(t,r,i),i};class eo{constructor(e,t,r,n){this.isRequestType=r,this.activeMimeIdx=0,(0,fe.makeObservable)(this),n.unstable_ignoreMimeParameters&&(t=ut(t)),this.mediaTypes=Object.keys(t).map((o=>{const i=t[o];return new Zn(e,o,r,i,n)}))}activate(e){this.activeMimeIdx=e}get active(){return this.mediaTypes[this.activeMimeIdx]}get hasSample(){return this.mediaTypes.filter((e=>!!e.examples)).length>0}}Kn([fe.observable],eo.prototype,"activeMimeIdx",2),Kn([fe.action],eo.prototype,"activate",1),Kn([fe.computed],eo.prototype,"active",1);class to{constructor({parser:e,infoOrRef:t,options:r,isEvent:n}){const o=!n,{resolved:i}=e.deref(t);this.description=i.description||"",this.required=!!i.required;const s=Ot(i);void 0!==s&&(this.content=new eo(e,s,o,r))}}var ro=Object.defineProperty,no=Object.defineProperties,oo=Object.getOwnPropertyDescriptor,io=Object.getOwnPropertyDescriptors,so=Object.getOwnPropertySymbols,ao=Object.prototype.hasOwnProperty,lo=Object.prototype.propertyIsEnumerable,co=(e,t,r)=>t in e?ro(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,po=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?oo(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ro(t,r,i),i};class uo{constructor({parser:e,code:t,defaultAsError:r,infoOrRef:n,options:o,isEvent:i}){this.expanded=!1,this.headers=[],(0,fe.makeObservable)(this),this.expanded="all"===o.expandResponses||o.expandResponses[t];const{resolved:s}=e.deref(n);this.code=t,void 0!==s.content&&(this.content=new eo(e,s.content,i,o)),void 0!==s["x-summary"]?(this.summary=s["x-summary"],this.description=s.description||""):(this.summary=s.description||"",this.description=""),this.type=Me(t,r);const a=s.headers;void 0!==a&&(this.headers=Object.keys(a).map((t=>{const r=a[t];return new Jn(e,(n=((e,t)=>{for(var r in t||(t={}))ao.call(t,r)&&co(e,r,t[r]);if(so)for(var r of so(t))lo.call(t,r)&&co(e,r,t[r]);return e})({},r),no(n,io({name:t}))),"",o);var n}))),o.showExtensions&&(this.extensions=wt(s,o.showExtensions))}toggle(){this.expanded=!this.expanded}}po([fe.observable],uo.prototype,"expanded",2),po([fe.action],uo.prototype,"toggle",1);var ho=Object.defineProperty,mo=Object.getOwnPropertyDescriptor,fo=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?mo(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&ho(t,r,i),i};function go(e){return"payload"===e.lang&&e.requestBodyContent}let yo=!1;class bo{constructor(e,t,r,n,o=!1){this.parser=e,this.operationSpec=t,this.options=n,this.type="operation",this.items=[],this.ready=!0,this.active=!1,this.expanded=!1,(0,fe.makeObservable)(this),this.pointer=t.pointer,this.description=t.description,this.parent=r,this.externalDocs=t.externalDocs,this.deprecated=!!t.deprecated,this.httpVerb=t.httpVerb,this.deprecated=!!t.deprecated,this.operationId=t.operationId,this.path=t.pathName,this.isCallback=o,this.isWebhook=t.isWebhook,this.isEvent=this.isCallback||this.isWebhook,this.name=Be(t),this.sidebarLabel=n.sideNavStyle===D.IdOnly?this.operationId||this.path:n.sideNavStyle===D.PathOnly?this.path:this.name,this.isCallback?(this.security=(t.security||[]).map((t=>new tn(t,e))),this.servers=ht("",t.servers||t.pathServers||[])):(this.operationHash=t.operationId&&"operation/"+t.operationId,this.id=void 0!==t.operationId?(r?r.id+"/":"")+this.operationHash:void 0!==r?r.id+this.pointer:this.pointer,this.security=(t.security||e.spec.security||[]).map((t=>new tn(t,e))),this.servers=ht(e.specUrl,t.servers||t.pathServers||e.spec.servers||[])),n.showExtensions&&(this.extensions=wt(t,n.showExtensions))}activate(){this.active=!0}deactivate(){this.active=!1}toggle(){this.expanded=!this.expanded}expand(){this.parent&&this.parent.expand()}collapse(){}get requestBody(){return this.operationSpec.requestBody&&new to({parser:this.parser,infoOrRef:this.operationSpec.requestBody,options:this.options,isEvent:this.isEvent})}get codeSamples(){let e=this.operationSpec["x-codeSamples"]||this.operationSpec["x-code-samples"]||[];this.operationSpec["x-code-samples"]&&!yo&&(yo=!0,console.warn('"x-code-samples" is deprecated. Use "x-codeSamples" instead'));const t=this.requestBody&&this.requestBody.content;if(t&&t.hasSample){const r=Math.min(e.length,this.options.payloadSampleIdx);e=[...e.slice(0,r),{lang:"payload",label:"Payload",source:"",requestBodyContent:t},...e.slice(r)]}return e}get parameters(){const e=pt(this.parser,this.operationSpec.pathParameters,this.operationSpec.parameters).map((e=>new Jn(this.parser,e,this.pointer,this.options)));return this.options.sortPropsAlphabetically?ct(e,"name"):this.options.requiredPropsFirst?lt(e):e}get responses(){let e=!1;return Object.keys(this.operationSpec.responses||[]).filter((t=>"default"===t||("success"===Me(t)&&(e=!0),Ne(t)))).map((t=>new uo({parser:this.parser,code:t,defaultAsError:e,infoOrRef:this.operationSpec.responses[t],options:this.options,isEvent:this.isEvent})))}get callbacks(){return Object.keys(this.operationSpec.callbacks||[]).map((e=>new hn(this.parser,e,this.operationSpec.callbacks[e],this.pointer,this.options)))}}fo([fe.observable],bo.prototype,"ready",2),fo([fe.observable],bo.prototype,"active",2),fo([fe.observable],bo.prototype,"expanded",2),fo([fe.action],bo.prototype,"activate",1),fo([fe.action],bo.prototype,"deactivate",1),fo([fe.action],bo.prototype,"toggle",1),fo([qt],bo.prototype,"requestBody",1),fo([qt],bo.prototype,"codeSamples",1),fo([qt],bo.prototype,"parameters",1),fo([qt],bo.prototype,"responses",1),fo([qt],bo.prototype,"callbacks",1);var xo=Object.defineProperty,vo=Object.defineProperties,wo=Object.getOwnPropertyDescriptors,ko=Object.getOwnPropertySymbols,Oo=Object.prototype.hasOwnProperty,Eo=Object.prototype.propertyIsEnumerable,So=(e,t,r)=>t in e?xo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$o=(e,t)=>{for(var r in t||(t={}))Oo.call(t,r)&&So(e,r,t[r]);if(ko)for(var r of ko(t))Eo.call(t,r)&&So(e,r,t[r]);return e};class Ro{constructor(e,t,r){this.operations=[];const{resolved:n}=e.deref(r||{});this.initWebhooks(e,n,t)}initWebhooks(e,t,r){for(const o of Object.keys(t)){const i=t[o],s=Object.keys(i).filter(Fe);for(const t of s){const o=i[t];if(i.$ref){const n=e.deref(i||{});this.initWebhooks(e,{[t]:n},r)}if(!o)continue;const s=new bo(e,(n=$o({},o),vo(n,wo({httpVerb:t}))),void 0,r,!1);this.operations.push(s)}}var n}}class jo{constructor(e,t,r){const{resolved:n}=e.deref(r);this.id=t,this.sectionId=yt+t,this.type=n.type,this.displayName=n["x-displayName"]||t,this.description=n.description||"","apiKey"===n.type&&(this.apiKey={name:n.name,in:n.in}),"http"===n.type&&(this.http={scheme:n.scheme,bearerFormat:n.bearerFormat}),"openIdConnect"===n.type&&(this.openId={connectUrl:n.openIdConnectUrl}),"oauth2"===n.type&&n.flows&&(this.flows=n.flows)}}class Co{constructor(e){const t=e.spec.components&&e.spec.components.securitySchemes||{};this.schemes=Object.keys(t).map((r=>new jo(e,r,t[r])))}}var Po=Object.defineProperty,Ao=Object.getOwnPropertySymbols,Io=Object.prototype.hasOwnProperty,To=Object.prototype.propertyIsEnumerable,_o=(e,t,r)=>t in e?Po(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Lo=(e,t)=>{for(var r in t||(t={}))Io.call(t,r)&&_o(e,r,t[r]);if(Ao)for(var r of Ao(t))To.call(t,r)&&_o(e,r,t[r]);return e};class Do{constructor(e,t,r){var n,o,i;this.options=r,this.parser=new $n(e,t,r),this.info=new Hr(this.parser,this.options),this.externalDocs=this.parser.spec.externalDocs,this.contentItems=Go.buildStructure(this.parser,this.options),this.securitySchemes=new Co(this.parser);const s=Lo(Lo({},null==(o=null==(n=this.parser)?void 0:n.spec)?void 0:o["x-webhooks"]),null==(i=this.parser)?void 0:i.spec.webhooks);this.webhooks=new Ro(this.parser,r,s)}}var zo=Object.defineProperty,No=Object.getOwnPropertyDescriptor,Mo=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?No(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&zo(t,r,i),i};class qo{constructor(e,t,r){this.items=[],this.active=!1,this.expanded=!1,(0,fe.makeObservable)(this),this.id=t.id||e+"/"+O(t.name),this.type=e,this.name=t["x-displayName"]||t.name,this.level=t.level||1,this.sidebarLabel=this.name,this.description=t.description||"";const n=t.items;n&&n.length&&(this.description=Wr.getTextBeforeHading(this.description,n[0].name)),this.parent=r,this.externalDocs=t.externalDocs,"group"===this.type&&(this.expanded=!0)}activate(){this.active=!0}expand(){this.parent&&this.parent.expand(),this.expanded=!0}collapse(){"group"!==this.type&&(this.expanded=!1)}deactivate(){this.active=!1}}Mo([fe.observable],qo.prototype,"active",2),Mo([fe.observable],qo.prototype,"expanded",2),Mo([fe.action],qo.prototype,"activate",1),Mo([fe.action],qo.prototype,"expand",1),Mo([fe.action],qo.prototype,"collapse",1),Mo([fe.action],qo.prototype,"deactivate",1);var Fo=Object.defineProperty,Bo=Object.defineProperties,Qo=Object.getOwnPropertyDescriptors,Uo=Object.getOwnPropertySymbols,Wo=Object.prototype.hasOwnProperty,Vo=Object.prototype.propertyIsEnumerable,Ho=(e,t,r)=>t in e?Fo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Jo=(e,t)=>{for(var r in t||(t={}))Wo.call(t,r)&&Ho(e,r,t[r]);if(Uo)for(var r of Uo(t))Vo.call(t,r)&&Ho(e,r,t[r]);return e},Yo=(e,t)=>Bo(e,Qo(t));const Zo=0;class Go{static buildStructure(e,t){const r=e.spec,n=[],o=Go.getTagsWithOperations(e,r);return n.push(...Go.addMarkdownItems(r.info.description||"",void 0,1,t)),r["x-tagGroups"]&&r["x-tagGroups"].length>0?n.push(...Go.getTagGroupsItems(e,void 0,r["x-tagGroups"],o,t)):n.push(...Go.getTagsItems(e,o,void 0,void 0,t)),n}static addMarkdownItems(e,t,r,n){const o=new Wr(n,null==t?void 0:t.id).extractHeadings(e||"");o.length&&t&&t.description&&(t.description=Wr.getTextBeforeHading(t.description,o[0].name));const i=(e,t,r=1)=>t.map((t=>{const n=new qo("section",t,e);return n.depth=r,t.items&&(n.items=i(n,t.items,r+1)),n}));return i(t,o,r)}static getTagGroupsItems(e,t,r,n,o){const i=[];for(const s of r){const r=new qo("group",s,t);r.depth=Zo,r.items=Go.getTagsItems(e,n,r,s,o),i.push(r)}return i}static getTagsItems(e,t,r,n,o){let i;i=void 0===n?Object.keys(t):n.tags;const s=i.map((e=>t[e]?(t[e].used=!0,t[e]):(console.warn(`Non-existing tag "${e}" is added to the group "${n.name}"`),null))),a=[];for(const t of s){if(!t)continue;const n=new qo("tag",t,r);if(n.depth=Zo+1,""!==t.name)n.items=[...Go.addMarkdownItems(t.description||"",n,n.depth+1,o),...this.getOperationsItems(e,n,t,n.depth+1,o)],a.push(n);else{const r=[...Go.addMarkdownItems(t.description||"",n,n.depth+1,o),...this.getOperationsItems(e,void 0,t,n.depth+1,o)];a.push(...r)}}return o.sortTagsAlphabetically&&a.sort(Ft("name")),a}static getOperationsItems(e,t,r,n,o){if(0===r.operations.length)return[];const i=[];for(const s of r.operations){const r=new bo(e,s,t,o);r.depth=n,i.push(r)}return o.sortOperationsAlphabetically&&i.sort(Ft("name")),i}static getTagsWithOperations(e,t){const r={},n=t["x-webhooks"]||t.webhooks;for(const e of t.tags||[])r[e.name]=Yo(Jo({},e),{operations:[]});function o(e,t,n){for(const i of Object.keys(t)){const s=t[i],a=Object.keys(s).filter(Fe);for(const t of a){const a=s[t];if(s.$ref){const{resolved:t}=e.deref(s);o(e,{[i]:t},n);continue}let l=null==a?void 0:a.tags;l&&l.length||(l=[""]);for(const e of l){let o=r[e];void 0===o&&(o={name:e,operations:[]},r[e]=o),o["x-traitTag"]||o.operations.push(Yo(Jo({},a),{pathName:i,pointer:Se.compile(["paths",i,t]),httpVerb:t,pathParameters:s.parameters||[],pathServers:s.servers,isWebhook:!!n}))}}}}return n&&o(e,n,!0),t.paths&&o(e,t.paths),r}}var Xo=Object.defineProperty,Ko=Object.getOwnPropertyDescriptor,ei=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?Ko(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&Xo(t,r,i),i};const ti="data-section-id";class ri{constructor(e,t,r){this.scroll=t,this.history=r,this.activeItemIdx=-1,this.sideBarOpened=!1,this.updateOnScroll=e=>{const t=e?1:-1;let r=this.activeItemIdx;for(;(-1!==r||e)&&!(r>=this.flatItems.length-1&&e);){if(e){const e=this.getElementAtOrFirstChild(r+1);if(this.scroll.isElementBellow(e))break}else{const e=this.getElementAt(r);if(this.scroll.isElementAbove(e))break}r+=t}this.activate(this.flatItems[r],!0,!0)},this.updateOnHistory=(e=this.history.currentId)=>{if(!e)return;let t;t=this.flatItems.find((t=>t.id===e)),t?this.activateAndScroll(t,!1):(e.startsWith(yt)&&(t=this.flatItems.find((e=>yt.startsWith(e.id))),this.activateAndScroll(t,!1)),this.scroll.scrollIntoViewBySelector(`[${ti}="${P(e)}"]`))},this.getItemById=e=>this.flatItems.find((t=>t.id===e)),(0,fe.makeObservable)(this),this.items=e.contentItems,this.flatItems=g(this.items||[],"items"),this.flatItems.forEach(((e,t)=>e.absoluteIdx=t)),this.subscribe()}static updateOnHistory(e=Vt.currentId,t){e&&t.scrollIntoViewBySelector(`[${ti}="${P(e)}"]`)}subscribe(){this._unsubscribe=this.scroll.subscribe(this.updateOnScroll),this._hashUnsubscribe=this.history.subscribe(this.updateOnHistory)}toggleSidebar(){this.sideBarOpened=!this.sideBarOpened}closeSidebar(){this.sideBarOpened=!1}getElementAt(e){const t=this.flatItems[e];return t&&c(`[${ti}="${P(t.id)}"]`)||null}getElementAtOrFirstChild(e){let t=this.flatItems[e];return t&&"group"===t.type&&(t=t.items[0]),t&&c(`[${ti}="${P(t.id)}"]`)||null}get activeItem(){return this.flatItems[this.activeItemIdx]||void 0}activate(e,t=!0,r=!1){if((this.activeItem&&this.activeItem.id)!==(e&&e.id)&&(!e||"group"!==e.type)){if(this.deactivate(this.activeItem),!e)return this.activeItemIdx=-1,void this.history.replace("",r);e.depth<=Zo||(this.activeItemIdx=e.absoluteIdx,t&&this.history.replace(encodeURI(e.id),r),e.activate(),e.expand())}}deactivate(e){if(void 0!==e)for(e.deactivate();void 0!==e;)e.collapse(),e=e.parent}activateAndScroll(e,t,r){const n=e&&this.getItemById(e.id)||e;this.activate(n,t,r),this.scrollToActive(),n&&n.items.length||this.closeSidebar()}scrollToActive(){this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx))}dispose(){this._unsubscribe(),this._hashUnsubscribe()}}ei([fe.observable],ri.prototype,"activeItemIdx",2),ei([fe.observable],ri.prototype,"sideBarOpened",2),ei([fe.action],ri.prototype,"toggleSidebar",1),ei([fe.action],ri.prototype,"closeSidebar",1),ei([fe.action],ri.prototype,"activate",1),ei([fe.action.bound],ri.prototype,"activateAndScroll",1);var ni=Object.defineProperty,oi=Object.getOwnPropertyDescriptor;const ii="scroll";class si{constructor(e){this.options=e,this._prevOffsetY=0,this._scrollParent=l?window:void 0,this._emiter=new ke,this.bind()}bind(){this._prevOffsetY=this.scrollY(),this._scrollParent&&this._scrollParent.addEventListener("scroll",this.handleScroll)}dispose(){this._scrollParent&&this._scrollParent.removeEventListener("scroll",this.handleScroll),this._emiter.removeAllListeners(ii)}scrollY(){return"undefined"!=typeof HTMLElement&&this._scrollParent instanceof HTMLElement?this._scrollParent.scrollTop:void 0!==this._scrollParent?this._scrollParent.pageYOffset:0}isElementBellow(e){if(null!==e)return e.getBoundingClientRect().top>this.options.scrollYOffset()}isElementAbove(e){if(null===e)return;const t=e.getBoundingClientRect().top;return(t>0?Math.floor(t):Math.ceil(t))<=this.options.scrollYOffset()}subscribe(e){const t=this._emiter.addListener(ii,e);return()=>t.removeListener(ii,e)}scrollIntoView(e){null!==e&&(e.scrollIntoView(),this._scrollParent&&this._scrollParent.scrollBy&&this._scrollParent.scrollBy(0,1-this.options.scrollYOffset()))}scrollIntoViewBySelector(e){const t=c(e);this.scrollIntoView(t)}handleScroll(){const e=this.scrollY()-this._prevOffsetY>0;this._prevOffsetY=this.scrollY(),this._emiter.emit(ii,e)}}((e,t,r,n)=>{for(var o,i=oi(t,r),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,r,i)||i);i&&ni(t,r,i)})([we.bind,Rt(100)],si.prototype,"handleScroll");class ai{constructor(){this.searchWorker=function(){let e;if(l)try{e=r(980)}catch(t){e=r(177).ZP}else e=r(177).ZP;return new e}()}indexItems(e){const t=e=>{e.forEach((e=>{"group"!==e.type&&this.add(e.name,(e.description||"").concat(" ",e.path||""),e.id),t(e.items)}))};t(e),this.searchWorker.done()}add(e,t,r){this.searchWorker.add(e,t,r)}dispose(){this.searchWorker.terminate(),this.searchWorker.dispose()}search(e){return this.searchWorker.search(e)}toJS(){return e=this,null,t=function*(){return this.searchWorker.toJS()},new Promise(((r,n)=>{var o=e=>{try{s(t.next(e))}catch(e){n(e)}},i=e=>{try{s(t.throw(e))}catch(e){n(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,null)).next())}));var e,t}load(e){this.searchWorker.load(e)}fromExternalJS(e,t){e&&t&&this.searchWorker.fromExternalJS(e,t)}}const li=re.div`
  width: calc(100% - ${e=>e.theme.rightPanel.width});
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${({compact:e,theme:t})=>te.lessThan("medium",!0)`
    width: 100%;
    padding: ${`${e?0:t.spacing.sectionVertical}px ${t.spacing.sectionHorizontal}px`};
  `};
`,ci=re.div.attrs((e=>({[ti]:e.id})))`
  padding: ${e=>e.theme.spacing.sectionVertical}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${te.lessThan("medium",!0)`
    padding: 0;
  `}
  ${e=>e.underlined?"\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  ":""}
`,pi=re.div`
  width: ${e=>e.theme.rightPanel.width};
  color: ${({theme:e})=>e.rightPanel.textColor};
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${te.lessThan("medium",!0)`
    width: 100%;
    padding: ${e=>`${e.theme.spacing.sectionVertical}px ${e.theme.spacing.sectionHorizontal}px`};
  `};
`,ui=re(pi)`
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
`,di=re.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${te.lessThan("medium",!0)`
    flex-direction: column;
  `};
`,hi={1:"1.85714em",2:"1.57143em",3:"1.27em"},mi=e=>G`
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-weight: ${({theme:e})=>e.typography.headings.fontWeight};
  font-size: ${hi[e]};
  line-height: ${({theme:e})=>e.typography.headings.lineHeight};
`,fi=re.h1`
  ${mi(1)};
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;

  ${ne("H1")};
`,gi=re.h2`
  ${mi(2)};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 20px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  ${ne("H2")};
`,yi=(re.h2`
  ${mi(3)};
  color: ${({theme:e})=>e.colors.text.primary};

  ${ne("H3")};
`,re.h3`
  color: ${({theme:e})=>e.rightPanel.textColor};

  ${ne("RightPanelHeader")};
`),bi=re.h5`
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${ne("UnderlinedHeader")};
`,xi=(0,e.createContext)(void 0),{Provider:vi,Consumer:wi}=xi;function ki(t){const{spec:r,specUrl:n,options:o,onLoaded:i,children:s}=t,[a,l]=e.useState(null),[c,p]=e.useState(null);if(c)throw c;e.useEffect((()=>{!function(){return e=this,null,t=function*(){if(r||n){l(null);try{const e=yield xe(r||n);l(e)}catch(e){throw p(e),e}}},new Promise(((r,n)=>{var o=e=>{try{s(t.next(e))}catch(e){n(e)}},i=e=>{try{s(t.throw(e))}catch(e){n(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(o,i);s((t=t.apply(e,null)).next())}));var e,t}()}),[r,n]);const u=e.useMemo((()=>{if(!a)return null;try{return new ic(a,n,o)}catch(e){throw i&&i(e),e}}),[a,n,o]);return e.useEffect((()=>{u&&i&&i()}),[u,i]),s({loading:!u,store:u})}function Oi(){return(0,e.useContext)(xi)}const Ei=e=>G`
  ${e} {
    cursor: pointer;
    margin-left: -20px;
    padding: 0;
    line-height: 1;
    width: 20px;
    display: inline-block;
    outline: 0;
  }
  ${e}:before {
    content: '';
    width: 15px;
    height: 15px;
    background-size: contain;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');
    opacity: 0.5;
    visibility: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  h1:hover > ${e}::before, h2:hover > ${e}::before, ${e}:hover::before {
    visibility: visible;
  }
`,Si=re((function(t){const r=e.useContext(xi),n=e.useCallback((e=>{r&&function(e,t,r){t.defaultPrevented||0!==t.button||(e=>!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey))(t)||(t.preventDefault(),e.replace(encodeURI(r)))}(r.menu.history,e,t.to)}),[r,t.to]);return r?e.createElement("a",{className:t.className,href:r.menu.history.linkForId(t.to),onClick:n,"aria-label":t.to},t.children):null}))`
  ${Ei("&")};
`;function $i(t){return e.createElement(Si,{to:t.to})}const Ri={left:"90deg",right:"-90deg",up:"-180deg",down:"0"},ji=re((t=>e.createElement("svg",{className:t.className,style:t.style,version:"1.1",viewBox:"0 0 24 24",x:"0",xmlns:"http://www.w3.org/2000/svg",y:"0","aria-hidden":"true"},e.createElement("polygon",{points:"17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "}))))`
  height: ${e=>e.size||"18px"};
  width: ${e=>e.size||"18px"};
  min-width: ${e=>e.size||"18px"};
  vertical-align: middle;
  float: ${e=>e.float||""};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${e=>Ri[e.direction||"down"]});

  polygon {
    fill: ${({color:e,theme:t})=>e&&t.colors.responses[e]&&t.colors.responses[e].color||e};
  }
`,Ci=re.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${e=>e.theme.colors[e.type].main};
  color: ${e=>e.theme.colors[e.type].contrastText};
  font-size: ${e=>e.theme.typography.code.fontSize};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${({theme:e,type:t})=>"warning"===t?"normal":e.typography.fontWeightBold};
  font-size: 13px;
  + span[type] {
    margin-left: 4px;
  }
`,Pi=G`
  text-decoration: line-through;
  color: #707070;
`,Ai=re.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${e=>e.theme.colors.text.secondary};
`,Ii=re.td`
  border-left: 1px solid ${e=>e.theme.schema.linesColor};
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 0;

  ${te.lessThan("small")`
    display: block;
    overflow: hidden;
  `}

  tr:first-of-type > &,
  tr.last > & {
    border-left-width: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  tr:first-of-type > & {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 22px,
      ${e=>e.theme.schema.linesColor} 22px,
      ${e=>e.theme.schema.linesColor} 100%
    );
  }

  tr.last > & {
    background-image: linear-gradient(
      to bottom,
      ${e=>e.theme.schema.linesColor} 0%,
      ${e=>e.theme.schema.linesColor} 22px,
      transparent 22px,
      transparent 100%
    );
  }

  tr.last + tr > & {
    border-left-color: transparent;
  }

  tr.last:first-child > & {
    background: none;
    border-left-color: transparent;
  }
`,Ti=re(Ii)`
  padding: 0;
`,_i=re(Ii)`
  vertical-align: top;
  line-height: 20px;
  white-space: nowrap;
  font-size: 13px;
  font-family: ${e=>e.theme.typography.code.fontFamily};

  &.deprecated {
    ${Pi};
  }

  ${({kind:e})=>"patternProperties"===e&&G`
      > span.property-name {
        display: inline-table;
        white-space: break-spaces;
        margin-right: 20px;

        ::before,
        ::after {
          content: '/';
          filter: opacity(0.2);
        }
      }
    `}

  ${({kind:e=""})=>["field","additionalProperties","patternProperties"].includes(e)?"":"font-style: italic"};

  ${ne("PropertyNameCell")};
`,Li=re.td`
  border-bottom: 1px solid #9fb4be;
  padding: 10px 0;
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  box-sizing: border-box;

  tr.expanded & {
    border-bottom: none;
  }

  ${te.lessThan("small")`
    padding: 0 20px;
    border-bottom: none;
    border-left: 1px solid ${e=>e.theme.schema.linesColor};

    tr.last > & {
      border-left: none;
    }
  `}

  ${ne("PropertyDetailsCell")};
`,Di=re.span`
  color: ${e=>e.theme.schema.linesColor};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin-right: 10px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 1px;
    background: ${e=>e.theme.schema.linesColor};
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    background: ${e=>e.theme.schema.linesColor};
    height: 7px;
  }
`,zi=re.div`
  padding: ${({theme:e})=>e.schema.nestingSpacing};
`,Ni=re.table`
  border-collapse: separate;
  border-radius: 3px;
  font-size: ${e=>e.theme.typography.fontSize};

  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  ${te.lessThan("small")`
    display: block;
    > tr, > tbody > tr {
      display: block;
    }
  `}

  ${te.lessThan("small",!1," and (-ms-high-contrast:none)")`
    td {
      float: left;
      width: 100%;
    }
  `}

  &
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi} {
    margin: ${({theme:e})=>e.schema.nestingSpacing};
    margin-right: 0;
    background: ${({theme:e})=>e.schema.nestedBackground};
  }

  &
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi},
    &
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi}
    ${zi} {
    background: #ffffff;
  }
`,Mi=re.div`
  margin: 0 0 3px 0;
  display: inline-block;
`,qi=re.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${e=>e.theme.colors.primary.main};
  font-family: ${e=>e.theme.typography.headings.fontFamily};
}
`,Fi=re.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.colors.primary.main};
  padding: 2px 10px;
  line-height: 1.5em;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary.main};
  }

  ${({deprecated:e})=>e&&Pi||""};

  ${e=>e.active?`\n      color: white;\n      background-color: ${e.theme.colors.primary.main};\n      &:focus {\n        box-shadow: none;\n        background-color: ${(0,t.darken)(.15,e.theme.colors.primary.main)};\n      }\n      `:`\n        color: ${e.theme.colors.primary.main};\n        background-color: white;\n      `}
`,Bi=re.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`,Qi=re.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;var Ui=require("react-tabs");const Wi=re(Ui.Tabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 5px 10px;
      display: inline-block;

      background-color: ${o.palette.gray.dark3};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${o.palette.gray.base};
      margin: 0
        ${({theme:e})=>`${e.spacing.unit}px ${e.spacing.unit}px ${e.spacing.unit}px`};
      border: none;
      border-radius: 5px;
      min-width: 60px;
      font-size: 13px;
      font-weight: bold;

      &.react-tabs__tab--selected {
        color: ${o.palette.white};
        background-color: ${o.palette.gray.dark2};
        border: 1px solid ${o.palette.gray.base};
        &:focus {
          outline: auto;
        }

        &.tab-error {
          background-color: ${o.palette.gray.dark2};
          border: none;
          color: ${o.palette.red.light1};
        }

        &.tab-success {
          background-color: ${o.palette.gray.dark2};
          border: none;
          color: ${o.palette.green.light1};
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-redirect {
        color: ${e=>e.theme.colors.responses.redirect.tabTextColor};
      }

      &.tab-info {
        color: ${e=>e.theme.colors.responses.info.tabTextColor};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${({theme:e})=>e.codeBlock.backgroundColor};
    & > div,
    & > pre {
      padding: ${e=>4*e.theme.spacing.unit}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`,Vi=(re(Wi)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({theme:e})=>(0,t.darken)(e.colors.tonalOffset,e.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({theme:e})=>e.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${e=>2*e.theme.spacing.unit}px 0;
    }
  }
`,re.div`
  /**
  * Based on prism-dark.css
  */

  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-shadow: 0 -0.1em 0.2em black;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
    color: ${o.palette.white};
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #2dc4ff;
  }

  .token.boolean {
    color: #ff6f44;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }

  .token.property.string {
    color: white;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: #edb210;
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #ff7dc3;
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

  .token.string:not(.property) {
    color: #35de7b;
  }

  .token.string-property {
    color: #2dc4ff;
  }

  ${ne("Prism")};
`),Hi=re.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${({theme:e})=>e.typography.fontFamily};
    font-size: 13px;
    line-height: ${({theme:e})=>e.typography.lineHeight};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`,Ji=re.div`
  &:hover ${Hi} {
    opacity: 1;
  }
`,Yi=re(Vi.withComponent("pre"))`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
`;var Zi=require("perfect-scrollbar"),Gi=r.n(Zi),Xi=Object.defineProperty,Ki=Object.getOwnPropertySymbols,es=Object.prototype.hasOwnProperty,ts=Object.prototype.propertyIsEnumerable,rs=(e,t,r)=>t in e?Xi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const ns=Gi()||Zi;let os="";l&&(os=r(433),os="function"==typeof os.toString&&os.toString()||"",os="[object Object]"===os?"":os);const is=X`${os}`,ss=re.div`
  position: relative;
`;class as extends e.Component{constructor(){super(...arguments),this.handleRef=e=>{this._container=e}}componentDidMount(){const e=this._container.parentElement&&this._container.parentElement.scrollTop||0;this.inst=new ns(this._container,this.props.options||{}),this._container.scrollTo&&this._container.scrollTo(0,e)}componentDidUpdate(){this.inst.update()}componentWillUnmount(){this.inst.destroy()}render(){const{children:t,className:r,updateFn:n}=this.props;return n&&n(this.componentDidUpdate.bind(this)),e.createElement(e.Fragment,null,os&&e.createElement(is,null),e.createElement(ss,{className:`scrollbar-container ${r}`,ref:this.handleRef},t))}}function ls(t){return e.createElement(de.Consumer,null,(r=>r.nativeScrollbars?e.createElement("div",{style:{overflow:"auto",overscrollBehavior:"contain",msOverflowStyle:"-ms-autohiding-scrollbar"}},t.children):e.createElement(as,((e,t)=>{for(var r in t||(t={}))es.call(t,r)&&rs(e,r,t[r]);if(Ki)for(var r of Ki(t))ts.call(t,r)&&rs(e,r,t[r]);return e})({},t),t.children)))}const cs=re((({className:t,style:r})=>e.createElement("svg",{className:t,style:r,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},e.createElement("polyline",{points:"6 9 12 15 18 9"}))))`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${e=>"dark"===e.variant&&"white"};
  }
`,ps=e.memo((t=>{const{options:r,onChange:n,placeholder:o,value:i="",variant:s,className:a}=t;return e.createElement("div",{className:a},e.createElement(cs,{variant:s}),e.createElement("select",{onChange:e=>{const{selectedIndex:t}=e.target;n(r[o?t-1:t])},value:i,className:"dropdown-select"},o&&e.createElement("option",{disabled:!0,hidden:!0,value:o},o),r.map((({idx:t,value:r,title:n},o)=>e.createElement("option",{key:t||r+o,value:r},n||r)))),e.createElement("label",null,i))})),us=Y()(ps)`
  label {
    box-sizing: border-box;
    min-width: 100px;
    outline: none;
    display: inline-block;
    font-family: ${e=>e.theme.typography.headings.fontFamily};
    color: ${({theme:e})=>e.colors.text.primary};
    vertical-align: bottom;
    width: ${({fullWidth:e})=>e?"100%":"auto"};
    text-transform: none;
    padding: 0 22px 0 4px;

    font-size: 0.929em;
    line-height: 1.5em;
    font-family: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dropdown-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    appearance: none;
    cursor: pointer;

    color: ${({theme:e})=>e.colors.text.primary};
    line-height: inherit;
    font-family: inherit;
    background-color: ${o.palette.gray.dark2};

    :hover {
      background-color: ${o.palette.gray.dark2};
    }
  }
  box-sizing: border-box;
  min-width: 100px;
  outline: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid rgba(38, 50, 56, 0.5);
  vertical-align: bottom;
  padding: 2px 0px 2px 6px;
  position: relative;
  width: auto;
  background: white;
  color: #263238;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  font-size: 13px;
  line-height: 20px;
  cursor: pointer;
  transition: border 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-within {
    border: 1px solid ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
    box-shadow: 0px 0px 0px 1px ${e=>e.theme.colors.primary.main};
  }
`,ds=Y()(us)`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.969em;

  font-size: 1em;
  border: none;
  padding: 0 1.2em 0 0;
  background: transparent;

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    label {
      color: ${e=>e.theme.colors.primary.main};
      text-shadow: 0px 0px 0px ${e=>e.theme.colors.primary.main};
    }
  }
`,hs=Y().span`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.929em;
  color: black;
`;var ms=Object.defineProperty,fs=Object.getOwnPropertySymbols,gs=Object.prototype.hasOwnProperty,ys=Object.prototype.propertyIsEnumerable,bs=(e,t,r)=>t in e?ms(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function xs(t){const{Label:r=hs,Dropdown:n=ds}=t;return 1===t.options.length?e.createElement(r,null,t.options[0].value):e.createElement(n,((e,t)=>{for(var r in t||(t={}))gs.call(t,r)&&bs(e,r,t[r]);if(fs)for(var r of fs(t))ys.call(t,r)&&bs(e,r,t[r]);return e})({},t))}var vs=require("dompurify");const ws=G`
  a {
    text-decoration: ${e=>e.theme.typography.links.textDecoration};
    color: ${e=>e.theme.typography.links.color};

    &:visited {
      color: ${e=>e.theme.typography.links.visited};
    }

    &:hover {
      color: ${e=>e.theme.typography.links.hover};
      text-decoration: ${e=>e.theme.typography.links.hoverTextDecoration};
    }
  }
`,ks=re(Vi)`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-weight: ${e=>e.theme.typography.fontWeightRegular};
  line-height: ${e=>e.theme.typography.lineHeight};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({compact:e})=>e&&"\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  "}

  ${({inline:e})=>e&&" p {\n    display: inline-block;\n  }"}

  h1 {
    ${mi(1)};
    color: ${e=>e.theme.colors.primary.main};
    margin-top: 0;
  }

  h2 {
    ${mi(2)};
    color: ${e=>e.theme.colors.text.primary};
  }

  code {
    color: ${({theme:e})=>e.typography.code.color};
    background-color: ${({theme:e})=>e.typography.code.backgroundColor};

    font-family: ${e=>e.theme.typography.code.fontFamily};
    border-radius: 2px;
    border: 1px solid rgba(38, 50, 56, 0.1);
    padding: 0 ${({theme:e})=>e.spacing.unit}px;
    font-size: ${e=>e.theme.typography.code.fontSize};
    font-weight: ${({theme:e})=>e.typography.code.fontWeight};

    word-break: break-word;
  }

  pre {
    font-family: ${e=>e.theme.typography.code.fontFamily};
    white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
    background-color: ${({theme:e})=>e.codeBlock.backgroundColor};
    color: white;
    padding: ${e=>4*e.theme.spacing.unit}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0px;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      color: white;
      padding: 0;

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;

    &:nth-child(2n) {
      background-color: ${({theme:e})=>e.schema.nestedBackground};
    }
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${Ei(".share-link")};

  ${ws}

  ${ne("Markdown")};
`;var Os=Object.defineProperty,Es=Object.getOwnPropertySymbols,Ss=Object.prototype.hasOwnProperty,$s=Object.prototype.propertyIsEnumerable,Rs=(e,t,r)=>t in e?Os(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const js=ks.withComponent("span");function Cs(t){const r=t.inline?js:ks;return e.createElement(me,null,(n=>{return e.createElement(r,((e,t)=>{for(var r in t||(t={}))Ss.call(t,r)&&Rs(e,r,t[r]);if(Es)for(var r of Es(t))$s.call(t,r)&&Rs(e,r,t[r]);return e})({className:"redoc-markdown "+(t.className||""),dangerouslySetInnerHTML:{__html:(o=n.untrustedSpec,i=t.html,o?vs.sanitize(i):i)},"data-role":t["data-role"]},t));var o,i}))}class Ps extends e.Component{render(){const{source:t,inline:r,compact:n,className:o,"data-role":i}=this.props,s=new Wr;return e.createElement(Cs,{html:s.renderMd(t),inline:r,compact:n,className:o,"data-role":i})}}const As=re.div`
  position: relative;
`,Is=re.div`
  position: absolute;
  min-width: 80px;
  max-width: 500px;
  background: #fff;
  bottom: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);

  border-radius: 4px;
  padding: 0.3em 0.6em;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
`,Ts=re.div`
  background: #fff;
  color: #000;
  display: inline;
  font-size: 0.85em;
  white-space: nowrap;
`,_s=re.div`
  position: absolute;
  width: 0;
  height: 0;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  border-top: solid #fff 5px;
`,Ls=re.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
`;class Ds extends e.Component{render(){const{open:t,title:r,children:n}=this.props;return e.createElement(As,null,n,t&&e.createElement(Is,null,e.createElement(Ts,null,r),e.createElement(_s,null),e.createElement(Ls,null)))}}const zs="undefined"!=typeof document&&document.queryCommandSupported&&document.queryCommandSupported("copy");class Ns{static isSupported(){return zs}static selectElement(e){let t,r;document.body.createTextRange?(t=document.body.createTextRange(),t.moveToElementText(e),t.select()):document.createRange&&window.getSelection&&(r=window.getSelection(),t=document.createRange(),t.selectNodeContents(e),r.removeAllRanges(),r.addRange(t))}static deselect(){if(document.selection)document.selection.empty();else if(window.getSelection){const e=window.getSelection();e&&e.removeAllRanges()}}static copySelected(){let e;try{e=document.execCommand("copy")}catch(t){e=!1}return e}static copyElement(e){Ns.selectElement(e);const t=Ns.copySelected();return t&&Ns.deselect(),t}static copyCustom(e){const t=document.createElement("textarea");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();const r=Ns.copySelected();return document.body.removeChild(t),r}}const Ms=t=>{const[r,n]=e.useState(!1),o=()=>{const e="string"==typeof t.data?t.data:JSON.stringify(t.data,null,2);Ns.copyCustom(e),i()},i=()=>{n(!0),setTimeout((()=>{n(!1)}),1500)};return t.children({renderCopyButton:()=>e.createElement("button",{onClick:o},e.createElement(Ds,{title:Ns.isSupported()?"Copied":"Not supported in your browser",open:r},"Copy"))})};let qs=1;function Fs(e,t){qs=1;let r="";return r+='<div class="redoc-json">',r+="<code>",r+=Vs(e,t),r+="</code>",r+="</div>",r}function Bs(e){return void 0!==e?e.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Qs(e){return JSON.stringify(e).slice(1,-1)}function Us(e,t){return'<span class="'+t+'">'+Bs(e)+"</span>"}function Ws(e){return'<span class="token punctuation">'+e+"</span>"}function Vs(e,t){const r=typeof e;let n="";return null==e?n+=Us("null","token keyword"):e&&e.constructor===Array?(qs++,n+=function(e,t){const r=qs>t?"collapsed":"";let n=`<button class="collapser" aria-label="${qs>t+1?"expand":"collapse"}"></button>${Ws("[")}<span class="ellipsis"></span><ul class="array collapsible">`,o=!1;const i=e.length;for(let s=0;s<i;s++)o=!0,n+='<li><div class="hoverable '+r+'">',n+=Vs(e[s],t),s<i-1&&(n+=","),n+="</div></li>";return n+=`</ul>${Ws("]")}`,o||(n=Ws("[ ]")),n}(e,t),qs--):e&&e.constructor===Date?n+=Us('"'+e.toISOString()+'"',"token string"):"object"===r?(qs++,n+=function(e,t){const r=qs>t?"collapsed":"",n=Object.keys(e),o=n.length;let i=`<button class="collapser" aria-label="${qs>t+1?"expand":"collapse"}"></button>${Ws("{")}<span class="ellipsis"></span><ul class="obj collapsible">`,s=!1;for(let a=0;a<o;a++){const l=n[a];s=!0,i+='<li><div class="hoverable '+r+'">',i+='<span class="property token string">"'+Bs(l)+'"</span>: ',i+=Vs(e[l],t),a<o-1&&(i+=Ws(",")),i+="</div></li>"}return i+=`</ul>${Ws("}")}`,s||(i=Ws("{ }")),i}(e,t),qs--):"number"===r?n+=Us(e,"token number"):"string"===r?/^(http|https):\/\/[^\s]+$/.test(e)?n+=Us('"',"token string")+'<a href="'+encodeURI(e)+'">'+Bs(Qs(e))+"</a>"+Us('"',"token string"):n+=Us('"'+Qs(e)+'"',"token string"):"boolean"===r&&(n+=Us(e,"token boolean")),n}const Hs=G`
  .redoc-json code > .collapser {
    display: none;
    pointer-events: none;
  }

  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};

  white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
  contain: content;
  overflow-x: auto;

  .callback-function {
    color: gray;
  }

  .collapser:after {
    content: '-';
    cursor: pointer;
  }

  .collapsed > .collapser:after {
    content: '+';
    cursor: pointer;
  }

  .ellipsis:after {
    content: ' … ';
  }

  .collapsible {
    margin-left: 2em;
  }

  .hoverable {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
  }

  .hovered {
    background-color: rgba(235, 238, 249, 1);
  }

  .collapser {
    background-color: transparent;
    border: 0;
    color: #fff;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    font-size: ${e=>e.theme.typography.code.fontSize};
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -1.5em;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    padding: 2px;
    &:focus {
      outline-color: #fff;
      outline-style: dotted;
      outline-width: 1px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 0px 26px;
  }

  li {
    position: relative;
    display: block;
  }

  .hoverable {
    display: inline-block;
  }

  .selected {
    outline-style: solid;
    outline-width: 1px;
    outline-style: dotted;
  }

  .collapsed > .collapsible {
    display: none;
  }

  .ellipsis {
    display: none;
  }

  .collapsed > .ellipsis {
    display: inherit;
  }
`,Js=re.div`
  &:hover > ${Hi} {
    opacity: 1;
  }
`,Ys=re((t=>{const[r,n]=e.useState(),o=({renderCopyButton:r})=>{const o=t.data&&Object.values(t.data).some((e=>"object"==typeof e&&null!==e));return e.createElement(Js,null,e.createElement(Hi,null,r(),o&&e.createElement(e.Fragment,null,e.createElement("button",{onClick:i}," Expand all "),e.createElement("button",{onClick:s}," Collapse all "))),e.createElement(de.Consumer,null,(r=>e.createElement(Vi,{className:t.className,ref:e=>n(e),dangerouslySetInnerHTML:{__html:Fs(t.data,r.jsonSampleExpandLevel)}}))))},i=()=>{const e=null==r?void 0:r.getElementsByClassName("collapsible");for(const t of Array.prototype.slice.call(e)){const e=t.parentNode;e.classList.remove("collapsed"),e.querySelector(".collapser").setAttribute("aria-label","collapse")}},s=()=>{const e=null==r?void 0:r.getElementsByClassName("collapsible"),t=Array.prototype.slice.call(e,1);for(const e of t){const t=e.parentNode;t.classList.add("collapsed"),t.querySelector(".collapser").setAttribute("aria-label","expand")}},a=e=>{let t;"collapser"===e.className&&(t=e.parentElement.getElementsByClassName("collapsible")[0],t.parentElement.classList.contains("collapsed")?(t.parentElement.classList.remove("collapsed"),e.setAttribute("aria-label","collapse")):(t.parentElement.classList.add("collapsed"),e.setAttribute("aria-label","expand")))},l=e.useCallback((e=>{a(e.target)}),[]),c=e.useCallback((e=>{"Enter"===e.key&&a(e.target)}),[]);return e.useEffect((()=>(null==r||r.addEventListener("click",l),null==r||r.addEventListener("focus",c),()=>{null==r||r.removeEventListener("click",l),null==r||r.removeEventListener("focus",c)})),[l,c,r]),e.createElement(Ms,{data:t.data},o)}))`
  ${Hs};
`,Zs=t=>{const{source:r,lang:n}=t;return e.createElement(Yi,{dangerouslySetInnerHTML:{__html:$t(r,n)}})},Gs=t=>{const{source:r,lang:n}=t;return e.createElement(Ms,{data:r},(({renderCopyButton:t})=>e.createElement(Ji,null,e.createElement(Hi,null,t()),e.createElement(Zs,{lang:n,source:r}))))};function Xs({value:t,mimeType:r}){return Ve(r)?e.createElement(Ys,{data:t}):("object"==typeof t&&(t=JSON.stringify(t,null,2)),e.createElement(Gs,{lang:tt(r),source:t}))}function Ks({example:t,mimeType:r}){return void 0===t.value&&t.externalValueUrl?e.createElement(ea,{example:t,mimeType:r}):e.createElement(Xs,{value:t.value,mimeType:r})}function ea({example:t,mimeType:r}){const n=function(t,r){const[,n]=(0,e.useState)(!0),o=(0,e.useRef)(void 0),i=(0,e.useRef)(void 0);return i.current!==t&&(o.current=void 0),i.current=t,(0,e.useEffect)((()=>{(()=>{return e=this,i=function*(){n(!0);try{o.current=yield t.getExternalValue(r)}catch(e){o.current=e}n(!1)},new Promise(((t,r)=>{var n=e=>{try{s(i.next(e))}catch(e){r(e)}},o=e=>{try{s(i.throw(e))}catch(e){r(e)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(n,o);s((i=i.apply(e,null)).next())}));var e,i})()}),[t,r]),o.current}(t,r);return void 0===n?e.createElement("span",null,"Loading..."):n instanceof Error?e.createElement(Yi,null,"Error loading external example: ",e.createElement("br",null),e.createElement("a",{className:"token string",href:t.externalValueUrl,target:"_blank",rel:"noopener noreferrer"},t.externalValueUrl)):e.createElement(Xs,{value:n,mimeType:r})}const ta=re.div`
  padding: 0.9em;
  background-color: ${o.palette.gray.dark2};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
`,ra=re.span`
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-size: 13px;
  font-weight: ${({theme:e})=>e.typography.fontWeightBold};
  color: ${({theme:e})=>(0,t.transparentize)(.3,e.rightPanel.textColor)};
`,na=re.div`
  background-color: ${o.palette.gray.dark2};
  position: relative;
  font-size: 13px;

  :hover {
    background-color: ${o.palette.gray.dark2};
  }
`,oa=re(us)`
  label {
    color: ${({theme:e})=>e.rightPanel.textColor};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    text-transform: none;
    border: none;
  }
  margin: 0 0 10px 0;
  display: block;
  background-color: ${o.palette.gray.dark2};
  border: none;
  padding: 0.9em 1.6em 0.9em 0.9em;
  box-shadow: none;
  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    background-color: ${o.palette.gray.dark2};
  }
`,ia=re.div`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;class sa extends e.Component{constructor(){super(...arguments),this.state={activeIdx:0},this.switchMedia=({idx:e})=>{void 0!==e&&this.setState({activeIdx:e})}}render(){const{activeIdx:t}=this.state,r=this.props.mediaType.examples||{},n=this.props.mediaType.name,o=e.createElement(ia,null,"No sample"),i=Object.keys(r);if(0===i.length)return o;if(i.length>1){const o=i.map(((e,t)=>({value:r[e].summary||e,idx:t}))),s=r[i[t]],a=s.description;return e.createElement(aa,null,e.createElement(ra,null,"Example"),e.createElement(na,null,this.props.renderDropdown({value:o[t].value,options:o,onChange:this.switchMedia,ariaLabel:"Example"})),e.createElement("div",null,a&&e.createElement(Ps,{source:a}),e.createElement(Ks,{example:s,mimeType:n})))}{const t=r[i[0]];return e.createElement(aa,null,t.description&&e.createElement(Ps,{source:t.description}),e.createElement(Ks,{example:t,mimeType:n}))}}}const aa=re.div`
  margin-top: 15px;
`;var la=require("mobx-react");const ca=re(_i)`
  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 13px;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    cursor: pointer;
    padding: 0;
    color: ${e=>e.theme.colors.text.primary};
    &:focus {
      font-weight: ${({theme:e})=>e.typography.fontWeightBold};
    }
    ${({kind:e})=>"patternProperties"===e&&G`
        display: inline-flex;
        margin-right: 20px;

        > span.property-name {
          white-space: break-spaces;
          text-align: left;

          ::before,
          ::after {
            content: '/';
            filter: opacity(0.2);
          }
        }

        > svg {
          align-self: center;
        }
      `}
  }
  ${ji} {
    height: ${({theme:e})=>e.schema.arrow.size};
    width: ${({theme:e})=>e.schema.arrow.size};
    polygon {
      fill: ${({theme:e})=>e.schema.arrow.color};
    }
  }
`,pa=re.span`
  vertical-align: middle;
  font-size: ${({theme:e})=>e.typography.code.fontSize};
  line-height: 20px;
`,ua=re(pa)`
  color: ${e=>(0,t.transparentize)(.1,e.theme.schema.typeNameColor)};
`,da=re(pa)`
  color: ${e=>e.theme.schema.typeNameColor};
`,ha=re(pa)`
  color: ${e=>e.theme.schema.typeTitleColor};
  word-break: break-word;
`,ma=da,fa=re(pa.withComponent("div"))`
  color: ${e=>e.theme.schema.requireLabelColor};
  font-size: ${e=>e.theme.schema.labelsTextSize};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`,ga=re(fa)`
  color: ${e=>e.theme.colors.primary.light};
`,ya=re(pa)`
  color: ${({theme:e})=>e.colors.warning.main};
  font-size: 13px;
`,ba=re(pa)`
  color: ${o.palette.gray.dark3};
  &::before,
  &::after {
    font-weight: bold;
  }
`,xa=re(pa)`
  border-radius: 2px;
  word-break: break-word;
  ${({theme:e})=>`\n    background-color: ${o.palette.gray.light3};\n    color: ${o.palette.gray.dark3};\n\n    padding: 0 ${e.spacing.unit}px;\n    border: 1px solid ${o.palette.gray.light2};\n    font-family: ${e.typography.code.fontFamily};\n}`};
  & + & {
    margin-left: 0;
  }
  ${ne("ExampleValue")};
`,va=re(xa)``,wa=re(pa)`
  border-radius: 2px;
  ${({theme:e})=>`\n    background-color: ${o.palette.blue.light3};\n    color: ${o.palette.blue.base};\n\n    margin: 0 ${e.spacing.unit}px;\n    padding: 0 ${e.spacing.unit}px;\n    border: 1px solid ${o.palette.blue.light2};\n}`};
  & + & {
    margin-left: 0;
  }
  ${ne("ConstraintItem")};
`,ka=re.button`
  background-color: transparent;
  border: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-left: ${({theme:e})=>e.spacing.unit}px;
  border-radius: 2px;
  cursor: pointer;
  outline-color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 12px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;const Oa=re.div`
  ${ws};
  ${({compact:e})=>e?"":"margin: 1em 0"}
`;let Ea=class extends e.Component{render(){const{externalDocs:t}=this.props;return t&&t.url?e.createElement(Oa,{compact:this.props.compact},e.createElement("a",{href:t.url},t.description||t.url)):null}};Ea=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Ea);class Sa extends e.PureComponent{constructor(){super(...arguments),this.state={collapsed:!0}}toggle(){this.setState({collapsed:!this.state.collapsed})}render(){const{values:t,isArrayType:r}=this.props,{collapsed:n}=this.state,{enumSkipQuotes:o,maxDisplayedEnumValues:i}=this.context;if(!t.length)return null;const s=this.state.collapsed&&i?t.slice(0,i):t,a=!!i&&t.length>i,l=i?n?`… ${t.length-i} more`:"Hide":"";return e.createElement("div",null,e.createElement(pa,null,r?L("enumArray"):""," ",1===t.length?L("enumSingleValue"):L("enum"),":")," ",s.map(((t,r)=>{const n=o?String(t):JSON.stringify(t);return e.createElement(e.Fragment,{key:r},e.createElement(xa,null,n)," ")})),a?e.createElement($a,{onClick:()=>{this.toggle()}},l):null)}}Sa.contextType=de;const $a=re.span`
  color: ${e=>e.theme.colors.primary.main};
  vertical-align: middle;
  font-size: 13px;
  line-height: 20px;
  padding: 0 5px;
  cursor: pointer;
`,Ra=re(ks)`
  margin: 2px 0;
`;class ja extends e.PureComponent{render(){const t=this.props.extensions;return e.createElement(de.Consumer,null,(r=>e.createElement(e.Fragment,null,r.showExtensions&&Object.keys(t).map((r=>e.createElement(Ra,{key:r},e.createElement(pa,null," ",r.substring(2),": ")," ",e.createElement(va,null,"string"==typeof t[r]?t[r]:JSON.stringify(t[r]))))))))}}function Ca({field:t}){return t.examples?e.createElement(e.Fragment,null,e.createElement(pa,null," ",L("examples"),": "),I(t.examples)?t.examples.map(((r,n)=>{const o=et(t,r),i=t.in?String(o):JSON.stringify(o);return e.createElement(e.Fragment,{key:n},e.createElement(xa,null,i)," ")})):e.createElement(Pa,null,Object.values(t.examples).map(((r,n)=>e.createElement("li",{key:n+r.value},e.createElement(xa,null,et(t,r.value))," -"," ",r.summary||r.description))))):null}const Pa=re.ul`
  margin-top: 1em;
  list-style-position: outside;
`;class Aa extends e.PureComponent{render(){return 0===this.props.constraints.length?null:e.createElement("span",null," ",this.props.constraints.map((t=>e.createElement(wa,{key:t}," ",t," "))))}}const Ia=e.memo((function({value:t,label:r,raw:n}){if(void 0===t)return null;const o=n?String(t):JSON.stringify(t);return e.createElement("div",null,e.createElement(pa,null," ",r," ")," ",e.createElement(xa,null,o))}));function Ta(t){const r=t.schema.pattern,{hideSchemaPattern:n}=e.useContext(de),[o,i]=e.useState(!1),s=e.useCallback((()=>i(!o)),[o]);return!r||n?null:e.createElement(e.Fragment,null,e.createElement(ba,null,o||r.length<45?r:`${r.substr(0,45)}...`),r.length>45&&e.createElement(ka,{onClick:s},o?"Hide pattern":"Show pattern"))}function _a({schema:t}){const{hideSchemaPattern:r}=e.useContext(de);return t&&("string"!==t.type||t.constraints.length)&&((null==t?void 0:t.pattern)&&!r||t.items||t.displayFormat||t.constraints.length)?e.createElement(La,null,"[ items",t.displayFormat&&e.createElement(ma,null," <",t.displayFormat," >"),e.createElement(Aa,{constraints:t.constraints}),e.createElement(Ta,{schema:t}),t.items&&e.createElement(_a,{schema:t.items})," ]"):null}const La=re(ua)`
  margin: 0 5px;
  vertical-align: text-top;
`;var Da=Object.defineProperty,za=Object.getOwnPropertySymbols,Na=Object.prototype.hasOwnProperty,Ma=Object.prototype.propertyIsEnumerable,qa=(e,t,r)=>t in e?Da(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Fa=(e,t)=>{for(var r in t||(t={}))Na.call(t,r)&&qa(e,r,t[r]);if(za)for(var r of za(t))Ma.call(t,r)&&qa(e,r,t[r]);return e};const Ba=(0,la.observer)((t=>{const{enumSkipQuotes:r,hideSchemaTitles:n}=e.useContext(de),{showExamples:o,field:i,renderDiscriminatorSwitch:s}=t,{schema:a,description:l,deprecated:c,extensions:p,in:u,const:d}=i,h="array"===a.type,m=r||"header"===u,f=e.useMemo((()=>!o||void 0===i.example&&void 0===i.examples?null:void 0!==i.examples?e.createElement(Ca,{field:i}):e.createElement(Ia,{label:L("example")+":",value:et(i,i.example),raw:Boolean(i.in)})),[i,o]);return e.createElement("div",null,e.createElement("div",null,e.createElement(ua,null,a.typePrefix),e.createElement(da,null,a.displayType),a.displayFormat&&e.createElement(ma,null," ","<",a.displayFormat,">"," "),a.contentEncoding&&e.createElement(ma,null," ","<",a.contentEncoding,">"," "),a.contentMediaType&&e.createElement(ma,null," ","<",a.contentMediaType,">"," "),a.title&&!n&&e.createElement(ha,null," (",a.title,") "),e.createElement(Aa,{constraints:a.constraints}),e.createElement(Ta,{schema:a}),a.isCircular&&e.createElement(ya,null," ",L("recursive")," "),h&&a.items&&e.createElement(_a,{schema:a.items})),c&&e.createElement("div",null,e.createElement(Ci,{type:"warning"}," ",L("deprecated")," ")),e.createElement(Ia,{raw:m,label:L("default")+":",value:a.default}),!s&&e.createElement(Sa,{isArrayType:h,values:a.enum})," ",f,e.createElement(ja,{extensions:Fa(Fa({},p),a.extensions)}),e.createElement("div",null,e.createElement(Ps,{compact:!0,source:l})),a.externalDocs&&e.createElement(Ea,{externalDocs:a.externalDocs,compact:!0}),s&&s(t)||null,d&&e.createElement(Ia,{label:L("const")+":",value:d})||null)})),Qa=e.memo(Ba);var Ua=Object.defineProperty,Wa=(Object.getOwnPropertyDescriptor,Object.getOwnPropertySymbols),Va=Object.prototype.hasOwnProperty,Ha=Object.prototype.propertyIsEnumerable,Ja=(e,t,r)=>t in e?Ua(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let Ya=class extends e.Component{constructor(){super(...arguments),this.toggle=()=>{void 0===this.props.field.expanded&&this.props.expandByDefault?this.props.field.collapse():this.props.field.toggle()},this.handleKeyPress=e=>{"Enter"===e.key&&(e.preventDefault(),this.toggle())}}render(){const{className:t="",field:r,isLast:n,expandByDefault:o}=this.props,{name:i,deprecated:s,required:a,kind:l}=r,c=!r.schema.isPrimitive&&!r.schema.isCircular,p=void 0===r.expanded?o:r.expanded,u=e.createElement(e.Fragment,null,"additionalProperties"===l&&e.createElement(ga,null,"additional property"),"patternProperties"===l&&e.createElement(ga,null,"pattern property"),a&&e.createElement(fa,null,"required")),d=c?e.createElement(ca,{className:s?"deprecated":"",kind:l,title:i},e.createElement(Di,null),e.createElement("button",{onClick:this.toggle,onKeyPress:this.handleKeyPress,"aria-label":"expand properties"},e.createElement("span",{className:"property-name"},i),e.createElement(ji,{direction:p?"down":"right"})),u):e.createElement(_i,{className:s?"deprecated":void 0,kind:l,title:i},e.createElement(Di,null),e.createElement("span",{className:"property-name"},i),u);return e.createElement(e.Fragment,null,e.createElement("tr",{className:n?"last "+t:t},d,e.createElement(Li,null,e.createElement(Qa,((e,t)=>{for(var r in t||(t={}))Va.call(t,r)&&Ja(e,r,t[r]);if(Wa)for(var r of Wa(t))Ha.call(t,r)&&Ja(e,r,t[r]);return e})({},this.props)))),p&&c&&e.createElement("tr",{key:r.name+"inner"},e.createElement(Ti,{colSpan:2},e.createElement(zi,null,e.createElement(Pl,{schema:r.schema,skipReadOnly:this.props.skipReadOnly,skipWriteOnly:this.props.skipWriteOnly,showTitle:this.props.showTitle,level:this.props.level})))))}};Ya=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Ya);Object.defineProperty,Object.getOwnPropertyDescriptor;let Za=class extends e.Component{constructor(){super(...arguments),this.changeActiveChild=e=>{void 0!==e.idx&&this.props.parent.activateOneOf(e.idx)}}sortOptions(e,t){if(0===t.length)return;const r={};t.forEach(((e,t)=>{r[e]=t})),e.sort(((e,t)=>r[e.value]>r[t.value]?1:-1))}render(){const{parent:t,enumValues:r}=this.props;if(void 0===t.oneOf)return null;const n=t.oneOf.map(((e,t)=>({value:e.title,idx:t}))),o=n[t.activeOneOf].value;return this.sortOptions(n,r),e.createElement(us,{value:o,options:n,onChange:this.changeActiveChild,ariaLabel:"Example"})}};Za=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Za);const Ga=(0,la.observer)((({schema:{fields:t=[],title:r},showTitle:n,discriminator:o,skipReadOnly:i,skipWriteOnly:s,level:a})=>{const{expandSingleSchemaField:l,showObjectSchemaExamples:c,schemaExpansionLevel:p}=e.useContext(de),u=e.useMemo((()=>i||s?t.filter((e=>!(i&&e.schema.readOnly||s&&e.schema.writeOnly))):t),[i,s,t]),d=l&&1===u.length||p>=a;return e.createElement(Ni,null,n&&e.createElement(Ai,null,r),e.createElement("tbody",null,m(u,((t,r)=>e.createElement(Ya,{key:t.name,isLast:r,field:t,expandByDefault:d,renderDiscriminatorSwitch:(null==o?void 0:o.fieldName)===t.name?()=>e.createElement(Za,{parent:o.parentSchema,enumValues:t.schema.enum}):void 0,className:t.expanded?"expanded":void 0,showExamples:c,skipReadOnly:i,skipWriteOnly:s,showTitle:n,level:a})))))}));var Xa=Object.defineProperty,Ka=Object.defineProperties,el=Object.getOwnPropertyDescriptors,tl=Object.getOwnPropertySymbols,rl=Object.prototype.hasOwnProperty,nl=Object.prototype.propertyIsEnumerable,ol=(e,t,r)=>t in e?Xa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,il=(e,t)=>{for(var r in t||(t={}))rl.call(t,r)&&ol(e,r,t[r]);if(tl)for(var r of tl(t))nl.call(t,r)&&ol(e,r,t[r]);return e},sl=(e,t)=>Ka(e,el(t));const al=re.div`
  padding-left: ${({theme:e})=>2*e.spacing.unit}px;
`;class ll extends e.PureComponent{render(){const t=this.props.schema,r=t.items,n=void 0===t.minItems&&void 0===t.maxItems?"":`(${at(t)})`;return t.fields?e.createElement(Ga,sl(il({},this.props),{level:this.props.level})):!t.displayType||r||n.length?e.createElement("div",null,e.createElement(Bi,null," Array ",n),e.createElement(al,null,e.createElement(Pl,sl(il({},this.props),{schema:r}))),e.createElement(Qi,null)):e.createElement("div",null,e.createElement(da,null,t.displayType))}}var cl=Object.defineProperty,pl=Object.defineProperties,ul=Object.getOwnPropertyDescriptor,dl=Object.getOwnPropertyDescriptors,hl=Object.getOwnPropertySymbols,ml=Object.prototype.hasOwnProperty,fl=Object.prototype.propertyIsEnumerable,gl=(e,t,r)=>t in e?cl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,yl=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?ul(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&cl(t,r,i),i};let bl=class extends e.Component{constructor(){super(...arguments),this.activateOneOf=()=>{this.props.schema.activateOneOf(this.props.idx)}}render(){const{idx:t,schema:r,subSchema:n}=this.props;return e.createElement(Fi,{deprecated:n.deprecated,active:t===r.activeOneOf,onClick:this.activateOneOf},n.title||n.typePrefix+n.displayType)}};bl=yl([la.observer],bl);let xl=class extends e.Component{render(){const{schema:{oneOf:t},schema:r}=this.props;if(void 0===t)return null;const n=t[r.activeOneOf];return e.createElement("div",null,e.createElement(qi,null," ",r.oneOfType," "),e.createElement(Mi,null,t.map(((t,n)=>e.createElement(bl,{key:t.pointer,schema:r,subSchema:t,idx:n})))),e.createElement("div",null,t[r.activeOneOf].deprecated&&e.createElement(Ci,{type:"warning"},"Deprecated")),e.createElement(Aa,{constraints:n.constraints}),e.createElement(Pl,(o=((e,t)=>{for(var r in t||(t={}))ml.call(t,r)&&gl(e,r,t[r]);if(hl)for(var r of hl(t))fl.call(t,r)&&gl(e,r,t[r]);return e})({},this.props),pl(o,dl({schema:n})))));var o}};xl=yl([la.observer],xl);const vl=(0,la.observer)((({schema:t})=>e.createElement("div",null,e.createElement(da,null,t.displayType),t.title&&e.createElement(ha,null," ",t.title," "),e.createElement(ya,null," ",L("recursive")," "))));var wl=Object.defineProperty,kl=Object.defineProperties,Ol=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),El=Object.getOwnPropertySymbols,Sl=Object.prototype.hasOwnProperty,$l=Object.prototype.propertyIsEnumerable,Rl=(e,t,r)=>t in e?wl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,jl=(e,t)=>{for(var r in t||(t={}))Sl.call(t,r)&&Rl(e,r,t[r]);if(El)for(var r of El(t))$l.call(t,r)&&Rl(e,r,t[r]);return e},Cl=(e,t)=>kl(e,Ol(t));let Pl=class extends e.Component{render(){var t;const r=this.props,{schema:n}=r,o=((e,t)=>{var r={};for(var n in e)Sl.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&El)for(var n of El(e))t.indexOf(n)<0&&$l.call(e,n)&&(r[n]=e[n]);return r})(r,["schema"]),i=(o.level||0)+1;if(!n)return e.createElement("em",null," Schema not provided ");const{type:s,oneOf:a,discriminatorProp:l,isCircular:c}=n;if(c)return e.createElement(vl,{schema:n});if(void 0!==l){if(!a||!a.length)return console.warn(`Looks like you are using discriminator wrong: you don't have any definition inherited from the ${n.title}`),null;const t=a[n.activeOneOf];return t.isCircular?e.createElement(vl,{schema:t}):e.createElement(Ga,Cl(jl({},o),{level:i,schema:t,discriminator:{fieldName:l,parentSchema:n}}))}if(void 0!==a)return e.createElement(xl,jl({schema:n},o));const p=I(s)?s:[s];if(p.includes("object")){if(null==(t=n.fields)?void 0:t.length)return e.createElement(Ga,Cl(jl({},this.props),{level:i}))}else if(p.includes("array"))return e.createElement(ll,Cl(jl({},this.props),{level:i}));const u={schema:n,name:"",required:!1,description:n.description,externalDocs:n.externalDocs,deprecated:!1,toggle:()=>null,expanded:!1};return e.createElement("div",null,e.createElement(Qa,{field:u}))}};Pl=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Pl);var Al=Object.defineProperty,Il=Object.defineProperties,Tl=Object.getOwnPropertyDescriptors,_l=Object.getOwnPropertySymbols,Ll=Object.prototype.hasOwnProperty,Dl=Object.prototype.propertyIsEnumerable,zl=(e,t,r)=>t in e?Al(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class Nl extends e.PureComponent{constructor(){super(...arguments),this.renderDropdown=t=>{return e.createElement(xs,(r=((e,t)=>{for(var r in t||(t={}))Ll.call(t,r)&&zl(e,r,t[r]);if(_l)for(var r of _l(t))Dl.call(t,r)&&zl(e,r,t[r]);return e})({Label:hs,Dropdown:oa},t),Il(r,Tl({variant:"dark"}))));var r}}static getMediaType(e,t){if(!e)return{};const r={schema:{$ref:e}};return t&&(r.examples={example:{$ref:t}}),r}get mediaModel(){const{parser:e,schemaRef:t,exampleRef:r,options:n}=this.props;return this._mediaModel||(this._mediaModel=new Zn(e,"json",!1,Nl.getMediaType(t,r),n)),this._mediaModel}render(){const{showReadOnly:t=!0,showWriteOnly:r=!1,showExample:n=!0}=this.props;return e.createElement(ci,null,e.createElement(di,null,e.createElement(li,null,e.createElement(Pl,{skipWriteOnly:!r,skipReadOnly:!t,schema:this.mediaModel.schema})),n&&e.createElement(ui,null,e.createElement(Ml,null,e.createElement(sa,{renderDropdown:this.renderDropdown,mediaType:this.mediaModel})))))}}const Ml=re.div`
  background: ${({theme:e})=>e.codeBlock.backgroundColor};
  & > div,
  & > pre {
    padding: ${e=>4*e.theme.spacing.unit}px;
    margin: 0;
  }

  & > div > pre {
    padding: 0;
  }
`,ql=(Y().div`
  background-color: #e4e7eb;
`,Y().ul`
  display: inline;
  list-style: none;
  padding: 0;

  li {
    display: inherit;

    &:after {
      content: ',';
    }
    &:last-child:after {
      content: none;
    }
  }
`,Y().code`
  font-size: ${e=>e.theme.typography.code.fontSize};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin: 0 3px;
  padding: 0.2em;
  display: inline-block;
  line-height: 1;

  &:after {
    content: ',';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }
`),Fl=Y().span`
  &:after {
    content: ' and ';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }

  ${ws};
`,Bl=Y().span`
  ${e=>!e.expanded&&"white-space: nowrap;"}
  &:after {
    content: ' or ';
    ${e=>e.expanded&&"content: ' or \\a';"}
    white-space: pre;
  }

  &:last-child:after,
  &:only-child:after {
    content: none;
  }

  ${ws};
`,Ql=Y().div`
  flex: 1 1 auto;
  cursor: pointer;
`,Ul=Y().div`
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  text-overflow: ellipsis;
  border-radius: 4px;
  overflow: hidden;
  ${e=>e.expanded&&`background: ${e.theme.colors.gray[100]};\n     padding: 8px 9.6px;\n     margin: 20px 0;\n     width: 100%;\n    `};
  ${te.lessThan("small")`
    margin-top: 10px;
  `}
`,Wl=Y()(bi)`
  display: inline-block;
  margin: 0;
`,Vl=Y().div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: ${e=>e.expanded?"column":"row"};
  ${te.lessThan("small")`
    flex-direction: column;
  `}
`,Hl=Y().div`
  margin: 0.5em 0;
`,Jl=Y().div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.dark};
  margin-bottom: 1.5em;
  padding-bottom: 0.7em;

  h5 {
    line-height: 1em;
    margin: 0 0 0.6em;
    font-size: ${({theme:e})=>e.typography.fontSize};
  }

  .redoc-markdown p:first-child {
    display: inline;
  }
`;function Yl({children:t,height:r}){const n=e.createRef(),[o,i]=e.useState(!1),[s,a]=e.useState(!1);return e.useEffect((()=>{n.current&&n.current.clientHeight+20<n.current.scrollHeight&&a(!0)}),[n]),e.createElement(e.Fragment,null,e.createElement(Zl,{ref:n,className:o?"":"container",style:{height:o?"auto":r}},t),e.createElement(Gl,{dimmed:!o},s&&e.createElement(Xl,{onClick:()=>{i(!o)}},o?"See less":"See more")))}const Zl=Y().div`
  overflow-y: hidden;
`,Gl=Y().div`
  text-align: center;
  line-height: 1.5em;
  ${({dimmed:e})=>e&&"background-image: linear-gradient(to bottom, transparent,rgb(255 255 255));\n     position: relative;\n     top: -0.5em;\n     padding-top: 0.5em;\n     background-position-y: -1em;\n    "}
`,Xl=Y().a`
  cursor: pointer;
`,Kl=e.memo((function(t){const{type:r,flow:n,RequiredScopes:o}=t,i=Object.keys((null==n?void 0:n.scopes)||{});return e.createElement(e.Fragment,null,e.createElement(Hl,null,e.createElement("b",null,"Flow type: "),e.createElement("code",null,r," ")),("implicit"===r||"authorizationCode"===r)&&e.createElement(Hl,null,e.createElement("strong",null," Authorization URL: "),e.createElement("code",null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.authorizationUrl},n.authorizationUrl))),("password"===r||"clientCredentials"===r||"authorizationCode"===r)&&e.createElement(Hl,null,e.createElement("b",null," Token URL: "),e.createElement("code",null,n.tokenUrl)),n.refreshUrl&&e.createElement(Hl,null,e.createElement("strong",null," Refresh URL: "),n.refreshUrl),!!i.length&&e.createElement(e.Fragment,null,o||null,e.createElement(Hl,null,e.createElement("b",null," Scopes: ")),e.createElement(Yl,{height:"4em"},e.createElement("ul",null,i.map((t=>e.createElement("li",{key:t},e.createElement("code",null,t)," -"," ",e.createElement(Ps,{className:"redoc-markdown",inline:!0,source:n.scopes[t]||""}))))))))}));function ec(t){const{RequiredScopes:r,scheme:n}=t;return e.createElement(ks,null,n.apiKey?e.createElement(e.Fragment,null,e.createElement(Hl,null,e.createElement("b",null,R(n.apiKey.in||"")," parameter name: "),e.createElement("code",null,n.apiKey.name)),r):n.http?e.createElement(e.Fragment,null,e.createElement(Hl,null,e.createElement("b",null,"HTTP Authorization Scheme: "),e.createElement("code",null,n.http.scheme)),e.createElement(Hl,null,"bearer"===n.http.scheme&&n.http.bearerFormat&&e.createElement(e.Fragment,null,e.createElement("b",null,"Bearer format: "),e.createElement("code",null,n.http.bearerFormat))),r):n.openId?e.createElement(e.Fragment,null,e.createElement(Hl,null,e.createElement("b",null,"Connect URL: "),e.createElement("code",null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:n.openId.connectUrl},n.openId.connectUrl))),r):n.flows?Object.keys(n.flows).map((t=>e.createElement(Kl,{key:t,type:t,RequiredScopes:r,flow:n.flows[t]}))):null)}const tc={oauth2:"OAuth2",apiKey:"API Key",http:"HTTP",openIdConnect:"OpenID Connect"};class rc extends e.PureComponent{render(){return this.props.securitySchemes.schemes.map((t=>e.createElement(ci,{id:t.sectionId,key:t.id},e.createElement(di,null,e.createElement(li,null,e.createElement(gi,null,e.createElement($i,{to:t.sectionId}),t.displayName),e.createElement(Ps,{source:t.description||""}),e.createElement(Jl,null,e.createElement(Hl,null,e.createElement("b",null,"Security Scheme Type: "),e.createElement("span",null,tc[t.type]||t.type)),e.createElement(ec,{scheme:t})))))))}}var nc=(e,t,r)=>new Promise(((n,o)=>{var i=e=>{try{a(r.next(e))}catch(e){o(e)}},s=e=>{try{a(r.throw(e))}catch(e){o(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,s);a((r=r.apply(e,t)).next())}));function oc(e,t){return nc(this,arguments,(function*(e,t,r={}){const n=yield xe(e||t);return new ic(n,t,r)}))}class ic{constructor(e,t,r={},n=!0){this.marker=new Jt,this.disposer=null,this.rawOptions=r,this.options=new H(r,sc),this.scroll=new si(this.options),ri.updateOnHistory(Vt.currentId,this.scroll),this.spec=new Do(e,t,this.options),this.menu=new ri(this.spec,this.scroll,Vt),this.options.disableSearch||(this.search=new ai,n&&this.search.indexItems(this.menu.items),this.disposer=(0,fe.observe)(this.menu,"activeItemIdx",(e=>{this.updateMarkOnMenu(e.newValue)})))}static fromJS(e){const t=new ic(e.spec.data,e.spec.url,e.options,!1);return t.menu.activeItemIdx=e.menu.activeItemIdx||0,t.menu.activate(t.menu.flatItems[t.menu.activeItemIdx]),t.options.disableSearch||t.search.load(e.searchIndex),t}onDidMount(){this.menu.updateOnHistory(),this.updateMarkOnMenu(this.menu.activeItemIdx)}dispose(){this.scroll.dispose(),this.menu.dispose(),this.search&&this.search.dispose(),null!=this.disposer&&this.disposer()}toJS(){return nc(this,null,(function*(){return{menu:{activeItemIdx:this.menu.activeItemIdx},spec:{url:this.spec.parser.specUrl,data:this.spec.parser.spec},searchIndex:this.search?yield this.search.toJS():void 0,options:this.rawOptions}}))}updateMarkOnMenu(e){const t=Math.max(0,e),r=Math.min(this.menu.flatItems.length,t+5),n=[];for(let e=t;e<r;e++){const t=this.menu.getElementAt(e);t&&n.push(t)}if(-1===e&&l){const e=document.querySelector('[data-role="redoc-description"]'),t=document.querySelector('[data-role="redoc-summary"]');e&&n.push(e),t&&n.push(t)}this.marker.addOnly(n),this.marker.mark()}}const sc={allowedMdComponents:{[mt]:{component:rc,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[ft]:{component:rc,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[gt]:{component:Nl,propsSelector:e=>({parser:e.spec.parser,options:e.options})}}},ac=re(fi)`
  margin-top: 0;
  margin-bottom: 0.5em;
  color: ${o.palette.green.dark2};
  font-family: 'MongoDB Value Serif';
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;

  ${ne("ApiHeader")};
`,lc=re.a`
  border: 1px solid ${e=>e.theme.colors.primary.main};
  color: ${e=>e.theme.colors.primary.main};
  font-weight: normal;
  margin-left: 0.5em;
  padding: 4px 8px 4px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  ${ne("DownloadButton")};
`,cc=re.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${15}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`,pc=re.div`
  overflow: hidden;
`,uc=re.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${15}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let dc=class extends e.Component{constructor(){super(...arguments),this.handleDownloadClick=e=>{e.target.href||(e.target.href=this.props.store.spec.info.downloadLink)}}render(){const{store:t}=this.props,{info:r,externalDocs:n}=t.spec,o=t.options.hideDownloadButton,i=r.downloadFileName,s=r.downloadLink,a=r.license&&e.createElement(cc,null,"License:"," ",r.license.identifier?r.license.identifier:e.createElement("a",{href:r.license.url},r.license.name))||null,l=r.contact&&r.contact.url&&e.createElement(cc,null,"URL: ",e.createElement("a",{href:r.contact.url},r.contact.url))||null,c=r.contact&&r.contact.email&&e.createElement(cc,null,r.contact.name||"E-mail",":"," ",e.createElement("a",{href:"mailto:"+r.contact.email},r.contact.email))||null,p=r.termsOfService&&e.createElement(cc,null,e.createElement("a",{href:r.termsOfService},"Terms of Service"))||null,u=r.version&&e.createElement("span",null,"(",r.version,")")||null;return e.createElement(ci,null,e.createElement(di,null,e.createElement(li,{className:"api-info"},e.createElement(ac,null,r.title," ",u),!o&&e.createElement("p",null,L("downloadSpecification"),":",e.createElement(lc,{download:i||!0,target:"_blank",href:s,onClick:this.handleDownloadClick},L("download"))),e.createElement(ks,null,(r.license||r.contact||r.termsOfService)&&e.createElement(pc,null,e.createElement(uc,null,c," ",l," ",a," ",p))||null),e.createElement(Ps,{source:t.spec.info.summary,"data-role":"redoc-summary"}),e.createElement(Ps,{source:t.spec.info.description,"data-role":"redoc-description"}),n&&e.createElement(Ea,{externalDocs:n}))))}};dc=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],dc);const hc=re.img`
  max-height: ${e=>e.theme.logo.maxHeight};
  max-width: ${e=>e.theme.logo.maxWidth};
  padding: ${e=>e.theme.logo.gutter};
  width: 100%;
  display: block;
`,mc=re.div`
  text-align: center;
`,fc=re.a`
  display: inline-block;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let gc=class extends e.Component{render(){const{info:t}=this.props,r=t["x-logo"];if(!r||!r.url)return null;const n=r.href||t.contact&&t.contact.url,o=r.altText?r.altText:"logo",i=e.createElement(hc,{src:r.url,alt:o});return e.createElement(mc,{style:{backgroundColor:r.backgroundColor}},n?(s=n,t=>e.createElement(fc,{href:s},t))(i):i);var s}};gc=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],gc);var yc=Object.defineProperty,bc=Object.getOwnPropertySymbols,xc=Object.prototype.hasOwnProperty,vc=Object.prototype.propertyIsEnumerable,wc=(e,t,r)=>t in e?yc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,kc=(e,t)=>{for(var r in t||(t={}))xc.call(t,r)&&wc(e,r,t[r]);if(bc)for(var r of bc(t))vc.call(t,r)&&wc(e,r,t[r]);return e};class Oc extends e.Component{render(){return e.createElement(me,null,(t=>e.createElement(wi,null,(e=>this.renderWithOptionsAndStore(t,e)))))}renderWithOptionsAndStore(t,r){const{source:n,htmlWrap:o=(e=>e)}=this.props;if(!r)throw new Error("When using components in markdown, store prop must be provided");const i=new Wr(t,this.props.parentId).renderMdWithComponents(n);return i.length?i.map(((t,n)=>{if("string"==typeof t)return e.cloneElement(o(e.createElement(Cs,{html:t,inline:!1,compact:!1})),{key:n});const i=t.component;return e.createElement(i,kc({key:n},kc(kc({},t.props),t.propsSelector(r))))})):null}}var Ec=require("classnames"),Sc=r.n(Ec);function $c(e,t){return void 0===e?"background-color: #999999;":"string"==typeof e?`\n      background-color: ${e||"#999999"};\n    `:`\n      background-color: ${e[t].backgroundColor};\n      border-color: ${e[t].borderColor};\n      color: ${e[t].color};\n    `}const Rc=re.span.attrs((e=>({className:`operation-type ${e.type}`})))`
  width: 9ex;
  display: inline-block;
  height: ${e=>e.theme.typography.code.fontSize};
  line-height: ${e=>e.theme.typography.code.fontSize};
  background-color: #333;
  border: ${e=>e.theme.badges.border};
  border-radius: ${e=>e.theme.badges.borderRadius};
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: ${e=>e.theme.typography.fontFamily};
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  ${e=>$c(e.theme.colors.http[e.type],"light")}
`;function jc(e,{theme:t},r){return e>1?t.sidebar.level1Items[r]:1===e?t.sidebar.groupItems[r]:""}const Cc=re.ul`
  margin: 0;
  padding: 0;

  & & {
    font-size: 0.929em;
  }

  ${e=>e.expanded?"":"display: none;"};
`,Pc=re.li`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${e=>0===e.depth?"margin-top: 15px":""};
`,Ac=re.a`
  text-decoration: none;
`,Ic={0:G`
    opacity: 0.7;
    text-transform: ${({theme:e})=>e.sidebar.groupItems.textTransform};
    font-size: 13px;
    padding-bottom: 0;
    cursor: default;
  `,1:G`
    font-size: 13px;
    text-transform: ${({theme:e})=>e.sidebar.level1Items.textTransform};
  `},Tc=re.label.attrs((e=>({role:"menuitem",className:Sc()("-depth"+e.depth,{active:e.active})})))`
  cursor: pointer;
  color: ${e=>function(e){const{active:t,depth:r,isBackButton:n,theme:i}=e;return n?o.palette.gray.dark1:t?jc(r,e,"activeTextColor"):i.sidebar.textColor}(e)};
  margin: 0;
  ${e=>e.isBackButton&&"margin-top: 16px;"}
  padding: 6px 16px;
  ${({depth:e,type:t,theme:r})=>"section"===t&&e>1&&"padding-left: "+8*r.spacing.unit+"px;"||""}
  display: flex;
  justify-content: space-between;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  ${e=>Ic[e.depth]};
  background-color: ${e=>e.active?jc(e.depth,e,"activeBackgroundColor"):e.theme.sidebar.backgroundColor};

  ${e=>e.deprecated&&Pi||""};

  &:hover {
    color: ${e=>e.isBackButton?o.palette.gray.dark1:jc(e.depth,e,"activeTextColor")};
    background-color: ${o.palette.gray.light2};
  }

  ${ji} {
    height: ${({theme:e})=>e.sidebar.arrow.size};
    width: ${({theme:e})=>e.sidebar.arrow.size};
    polygon {
      fill: ${({theme:e})=>e.sidebar.arrow.color};
    }
  }
`,_c=re.hr`
  border: unset;
  border-bottom: 1px solid ${o.palette.gray.light2};
  margin: 16px 0;
  width: 100%;
`,Lc=re.span`
  display: inline-block;
  vertical-align: middle;
  width: ${e=>e.width?e.width:"auto"};
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 13px;
`,Dc=re.div`
  ${({theme:e})=>G`
    font-size: 0.8em;
    margin-top: ${2*e.spacing.unit}px;
    text-align: center;
    position: sticky;
    width: ${e.sidebar.width};
    bottom: 0;
    background: ${e.sidebar.backgroundColor};

    a,
    a:visited,
    a:hover {
      color: ${e.sidebar.textColor} !important;
      padding: ${e.spacing.unit}px 0;
      border-top: 1px solid ${(0,t.darken)(.1,e.sidebar.backgroundColor)};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};
  img {
    width: 15px;
    margin-right: 5px;
  }

  ${te.lessThan("small")`
    width: 100%;
  `};
`,zc=re.button`
  border: 0;
  width: 100%;
  text-align: left;
  & > * {
    vertical-align: middle;
  }

  ${ji} {
    polygon {
      fill: ${({theme:e})=>(0,t.darken)(e.colors.tonalOffset,e.colors.gray[100])};
    }
  }
`,Nc=re.span`
  text-decoration: ${e=>e.deprecated?"line-through":"none"};
  margin-right: 8px;
`,Mc=re(Rc)`
  margin: 0 5px 0 0;
`,qc=re((t=>{const{name:r,opened:n,className:o,onClick:i,httpVerb:s,deprecated:a}=t;return e.createElement(zc,{className:o,onClick:i||void 0},e.createElement(Mc,{type:s},xt(s)),e.createElement(ji,{size:"1.5em",direction:n?"down":"right",float:"left"}),e.createElement(Nc,{deprecated:a},r),a?e.createElement(Ci,{type:"warning"}," ",L("deprecated")," "):null)}))`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  cursor: pointer;
  outline-color: ${({theme:e})=>(0,t.darken)(e.colors.tonalOffset,e.colors.gray[100])};
`,Fc=re.div`
  padding: 10px 25px;
  background-color: ${({theme:e})=>e.colors.gray[50]};
  margin-bottom: 5px;
  margin-top: 5px;
`;class Bc extends e.PureComponent{constructor(){super(...arguments),this.selectElement=()=>{Ns.selectElement(this.child)}}render(){const{children:t}=this.props;return e.createElement("div",{ref:e=>this.child=e,onClick:this.selectElement,onFocus:this.selectElement,tabIndex:0,role:"button"},t)}}const Qc=re.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`,Uc=re.span`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Wc=re.button`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${e=>e.inverted?"10px":"20px"};
  border-radius: ${e=>e.inverted?"0":"4px 4px 0 0"};
  background-color: ${o.palette.gray.dark3};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${e=>e.inverted?"0":"1px solid transparent"};
  border-bottom: ${e=>e.inverted?"1px solid #ccc":"0"};
  transition: border-color 0.25s ease;

  ${e=>e.expanded&&!e.inverted&&`border-color: ${e.theme.colors.border.dark};`||""}

  .${Uc} {
    color: ${e=>e.inverted?e.theme.colors.text.primary:"#ffffff"};
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`,Vc=re.span.attrs((e=>({className:`http-verb ${e.type}`})))`
  font-size: 12px;
  line-height: ${e=>e.compact?"18px":"20px"};
  color: #ffffff;
  padding: ${e=>e.compact?"2px 8px":"3px 10px"};
  text-transform: uppercase;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  font-weight: bold;
  margin: 0;
  border: ${e=>e.theme.badges.border};
  border-radius: ${e=>e.theme.badges.borderRadius};
  ${e=>$c(e.theme.colors.http[e.type],"dark")}
`,Hc=re.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${e=>e.theme.rightPanel.servers.overlay.backgroundColor};
  color: ${e=>e.theme.rightPanel.servers.overlay.textColor};
  font-size: 13px;
  box-sizing: border-box;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${e=>e.expanded?"visibility: visible;":"transform: translateY(-50%) scaleY(0);"}
`,Jc=re.div`
  padding: 10px;
`,Yc=re.div`
  padding: 5px;
  border: 1px solid ${o.palette.gray.dark2};
  background: ${e=>e.theme.rightPanel.servers.url.backgroundColor};
  font-family: 'Source Code Pro';
  font-size: 13px;
  word-break: break-all;
  color: ${o.palette.white};
  > span {
    color: ${o.palette.white};
  }
`;class Zc extends e.Component{constructor(e){super(e),this.toggle=()=>{this.setState({expanded:!this.state.expanded})},this.state={expanded:!1}}render(){const{operation:t,inverted:r,hideHostname:n}=this.props,{expanded:o}=this.state;return e.createElement(de.Consumer,null,(i=>e.createElement(Qc,null,e.createElement(Wc,{onClick:this.toggle,expanded:o,inverted:r},e.createElement(Vc,{type:t.httpVerb,compact:this.props.compact},t.httpVerb),e.createElement(Uc,null,t.path),e.createElement(ji,{float:"right",color:r?"black":"white",size:"20px",direction:o?"up":"down",style:{marginRight:"-25px"}})),e.createElement(Hc,{expanded:o,"aria-hidden":!o},t.servers.map((r=>{const o=i.expandDefaultServerVariables?dt(r.url,r.variables):r.url,s=$(o);return e.createElement(Jc,{key:o},e.createElement(Ps,{source:r.description||"",compact:!0}),e.createElement(Bc,null,e.createElement(Yc,null,e.createElement("span",null,n||i.hideHostname?"/"===s?"":s:o),t.path)))}))))))}}class Gc extends e.PureComponent{render(){const{place:t,parameters:r}=this.props;return r&&r.length?e.createElement("div",{key:t},e.createElement(bi,null,t," Parameters"),e.createElement(Ni,null,e.createElement("tbody",null,m(r,((t,r)=>e.createElement(Ya,{key:t.name,isLast:r,field:t,showExamples:!0})))))):null}}Object.defineProperty,Object.getOwnPropertyDescriptor;let Xc=class extends e.Component{constructor(){super(...arguments),this.switchMedia=({idx:e})=>{this.props.content&&void 0!==e&&this.props.content.activate(e)}}render(){const{content:t}=this.props;if(!t||!t.mediaTypes||!t.mediaTypes.length)return null;const r=t.activeMimeIdx,n=t.mediaTypes.map(((e,t)=>({value:e.name,idx:t}))),o=({children:t})=>this.props.withLabel?e.createElement(e.Fragment,null,e.createElement(ra,null,"Content type"),e.createElement(na,null,t)):t;return e.createElement(e.Fragment,null,e.createElement(o,null,this.props.renderDropdown({value:n[r].value,options:n,onChange:this.switchMedia,ariaLabel:"Content type"})),this.props.children(t.active))}};Xc=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Xc);var Kc=Object.defineProperty,ep=Object.getOwnPropertySymbols,tp=Object.prototype.hasOwnProperty,rp=Object.prototype.propertyIsEnumerable,np=(e,t,r)=>t in e?Kc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const op=["path","query","cookie","header"];class ip extends e.PureComponent{orderParams(e){const t={};return e.forEach((e=>{var r,n,o;o=e,(r=t)[n=e.in]||(r[n]=[]),r[n].push(o)})),t}render(){const{body:t,parameters:r=[]}=this.props;if(void 0===t&&void 0===r)return null;const n=this.orderParams(r),o=r.length>0?op:[],i=t&&t.content,s=t&&t.description;return e.createElement(e.Fragment,null,o.map((t=>e.createElement(Gc,{key:t,place:t,parameters:n[t]}))),i&&e.createElement(ap,{content:i,description:s}))}}function sp(t){return e.createElement(bi,{key:"header"},"Request Body schema: ",e.createElement(xs,((e,t)=>{for(var r in t||(t={}))tp.call(t,r)&&np(e,r,t[r]);if(ep)for(var r of ep(t))rp.call(t,r)&&np(e,r,t[r]);return e})({},t)))}function ap(t){const{content:r,description:n}=t,{isRequestType:o}=r;return e.createElement(Xc,{content:r,renderDropdown:sp},(({schema:t})=>e.createElement(e.Fragment,null,void 0!==n&&e.createElement(Ps,{source:n}),"object"===(null==t?void 0:t.type)&&e.createElement(Aa,{constraints:(null==t?void 0:t.constraints)||[]}),e.createElement(Pl,{skipReadOnly:o,skipWriteOnly:!o,key:"schema",schema:t}))))}const lp=e.memo((function({title:t,type:r,empty:n,code:o,opened:i,className:s,onClick:a}){return e.createElement(hp,{className:s,onClick:!n&&a||void 0,"aria-expanded":i,disabled:n},!n&&e.createElement(ji,{size:"1.5em",color:r,direction:i?"down":"right",float:"left"}),e.createElement(dp,null,o," "),e.createElement(Ps,{compact:!0,inline:!0,source:t}))})),cp=re(lp)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${e=>e.theme.colors.responses[e.type].color};
  background-color: ${e=>e.theme.colors.responses[e.type].backgroundColor};
  &:focus {
    outline: auto ${e=>e.theme.colors.responses[e.type].color};
  }
  ${e=>e.empty?'\ncursor: default;\n&::before {\n  content: "—";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n}\n&:focus {\n  outline: 0;\n}\n':""};
`,pp=re.div`
  padding: 10px;
`,up=re(bi.withComponent("caption"))`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`,dp=re.strong`
  vertical-align: top;
`,hp=re.button`
  font-size: ${e=>e.theme.typography.fontSize};
`;class mp extends e.PureComponent{render(){const{headers:t}=this.props;return void 0===t||0===t.length?null:e.createElement(Ni,null,e.createElement(up,null," Response Headers "),e.createElement("tbody",null,m(t,((t,r)=>e.createElement(Ya,{isLast:r,key:t.name,field:t,showExamples:!0})))))}}var fp=Object.defineProperty,gp=Object.getOwnPropertySymbols,yp=Object.prototype.hasOwnProperty,bp=Object.prototype.propertyIsEnumerable,xp=(e,t,r)=>t in e?fp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class vp extends e.PureComponent{constructor(){super(...arguments),this.renderDropdown=t=>e.createElement(bi,{key:"header"},"Response Schema: ",e.createElement(xs,((e,t)=>{for(var r in t||(t={}))yp.call(t,r)&&xp(e,r,t[r]);if(gp)for(var r of gp(t))bp.call(t,r)&&xp(e,r,t[r]);return e})({},t)))}render(){const{description:t,extensions:r,headers:n,content:o}=this.props.response;return e.createElement(e.Fragment,null,t&&e.createElement(Ps,{source:t}),e.createElement(ja,{extensions:r}),e.createElement(mp,{headers:n}),e.createElement(Xc,{content:o,renderDropdown:this.renderDropdown},(({schema:t})=>e.createElement(e.Fragment,null,"object"===(null==t?void 0:t.type)&&e.createElement(Aa,{constraints:(null==t?void 0:t.constraints)||[]}),e.createElement(Pl,{skipWriteOnly:!0,key:"schema",schema:t})))))}}const wp=(0,la.observer)((({response:t})=>{const{extensions:r,headers:n,type:o,summary:i,description:s,code:a,expanded:l,content:c}=t,p=e.useMemo((()=>void 0===c?[]:c.mediaTypes.filter((e=>void 0!==e.schema))),[c]),u=e.useMemo((()=>!(r&&0!==Object.keys(r).length||0!==n.length||0!==p.length||s)),[r,n,p,s]);return e.createElement("div",null,e.createElement(cp,{onClick:()=>t.toggle(),type:o,empty:u,title:i||"",code:a,opened:l}),l&&!u&&e.createElement(pp,null,e.createElement(vp,{response:t})))})),kp=re.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: normal;
`;class Op extends e.PureComponent{render(){const{responses:t,isCallback:r}=this.props;return t&&0!==t.length?e.createElement("div",null,e.createElement(kp,null,L(r?"callbackResponses":"responses")),t.map((t=>e.createElement(wp,{key:t.code,response:t})))):null}}function Ep(t){const{security:r,showSecuritySchemeType:n,expanded:o}=t,i=r.schemes.length>1;return 0===r.schemes.length?e.createElement(Bl,{expanded:o},"None"):e.createElement(Bl,{expanded:o},i&&"(",r.schemes.map((t=>e.createElement(Fl,{key:t.id},n&&`${tc[t.type]||t.type}: `,e.createElement("i",null,t.displayName),o&&t.scopes.length?[" (",t.scopes.map((t=>e.createElement(ql,{key:t},t))),") "]:null))),i&&") ")}const Sp=({scopes:t})=>t.length?e.createElement("div",null,e.createElement("b",null,"Required scopes: "),t.map(((t,r)=>e.createElement(e.Fragment,{key:r},e.createElement("code",null,t)," ")))):null;function $p(t){const r=Oi(),n=null==r?void 0:r.options.showSecuritySchemeType,[o,i]=(0,e.useState)(!1),{securities:s}=t;if(!(null==s?void 0:s.length)||(null==r?void 0:r.options.hideSecuritySection))return null;const a=null==r?void 0:r.spec.securitySchemes.schemes.filter((({id:e})=>s.find((t=>t.schemes.find((t=>t.id===e))))));return e.createElement(e.Fragment,null,e.createElement(Vl,{expanded:o},e.createElement(Ql,{onClick:()=>i(!o)},e.createElement(Wl,null,"Authorizations:"),e.createElement(ji,{size:"1.3em",direction:o?"down":"right"})),e.createElement(Ul,{expanded:o},s.map(((t,r)=>e.createElement(Ep,{key:r,expanded:o,showSecuritySchemeType:n,security:t}))))),o&&(null==a?void 0:a.length)&&a.map(((t,r)=>e.createElement(Jl,{key:r},e.createElement("h5",null,e.createElement(Rp,null)," ",tc[t.type]||t.type,": ",t.id),e.createElement(Ps,{source:t.description||""}),e.createElement(ec,{key:t.id,scheme:t,RequiredScopes:e.createElement(Sp,{scopes:jp(t.id,s)})})))))}const Rp=()=>e.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"11",height:"11"},e.createElement("path",{fill:"currentColor",d:"M18 10V6A6 6 0 0 0 6 6v4H3v14h18V10h-3zM8 6c0-2.206 1.794-4 4-4s4 1.794 4 4v4H8V6zm11 16H5V12h14v10z"}));function jp(e,t){const r=[];let n=t.length;for(;n--;){const o=t[n];let i=o.schemes.length;for(;i--;){const t=o.schemes[i];t.id===e&&Array.isArray(t.scopes)&&r.push(...t.scopes)}}return Array.from(new Set(r))}Object.defineProperty,Object.getOwnPropertyDescriptor;let Cp=class extends e.Component{render(){const{operation:t}=this.props,{description:r,externalDocs:n}=t,o=!(!r&&!n);return e.createElement(Fc,null,o&&e.createElement(Pp,null,void 0!==r&&e.createElement(Ps,{source:r}),n&&e.createElement(Ea,{externalDocs:n})),e.createElement(Zc,{operation:this.props.operation,inverted:!0,compact:!0}),e.createElement(ja,{extensions:t.extensions}),e.createElement($p,{securities:t.security}),e.createElement(ip,{parameters:t.parameters,body:t.requestBody}),e.createElement(Op,{responses:t.responses,isCallback:t.isCallback}))}};Cp=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Cp);const Pp=re.div`
  margin-bottom: ${({theme:e})=>3*e.spacing.unit}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let Ap=class extends e.Component{constructor(){super(...arguments),this.toggle=()=>{this.props.callbackOperation.toggle()}}render(){const{name:t,expanded:r,httpVerb:n,deprecated:o}=this.props.callbackOperation;return e.createElement(e.Fragment,null,e.createElement(qc,{onClick:this.toggle,name:t,opened:r,httpVerb:n,deprecated:o}),r&&e.createElement(Cp,{operation:this.props.callbackOperation}))}};Ap=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Ap);class Ip extends e.PureComponent{render(){const{callbacks:t}=this.props;return t&&0!==t.length?e.createElement("div",null,e.createElement(Tp,null," Callbacks "),t.map((t=>t.operations.map(((r,n)=>e.createElement(Ap,{key:`${t.name}_${n}`,callbackOperation:r})))))):null}}const Tp=re.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: normal;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let _p=class extends e.Component{constructor(e){super(e),this.switchItem=({idx:e})=>{this.props.items&&void 0!==e&&this.setState({activeItemIdx:e})},this.state={activeItemIdx:0}}render(){const{items:t}=this.props;if(!t||!t.length)return null;const r=({children:t})=>this.props.label?e.createElement(e.Fragment,null,e.createElement(ra,null,this.props.label),e.createElement(na,null,t)):t;return e.createElement(e.Fragment,null,e.createElement(r,null,this.props.renderDropdown({value:this.props.options[this.state.activeItemIdx].value,options:this.props.options,onChange:this.switchItem,ariaLabel:this.props.label||"Callback"})),this.props.children(t[this.state.activeItemIdx]))}};_p=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],_p);var Lp=Object.defineProperty,Dp=Object.defineProperties,zp=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Np=Object.getOwnPropertySymbols,Mp=Object.prototype.hasOwnProperty,qp=Object.prototype.propertyIsEnumerable,Fp=(e,t,r)=>t in e?Lp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let Bp=class extends e.Component{constructor(){super(...arguments),this.renderDropdown=t=>{return e.createElement(xs,(r=((e,t)=>{for(var r in t||(t={}))Mp.call(t,r)&&Fp(e,r,t[r]);if(Np)for(var r of Np(t))qp.call(t,r)&&Fp(e,r,t[r]);return e})({Label:ta,Dropdown:oa},t),Dp(r,zp({variant:"dark"}))));var r}}render(){const t=this.props.content;return void 0===t?null:e.createElement(Xc,{content:t,renderDropdown:this.renderDropdown,withLabel:!0},(t=>e.createElement(sa,{key:"samples",mediaType:t,renderDropdown:this.renderDropdown})))}};Bp=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Bp);class Qp extends e.Component{render(){const t=this.props.callback.codeSamples.find((e=>go(e)));return t?e.createElement(Up,null,e.createElement(Bp,{content:t.requestBodyContent})):null}}const Up=re.div`
  margin-top: 15px;
`;var Wp=Object.defineProperty,Vp=Object.defineProperties,Hp=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Jp=Object.getOwnPropertySymbols,Yp=Object.prototype.hasOwnProperty,Zp=Object.prototype.propertyIsEnumerable,Gp=(e,t,r)=>t in e?Wp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let Xp=class extends e.Component{constructor(){super(...arguments),this.renderDropdown=t=>{return e.createElement(xs,(r=((e,t)=>{for(var r in t||(t={}))Yp.call(t,r)&&Gp(e,r,t[r]);if(Jp)for(var r of Jp(t))Zp.call(t,r)&&Gp(e,r,t[r]);return e})({Label:ta,Dropdown:oa},t),Vp(r,Hp({variant:"dark"}))));var r}}render(){const{callbacks:t}=this.props;if(!t||0===t.length)return null;const r=t.map((e=>e.operations.map((e=>e)))).reduce(((e,t)=>e.concat(t)),[]);if(!r.some((e=>e.codeSamples.length>0)))return null;const n=r.map(((e,t)=>({value:`${e.httpVerb.toUpperCase()}: ${e.name}`,idx:t})));return e.createElement("div",null,e.createElement(yi,null," Callback payload samples "),e.createElement(Kp,null,e.createElement(_p,{items:r,renderDropdown:this.renderDropdown,label:"Callback",options:n},(t=>e.createElement(Qp,{key:"callbackPayloadSample",callback:t,renderDropdown:this.renderDropdown})))))}};Xp.contextType=de,Xp=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Xp);const Kp=re.div`
  background: ${({theme:e})=>e.codeBlock.backgroundColor};
  padding: ${e=>4*e.theme.spacing.unit}px;
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let eu=class extends e.Component{render(){const{operation:t}=this.props,r=t.codeSamples,n=r.length>0,o=1===r.length&&this.context.hideSingleRequestSampleTab;return n&&e.createElement("div",null,e.createElement(yi,null," ",L("requestSamples")," "),e.createElement(Wi,{defaultIndex:0},e.createElement(Ui.TabList,{hidden:o},r.map((t=>e.createElement(Ui.Tab,{key:t.lang+"_"+(t.label||"")},void 0!==t.label?t.label:t.lang)))),r.map((t=>e.createElement(Ui.TabPanel,{key:t.lang+"_"+(t.label||"")},go(t)?e.createElement("div",null,e.createElement(Bp,{content:t.requestBodyContent})):e.createElement(Gs,{lang:t.lang,source:t.source}))))))||null}};eu.contextType=de,eu=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],eu);Object.defineProperty,Object.getOwnPropertyDescriptor;let tu=class extends e.Component{render(){const{operation:t}=this.props,r=t.responses.filter((e=>e.content&&e.content.hasSample));return r.length>0&&e.createElement("div",null,e.createElement(yi,null," ",L("responseSamples")," "),e.createElement(Wi,{defaultIndex:0},e.createElement(Ui.TabList,null,r.map((t=>e.createElement(Ui.Tab,{className:"tab-"+t.type,key:t.code},t.code)))),r.map((t=>e.createElement(Ui.TabPanel,{key:t.code},e.createElement("div",null,e.createElement(Bp,{content:t.content})))))))||null}};tu=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],tu);var ru=Object.defineProperty,nu=Object.defineProperties,ou=Object.getOwnPropertyDescriptors,iu=Object.getOwnPropertySymbols,su=Object.prototype.hasOwnProperty,au=Object.prototype.propertyIsEnumerable,lu=(e,t,r)=>t in e?ru(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const cu=re.div`
  margin-bottom: ${({theme:e})=>6*e.spacing.unit}px;
`,pu=(0,la.observer)((({operation:t})=>{const{name:r,description:n,deprecated:o,externalDocs:i,isWebhook:s,httpVerb:a}=t,l=!(!n&&!i),{showWebhookVerb:c}=e.useContext(de);return e.createElement(de.Consumer,null,(p=>{return e.createElement(di,(u=((e,t)=>{for(var r in t||(t={}))su.call(t,r)&&lu(e,r,t[r]);if(iu)for(var r of iu(t))au.call(t,r)&&lu(e,r,t[r]);return e})({},{[ti]:t.operationHash}),d={id:t.operationHash},nu(u,ou(d))),e.createElement(li,null,e.createElement(gi,null,e.createElement($i,{to:t.id}),r," ",o&&e.createElement(Ci,{type:"warning"}," Deprecated "),s&&e.createElement(Ci,{type:"primary"}," ","Webhook ",c&&a&&"| "+a.toUpperCase())),p.pathInMiddlePanel&&!s&&e.createElement(Zc,{operation:t,inverted:!0}),l&&e.createElement(cu,null,void 0!==n&&e.createElement(Ps,{source:n}),i&&e.createElement(Ea,{externalDocs:i})),e.createElement(ja,{extensions:t.extensions}),e.createElement($p,{securities:t.security}),e.createElement(ip,{parameters:t.parameters,body:t.requestBody}),e.createElement(Op,{responses:t.responses}),e.createElement(Ip,{callbacks:t.callbacks})),e.createElement(ui,null,!p.pathInMiddlePanel&&!s&&e.createElement(Zc,{operation:t}),e.createElement(eu,{operation:t}),e.createElement(tu,{operation:t}),e.createElement(Xp,{callbacks:t.callbacks})));var u,d}))}));var uu=Object.defineProperty,du=Object.getOwnPropertyDescriptor,hu=Object.getOwnPropertySymbols,mu=Object.prototype.hasOwnProperty,fu=Object.prototype.propertyIsEnumerable,gu=(e,t,r)=>t in e?uu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,yu=(e,t,r,n)=>{for(var o,i=n>1?void 0:n?du(t,r):t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=(n?o(t,r,i):o(i))||i);return n&&i&&uu(t,r,i),i};let bu=class extends e.Component{render(){const t=this.props.items;return 0===t.length?null:t.map((t=>e.createElement(xu,{key:t.id,item:t})))}};bu=yu([la.observer],bu);let xu=class extends e.Component{render(){const t=this.props.item;let r;const{type:n}=t;switch(n){case"group":r=null;break;case"tag":case"section":default:r=e.createElement(wu,((e,t)=>{for(var r in t||(t={}))mu.call(t,r)&&gu(e,r,t[r]);if(hu)for(var r of hu(t))fu.call(t,r)&&gu(e,r,t[r]);return e})({},this.props));break;case"operation":r=e.createElement(ku,{item:t})}return e.createElement(e.Fragment,null,r&&e.createElement(ci,{id:t.id,underlined:"operation"===t.type},r),t.items&&e.createElement(bu,{items:t.items}))}};xu=yu([la.observer],xu);const vu=t=>e.createElement(li,{compact:!0},t);let wu=class extends e.Component{render(){const{name:t,description:r,externalDocs:n,level:o}=this.props.item,i=2===o?gi:fi;return e.createElement(e.Fragment,null,e.createElement(di,null,e.createElement(li,{compact:!1},e.createElement(i,null,e.createElement($i,{to:this.props.item.id}),t))),e.createElement(Oc,{parentId:this.props.item.id,source:r||"",htmlWrap:vu}),n&&e.createElement(di,null,e.createElement(li,null,e.createElement(Ea,{externalDocs:n}))))}};wu=yu([la.observer],wu);let ku=class extends e.Component{render(){return e.createElement(pu,{operation:this.props.item})}};ku=yu([la.observer],ku);var Ou=Object.defineProperty,Eu=(Object.getOwnPropertyDescriptor,Object.getOwnPropertySymbols),Su=Object.prototype.hasOwnProperty,$u=Object.prototype.propertyIsEnumerable,Ru=(e,t,r)=>t in e?Ou(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let ju=class extends e.Component{render(){const{items:t,root:r,className:n}=this.props,o=null==this.props.expanded||this.props.expanded;return e.createElement(Cc,((e,t)=>{for(var r in t||(t={}))Su.call(t,r)&&Ru(e,r,t[r]);if(Eu)for(var r of Eu(t))$u.call(t,r)&&Ru(e,r,t[r]);return e})({className:n,style:this.props.style,expanded:o},r?{role:"menu"}:{}),t.map(((t,r)=>e.createElement(Du,{key:r,item:t,onActivate:this.props.onActivate}))))}};ju=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],ju);var Cu=Object.defineProperty,Pu=Object.defineProperties,Au=(Object.getOwnPropertyDescriptor,Object.getOwnPropertyDescriptors),Iu=Object.getOwnPropertySymbols,Tu=Object.prototype.hasOwnProperty,_u=Object.prototype.propertyIsEnumerable,Lu=(e,t,r)=>t in e?Cu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let Du=class extends e.Component{constructor(){super(...arguments),this.ref=e.createRef(),this.activate=e=>{this.props.onActivate(this.props.item),e.stopPropagation()}}componentDidMount(){this.scrollIntoViewIfActive()}componentDidUpdate(){this.scrollIntoViewIfActive()}scrollIntoViewIfActive(){this.props.item.active&&this.ref.current&&u(this.ref.current)}render(){const{item:t,withoutChildren:r}=this.props;return e.createElement(Pc,{onClick:this.activate,depth:t.depth,"data-item-id":t.id},"operation"===t.type?e.createElement(zu,(n=((e,t)=>{for(var r in t||(t={}))Tu.call(t,r)&&Lu(e,r,t[r]);if(Iu)for(var r of Iu(t))_u.call(t,r)&&Lu(e,r,t[r]);return e})({},this.props),Pu(n,Au({item:t})))):e.createElement(Tc,{depth:t.depth,active:t.active,type:t.type,ref:this.ref},e.createElement(Lc,{title:t.sidebarLabel},t.sidebarLabel,this.props.children),t.depth>0&&t.items.length>0&&e.createElement(ji,{float:"right",direction:t.expanded?"down":"right"})||null),!r&&t.items&&t.items.length>0&&e.createElement(ju,{expanded:t.expanded,items:t.items,onActivate:this.props.onActivate}));var n}};Du=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Du);const zu=(0,la.observer)((t=>{const{item:r}=t,n=e.createRef(),{showWebhookVerb:o}=e.useContext(de);return e.useEffect((()=>{t.item.active&&n.current&&u(n.current)}),[t.item.active,n]),e.createElement(Tc,{depth:r.depth,active:r.active,deprecated:r.deprecated,ref:n},r.isWebhook?e.createElement(Rc,{type:"hook"},o?r.httpVerb:L("webhook")):e.createElement(Rc,{type:r.httpVerb},xt(r.httpVerb)),e.createElement(Lc,{width:"calc(100% - 38px)"},r.sidebarLabel,t.children))}));function Nu(){const[t,r]=(0,e.useState)(!1);return(0,e.useEffect)((()=>{r(!0)}),[]),t?e.createElement("img",{alt:"redocly logo",onError:()=>r(!1),src:"https://cdn.redoc.ly/redoc/logo-mini.svg"}):null}Object.defineProperty,Object.getOwnPropertyDescriptor;let Mu=class extends e.Component{constructor(){super(...arguments),this.activate=e=>{if(e&&e.active&&this.context.menuToggle)return e.expanded?e.collapse():e.expand();this.props.menu.activateAndScroll(e,!0),setTimeout((()=>{this._updateScroll&&this._updateScroll()}))},this.saveScrollUpdate=e=>{this._updateScroll=e}}render(){const t=this.props.menu;return e.createElement(ls,{updateFn:this.saveScrollUpdate,className:this.props.className,options:{wheelPropagation:!1}},e.createElement(ju,{items:t.items,onActivate:this.activate,root:!0}),e.createElement(Dc,null,e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://redocly.com/redoc/"},e.createElement(Nu,null),"API docs by Redocly")))}};Mu.contextType=de,Mu=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Mu);const qu=({backNavigationPath:t,siteTitle:r})=>{const n=null!=t?t:"https://mongodb.com/docs/",o=`Back to ${null!=r?r:""} Docs`;return e.createElement(e.Fragment,null,e.createElement(Cc,{expanded:!0},e.createElement(Pc,{depth:1},e.createElement(Ac,{href:n},e.createElement(Tc,{depth:1,active:!1,isBackButton:!0},e.createElement(Lc,null,"← ",o))))),e.createElement(_c,null))},Fu=({open:t})=>{const r=t?8:-4;return e.createElement(Qu,null,e.createElement(Bu,{size:15,style:{transform:`translate(2px, ${r}px) rotate(180deg)`,transition:"transform 0.2s ease"}}),e.createElement(Bu,{size:15,style:{transform:`translate(2px, ${0-r}px)`,transition:"transform 0.2s ease"}}))},Bu=({size:t=10,className:r="",style:n})=>e.createElement("svg",{className:r,style:n||{},viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:t,height:t},e.createElement("g",{transform:"translate(904.92214,-879.1482)"},e.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"}))),Qu=re.div`
  user-select: none;
  width: 20px;
  height: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.colors.primary.main};
`;Object.defineProperty,Object.getOwnPropertyDescriptor;let Uu;l&&(Uu=r(322));const Wu=Uu&&Uu(),Vu=re.div`
  width: ${e=>e.theme.sidebar.width};
  background-color: ${e=>e.theme.sidebar.backgroundColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  backface-visibility: hidden;
  /* contain: strict; TODO: breaks layout since Chrome 80*/

  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${te.lessThan("small")`
    position: fixed;
    z-index: 20;
    width: 100%;
    background: ${({theme:e})=>e.sidebar.backgroundColor};
    display: ${e=>e.open?"flex":"none"};
  `};

  @media print {
    display: none;
  }
`,Hu=re.div`
  outline: none;
  user-select: none;
  background-color: ${({theme:e})=>e.fab.backgroundColor};
  color: ${e=>e.theme.colors.primary.main};
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  ${te.lessThan("small")`
    display: flex;
  `};

  bottom: 44px;

  width: 60px;
  height: 60px;
  padding: 0 20px;
  svg {
    color: ${({theme:e})=>e.fab.color};
  }

  @media print {
    display: none;
  }
`;let Ju=class extends e.Component{constructor(){super(...arguments),this.state={offsetTop:"0px"},this.toggleNavMenu=()=>{this.props.menu.toggleSidebar()}}componentDidMount(){Wu&&Wu.add(this.stickyElement),this.setState({offsetTop:this.getScrollYOffset(this.context)})}componentWillUnmount(){Wu&&Wu.remove(this.stickyElement)}getScrollYOffset(e){let t;return t=void 0!==this.props.scrollYOffset?H.normalizeScrollYOffset(this.props.scrollYOffset)():e.scrollYOffset(),t+"px"}render(){const t=this.props.menu.sideBarOpened,r=this.state.offsetTop;return e.createElement(e.Fragment,null,e.createElement(Vu,{open:t,className:this.props.className,style:{top:r,height:`calc(100vh - ${r})`},ref:e=>{this.stickyElement=e}},this.props.children),!this.context.hideFab&&e.createElement(Hu,{onClick:this.toggleNavMenu},e.createElement(Fu,{open:t})))}};Ju.contextType=de,Ju=((e,t,r,n)=>{for(var o,i=t,s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(i)||i);return i})([la.observer],Ju);const Yu=re.header`
  position: relative;
  width: 100%;
  z-index: 99;
`,Zu=re.div`
  font-size: 13px;
  font-weight: bold;
  line-height: 20px;
  margin: 0 16px 24px;
`,Gu=re.div`
  ${({theme:e})=>`\n  font-family: ${e.typography.fontFamily};\n  font-size: ${e.typography.fontSize};\n  font-weight: ${e.typography.fontWeightRegular};\n  line-height: ${e.typography.lineHeight};\n  color: ${e.colors.text.primary};\n  display: flex;\n  position: relative;\n  text-align: left;\n\n  -webkit-font-smoothing: ${e.typography.smoothing};\n  font-smoothing: ${e.typography.smoothing};\n  ${e.typography.optimizeSpeed?"text-rendering: optimizeSpeed !important":""};\n\n  tap-highlight-color: rgba(0, 0, 0, 0);\n  text-size-adjust: 100%;\n\n  * {\n    box-sizing: border-box;\n    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);\n  }\n`};
`,Xu=re.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${e=>e.theme.sidebar.width});
  ${te.lessThan("small",!0)`
    width: 100%;
  `};

  contain: layout;
`,Ku=re.div`
  background: ${({theme:e})=>e.rightPanel.backgroundColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({theme:e})=>{if(e.rightPanel.width.endsWith("%")){const t=parseInt(e.rightPanel.width,10);return`calc((100% - ${e.sidebar.width}) * ${t/100})`}return e.rightPanel.width}};
  ${te.lessThan("medium",!0)`
    display: none;
  `};
`,ed=re.div`
  padding: 5px 0;
`,td=re.input.attrs((()=>({className:"search-input"})))`
  width: calc(100% - ${e=>8*e.theme.spacing.unit}px);
  box-sizing: border-box;
  margin: 0 ${e=>4*e.theme.spacing.unit}px;
  padding: 5px ${e=>2*e.theme.spacing.unit}px 5px
    ${e=>4*e.theme.spacing.unit}px;
  border: 0;
  border-bottom: 1px solid
    ${({theme:e})=>((0,t.getLuminance)(e.sidebar.backgroundColor)>.5?t.darken:t.lighten)(.1,e.sidebar.backgroundColor)};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-weight: bold;
  font-size: 13px;
  color: ${e=>e.theme.sidebar.textColor};
  background-color: transparent;
  outline: none;
`,rd=re((t=>e.createElement("svg",{className:t.className,version:"1.1",viewBox:"0 0 1000 1000",x:"0px",xmlns:"http://www.w3.org/2000/svg",y:"0px"},e.createElement("path",{d:"M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"})))).attrs({className:"search-icon"})`
  position: absolute;
  left: ${e=>4*e.theme.spacing.unit}px;
  height: 1.8em;
  width: 0.9em;

  path {
    fill: ${e=>e.theme.sidebar.textColor};
  }
`,nd=re.div`
  padding: ${e=>e.theme.spacing.unit}px 0;
  background-color: ${({theme:e})=>(0,t.darken)(.05,e.sidebar.backgroundColor)}};
  color: ${e=>e.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({theme:e})=>(0,t.darken)(.1,e.sidebar.backgroundColor)}};
  border-bottom: ${({theme:e})=>(0,t.darken)(.1,e.sidebar.backgroundColor)}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${Tc} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({theme:e})=>(0,t.darken)(.1,e.sidebar.backgroundColor)};
    }

    > svg {
      display: none;
    }
  }
`,od=re.i`
  position: absolute;
  display: inline-block;
  width: ${e=>2*e.theme.spacing.unit}px;
  text-align: center;
  right: ${e=>4*e.theme.spacing.unit}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;var id=Object.defineProperty,sd=Object.getOwnPropertyDescriptor;class ad extends e.PureComponent{constructor(e){super(e),this.activeItemRef=null,this.clear=()=>{this.setState({results:[],noResults:!1,term:"",activeItemIdx:-1}),this.props.marker.unmark()},this.handleKeyDown=e=>{if(27===e.keyCode&&this.clear(),40===e.keyCode&&(this.setState({activeItemIdx:Math.min(this.state.activeItemIdx+1,this.state.results.length-1)}),e.preventDefault()),38===e.keyCode&&(this.setState({activeItemIdx:Math.max(0,this.state.activeItemIdx-1)}),e.preventDefault()),13===e.keyCode){const e=this.state.results[this.state.activeItemIdx];if(e){const t=this.props.getItemById(e.meta);t&&this.props.onActivate(t)}}},this.search=e=>{const{minCharacterLengthToInitSearch:t}=this.context,r=e.target.value;r.length<t?this.clearResults(r):this.setState({term:r},(()=>this.searchCallback(this.state.term)))},this.state={results:[],noResults:!1,term:"",activeItemIdx:-1}}clearResults(e){this.setState({results:[],noResults:!1,term:e}),this.props.marker.unmark()}setResults(e,t){this.setState({results:e,noResults:0===e.length}),this.props.marker.mark(t)}searchCallback(e){this.props.search.search(e).then((t=>{this.setResults(t,e)}))}render(){const{activeItemIdx:t}=this.state,r=this.state.results.filter((e=>this.props.getItemById(e.meta))).map((e=>({item:this.props.getItemById(e.meta),score:e.score}))).sort(((e,t)=>t.score-e.score));return e.createElement(ed,{role:"search","data-role":"redoc-search"},this.state.term&&e.createElement(od,{onClick:this.clear},"×"),e.createElement(rd,null),e.createElement(td,{value:this.state.term,onKeyDown:this.handleKeyDown,placeholder:"Search...","aria-label":"Search",type:"text",onChange:this.search}),r.length>0&&e.createElement(ls,{options:{wheelPropagation:!1}},e.createElement(nd,{"data-role":"search:results"},r.map(((r,n)=>e.createElement(Du,{item:Object.create(r.item,{active:{value:n===t}}),onActivate:this.props.onActivate,withoutChildren:!0,key:r.item.id,"data-role":"search:result"}))))),this.state.term&&this.state.noResults?e.createElement(nd,{"data-role":"search:results"},L("noResultsFound")):null)}}ad.contextType=de,((e,t,r,n)=>{for(var o,i=sd(t,r),s=e.length-1;s>=0;s--)(o=e[s])&&(i=o(t,r,i)||i);i&&id(t,r,i)})([we.bind,(0,we.debounce)(400)],ad.prototype,"searchCallback");class ld extends e.Component{componentDidMount(){this.props.store.onDidMount()}componentWillUnmount(){this.props.store.dispose()}render(){const{store:{spec:t,menu:r,options:n,search:o,marker:i}}=this.props,s=this.props.store;return e.createElement(ee,{theme:n.theme},e.createElement(vi,{value:s},e.createElement(he,{value:n},e.createElement(Yu,null,e.createElement(ue.UnifiedNav,{position:"relative",property:{name:"DOCS",searchParams:[]}})),e.createElement(Gu,{className:"redoc-wrap"},e.createElement(Ju,{menu:r,className:"menu-content"},e.createElement(gc,{info:t.info}),e.createElement(qu,{backNavigationPath:n.backNavigationPath,siteTitle:n.siteTitle}),e.createElement(Zu,null,s.spec.info.title),!n.disableSearch&&e.createElement(ad,{search:o,marker:i,getItemById:r.getItemById,onActivate:r.activateAndScroll})||null,e.createElement(Mu,{menu:r})),e.createElement(Xu,{className:"api-content"},e.createElement(dc,{store:s}),e.createElement(bu,{items:r.items})),e.createElement(Ku,null)),e.createElement(ue.UnifiedFooter,{hideLocale:!0}))))}}ld.propTypes={store:pe.instanceOf(ic).isRequired};const cd=function(t){const{spec:n,specUrl:o,options:i={},onLoaded:s}=t,a=W(i.hideLoading,!1),l=new H(i);if(void 0!==l.nonce)try{r.nc=l.nonce}catch(e){}return e.createElement(ie,null,e.createElement(ki,{spec:n,specUrl:o,options:i,onLoaded:s},(({loading:t,store:r})=>t?a?null:e.createElement(ce,{color:l.theme.colors.primary.main}):e.createElement(ld,{store:r}))))}}(),n}()}));
//# sourceMappingURL=redoc.lib.js.map