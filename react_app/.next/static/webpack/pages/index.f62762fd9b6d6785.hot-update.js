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

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/users */ \"./src/api/users.js\");\n/* harmony import */ var _api_usercar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/usercar */ \"./src/api/usercar.js\");\n/* harmony import */ var _api_carChargeHistory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/carChargeHistory */ \"./src/api/carChargeHistory.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ \"./src/components/header.js\");\n/* harmony import */ var _components_loginModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/loginModal */ \"./src/components/loginModal.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_globalSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/globalSlice */ \"./redux/globalSlice.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _components_segmentSelector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/segmentSelector */ \"./src/components/segmentSelector.js\");\n/* harmony import */ var _components_chargeHistoryCard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/chargeHistoryCard */ \"./src/components/chargeHistoryCard.js\");\n/* harmony import */ var _components_Tesla__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Tesla */ \"./src/components/Tesla.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nfunction App() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), user = _useState[0], setUser = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), userCars = _useState1[0], setUserCars = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showLogin = _useState2[0], setShowLogin = _useState2[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    var jwtToken = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_globalSlice__WEBPACK_IMPORTED_MODULE_8__.selectJwtToken);\n    var _useState3 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userCars[0]), 2), selectedCar = _useState3[0], setSelectedCar = _useState3[1];\n    var _useState4 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), carChargingHistory = _useState4[0], setCarChargingHistory = _useState4[1];\n    var isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(_redux_globalSlice__WEBPACK_IMPORTED_MODULE_8__.selectIsAuthenticated);\n    var _useState5 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_13__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), 2), sotal = _useState5[0], setTotal = _useState5[1];\n    //   get current user with user id in redux\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (jwtToken) {\n            var decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(jwtToken);\n            var fetchUser = function() {\n                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_14__._)(function() {\n                    var user;\n                    return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_15__._)(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    (0,_api_users__WEBPACK_IMPORTED_MODULE_2__.getUserById)(decodedToken.id)\n                                ];\n                            case 1:\n                                user = _state.sent();\n                                setUser(user);\n                                return [\n                                    2\n                                ];\n                        }\n                    });\n                });\n                return function fetchUser() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            var getUserCar = function() {\n                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_14__._)(function() {\n                    var userCar;\n                    return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_15__._)(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    (0,_api_usercar__WEBPACK_IMPORTED_MODULE_3__.getUserCarsByUserId)(decodedToken.id)\n                                ];\n                            case 1:\n                                userCar = _state.sent();\n                                setUserCars(userCar);\n                                if (userCar.length > 0) {\n                                    //check if car model is duplicate from fake data\n                                    // if yes, remove it\n                                    userCar.forEach(function(car, index) {\n                                        if (index > 0) {\n                                            if (car.model === userCar[0].model) {\n                                                userCar.splice(index, 1);\n                                            } else if (car.model === userCar[1].model) {\n                                                userCar.splice(index, 1);\n                                            } else if (car.model === userCar[2].model) {\n                                                userCar.splice(index, 1);\n                                            }\n                                        }\n                                    });\n                                }\n                                setSelectedCar(userCar[0]);\n                                return [\n                                    2\n                                ];\n                        }\n                    });\n                });\n                return function getUserCar() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            fetchUser();\n            getUserCar();\n        }\n    }, [\n        jwtToken\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (userCars.length > 0 && selectedCar !== null) {\n            var fetchChargeHistory = function() {\n                var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_14__._)(function() {\n                    var chargeHistory;\n                    return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_15__._)(this, function(_state) {\n                        switch(_state.label){\n                            case 0:\n                                return [\n                                    4,\n                                    (0,_api_carChargeHistory__WEBPACK_IMPORTED_MODULE_4__.getChargeHistoryById)(selectedCar.id)\n                                ];\n                            case 1:\n                                chargeHistory = _state.sent();\n                                setCarChargingHistory(chargeHistory);\n                                chargeHistory.forEach(function(history) {\n                                    setTotal(function(prev) {\n                                        return prev + history.miles;\n                                    });\n                                });\n                                return [\n                                    2\n                                ];\n                        }\n                    });\n                });\n                return function fetchChargeHistory() {\n                    return _ref.apply(this, arguments);\n                };\n            }();\n            fetchChargeHistory();\n        }\n    }, [\n        userCars,\n        selectedCar\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex bg-[#ffffff25]  h-full w-full flex-col justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                setShowLoginModal: setShowLogin\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 7\n            }, this),\n            showLogin && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_loginModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                onClose: function() {\n                    return setShowLogin(false);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex h-[95vh] w-full flex-col-reverse justify-center items-center  md:flex-row \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full md:w-[20%]  md:overflow-y-scroll h-[53%] flex items-center flex-col md:h-[95%]\",\n                        children: carChargingHistory.length > 0 && carChargingHistory.map(function(history) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_chargeHistoryCard__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                chargeHistory: history\n                            }, void 0, false, {\n                                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                lineNumber: 83,\n                                columnNumber: 22\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full h-[67%] md:h-full  \",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" w-full  h-[80%] md:h-[70%]\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" h-[20%] justify-center items-center flex\",\n                                        children: userCars.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_segmentSelector__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                            options: userCars,\n                                            setSelectedCar: setSelectedCar\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                        lineNumber: 88,\n                                        columnNumber: 13\n                                    }, this),\n                                    isAuthenticated && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"h-[75%]\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Tesla__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                            selectedCar: selectedCar ? selectedCar.model : \"Tesla Model 3\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                            lineNumber: 98,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex  justify-center items-center  h-[20%] w-full md:h-[20%]\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \" bg-[#acacac36] mt-1 rounded-lg flex-row flex justify-center items-center  h-[60%] w-[90%]\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"miles: 20,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                            lineNumber: 109,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"Total: 20,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                            lineNumber: 110,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            children: \"miles: 20,000\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                            lineNumber: 111,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                    lineNumber: 108,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                                lineNumber: 106,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/index.js\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"Pemn2XrlNk2268RbFGNgcLnmEq0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector\n    ];\n});\n_c = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSBcIi4uL2FwaS91c2Vyc1wiO1xuaW1wb3J0IHsgZ2V0VXNlckNhcnNCeVVzZXJJZCB9IGZyb20gXCIuLi9hcGkvdXNlcmNhclwiO1xuaW1wb3J0IHsgZ2V0Q2hhcmdlSGlzdG9yeUJ5SWQgfSBmcm9tIFwiLi4vYXBpL2NhckNoYXJnZUhpc3RvcnlcIjtcblxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkZXJcIjtcbmltcG9ydCBMb2dpbk1vZGFsIGZyb20gXCIuLi9jb21wb25lbnRzL2xvZ2luTW9kYWxcIjtcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2VsZWN0SXNBdXRoZW50aWNhdGVkLCBzZWxlY3RKd3RUb2tlbiB9IGZyb20gXCIuLi8uLi9yZWR1eC9nbG9iYWxTbGljZVwiO1xuaW1wb3J0IGp3dERlY29kZSBmcm9tIFwiand0LWRlY29kZVwiO1xuaW1wb3J0IFNlZ21lbnRTZWxlY3RvciBmcm9tIFwiLi4vY29tcG9uZW50cy9zZWdtZW50U2VsZWN0b3JcIjtcbmltcG9ydCBDaGFyZ2VIaXN0b3J5Q2FyZCBmcm9tIFwiLi4vY29tcG9uZW50cy9jaGFyZ2VIaXN0b3J5Q2FyZFwiO1xuaW1wb3J0IFRlc2xhIGZyb20gXCIuLi9jb21wb25lbnRzL1Rlc2xhXCI7XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbdXNlckNhcnMsIHNldFVzZXJDYXJzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Nob3dMb2dpbiwgc2V0U2hvd0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuICBjb25zdCBqd3RUb2tlbiA9IHVzZVNlbGVjdG9yKHNlbGVjdEp3dFRva2VuKTtcbiAgY29uc3QgW3NlbGVjdGVkQ2FyLCBzZXRTZWxlY3RlZENhcl0gPSB1c2VTdGF0ZSh1c2VyQ2Fyc1swXSk7XG4gIGNvbnN0IFtjYXJDaGFyZ2luZ0hpc3RvcnksIHNldENhckNoYXJnaW5nSGlzdG9yeV0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9IHVzZVNlbGVjdG9yKHNlbGVjdElzQXV0aGVudGljYXRlZCk7XG4gIGNvbnN0IFtzb3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMCk7XG5cbiAgLy8gICBnZXQgY3VycmVudCB1c2VyIHdpdGggdXNlciBpZCBpbiByZWR1eFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChqd3RUb2tlbikge1xuICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKGp3dFRva2VuKTtcblxuICAgICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5SWQoZGVjb2RlZFRva2VuLmlkKTtcbiAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgIH07XG4gICAgICBjb25zdCBnZXRVc2VyQ2FyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyQ2FyID0gYXdhaXQgZ2V0VXNlckNhcnNCeVVzZXJJZChkZWNvZGVkVG9rZW4uaWQpO1xuXG4gICAgICAgIHNldFVzZXJDYXJzKHVzZXJDYXIpO1xuICAgICAgICBpZiAodXNlckNhci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgLy9jaGVjayBpZiBjYXIgbW9kZWwgaXMgZHVwbGljYXRlIGZyb20gZmFrZSBkYXRhXG4gICAgICAgICAgLy8gaWYgeWVzLCByZW1vdmUgaXRcbiAgICAgICAgICB1c2VyQ2FyLmZvckVhY2goKGNhciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChpbmRleCA+IDApIHtcbiAgICAgICAgICAgICAgaWYgKGNhci5tb2RlbCA9PT0gdXNlckNhclswXS5tb2RlbCkge1xuICAgICAgICAgICAgICAgIHVzZXJDYXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChjYXIubW9kZWwgPT09IHVzZXJDYXJbMV0ubW9kZWwpIHtcbiAgICAgICAgICAgICAgICB1c2VyQ2FyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoY2FyLm1vZGVsID09PSB1c2VyQ2FyWzJdLm1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdXNlckNhci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2VsZWN0ZWRDYXIodXNlckNhclswXSk7XG4gICAgICB9O1xuICAgICAgZmV0Y2hVc2VyKCk7XG4gICAgICBnZXRVc2VyQ2FyKCk7XG4gICAgfVxuICB9LCBband0VG9rZW5dKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh1c2VyQ2Fycy5sZW5ndGggPiAwICYmIHNlbGVjdGVkQ2FyICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBmZXRjaENoYXJnZUhpc3RvcnkgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNoYXJnZUhpc3RvcnkgPSBhd2FpdCBnZXRDaGFyZ2VIaXN0b3J5QnlJZChzZWxlY3RlZENhci5pZCk7XG4gICAgICAgIHNldENhckNoYXJnaW5nSGlzdG9yeShjaGFyZ2VIaXN0b3J5KTtcbiAgICAgICAgY2hhcmdlSGlzdG9yeS5mb3JFYWNoKChoaXN0b3J5KSA9PiB7XG4gICAgICAgICAgc2V0VG90YWwoKHByZXYpID0+IHByZXYgKyBoaXN0b3J5Lm1pbGVzKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgZmV0Y2hDaGFyZ2VIaXN0b3J5KCk7XG4gICAgfVxuICB9LCBbdXNlckNhcnMsIHNlbGVjdGVkQ2FyXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggYmctWyNmZmZmZmYyNV0gIGgtZnVsbCB3LWZ1bGwgZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8SGVhZGVyIHNldFNob3dMb2dpbk1vZGFsPXtzZXRTaG93TG9naW59IC8+XG5cbiAgICAgIHtzaG93TG9naW4gJiYgPExvZ2luTW9kYWwgb25DbG9zZT17KCkgPT4gc2V0U2hvd0xvZ2luKGZhbHNlKX0gLz59XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaC1bOTV2aF0gdy1mdWxsIGZsZXgtY29sLXJldmVyc2UganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBtZDpmbGV4LXJvdyBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bMjAlXSAgbWQ6b3ZlcmZsb3cteS1zY3JvbGwgaC1bNTMlXSBmbGV4IGl0ZW1zLWNlbnRlciBmbGV4LWNvbCBtZDpoLVs5NSVdXCI+XG4gICAgICAgICAge2NhckNoYXJnaW5nSGlzdG9yeS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBjYXJDaGFyZ2luZ0hpc3RvcnkubWFwKChoaXN0b3J5KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8Q2hhcmdlSGlzdG9yeUNhcmQgY2hhcmdlSGlzdG9yeT17aGlzdG9yeX0gLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzY3JV0gbWQ6aC1mdWxsICBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgIGgtWzgwJV0gbWQ6aC1bNzAlXVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgaC1bMjAlXSBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleFwiPlxuICAgICAgICAgICAgICB7dXNlckNhcnMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPFNlZ21lbnRTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17dXNlckNhcnN9XG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZENhcj17c2V0U2VsZWN0ZWRDYXJ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNzUlXVwiPlxuICAgICAgICAgICAgICAgIDxUZXNsYVxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDYXI9e1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENhciA/IHNlbGVjdGVkQ2FyLm1vZGVsIDogXCJUZXNsYSBNb2RlbCAzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgZmxleCAganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBoLVsyMCVdIHctZnVsbCBtZDpoLVsyMCVdXCI+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCIgYmctWyM5YzljOWM1YV0gcm91bmRlZC1mdWxsIGgtMSB3LVs4MCVdXCI+PC9kaXY+ICovfVxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgYmctWyNhY2FjYWMzNl0gbXQtMSByb3VuZGVkLWxnIGZsZXgtcm93IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBoLVs2MCVdIHctWzkwJV1cIj5cbiAgICAgICAgICAgICAgPGgyPm1pbGVzOiAyMCwwMDA8L2gyPlxuICAgICAgICAgICAgICA8aDI+VG90YWw6IDIwLDAwMDwvaDI+XG4gICAgICAgICAgICAgIDxoMj5taWxlczogMjAsMDAwPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFVzZXJCeUlkIiwiZ2V0VXNlckNhcnNCeVVzZXJJZCIsImdldENoYXJnZUhpc3RvcnlCeUlkIiwiSGVhZGVyIiwiTG9naW5Nb2RhbCIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZWxlY3RJc0F1dGhlbnRpY2F0ZWQiLCJzZWxlY3RKd3RUb2tlbiIsImp3dERlY29kZSIsIlNlZ21lbnRTZWxlY3RvciIsIkNoYXJnZUhpc3RvcnlDYXJkIiwiVGVzbGEiLCJBcHAiLCJ1c2VyIiwic2V0VXNlciIsInVzZXJDYXJzIiwic2V0VXNlckNhcnMiLCJzaG93TG9naW4iLCJzZXRTaG93TG9naW4iLCJkaXNwYXRjaCIsImp3dFRva2VuIiwic2VsZWN0ZWRDYXIiLCJzZXRTZWxlY3RlZENhciIsImNhckNoYXJnaW5nSGlzdG9yeSIsInNldENhckNoYXJnaW5nSGlzdG9yeSIsImlzQXV0aGVudGljYXRlZCIsInNvdGFsIiwic2V0VG90YWwiLCJkZWNvZGVkVG9rZW4iLCJmZXRjaFVzZXIiLCJpZCIsImdldFVzZXJDYXIiLCJ1c2VyQ2FyIiwibGVuZ3RoIiwiZm9yRWFjaCIsImNhciIsImluZGV4IiwibW9kZWwiLCJzcGxpY2UiLCJmZXRjaENoYXJnZUhpc3RvcnkiLCJjaGFyZ2VIaXN0b3J5IiwiaGlzdG9yeSIsInByZXYiLCJtaWxlcyIsImRpdiIsImNsYXNzTmFtZSIsInNldFNob3dMb2dpbk1vZGFsIiwib25DbG9zZSIsIm1hcCIsIm9wdGlvbnMiLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});