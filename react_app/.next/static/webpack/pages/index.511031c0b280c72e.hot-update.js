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

/***/ "./src/api/users.js":
/*!**************************!*\
  !*** ./src/api/users.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createUser: function() { return /* binding */ createUser; },\n/* harmony export */   deleteUser: function() { return /* binding */ deleteUser; },\n/* harmony export */   getAllUsers: function() { return /* binding */ getAllUsers; },\n/* harmony export */   getUserById: function() { return /* binding */ getUserById; },\n/* harmony export */   loginUser: function() { return /* binding */ loginUser; },\n/* harmony export */   updateUser: function() { return /* binding */ updateUser; },\n/* harmony export */   verifyToken: function() { return /* binding */ verifyToken; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_async_to_generator */ \"./node_modules/@swc/helpers/esm/_async_to_generator.js\");\n/* harmony import */ var _swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swc/helpers/_/_ts_generator */ \"./node_modules/@swc/helpers/esm/_ts_generator.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\n\n\nvar BASE_URL = \"https://ec2-54-163-202-137.compute-1.amazonaws.com:3000/api/users\"; // Replace with your server's base URL\nvar createUser = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(userData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(BASE_URL, \"/\"), userData)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function createUser(userData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar loginUser = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(param) {\n        var email, password, response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    email = param.email, password = param.password;\n                    _state.label = 1;\n                case 1:\n                    _state.trys.push([\n                        1,\n                        3,\n                        ,\n                        4\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(BASE_URL, \"/login\"), {\n                            email: email,\n                            password: password\n                        })\n                    ];\n                case 2:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 3:\n                    error = _state.sent();\n                    alert(error.response.data);\n                    return [\n                        3,\n                        4\n                    ];\n                case 4:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function loginUser(_) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar verifyToken = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(token) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"\".concat(BASE_URL, \"/verify-token\"), null, {\n                            headers: {\n                                \"x-auth-token\": token\n                            }\n                        })\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function verifyToken(token) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getAllUsers = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function() {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(BASE_URL, \"/\"))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getAllUsers() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getUserById = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(id) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"\".concat(BASE_URL, \"/\").concat(id))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function getUserById(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar updateUser = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(id, userData) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].put(\"\".concat(BASE_URL, \"/\").concat(id), userData)\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function updateUser(id, userData) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar deleteUser = function() {\n    var _ref = (0,_swc_helpers_async_to_generator__WEBPACK_IMPORTED_MODULE_0__._)(function(id) {\n        var response, error;\n        return (0,_swc_helpers_ts_generator__WEBPACK_IMPORTED_MODULE_1__._)(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    _state.trys.push([\n                        0,\n                        2,\n                        ,\n                        3\n                    ]);\n                    return [\n                        4,\n                        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"][\"delete\"](\"\".concat(BASE_URL, \"/\").concat(id))\n                    ];\n                case 1:\n                    response = _state.sent();\n                    return [\n                        2,\n                        response.data\n                    ];\n                case 2:\n                    error = _state.sent();\n                    throw error;\n                case 3:\n                    return [\n                        2\n                    ];\n            }\n        });\n    });\n    return function deleteUser(id) {\n        return _ref.apply(this, arguments);\n    };\n}();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBpL3VzZXJzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUUxQixJQUFNQyxXQUNKLHFFQUFxRSxzQ0FBc0M7QUFFdEcsSUFBTUM7ZUFBYSw0RUFBT0M7WUFFdkJDLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUwsa0RBQVUsQ0FBQyxHQUFZLE9BQVRDLFVBQVMsTUFBSUU7OztvQkFBNUNDLFdBQVc7b0JBQ2pCOzt3QkFBT0EsU0FBU0csSUFBSTs7O29CQUNiRjtvQkFDUCxNQUFNQTs7Ozs7OztJQUVWO29CQVBhSCxXQUFvQkM7OztJQU8vQjtBQUVLLElBQU1LO2VBQVk7WUFBU0MsT0FBT0MsVUFFL0JOLFVBS0NDOzs7O29CQVB1QkksY0FBQUEsT0FBT0MsaUJBQUFBOzs7Ozs7Ozs7b0JBRXBCOzt3QkFBTVYsa0RBQVUsQ0FBQyxHQUFZLE9BQVRDLFVBQVMsV0FBUzs0QkFDckRRLE9BQUFBOzRCQUNBQyxVQUFBQTt3QkFDRjs7O29CQUhNTixXQUFXO29CQUlqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1BNLE1BQU1OLE1BQU1ELFFBQVEsQ0FBQ0csSUFBSTs7Ozs7Ozs7Ozs7SUFFN0I7b0JBVmFDOzs7SUFVWDtBQUVLLElBQU1JO2VBQWMsNEVBQU9DO1lBRXhCVCxVQUlDQzs7Ozs7Ozs7OztvQkFKVTs7d0JBQU1MLGtEQUFVLENBQUMsR0FBWSxPQUFUQyxVQUFTLGtCQUFnQixNQUFNOzRCQUNsRWEsU0FBUztnQ0FBRSxnQkFBZ0JEOzRCQUFNO3dCQUNuQzs7O29CQUZNVCxXQUFXO29CQUdqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1AsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFUYU8sWUFBcUJDOzs7SUFTaEM7QUFFSyxJQUFNRTtlQUFjO1lBRWpCWCxVQUVDQzs7Ozs7Ozs7OztvQkFGVTs7d0JBQU1MLGlEQUFTLENBQUMsR0FBWSxPQUFUQyxVQUFTOzs7b0JBQXZDRyxXQUFXO29CQUNqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1AsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFQYVU7OztJQU9YO0FBRUssSUFBTUU7ZUFBYyw0RUFBT0M7WUFFeEJkLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUwsaURBQVMsQ0FBQyxHQUFla0IsT0FBWmpCLFVBQVMsS0FBTSxPQUFIaUI7OztvQkFBMUNkLFdBQVc7b0JBQ2pCOzt3QkFBT0EsU0FBU0csSUFBSTs7O29CQUNiRjtvQkFDUCxNQUFNQTs7Ozs7OztJQUVWO29CQVBhWSxZQUFxQkM7OztJQU9oQztBQUVLLElBQU1DO2VBQWEsNEVBQU9ELElBQUlmO1lBRTNCQyxVQUVDQzs7Ozs7Ozs7OztvQkFGVTs7d0JBQU1MLGlEQUFTLENBQUMsR0FBZWtCLE9BQVpqQixVQUFTLEtBQU0sT0FBSGlCLEtBQU1mOzs7b0JBQWhEQyxXQUFXO29CQUNqQjs7d0JBQU9BLFNBQVNHLElBQUk7OztvQkFDYkY7b0JBQ1AsTUFBTUE7Ozs7Ozs7SUFFVjtvQkFQYWMsV0FBb0JELElBQUlmOzs7SUFPbkM7QUFFSyxJQUFNa0I7ZUFBYSw0RUFBT0g7WUFFdkJkLFVBRUNDOzs7Ozs7Ozs7O29CQUZVOzt3QkFBTUwsdURBQVksQ0FBQyxHQUFla0IsT0FBWmpCLFVBQVMsS0FBTSxPQUFIaUI7OztvQkFBN0NkLFdBQVc7b0JBQ2pCOzt3QkFBT0EsU0FBU0csSUFBSTs7O29CQUNiRjtvQkFDUCxNQUFNQTs7Ozs7OztJQUVWO29CQVBhZ0IsV0FBb0JIOzs7SUFPL0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwaS91c2Vycy5qcz8xZjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQkFTRV9VUkwgPVxuICBcImh0dHBzOi8vZWMyLTU0LTE2My0yMDItMTM3LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tOjMwMDAvYXBpL3VzZXJzXCI7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIHNlcnZlcidzIGJhc2UgVVJMXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVc2VyID0gYXN5bmMgKHVzZXJEYXRhKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KGAke0JBU0VfVVJMfS9gLCB1c2VyRGF0YSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsb2dpblVzZXIgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChgJHtCQVNFX1VSTH0vbG9naW5gLCB7XG4gICAgICBlbWFpbCxcbiAgICAgIHBhc3N3b3JkLFxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGFsZXJ0KGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgdmVyaWZ5VG9rZW4gPSBhc3luYyAodG9rZW4pID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7QkFTRV9VUkx9L3ZlcmlmeS10b2tlbmAsIG51bGwsIHtcbiAgICAgIGhlYWRlcnM6IHsgXCJ4LWF1dGgtdG9rZW5cIjogdG9rZW4gfSxcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGAke0JBU0VfVVJMfS9gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeUlkID0gYXN5bmMgKGlkKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYCR7QkFTRV9VUkx9LyR7aWR9YCk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gYXN5bmMgKGlkLCB1c2VyRGF0YSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucHV0KGAke0JBU0VfVVJMfS8ke2lkfWAsIHVzZXJEYXRhKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoaWQpID0+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmRlbGV0ZShgJHtCQVNFX1VSTH0vJHtpZH1gKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsIkJBU0VfVVJMIiwiY3JlYXRlVXNlciIsInVzZXJEYXRhIiwicmVzcG9uc2UiLCJlcnJvciIsInBvc3QiLCJkYXRhIiwibG9naW5Vc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsImFsZXJ0IiwidmVyaWZ5VG9rZW4iLCJ0b2tlbiIsImhlYWRlcnMiLCJnZXRBbGxVc2VycyIsImdldCIsImdldFVzZXJCeUlkIiwiaWQiLCJ1cGRhdGVVc2VyIiwicHV0IiwiZGVsZXRlVXNlciIsImRlbGV0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/api/users.js\n"));

/***/ })

});