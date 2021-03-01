!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueFormats=t():e.vueFormats=t()}(self,(function(){return(()=>{var e={521:e=>{e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.default=e.exports,e.exports.__esModule=!0},898:(e,t,n)=>{var r=n(635).default;function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}e.exports=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=o();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var s=i?Object.getOwnPropertyDescriptor(e,a):null;s&&(s.get||s.set)?Object.defineProperty(n,a,s):n[a]=e[a]}return n.default=e,t&&t.set(e,n),n},e.exports.default=e.exports,e.exports.__esModule=!0},635:e=>{function t(n){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=t=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),t(n)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0},541:(e,t,n)=>{"use strict";var r=n(521);t.__esModule=!0,t.default=void 0;var o=r(n(898)),i="VueMoney",a={name:"InputFormats",components:{VueMoney:function(){return Promise.resolve().then((function(){return(0,o.default)(n(692))}))}},props:{type:{type:String,default:i}},data:function(){return{}},render:function(e){var t=function(e,t){switch(e){case i:return t(i,{});default:return""}}(this.type,e);return e("div",{},[t])}};t.default=a},692:(e,t,n)=>{"use strict";t.__esModule=!0,t.default=void 0;var r=n(617),o={name:"VueMoney",props:{minMax:{type:Array,default:function(){return[]}}},data:function(){return{oldValue:""}},methods:{onInput:function(e){var t=e.target.value.replaceAll(",",""),n=(0,r.moneyFormat)(t);!(0,r.checkToOnlyNumber)(t)||this.minMax.length&&(this.minMax[0]>+t||+t>this.minMax[1])?e.target.value=this.oldValue:(e.target.value=n,this.oldValue=n)}},render:function(e){return e("input",{attrs:{type:"text",name:"money-input",class:"vf-money"},on:{input:this.onInput}})}};t.default=o},617:(e,t)=>{"use strict";t.__esModule=!0,t.moneyFormat=t.checkToOnlyNumber=void 0,t.checkToOnlyNumber=function(e){return/^-?\d*$/.test(e)},t.moneyFormat=function(e){return isNaN(+e)||!e.length?"":String(+e).replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,")}},315:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(645),o=n.n(r)()((function(e){return e[1]}));o.push([e.id,".vf-money {\r\n    padding: .25rem .5rem;\r\n    border-radius: .25rem;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid #ced4da;\r\n    font-family: cursive;\r\n    font-size: 1.4rem !important\r\n}\r\n\r\n.vf-money:focus {\r\n    outline: none;\r\n}\r\n",""]);const i=o},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&o[u[0]]||(n&&(u[2]?u[2]="".concat(n," and ").concat(u[2]):u[2]=n),t.push(u))}},t}},468:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a});var r=n(379),o=n.n(r),i=n(315);o()(i.Z,{insert:"head",singleton:!1});const a=i.Z.locals||{}},379:(e,t,n)=>{"use strict";var r,o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),i=[];function a(e){for(var t=-1,n=0;n<i.length;n++)if(i[n].identifier===e){t=n;break}return t}function s(e,t){for(var n={},r=[],o=0;o<e.length;o++){var s=e[o],u=t.base?s[0]+t.base:s[0],l=n[u]||0,c="".concat(u," ").concat(l);n[u]=l+1;var d=a(c),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:c,updater:v(p,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,c=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=c(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function p(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,m=0;function v(e,t){var n,r,o;if(t.singleton){var i=m++;n=f||(f=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=p.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var u=s(e,t),l=0;l<n.length;l++){var c=a(n[l]);0===i[c].references&&(i[c].updater(),i.splice(c,1))}n=u}}}},306:e=>{"use strict";e.exports=JSON.parse('{"name":"vue-formats","version":"0.0.4","description":"Vue library for input formats","main":"dist/vue-formats.js","scripts":{"test":"jest --config jest.config.js","lint":"eslint src","dev":"webpack","build":"webpack --env BUILD_ENV=production"},"keywords":["js","vue","jest"],"author":"Mahmudov Jovid <voidjmp@mail.ru>","bugs":{"url":"https://github.com/VoIdJMp/vue-formats/issues"},"homepage":"https://github.com/VoIdJMp/vue-formats","repository":{"type":"git","url":"git+https://github.com/VoIdJMp/vue-formats.git"},"devDependencies":{"@babel/core":"^7.1.2","@babel/eslint-parser":"^7.12.1","@babel/plugin-proposal-class-properties":"^7.13.0","@babel/plugin-syntax-dynamic-import":"^7.8.3","@babel/plugin-transform-runtime":"^7.1.0","@babel/preset-env":"^7.1.0","@babel/register":"^7.13.0","babel-loader":"^8.0.4","clean-webpack-plugin":"^3.0.0","css-loader":"^5.0.2","eslint":"^7.20.0","eslint-config-prettier":"^7.2.0","eslint-config-standard":"^16.0.2","eslint-plugin-import":"^2.22.1","eslint-plugin-jest":"^24.1.3","eslint-plugin-node":"^11.1.0","eslint-plugin-prettier":"^3.3.1","eslint-plugin-promise":"^4.3.1","eslint-plugin-vue":"^7.6.0","husky":"^4.3.8","jest":"^26.6.3","lint-staged":"^10.5.4","prettier":"^2.2.1","style-loader":"^2.0.0","webpack":"^5.24.0","webpack-cli":"^4.5.0"},"license":"ISC","husky":{"hooks":{"pre-commit":"lint-staged","pre-push":"npm run lint && npm run test"}},"lint-staged":{"*.js":"eslint --cache --fix"}}')}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{"use strict";var e=r,t=n(521);e.__esModule=!0,e.default=void 0;var o=t(n(541)),i=n(306);n(468),o.default.version=i.version,o.default.install=function(e){e.component(o.default.name,o.default)};var a=o.default;e.default=a})(),r})()}));