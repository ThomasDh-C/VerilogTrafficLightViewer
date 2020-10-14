webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/components/SignalCard.tsx":
/*!*****************************************!*\
  !*** ./pages/components/SignalCard.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var _TrafficLight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrafficLight */ \"./pages/components/TrafficLight.tsx\");\n/* harmony import */ var _DropdownSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DropdownSelector */ \"./pages/components/DropdownSelector.tsx\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/thomasdhome/Documents/thomas/Princeton/Job/ELE206/VerilogTrafficLightViewer/pages/components/SignalCard.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\nvar SignalCard = function SignalCard(props) {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      SignalAvailableIndex = _React$useState2[0],\n      setSignalAvailableIndex = _React$useState2[1];\n\n  var counter = 0;\n\n  if (props.vcdObj.hasOwnProperty('signal')) {\n    var timeArray = props.vcdObj.signal[SignalAvailableIndex].wave; // current requested time is props.index\n\n    while (props.time > timeArray[counter][0] && counter < timeArray.length) {\n      counter++;\n    }\n\n    if (counter == timeArray.length) {\n      counter--;\n    } else if (props.index < timeArray[counter][0]) {\n      counter--;\n    }\n  }\n\n  var signalString = props.vcdObj.hasOwnProperty('signal') ? props.vcdObj.signal[SignalAvailableIndex].wave[counter][1] : '000';\n  return __jsx(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    title: props.street,\n    style: {\n      width: 300,\n      marginRight: 30\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(_DropdownSelector__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    index: props.index,\n    vcdObj: props.vcdObj,\n    setSignalAvailableIndex: setSignalAvailableIndex,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }), __jsx(_TrafficLight__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    value: signalString,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }\n  }));\n};\n\n_s(SignalCard, \"XQkdlgNGCxcS/geRBLlwTalehME=\");\n\n_c = SignalCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SignalCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"SignalCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9TaWduYWxDYXJkLnRzeD85MmZkIl0sIm5hbWVzIjpbIlNpZ25hbENhcmQiLCJwcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJTaWduYWxBdmFpbGFibGVJbmRleCIsInNldFNpZ25hbEF2YWlsYWJsZUluZGV4IiwiY291bnRlciIsInZjZE9iaiIsImhhc093blByb3BlcnR5IiwidGltZUFycmF5Iiwic2lnbmFsIiwid2F2ZSIsInRpbWUiLCJsZW5ndGgiLCJpbmRleCIsInNpZ25hbFN0cmluZyIsInN0cmVldCIsIndpZHRoIiwibWFyZ2luUmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBSUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsd0JBQzhCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUQ5QjtBQUFBO0FBQUEsTUFDbkJDLG9CQURtQjtBQUFBLE1BQ0dDLHVCQURIOztBQUcxQixNQUFJQyxPQUFPLEdBQUcsQ0FBZDs7QUFDQSxNQUFJTCxLQUFLLENBQUNNLE1BQU4sQ0FBYUMsY0FBYixDQUE0QixRQUE1QixDQUFKLEVBQTJDO0FBQ3ZDLFFBQU1DLFNBQVMsR0FBR1IsS0FBSyxDQUFDTSxNQUFOLENBQWFHLE1BQWIsQ0FBb0JOLG9CQUFwQixFQUEwQ08sSUFBNUQsQ0FEdUMsQ0FFdkM7O0FBQ0EsV0FBT1YsS0FBSyxDQUFDVyxJQUFOLEdBQWFILFNBQVMsQ0FBQ0gsT0FBRCxDQUFULENBQW1CLENBQW5CLENBQWIsSUFBc0NBLE9BQU8sR0FBR0csU0FBUyxDQUFDSSxNQUFqRSxFQUF5RTtBQUNyRVAsYUFBTztBQUNWOztBQUNELFFBQUlBLE9BQU8sSUFBSUcsU0FBUyxDQUFDSSxNQUF6QixFQUFpQztBQUFFUCxhQUFPO0FBQUksS0FBOUMsTUFDSyxJQUFJTCxLQUFLLENBQUNhLEtBQU4sR0FBY0wsU0FBUyxDQUFDSCxPQUFELENBQVQsQ0FBbUIsQ0FBbkIsQ0FBbEIsRUFBeUM7QUFBRUEsYUFBTztBQUFJO0FBQzlEOztBQUVELE1BQU1TLFlBQVksR0FBSWQsS0FBSyxDQUFDTSxNQUFOLENBQWFDLGNBQWIsQ0FBNEIsUUFBNUIsSUFBd0NQLEtBQUssQ0FBQ00sTUFBTixDQUFhRyxNQUFiLENBQW9CTixvQkFBcEIsRUFBMENPLElBQTFDLENBQStDTCxPQUEvQyxFQUF3RCxDQUF4RCxDQUF4QyxHQUFxRyxLQUEzSDtBQUVBLFNBQ0ksTUFBQyx5Q0FBRDtBQUFNLFNBQUssRUFBRUwsS0FBSyxDQUFDZSxNQUFuQjtBQUEyQixTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFLEdBQVQ7QUFBY0MsaUJBQVcsRUFBRTtBQUEzQixLQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5REFBRDtBQUFrQixTQUFLLEVBQUVqQixLQUFLLENBQUNhLEtBQS9CO0FBQXNDLFVBQU0sRUFBRWIsS0FBSyxDQUFDTSxNQUFwRDtBQUE0RCwyQkFBdUIsRUFBRUYsdUJBQXJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJLE1BQUMscURBQUQ7QUFBYyxTQUFLLEVBQUVVLFlBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKO0FBTUgsQ0F0QkQ7O0dBQU1mLFU7O0tBQUFBLFU7QUF3QlNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY29tcG9uZW50cy9TaWduYWxDYXJkLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQgfSBmcm9tICdhbnRkJztcbmltcG9ydCBUcmFmZmljTGlnaHQgZnJvbSAnLi9UcmFmZmljTGlnaHQnXG5pbXBvcnQgRHJvcGRvd25TZWxlY3RvciBmcm9tICcuL0Ryb3Bkb3duU2VsZWN0b3InXG5cblxuXG5jb25zdCBTaWduYWxDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgW1NpZ25hbEF2YWlsYWJsZUluZGV4LCBzZXRTaWduYWxBdmFpbGFibGVJbmRleF0gPSBSZWFjdC51c2VTdGF0ZSgwKVxuXG4gICAgbGV0IGNvdW50ZXIgPSAwXG4gICAgaWYgKHByb3BzLnZjZE9iai5oYXNPd25Qcm9wZXJ0eSgnc2lnbmFsJykpIHtcbiAgICAgICAgY29uc3QgdGltZUFycmF5ID0gcHJvcHMudmNkT2JqLnNpZ25hbFtTaWduYWxBdmFpbGFibGVJbmRleF0ud2F2ZVxuICAgICAgICAvLyBjdXJyZW50IHJlcXVlc3RlZCB0aW1lIGlzIHByb3BzLmluZGV4XG4gICAgICAgIHdoaWxlIChwcm9wcy50aW1lID4gdGltZUFycmF5W2NvdW50ZXJdWzBdICYmIGNvdW50ZXIgPCB0aW1lQXJyYXkubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb3VudGVyKytcbiAgICAgICAgfVxuICAgICAgICBpZiAoY291bnRlciA9PSB0aW1lQXJyYXkubGVuZ3RoKSB7IGNvdW50ZXItLSB9XG4gICAgICAgIGVsc2UgaWYgKHByb3BzLmluZGV4IDwgdGltZUFycmF5W2NvdW50ZXJdWzBdKSB7IGNvdW50ZXItLSB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2lnbmFsU3RyaW5nID0gKHByb3BzLnZjZE9iai5oYXNPd25Qcm9wZXJ0eSgnc2lnbmFsJykgPyBwcm9wcy52Y2RPYmouc2lnbmFsW1NpZ25hbEF2YWlsYWJsZUluZGV4XS53YXZlW2NvdW50ZXJdWzFdIDogJzAwMCcpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCB0aXRsZT17cHJvcHMuc3RyZWV0fSBzdHlsZT17eyB3aWR0aDogMzAwLCBtYXJnaW5SaWdodDogMzAgfX0+XG4gICAgICAgICAgICA8RHJvcGRvd25TZWxlY3RvciBpbmRleD17cHJvcHMuaW5kZXh9IHZjZE9iaj17cHJvcHMudmNkT2JqfSBzZXRTaWduYWxBdmFpbGFibGVJbmRleD17c2V0U2lnbmFsQXZhaWxhYmxlSW5kZXh9IC8+XG4gICAgICAgICAgICA8VHJhZmZpY0xpZ2h0IHZhbHVlPXtzaWduYWxTdHJpbmd9IC8+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNpZ25hbENhcmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SignalCard.tsx\n");

/***/ })

})