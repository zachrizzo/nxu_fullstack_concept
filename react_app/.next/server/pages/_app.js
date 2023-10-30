/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./redux/globalSlice.js":
/*!******************************!*\
  !*** ./redux/globalSlice.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   selectIsAuthenticated: () => (/* binding */ selectIsAuthenticated),\n/* harmony export */   selectJwtToken: () => (/* binding */ selectJwtToken),\n/* harmony export */   selectUser: () => (/* binding */ selectUser),\n/* harmony export */   setIsAuthenticated: () => (/* binding */ setIsAuthenticated),\n/* harmony export */   setJwtToken: () => (/* binding */ setJwtToken),\n/* harmony export */   setUser: () => (/* binding */ setUser)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\n// Initial state for the global slice\nconst globalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"global\",\n    initialState: {\n        user: null,\n        jwtToken: null,\n        isAuthenticated: false\n    },\n    reducers: {\n        setUser: (state, action)=>{\n            state.user = action.payload;\n        },\n        setJwtToken: (state, action)=>{\n            state.jwtToken = action.payload;\n            // Save JWT token to localStorage for persistence\n            localStorage.setItem(\"jwtToken\", action.payload);\n        },\n        setIsAuthenticated: (state, action)=>{\n            state.isAuthenticated = action.payload;\n        },\n        logout: (state)=>{\n            state.jwtToken = null; // Changed from 'token' to 'jwtToken'\n            state.user = null;\n            state.isAuthenticated = false;\n            localStorage.removeItem(\"jwtToken\"); // Remove JWT token from local storage\n        }\n    }\n});\n// Exporting actions\nconst { setJwtToken, setUser, setIsAuthenticated, logout } = globalSlice.actions;\n// Selectors for the user and JWT token\nconst selectUser = (state)=>state.global.user;\nconst selectJwtToken = (state)=>state.global.jwtToken;\nconst selectIsAuthenticated = (state)=>state.global.isAuthenticated;\n// Exporting the reducer\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (globalSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9nbG9iYWxTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQStDO0FBRS9DLHFDQUFxQztBQUVyQyxNQUFNQyxjQUFjRCw2REFBV0EsQ0FBQztJQUM5QkUsTUFBTTtJQUNOQyxjQUFjO1FBQ1pDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQUMsVUFBVTtRQUNSQyxTQUFTLENBQUNDLE9BQU9DO1lBQ2ZELE1BQU1MLElBQUksR0FBR00sT0FBT0MsT0FBTztRQUM3QjtRQUNBQyxhQUFhLENBQUNILE9BQU9DO1lBQ25CRCxNQUFNSixRQUFRLEdBQUdLLE9BQU9DLE9BQU87WUFDL0IsaURBQWlEO1lBQ2pERSxhQUFhQyxPQUFPLENBQUMsWUFBWUosT0FBT0MsT0FBTztRQUNqRDtRQUNBSSxvQkFBb0IsQ0FBQ04sT0FBT0M7WUFDMUJELE1BQU1ILGVBQWUsR0FBR0ksT0FBT0MsT0FBTztRQUN4QztRQUNBSyxRQUFRLENBQUNQO1lBQ1BBLE1BQU1KLFFBQVEsR0FBRyxNQUFNLHFDQUFxQztZQUM1REksTUFBTUwsSUFBSSxHQUFHO1lBQ2JLLE1BQU1ILGVBQWUsR0FBRztZQUN4Qk8sYUFBYUksVUFBVSxDQUFDLGFBQWEsc0NBQXNDO1FBQzdFO0lBQ0Y7QUFDRjtBQUVBLG9CQUFvQjtBQUNiLE1BQU0sRUFBRUwsV0FBVyxFQUFFSixPQUFPLEVBQUVPLGtCQUFrQixFQUFFQyxNQUFNLEVBQUUsR0FDL0RmLFlBQVlpQixPQUFPLENBQUM7QUFFdEIsdUNBQXVDO0FBQ2hDLE1BQU1DLGFBQWEsQ0FBQ1YsUUFBVUEsTUFBTVcsTUFBTSxDQUFDaEIsSUFBSSxDQUFDO0FBQ2hELE1BQU1pQixpQkFBaUIsQ0FBQ1osUUFBVUEsTUFBTVcsTUFBTSxDQUFDZixRQUFRLENBQUM7QUFDeEQsTUFBTWlCLHdCQUF3QixDQUFDYixRQUFVQSxNQUFNVyxNQUFNLENBQUNkLGVBQWUsQ0FBQztBQUU3RSx3QkFBd0I7QUFDeEIsaUVBQWVMLFlBQVlzQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueHVfZW5lcmd5Ly4vcmVkdXgvZ2xvYmFsU2xpY2UuanM/MjMwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XG5cbi8vIEluaXRpYWwgc3RhdGUgZm9yIHRoZSBnbG9iYWwgc2xpY2VcblxuY29uc3QgZ2xvYmFsU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6IFwiZ2xvYmFsXCIsXG4gIGluaXRpYWxTdGF0ZToge1xuICAgIHVzZXI6IG51bGwsXG4gICAgand0VG9rZW46IG51bGwsXG4gICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSwgLy8gTW92ZWQgdGhpcyBwcm9wZXJ0eSBoZXJlIGZyb20gcmVkdWNlcnN9XG4gIH0sXG5cbiAgcmVkdWNlcnM6IHtcbiAgICBzZXRVc2VyOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkO1xuICAgIH0sXG4gICAgc2V0Snd0VG9rZW46IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5qd3RUb2tlbiA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgLy8gU2F2ZSBKV1QgdG9rZW4gdG8gbG9jYWxTdG9yYWdlIGZvciBwZXJzaXN0ZW5jZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJqd3RUb2tlblwiLCBhY3Rpb24ucGF5bG9hZCk7XG4gICAgfSxcbiAgICBzZXRJc0F1dGhlbnRpY2F0ZWQ6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICB9LFxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XG4gICAgICBzdGF0ZS5qd3RUb2tlbiA9IG51bGw7IC8vIENoYW5nZWQgZnJvbSAndG9rZW4nIHRvICdqd3RUb2tlbidcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImp3dFRva2VuXCIpOyAvLyBSZW1vdmUgSldUIHRva2VuIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIH0sXG4gIH0sXG59KTtcblxuLy8gRXhwb3J0aW5nIGFjdGlvbnNcbmV4cG9ydCBjb25zdCB7IHNldEp3dFRva2VuLCBzZXRVc2VyLCBzZXRJc0F1dGhlbnRpY2F0ZWQsIGxvZ291dCB9ID1cbiAgZ2xvYmFsU2xpY2UuYWN0aW9ucztcblxuLy8gU2VsZWN0b3JzIGZvciB0aGUgdXNlciBhbmQgSldUIHRva2VuXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlciA9IChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsLnVzZXI7XG5leHBvcnQgY29uc3Qgc2VsZWN0Snd0VG9rZW4gPSAoc3RhdGUpID0+IHN0YXRlLmdsb2JhbC5qd3RUb2tlbjtcbmV4cG9ydCBjb25zdCBzZWxlY3RJc0F1dGhlbnRpY2F0ZWQgPSAoc3RhdGUpID0+IHN0YXRlLmdsb2JhbC5pc0F1dGhlbnRpY2F0ZWQ7XG5cbi8vIEV4cG9ydGluZyB0aGUgcmVkdWNlclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsU2xpY2UucmVkdWNlcjtcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImdsb2JhbFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJqd3RUb2tlbiIsImlzQXV0aGVudGljYXRlZCIsInJlZHVjZXJzIiwic2V0VXNlciIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEp3dFRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInNldElzQXV0aGVudGljYXRlZCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJhY3Rpb25zIiwic2VsZWN0VXNlciIsImdsb2JhbCIsInNlbGVjdEp3dFRva2VuIiwic2VsZWN0SXNBdXRoZW50aWNhdGVkIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/globalSlice.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _globalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalSlice */ \"./redux/globalSlice.js\");\n\n // assuming this is the path to your slice\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        global: _globalSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ1IsQ0FBQywwQ0FBMEM7QUFFckYsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDM0JHLFNBQVM7UUFDUEMsUUFBUUgsb0RBQWFBO0lBRXZCO0FBQ0Y7QUFFQSxpRUFBZUMsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL254dV9lbmVyZ3kvLi9yZWR1eC9zdG9yZS5qcz8zNTQ5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcbmltcG9ydCBnbG9iYWxSZWR1Y2VyIGZyb20gXCIuL2dsb2JhbFNsaWNlXCI7IC8vIGFzc3VtaW5nIHRoaXMgaXMgdGhlIHBhdGggdG8geW91ciBzbGljZVxuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHtcbiAgcmVkdWNlcjoge1xuICAgIGdsb2JhbDogZ2xvYmFsUmVkdWNlcixcbiAgICAvLyAuLi4gb3RoZXIgcmVkdWNlcnNcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBzdG9yZTtcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImdsb2JhbFJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJnbG9iYWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/store */ \"./redux/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/zachrizzo/programing/node.js react native app/react_app/nxu_energy/src/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0I7QUFDZ0I7QUFDQztBQUN4QixTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSCxpREFBUUE7UUFBQ0QsT0FBT0Esb0RBQUtBO2tCQUNwQiw0RUFBQ0c7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL254dV9lbmVyZ3kvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL2luZGV4LmNzc1wiO1xuaW1wb3J0IHN0b3JlIGZyb20gXCIuLi8uLi9yZWR1eC9zdG9yZVwiO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0b3JlIiwiUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.js"));
module.exports = __webpack_exports__;

})();