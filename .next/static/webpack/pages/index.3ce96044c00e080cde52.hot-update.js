webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/SignalCard.tsx":
/*!*****************************************!*\
  !*** ./pages/components/SignalCard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _TrafficLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrafficLight */ \"./pages/components/TrafficLight.tsx\");\n/* harmony import */ var _DropdownSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownSelector */ \"./pages/components/DropdownSelector.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/thomasdhome/Documents/thomas/Princeton/Job/ELE206/VerilogTrafficLightViewer/pages/components/SignalCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar SignalCard = function SignalCard(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      SignalAvailableIndex = _React$useState2[0],\n      setSignalAvailableIndex = _React$useState2[1];\n\n  var counter = 0;\n\n  if (props.vcdObj.hasOwnProperty('signal')) {\n    var timeArray = props.vcdObj.signal[SignalAvailableIndex].wave; // current requested time is props.index\n\n    while (timeArray[counter][0] < props.index && counter < timeArray.length) {\n      counter++;\n    }\n\n    if (counter == timeArray.length) counter--;else if (timeArray[counter][0] < props.index) counter--;\n  }\n\n  var signalString = props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[counter][1] : '000';\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    title: props.street,\n    style: {\n      width: 300,\n      marginRight: 30\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_DropdownSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    index: props.index,\n    vcdObj: props.vcdObj,\n    setSignalAvailableIndex: setSignalAvailableIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(_TrafficLight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: signalString,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SignalCard, \"XQkdlgNGCxcS/geRBLlwTalehME=\");\n\n_c = SignalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignalCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignalCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TaWduYWxDYXJkLnRzeD85MmZkIl0sIm5hbWVzIjpbIlNpZ25hbENhcmQiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduYWxBdmFpbGFibGVJbmRleCIsInNldFNpZ25hbEF2YWlsYWJsZUluZGV4IiwiY291bnRlciIsInZjZE9iaiIsImhhc093blByb3BlcnR5IiwidGltZUFycmF5Iiwic2lnbmFsIiwid2F2ZSIsImluZGV4IiwibGVuZ3RoIiwic2lnbmFsU3RyaW5nIiwic3RyZWV0Iiwid2lkdGgiLCJtYXJnaW5SaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSx3QkFDOEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBRDlCO0FBQUE7QUFBQSxNQUNuQkMsb0JBRG1CO0FBQUEsTUFDR0MsdUJBREg7O0FBRzFCLE1BQUlDLE9BQU8sR0FBRyxDQUFkOztBQUNBLE1BQUlMLEtBQUssQ0FBQ00sTUFBTixDQUFhQyxjQUFiLENBQTRCLFFBQTVCLENBQUosRUFBMkM7QUFDdkMsUUFBTUMsU0FBUyxHQUFHUixLQUFLLENBQUNNLE1BQU4sQ0FBYUcsTUFBYixDQUFvQk4sb0JBQXBCLEVBQTBDTyxJQUE1RCxDQUR1QyxDQUV2Qzs7QUFDQSxXQUFPRixTQUFTLENBQUNILE9BQUQsQ0FBVCxDQUFtQixDQUFuQixJQUF3QkwsS0FBSyxDQUFDVyxLQUE5QixJQUF1Q04sT0FBTyxHQUFHRyxTQUFTLENBQUNJLE1BQWxFLEVBQTBFO0FBQ3RFUCxhQUFPO0FBQ1Y7O0FBQ0QsUUFBSUEsT0FBTyxJQUFJRyxTQUFTLENBQUNJLE1BQXpCLEVBQWlDUCxPQUFPLEdBQXhDLEtBQ0ssSUFBSUcsU0FBUyxDQUFDSCxPQUFELENBQVQsQ0FBbUIsQ0FBbkIsSUFBd0JMLEtBQUssQ0FBQ1csS0FBbEMsRUFBeUNOLE9BQU87QUFDeEQ7O0FBRUQsTUFBTVEsWUFBWSxHQUFJYixLQUFLLENBQUNNLE1BQU4sQ0FBYUMsY0FBYixDQUE0QixRQUE1QixJQUF3Q1AsS0FBSyxDQUFDTSxNQUFOLENBQWFHLE1BQWIsQ0FBb0JOLG9CQUFwQixFQUEwQ08sSUFBMUMsQ0FBK0NMLE9BQS9DLEVBQXdELENBQXhELENBQXhDLEdBQXFHLEtBQTNIO0FBRUEsU0FDSSxNQUFDLHlDQUFEO0FBQU0sU0FBSyxFQUFFTCxLQUFLLENBQUNjLE1BQW5CO0FBQTJCLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsR0FBVDtBQUFjQyxpQkFBVyxFQUFFO0FBQTNCLEtBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlEQUFEO0FBQWtCLFNBQUssRUFBRWhCLEtBQUssQ0FBQ1csS0FBL0I7QUFBc0MsVUFBTSxFQUFFWCxLQUFLLENBQUNNLE1BQXBEO0FBQTRELDJCQUF1QixFQUFFRix1QkFBckY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxxREFBRDtBQUFjLFNBQUssRUFBRVMsWUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREo7QUFNSCxDQXRCRDs7R0FBTWQsVTs7S0FBQUEsVTtBQXdCU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NpZ25hbENhcmQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2FyZCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFRyYWZmaWNMaWdodCBmcm9tICcuL1RyYWZmaWNMaWdodCdcbmltcG9ydCBEcm9wZG93blNlbGVjdG9yIGZyb20gJy4vRHJvcGRvd25TZWxlY3RvcidcblxuXG5cbmNvbnN0IFNpZ25hbENhcmQgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCBbU2lnbmFsQXZhaWxhYmxlSW5kZXgsIHNldFNpZ25hbEF2YWlsYWJsZUluZGV4XSA9IFJlYWN0LnVzZVN0YXRlKDApXG5cbiAgICBsZXQgY291bnRlciA9IDBcbiAgICBpZiAocHJvcHMudmNkT2JqLmhhc093blByb3BlcnR5KCdzaWduYWwnKSkge1xuICAgICAgICBjb25zdCB0aW1lQXJyYXkgPSBwcm9wcy52Y2RPYmouc2lnbmFsW1NpZ25hbEF2YWlsYWJsZUluZGV4XS53YXZlXG4gICAgICAgIC8vIGN1cnJlbnQgcmVxdWVzdGVkIHRpbWUgaXMgcHJvcHMuaW5kZXhcbiAgICAgICAgd2hpbGUgKHRpbWVBcnJheVtjb3VudGVyXVswXSA8IHByb3BzLmluZGV4ICYmIGNvdW50ZXIgPCB0aW1lQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRlciA9PSB0aW1lQXJyYXkubGVuZ3RoKSBjb3VudGVyLS1cbiAgICAgICAgZWxzZSBpZiAodGltZUFycmF5W2NvdW50ZXJdWzBdIDwgcHJvcHMuaW5kZXgpIGNvdW50ZXItLVxuICAgIH1cblxuICAgIGNvbnN0IHNpZ25hbFN0cmluZyA9IChwcm9wcy52Y2RPYmouaGFzT3duUHJvcGVydHkoJ3NpZ25hbCcpID8gcHJvcHMudmNkT2JqLnNpZ25hbFtTaWduYWxBdmFpbGFibGVJbmRleF0ud2F2ZVtjb3VudGVyXVsxXSA6ICcwMDAnKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgdGl0bGU9e3Byb3BzLnN0cmVldH0gc3R5bGU9e3sgd2lkdGg6IDMwMCwgbWFyZ2luUmlnaHQ6IDMwIH19PlxuICAgICAgICAgICAgPERyb3Bkb3duU2VsZWN0b3IgaW5kZXg9e3Byb3BzLmluZGV4fSB2Y2RPYmo9e3Byb3BzLnZjZE9ian0gc2V0U2lnbmFsQXZhaWxhYmxlSW5kZXg9e3NldFNpZ25hbEF2YWlsYWJsZUluZGV4fSAvPlxuICAgICAgICAgICAgPFRyYWZmaWNMaWdodCB2YWx1ZT17c2lnbmFsU3RyaW5nfSAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWduYWxDYXJkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/SignalCard.tsx\n");

/***/ })

})