"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/dropDownMenu.js":
/*!****************************************!*\
  !*** ./src/components/dropDownMenu.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DropDownMenu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _menuButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menuButton */ \"./src/components/menuButton.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/globalSlice */ \"./redux/globalSlice.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction DropDownMenu(param) {\n    var setOpenMenu = param.setOpenMenu, setShowLoginModal = param.setShowLoginModal;\n    _s();\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    var isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__.selectIsAuthenticated);\n    var user = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(_redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__.selectUser);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white z-50 w-[130px] flex justify-center items-center flex-col p-4 shadow-md rounded-[20px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" hover:scale-110 duration-500 flex-col w-[98%] rounded-lg shadow-lg flex justify-center items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \" text-sm text-[#7e7e7eed]\",\n                        children: \"Welcome,\"\n                    }, void 0, false, {\n                        fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: [\n                            user === null || user === void 0 ? void 0 : user.first_name,\n                            \"!\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            !isAuthenticated ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                buttonText: \"Login\",\n                onClick: function() {\n                    setShowLoginModal(true);\n                    setOpenMenu(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_menuButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                buttonText: \"Logout\",\n                onClick: function() {\n                    dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__.setJwtToken)(null));\n                    dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__.setUser)(null));\n                    dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_4__.setIsAuthenticated)(false));\n                    localStorage.removeItem(\"jwtToken\");\n                    setOpenMenu(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachrizzo/programing/node.js react app/react_app/src/components/dropDownMenu.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(DropDownMenu, \"A8V0WmDPY4Ux8GsK6Ms2n529Z54=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = DropDownMenu;\nvar _c;\n$RefreshReg$(_c, \"DropDownMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kcm9wRG93bk1lbnUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBQ2lCO0FBT3RCO0FBRWxCLFNBQVNTLGFBQWEsS0FBa0M7UUFBaENDLGNBQUYsTUFBRUEsYUFBYUMsb0JBQWYsTUFBZUE7O0lBQ2xELElBQU1DLFdBQVdWLHdEQUFXQTtJQUM1QixJQUFNVyxrQkFBa0JWLHdEQUFXQSxDQUFDSSxxRUFBcUJBO0lBQ3pELElBQU1PLE9BQU9YLHdEQUFXQSxDQUFDSywwREFBVUE7SUFFbkMscUJBQ0UsOERBQUNPO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUE0Qjs7Ozs7O2tDQUMxQyw4REFBQ0U7OzRCQUFJSixpQkFBQUEsMkJBQUFBLEtBQU1LLFVBQVU7NEJBQUM7Ozs7Ozs7Ozs7Ozs7WUFFdkIsQ0FBQ04sZ0NBQ0EsOERBQUNaLG1EQUFVQTtnQkFDVG1CLFlBQVk7Z0JBQ1pDLFNBQVM7b0JBQ1BWLGtCQUFrQjtvQkFDbEJELFlBQVk7Z0JBQ2Q7Ozs7O3FDQUdGLDhEQUFDVCxtREFBVUE7Z0JBQ1RtQixZQUFZO2dCQUNaQyxTQUFTO29CQUNQVCxTQUFTUCwrREFBV0EsQ0FBQztvQkFDckJPLFNBQVNOLDJEQUFPQSxDQUFDO29CQUNqQk0sU0FBU1Isc0VBQWtCQSxDQUFDO29CQUM1QmtCLGFBQWFDLFVBQVUsQ0FBQztvQkFDeEJiLFlBQVk7Z0JBQ2Q7Ozs7Ozs7Ozs7OztBQUtWO0dBakN3QkQ7O1FBQ0xQLG9EQUFXQTtRQUNKQyxvREFBV0E7UUFDdEJBLG9EQUFXQTs7O0tBSEZNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2Ryb3BEb3duTWVudS5qcz9hYzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51QnV0dG9uIGZyb20gXCIuL21lbnVCdXR0b25cIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHtcbiAgc2V0SXNBdXRoZW50aWNhdGVkLFxuICBzZXRKd3RUb2tlbixcbiAgc2V0VXNlcixcbiAgc2VsZWN0SXNBdXRoZW50aWNhdGVkLFxuICBzZWxlY3RVc2VyLFxufSBmcm9tIFwiLi4vLi4vcmVkdXgvZ2xvYmFsU2xpY2VcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcERvd25NZW51KHsgc2V0T3Blbk1lbnUsIHNldFNob3dMb2dpbk1vZGFsIH0pIHtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB1c2VTZWxlY3RvcihzZWxlY3RJc0F1dGhlbnRpY2F0ZWQpO1xuICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3Ioc2VsZWN0VXNlcik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHotNTAgdy1bMTMwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHAtNCBzaGFkb3ctbWQgcm91bmRlZC1bMjBweF1cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGhvdmVyOnNjYWxlLTExMCBkdXJhdGlvbi01MDAgZmxleC1jb2wgdy1bOTglXSByb3VuZGVkLWxnIHNoYWRvdy1sZyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDQgY2xhc3NOYW1lPVwiIHRleHQtc20gdGV4dC1bIzdlN2U3ZWVkXVwiPldlbGNvbWUsPC9oND5cbiAgICAgICAgPGg1Pnt1c2VyPy5maXJzdF9uYW1lfSE8L2g1PlxuICAgICAgPC9kaXY+XG4gICAgICB7IWlzQXV0aGVudGljYXRlZCA/IChcbiAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICBidXR0b25UZXh0PXtcIkxvZ2luXCJ9XG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgc2V0U2hvd0xvZ2luTW9kYWwodHJ1ZSk7XG4gICAgICAgICAgICBzZXRPcGVuTWVudShmYWxzZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgYnV0dG9uVGV4dD17XCJMb2dvdXRcIn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRKd3RUb2tlbihudWxsKSk7XG4gICAgICAgICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcbiAgICAgICAgICAgIGRpc3BhdGNoKHNldElzQXV0aGVudGljYXRlZChmYWxzZSkpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJqd3RUb2tlblwiKTtcbiAgICAgICAgICAgIHNldE9wZW5NZW51KGZhbHNlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk1lbnVCdXR0b24iLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic2V0SXNBdXRoZW50aWNhdGVkIiwic2V0Snd0VG9rZW4iLCJzZXRVc2VyIiwic2VsZWN0SXNBdXRoZW50aWNhdGVkIiwic2VsZWN0VXNlciIsIkRyb3BEb3duTWVudSIsInNldE9wZW5NZW51Iiwic2V0U2hvd0xvZ2luTW9kYWwiLCJkaXNwYXRjaCIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImg1IiwiZmlyc3RfbmFtZSIsImJ1dHRvblRleHQiLCJvbkNsaWNrIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/dropDownMenu.js\n"));

/***/ })

});