webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/SignalCard.tsx":
/*!*****************************************!*\
  !*** ./pages/components/SignalCard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _TrafficLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrafficLight */ \"./pages/components/TrafficLight.tsx\");\n/* harmony import */ var _DropdownSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownSelector */ \"./pages/components/DropdownSelector.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/thomasdhome/Documents/thomas/Princeton/Job/ELE206/VerilogTrafficLightViewer/pages/components/SignalCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar SignalCard = function SignalCard(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      SignalAvailableIndex = _React$useState2[0],\n      setSignalAvailableIndex = _React$useState2[1];\n\n  var timeindex = 0; // find greatest array index for which t (time in array) < props.time (time on slider)\n\n  if (props.vcdObj.hasOwnProperty('signal')) {\n    var timeArray = props.vcdObj.signal[SignalAvailableIndex].wave;\n\n    while (props.time > timeArray[timeindex][0] && timeindex < timeArray.length) {\n      timeindex++;\n    }\n\n    if (timeindex == timeArray.length || props.time < timeArray[timeindex][0]) timeindex--;\n  }\n\n  var signalString = props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[timeindex][1] : '000';\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    title: props.street,\n    style: {\n      width: 300,\n      marginRight: 30\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(_DropdownSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    vcdObj: props.vcdObj,\n    setSignalAvailableIndex: setSignalAvailableIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }\n  }), __jsx(_TrafficLight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: signalString,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SignalCard, \"XQkdlgNGCxcS/geRBLlwTalehME=\");\n\n_c = SignalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignalCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignalCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TaWduYWxDYXJkLnRzeD85MmZkIl0sIm5hbWVzIjpbIlNpZ25hbENhcmQiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduYWxBdmFpbGFibGVJbmRleCIsInNldFNpZ25hbEF2YWlsYWJsZUluZGV4IiwidGltZWluZGV4IiwidmNkT2JqIiwiaGFzT3duUHJvcGVydHkiLCJ0aW1lQXJyYXkiLCJzaWduYWwiLCJ3YXZlIiwidGltZSIsImxlbmd0aCIsInNpZ25hbFN0cmluZyIsInN0cmVldCIsIndpZHRoIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQzhCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUQ5QjtBQUFBO0FBQUEsTUFDbkJDLG9CQURtQjtBQUFBLE1BQ0dDLHVCQURIOztBQUcxQixNQUFJQyxTQUFTLEdBQUcsQ0FBaEIsQ0FIMEIsQ0FJMUI7O0FBQ0EsTUFBSUwsS0FBSyxDQUFDTSxNQUFOLENBQWFDLGNBQWIsQ0FBNEIsUUFBNUIsQ0FBSixFQUEyQztBQUN2QyxRQUFNQyxTQUFTLEdBQUdSLEtBQUssQ0FBQ00sTUFBTixDQUFhRyxNQUFiLENBQW9CTixvQkFBcEIsRUFBMENPLElBQTVEOztBQUNBLFdBQU9WLEtBQUssQ0FBQ1csSUFBTixHQUFhSCxTQUFTLENBQUNILFNBQUQsQ0FBVCxDQUFxQixDQUFyQixDQUFiLElBQXdDQSxTQUFTLEdBQUdHLFNBQVMsQ0FBQ0ksTUFBckU7QUFBNkVQLGVBQVM7QUFBdEY7O0FBQ0EsUUFBSUEsU0FBUyxJQUFJRyxTQUFTLENBQUNJLE1BQXZCLElBQWlDWixLQUFLLENBQUNXLElBQU4sR0FBYUgsU0FBUyxDQUFDSCxTQUFELENBQVQsQ0FBcUIsQ0FBckIsQ0FBbEQsRUFBMkVBLFNBQVM7QUFDdkY7O0FBRUQsTUFBTVEsWUFBWSxHQUFJYixLQUFLLENBQUNNLE1BQU4sQ0FBYUMsY0FBYixDQUE0QixRQUE1QixJQUF3Q1AsS0FBSyxDQUFDTSxNQUFOLENBQWFHLE1BQWIsQ0FBb0JOLG9CQUFwQixFQUEwQ08sSUFBMUMsQ0FBK0NMLFNBQS9DLEVBQTBELENBQTFELENBQXhDLEdBQXVHLEtBQTdIO0FBRUEsU0FDSSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFTCxLQUFLLENBQUNjLE1BQW5CO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxpQkFBVyxFQUFFO0FBQTNCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQWtCLFVBQU0sRUFBRWhCLEtBQUssQ0FBQ00sTUFBaEM7QUFBd0MsMkJBQXVCLEVBQUVGLHVCQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHFEQUFEO0FBQWMsU0FBSyxFQUFFUyxZQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESjtBQU1ILENBbkJEOztHQUFNZCxVOztLQUFBQSxVO0FBcUJTQSx5RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvU2lnbmFsQ2FyZC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAnYW50ZCc7XG5pbXBvcnQgVHJhZmZpY0xpZ2h0IGZyb20gJy4vVHJhZmZpY0xpZ2h0J1xuaW1wb3J0IERyb3Bkb3duU2VsZWN0b3IgZnJvbSAnLi9Ecm9wZG93blNlbGVjdG9yJ1xuXG5cblxuY29uc3QgU2lnbmFsQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IFtTaWduYWxBdmFpbGFibGVJbmRleCwgc2V0U2lnbmFsQXZhaWxhYmxlSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMClcblxuICAgIGxldCB0aW1laW5kZXggPSAwXG4gICAgLy8gZmluZCBncmVhdGVzdCBhcnJheSBpbmRleCBmb3Igd2hpY2ggdCAodGltZSBpbiBhcnJheSkgPCBwcm9wcy50aW1lICh0aW1lIG9uIHNsaWRlcilcbiAgICBpZiAocHJvcHMudmNkT2JqLmhhc093blByb3BlcnR5KCdzaWduYWwnKSkge1xuICAgICAgICBjb25zdCB0aW1lQXJyYXkgPSBwcm9wcy52Y2RPYmouc2lnbmFsW1NpZ25hbEF2YWlsYWJsZUluZGV4XS53YXZlXG4gICAgICAgIHdoaWxlIChwcm9wcy50aW1lID4gdGltZUFycmF5W3RpbWVpbmRleF1bMF0gJiYgdGltZWluZGV4IDwgdGltZUFycmF5Lmxlbmd0aCkgdGltZWluZGV4KytcbiAgICAgICAgaWYgKHRpbWVpbmRleCA9PSB0aW1lQXJyYXkubGVuZ3RoIHx8IHByb3BzLnRpbWUgPCB0aW1lQXJyYXlbdGltZWluZGV4XVswXSkgdGltZWluZGV4LS1cbiAgICB9XG5cbiAgICBjb25zdCBzaWduYWxTdHJpbmcgPSAocHJvcHMudmNkT2JqLmhhc093blByb3BlcnR5KCdzaWduYWwnKSA/IHByb3BzLnZjZE9iai5zaWduYWxbU2lnbmFsQXZhaWxhYmxlSW5kZXhdLndhdmVbdGltZWluZGV4XVsxXSA6ICcwMDAnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgdGl0bGU9e3Byb3BzLnN0cmVldH0gc3R5bGU9e3sgd2lkdGg6IDMwMCwgbWFyZ2luUmlnaHQ6IDMwIH19PlxuICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0b3IgdmNkT2JqPXtwcm9wcy52Y2RPYmp9IHNldFNpZ25hbEF2YWlsYWJsZUluZGV4PXtzZXRTaWduYWxBdmFpbGFibGVJbmRleH0gLz5cbiAgICAgICAgICAgIDxUcmFmZmljTGlnaHQgdmFsdWU9e3NpZ25hbFN0cmluZ30gLz5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2lnbmFsQ2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/components/SignalCard.tsx\n");

/***/ })

})