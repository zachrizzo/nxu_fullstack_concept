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

/***/ "./src/components/header.js":
/*!**********************************!*\
  !*** ./src/components/header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _barrel_optimize_names_Bars3Icon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! __barrel_optimize__?names=Bars3Icon!=!@heroicons/react/24/solid */ \"__barrel_optimize__?names=Bars3Icon!=!./node_modules/@heroicons/react/24/solid/esm/index.js\");\n/* harmony import */ var _dropDownMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropDownMenu */ \"./src/components/dropDownMenu.js\");\n/* harmony import */ var _redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/globalSlice */ \"./redux/globalSlice.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _api_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api/users */ \"./src/api/users.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction isTokenExpired(token) {\n    try {\n        var decoded = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(token);\n        if (decoded.exp && Date.now() >= decoded.exp * 1000) {\n            return true; // token is expired\n        } else {\n            return false; // token is not expired\n        }\n    } catch (err) {\n        return true; // if there's an error decoding, assume token is expired or invalid\n    }\n}\nfunction Header(param) {\n    var setShowLoginModal = param.setShowLoginModal;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_7__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), openMenu = _useState[0], setOpenMenu = _useState[1];\n    var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = localStorage.getItem(\"jwtToken\");\n        if (isTokenExpired(token)) {\n            console.log(\"Token is expired or invalid\");\n            dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setJwtToken)(null));\n            dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(null));\n            dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsAuthenticated)(false));\n            // Redirect to login page\n            setShowLoginModal(true);\n        } else {\n            console.log(\"Token is valid\");\n            dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setJwtToken)(token));\n            dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setIsAuthenticated)(true));\n        // Continue with the application logic\n        }\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var token = localStorage.getItem(\"jwtToken\");\n        if (token) {\n            // This will check for any falsy value including null, undefined, and empty string\n            console.log(\"token\", token);\n            try {\n                var decodedToken = (0,jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(token);\n                var fetchUser = function() {\n                    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_8__._)(function() {\n                        var user;\n                        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_9__._)(this, function(_state) {\n                            switch(_state.label){\n                                case 0:\n                                    return [\n                                        4,\n                                        (0,_api_users__WEBPACK_IMPORTED_MODULE_6__.getUserById)(decodedToken.id)\n                                    ];\n                                case 1:\n                                    user = _state.sent();\n                                    dispatch((0,_redux_globalSlice__WEBPACK_IMPORTED_MODULE_3__.setUser)(user));\n                                    return [\n                                        2\n                                    ];\n                            }\n                        });\n                    });\n                    return function fetchUser() {\n                        return _ref.apply(this, arguments);\n                    };\n                }();\n                fetchUser();\n            } catch (error) {\n                console.error(\"Invalid token\", error);\n            // Handle the error appropriately, e.g., by logging out the user or showing an error message\n            }\n        }\n    }, [\n        dispatch\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var handleOutsideClick = function handleOutsideClick(event) {\n            // If the click is outside the dropdown, close it\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                setOpenMenu(false);\n            }\n        };\n        // Add the event listener\n        document.addEventListener(\"mousedown\", handleOutsideClick);\n        // Cleanup the event listener on component unmount\n        return function() {\n            document.removeEventListener(\"mousedown\", handleOutsideClick);\n        };\n    }, [\n        setOpenMenu\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \" bg-white flex h-16 shadow-md w-full px-10  justify-between items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl\",\n                children: \"NXU Energy\"\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                lineNumber: 83,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    ref: dropdownRef,\n                    className: \" relative justify-center flex items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: function() {\n                                setOpenMenu(!openMenu);\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Bars3Icon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_10__.Bars3Icon, {\n                                className: \"h-10 w-10\"\n                            }, void 0, false, {\n                                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this),\n                        openMenu && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \" z-50 absolute top-14 right-32 h-4 w-4 rounded-full\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropDownMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                setOpenMenu: setOpenMenu,\n                                setShowLoginModal: setShowLoginModal\n                            }, void 0, false, {\n                                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                                lineNumber: 98,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/components/header.js\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"TG3j1qw/pY1EEteZe/KitMiF85w=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch\n    ];\n});\n_c = Header;\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyRDtBQUNMO0FBQ1o7QUFLVDtBQUNTO0FBQ1A7QUFDUTtBQUMzQyxTQUFTWSxlQUFlQyxLQUFLO0lBQzNCLElBQUk7UUFDRixJQUFNQyxVQUFVSixzREFBU0EsQ0FBQ0c7UUFDMUIsSUFBSUMsUUFBUUMsR0FBRyxJQUFJQyxLQUFLQyxHQUFHLE1BQU1ILFFBQVFDLEdBQUcsR0FBRyxNQUFNO1lBQ25ELE9BQU8sTUFBTSxtQkFBbUI7UUFDbEMsT0FBTztZQUNMLE9BQU8sT0FBTyx1QkFBdUI7UUFDdkM7SUFDRixFQUFFLE9BQU9HLEtBQUs7UUFDWixPQUFPLE1BQU0sbUVBQW1FO0lBQ2xGO0FBQ0Y7QUFDZSxTQUFTQyxPQUFPLEtBQXFCO1FBQXJCLDBCQUFFQzs7SUFDL0IsSUFBZ0NuQixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsWUFBbENvQixXQUF5QnBCLGNBQWZxQixjQUFlckI7SUFDaEMsSUFBTXNCLFdBQVdkLHdEQUFXQTtJQUM1QixJQUFNZSxjQUFjckIsNkNBQU1BLENBQUM7SUFDM0JELGdEQUFTQSxDQUFDO1FBQ1IsSUFBTVcsUUFBUVksYUFBYUMsT0FBTyxDQUFDO1FBRW5DLElBQUlkLGVBQWVDLFFBQVE7WUFDekJjLFFBQVFDLEdBQUcsQ0FBQztZQUNaTCxTQUFTakIsK0RBQVdBLENBQUM7WUFDckJpQixTQUFTZiwyREFBT0EsQ0FBQztZQUNqQmUsU0FBU2hCLHNFQUFrQkEsQ0FBQztZQUM1Qix5QkFBeUI7WUFDekJhLGtCQUFrQjtRQUNwQixPQUFPO1lBQ0xPLFFBQVFDLEdBQUcsQ0FBQztZQUNaTCxTQUFTakIsK0RBQVdBLENBQUNPO1lBQ3JCVSxTQUFTaEIsc0VBQWtCQSxDQUFDO1FBQzVCLHNDQUFzQztRQUN4QztJQUNGO0lBRUFMLGdEQUFTQSxDQUFDO1FBQ1IsSUFBTVcsUUFBUVksYUFBYUMsT0FBTyxDQUFDO1FBQ25DLElBQUliLE9BQU87WUFDVCxrRkFBa0Y7WUFDbEZjLFFBQVFDLEdBQUcsQ0FBQyxTQUFTZjtZQUNyQixJQUFJO2dCQUNGLElBQU1nQixlQUFlbkIsc0RBQVNBLENBQUNHO2dCQUMvQixJQUFNaUI7K0JBQVk7NEJBQ1ZDOzs7O29DQUFPOzt3Q0FBTXBCLHVEQUFXQSxDQUFDa0IsYUFBYUcsRUFBRTs7O29DQUF4Q0QsT0FBTztvQ0FDYlIsU0FBU2YsMkRBQU9BLENBQUN1Qjs7Ozs7O29CQUNuQjtvQ0FITUQ7Ozs7Z0JBSU5BO1lBQ0YsRUFBRSxPQUFPRyxPQUFPO2dCQUNkTixRQUFRTSxLQUFLLENBQUMsaUJBQWlCQTtZQUMvQiw0RkFBNEY7WUFDOUY7UUFDRjtJQUNGLEdBQUc7UUFBQ1Y7S0FBUztJQUVickIsZ0RBQVNBLENBQUM7WUFDQ2dDLHFCQUFULFNBQVNBLG1CQUFtQkMsS0FBSztZQUMvQixpREFBaUQ7WUFDakQsSUFBSVgsWUFBWVksT0FBTyxJQUFJLENBQUNaLFlBQVlZLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDRixNQUFNRyxNQUFNLEdBQUc7Z0JBQ3RFaEIsWUFBWTtZQUNkO1FBQ0Y7UUFFQSx5QkFBeUI7UUFDekJpQixTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUV2QyxrREFBa0Q7UUFDbEQsT0FBTztZQUNMSyxTQUFTRSxtQkFBbUIsQ0FBQyxhQUFhUDtRQUM1QztJQUNGLEdBQUc7UUFBQ1o7S0FBWTtJQUNoQixxQkFDRSw4REFBQ29CO1FBQU9DLFdBQVU7OzBCQUNoQiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQVc7Ozs7OzswQkFDekIsOERBQUNFO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDRTtvQkFDQ0MsS0FBS3RCO29CQUNMbUIsV0FBVTs7c0NBRVYsOERBQUNJOzRCQUNDQyxTQUFTO2dDQUNQMUIsWUFBWSxDQUFDRDs0QkFDZjtzQ0FFQSw0RUFBQ2pCLGlHQUFTQTtnQ0FBQ3VDLFdBQVU7Ozs7Ozs7Ozs7O3dCQUV0QnRCLDBCQUNDLDhEQUFDd0I7NEJBQUlGLFdBQVU7c0NBQ2IsNEVBQUN0QyxxREFBWUE7Z0NBQ1hpQixhQUFhQTtnQ0FDYkYsbUJBQW1CQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFuQztHQXBGd0JEOztRQUVMVixvREFBV0E7OztLQUZOVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9oZWFkZXIuanM/OWJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCYXJzM0ljb24gfSBmcm9tIFwiQGhlcm9pY29ucy9yZWFjdC8yNC9zb2xpZFwiO1xuaW1wb3J0IERyb3BEb3duTWVudSBmcm9tIFwiLi9kcm9wRG93bk1lbnVcIjtcbmltcG9ydCB7XG4gIHNldEp3dFRva2VuLFxuICBzZXRJc0F1dGhlbnRpY2F0ZWQsXG4gIHNldFVzZXIsXG59IGZyb20gXCIuLi8uLi9yZWR1eC9nbG9iYWxTbGljZVwiO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCBqd3REZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCB7IGdldFVzZXJCeUlkIH0gZnJvbSBcIi4uL2FwaS91c2Vyc1wiO1xuZnVuY3Rpb24gaXNUb2tlbkV4cGlyZWQodG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBkZWNvZGVkID0gand0RGVjb2RlKHRva2VuKTtcbiAgICBpZiAoZGVjb2RlZC5leHAgJiYgRGF0ZS5ub3coKSA+PSBkZWNvZGVkLmV4cCAqIDEwMDApIHtcbiAgICAgIHJldHVybiB0cnVlOyAvLyB0b2tlbiBpcyBleHBpcmVkXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTsgLy8gdG9rZW4gaXMgbm90IGV4cGlyZWRcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiB0cnVlOyAvLyBpZiB0aGVyZSdzIGFuIGVycm9yIGRlY29kaW5nLCBhc3N1bWUgdG9rZW4gaXMgZXhwaXJlZCBvciBpbnZhbGlkXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHNldFNob3dMb2dpbk1vZGFsIH0pIHtcbiAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWYobnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImp3dFRva2VuXCIpO1xuXG4gICAgaWYgKGlzVG9rZW5FeHBpcmVkKHRva2VuKSkge1xuICAgICAgY29uc29sZS5sb2coXCJUb2tlbiBpcyBleHBpcmVkIG9yIGludmFsaWRcIik7XG4gICAgICBkaXNwYXRjaChzZXRKd3RUb2tlbihudWxsKSk7XG4gICAgICBkaXNwYXRjaChzZXRVc2VyKG51bGwpKTtcbiAgICAgIGRpc3BhdGNoKHNldElzQXV0aGVudGljYXRlZChmYWxzZSkpO1xuICAgICAgLy8gUmVkaXJlY3QgdG8gbG9naW4gcGFnZVxuICAgICAgc2V0U2hvd0xvZ2luTW9kYWwodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiVG9rZW4gaXMgdmFsaWRcIik7XG4gICAgICBkaXNwYXRjaChzZXRKd3RUb2tlbih0b2tlbikpO1xuICAgICAgZGlzcGF0Y2goc2V0SXNBdXRoZW50aWNhdGVkKHRydWUpKTtcbiAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIGFwcGxpY2F0aW9uIGxvZ2ljXG4gICAgfVxuICB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJqd3RUb2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBmb3IgYW55IGZhbHN5IHZhbHVlIGluY2x1ZGluZyBudWxsLCB1bmRlZmluZWQsIGFuZCBlbXB0eSBzdHJpbmdcbiAgICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4pO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGVjb2RlZFRva2VuID0gand0RGVjb2RlKHRva2VuKTtcbiAgICAgICAgY29uc3QgZmV0Y2hVc2VyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlJZChkZWNvZGVkVG9rZW4uaWQpO1xuICAgICAgICAgIGRpc3BhdGNoKHNldFVzZXIodXNlcikpO1xuICAgICAgICB9O1xuICAgICAgICBmZXRjaFVzZXIoKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHRva2VuXCIsIGVycm9yKTtcbiAgICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBhcHByb3ByaWF0ZWx5LCBlLmcuLCBieSBsb2dnaW5nIG91dCB0aGUgdXNlciBvciBzaG93aW5nIGFuIGVycm9yIG1lc3NhZ2VcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtkaXNwYXRjaF0pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlT3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAvLyBJZiB0aGUgY2xpY2sgaXMgb3V0c2lkZSB0aGUgZHJvcGRvd24sIGNsb3NlIGl0XG4gICAgICBpZiAoZHJvcGRvd25SZWYuY3VycmVudCAmJiAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICAgIHNldE9wZW5NZW51KGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIGV2ZW50IGxpc3RlbmVyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuXG4gICAgLy8gQ2xlYW51cCB0aGUgZXZlbnQgbGlzdGVuZXIgb24gY29tcG9uZW50IHVubW91bnRcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuICAgIH07XG4gIH0sIFtzZXRPcGVuTWVudV0pO1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiIGJnLXdoaXRlIGZsZXggaC0xNiBzaGFkb3ctbWQgdy1mdWxsIHB4LTEwICBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGxcIj5OWFUgRW5lcmd5PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgICAgICBjbGFzc05hbWU9XCIgcmVsYXRpdmUganVzdGlmeS1jZW50ZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRPcGVuTWVudSghb3Blbk1lbnUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFyczNJY29uIGNsYXNzTmFtZT1cImgtMTAgdy0xMFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAge29wZW5NZW51ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHotNTAgYWJzb2x1dGUgdG9wLTE0IHJpZ2h0LTMyIGgtNCB3LTQgcm91bmRlZC1mdWxsXCI+XG4gICAgICAgICAgICAgIDxEcm9wRG93bk1lbnVcbiAgICAgICAgICAgICAgICBzZXRPcGVuTWVudT17c2V0T3Blbk1lbnV9XG4gICAgICAgICAgICAgICAgc2V0U2hvd0xvZ2luTW9kYWw9e3NldFNob3dMb2dpbk1vZGFsfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiQmFyczNJY29uIiwiRHJvcERvd25NZW51Iiwic2V0Snd0VG9rZW4iLCJzZXRJc0F1dGhlbnRpY2F0ZWQiLCJzZXRVc2VyIiwidXNlRGlzcGF0Y2giLCJqd3REZWNvZGUiLCJnZXRVc2VyQnlJZCIsImlzVG9rZW5FeHBpcmVkIiwidG9rZW4iLCJkZWNvZGVkIiwiZXhwIiwiRGF0ZSIsIm5vdyIsImVyciIsIkhlYWRlciIsInNldFNob3dMb2dpbk1vZGFsIiwib3Blbk1lbnUiLCJzZXRPcGVuTWVudSIsImRpc3BhdGNoIiwiZHJvcGRvd25SZWYiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImRlY29kZWRUb2tlbiIsImZldGNoVXNlciIsInVzZXIiLCJpZCIsImVycm9yIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiaDEiLCJkaXYiLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/header.js\n"));

/***/ })

});