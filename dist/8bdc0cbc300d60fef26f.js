/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkvue_formats"] = self["webpackChunkvue_formats"] || []).push([["src_components_money_js"],{

/***/ "./src/components/money.js":
/*!*********************************!*\
  !*** ./src/components/money.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// eslint-disable-next-line radix\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\r\n  name: \"VueMoney\",\r\n  props: {\r\n    min_max: {\r\n      type: Array,\r\n      default: () => [1, 10],\r\n    },\r\n  },\r\n  data() {\r\n    return {\r\n      oldValue: \"\",\r\n    };\r\n  },\r\n  methods: {\r\n    onInput(e) {\r\n      const value = e.target.value.replaceAll(\",\", \"\");\r\n      const formatMoney = value.replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, \"$1,\");\r\n      if (\r\n        !/^-?\\d*$/.test(value) ||\r\n        (this.min_max.length &&\r\n          (this.min_max[0] > +value || +value > this.min_max[1]))\r\n      ) {\r\n        e.target.value = this.oldValue;\r\n      } else {\r\n        e.target.value = formatMoney;\r\n        this.oldValue = formatMoney;\r\n      }\r\n    },\r\n  },\r\n  render(h) {\r\n    return h(\"input\", {\r\n      attrs: { type: \"text\", name: \"money-input\", class: \"vf-money\" },\r\n      on: { input: this.onInput },\r\n    });\r\n  },\r\n});\r\n\n\n//# sourceURL=webpack://vue-formats/./src/components/money.js?");

/***/ })

}]);