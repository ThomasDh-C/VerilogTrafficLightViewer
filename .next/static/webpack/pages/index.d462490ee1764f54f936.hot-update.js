webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ImportFromFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ImportFromFile */ \"./pages/components/ImportFromFile.tsx\");\n/* harmony import */ var _components_TimeSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/TimeSlider */ \"./pages/components/TimeSlider.tsx\");\n/* harmony import */ var _components_SignalCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/SignalCard */ \"./pages/components/SignalCard.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/thomasdhome/Documents/thomas/Princeton/Job/ELE206/VerilogTrafficLightViewer/pages/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\nvar Row = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div.withConfig({\n  displayName: \"pages__Row\",\n  componentId: \"sc-1ueli4d-0\"\n})([\"display:flex;flex-direction:row;margin:8px 8px 8px 8px;align-content:space-between;\"]);\n_c = Row;\n\nvar Home = function Home() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({}),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      vcdObj = _React$useState2[0],\n      setVCD = _React$useState2[1];\n\n  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState3, 2),\n      time = _React$useState4[0],\n      setTime = _React$useState4[1];\n\n  return __jsx(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, \"Traffic Light\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/PUwhite.svg\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \" ELE206 Lab 4 VCD Viewer \"), __jsx(_components_ImportFromFile__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    setVCD: setVCD,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(Row, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(_components_SignalCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    index: time,\n    vcdObj: vcdObj,\n    street: \"Washington Road\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }), __jsx(_components_SignalCard__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    index: time,\n    vcdObj: vcdObj,\n    street: \"Prospect Avenue\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  })), __jsx(_components_TimeSlider__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    vcdObj: vcdObj,\n    index: index,\n    setIndex: setIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  })), __jsx(\"footer\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.footer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, \"ELE206 Fall 2020\", __jsx(\"img\", {\n    src: \"/PU.svg\",\n    alt: \"Princeton Logo\",\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Home, \"/bEesoWnL1CcblyXD2I59VKE7hc=\");\n\n_c2 = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Row\");\n$RefreshReg$(_c2, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiUm93Iiwic3R5bGVkIiwiZGl2IiwiSG9tZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJ2Y2RPYmoiLCJzZXRWQ0QiLCJ0aW1lIiwic2V0VGltZSIsInN0eWxlcyIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImluZGV4Iiwic2V0SW5kZXgiLCJmb290ZXIiLCJsb2dvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMkZBQVQ7S0FBTUYsRzs7QUFPTixJQUFNRyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQUEsd0JBQ1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBRFI7QUFBQTtBQUFBLE1BQ1ZDLE1BRFU7QUFBQSxNQUNGQyxNQURFOztBQUFBLHlCQUVPSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZQO0FBQUE7QUFBQSxNQUVWRyxJQUZVO0FBQUEsTUFFSkMsT0FGSTs7QUFJakIsU0FDRTtBQUFLLGFBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFNLE9BQUcsRUFBQyxNQUFWO0FBQWlCLFFBQUksRUFBQyxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQU1FO0FBQU0sYUFBUyxFQUFFRCw4REFBTSxDQUFDRSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVGLDhEQUFNLENBQUNHLEtBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFFRSxNQUFDLGtFQUFEO0FBQWdCLFVBQU0sRUFBRU4sTUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUUsTUFBQyxHQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQVksU0FBSyxFQUFFQyxJQUFuQjtBQUF5QixVQUFNLEVBQUVGLE1BQWpDO0FBQXlDLFVBQU0sRUFBQyxpQkFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyw4REFBRDtBQUFZLFNBQUssRUFBRUUsSUFBbkI7QUFBeUIsVUFBTSxFQUFFRixNQUFqQztBQUF5QyxVQUFNLEVBQUMsaUJBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUpGLEVBU0UsTUFBQyw4REFBRDtBQUFZLFVBQU0sRUFBRUEsTUFBcEI7QUFBNEIsU0FBSyxFQUFFUSxLQUFuQztBQUEwQyxZQUFRLEVBQUVDLFFBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixDQU5GLEVBbUJFO0FBQVEsYUFBUyxFQUFFTCw4REFBTSxDQUFDTSxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFRTtBQUFLLE9BQUcsRUFBQyxTQUFUO0FBQW1CLE9BQUcsRUFBQyxnQkFBdkI7QUFBd0MsYUFBUyxFQUFFTiw4REFBTSxDQUFDTyxJQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixDQW5CRixDQURGO0FBNEJELENBaENEOztHQUFNZCxJOztNQUFBQSxJO0FBa0NTQSxtRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1wb3J0RnJvbUZpbGUgZnJvbSAnLi9jb21wb25lbnRzL0ltcG9ydEZyb21GaWxlJ1xuaW1wb3J0IFRpbWVTbGlkZXIgZnJvbSAnLi9jb21wb25lbnRzL1RpbWVTbGlkZXInXG5pbXBvcnQgU2lnbmFsQ2FyZCBmcm9tICcuL2NvbXBvbmVudHMvU2lnbmFsQ2FyZCdcblxuY29uc3QgUm93ID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luOiA4cHggOHB4IDhweCA4cHg7XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gXG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFt2Y2RPYmosIHNldFZDRF0gPSBSZWFjdC51c2VTdGF0ZSh7fSlcbiAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gUmVhY3QudXNlU3RhdGUoMClcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VHJhZmZpYyBMaWdodDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL1BVd2hpdGUuc3ZnXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+IEVMRTIwNiBMYWIgNCBWQ0QgVmlld2VyIDwvaDE+XG4gICAgICAgIDxJbXBvcnRGcm9tRmlsZSBzZXRWQ0Q9e3NldFZDRH0gLz5cblxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxTaWduYWxDYXJkIGluZGV4PXt0aW1lfSB2Y2RPYmo9e3ZjZE9ian0gc3RyZWV0PVwiV2FzaGluZ3RvbiBSb2FkXCIgLz5cbiAgICAgICAgICA8U2lnbmFsQ2FyZCBpbmRleD17dGltZX0gdmNkT2JqPXt2Y2RPYmp9IHN0cmVldD1cIlByb3NwZWN0IEF2ZW51ZVwiIC8+XG4gICAgICAgIDwvUm93PlxuXG4gICAgICAgIDxUaW1lU2xpZGVyIHZjZE9iaj17dmNkT2JqfSBpbmRleD17aW5kZXh9IHNldEluZGV4PXtzZXRJbmRleH0gLz5cblxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIEVMRTIwNiBGYWxsIDIwMjBcbiAgICAgICAgICA8aW1nIHNyYz1cIi9QVS5zdmdcIiBhbHQ9XCJQcmluY2V0b24gTG9nb1wiIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2ID5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})