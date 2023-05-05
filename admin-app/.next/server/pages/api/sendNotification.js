"use strict";
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
exports.id = "pages/api/sendNotification";
exports.ids = ["pages/api/sendNotification"];
exports.modules = {

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("firebase-admin");

/***/ }),

/***/ "(api)/./src/firebase/FirebaseAdmin.js":
/*!***************************************!*\
  !*** ./src/firebase/FirebaseAdmin.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"firebaseAdmin\": () => (/* reexport module object */ firebase_admin__WEBPACK_IMPORTED_MODULE_0__)\n/* harmony export */ });\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n/* harmony import */ var firebase_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_admin__WEBPACK_IMPORTED_MODULE_0__);\n\nconst serviceAccount = __webpack_require__(/*! ./service-account.json */ \"(api)/./src/firebase/service-account.json\");\nif (firebase_admin__WEBPACK_IMPORTED_MODULE_0__.apps.length == 0) {\n    firebase_admin__WEBPACK_IMPORTED_MODULE_0__.initializeApp({\n        credential: firebase_admin__WEBPACK_IMPORTED_MODULE_0__.credential.cert(serviceAccount)\n    });\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZmlyZWJhc2UvRmlyZWJhc2VBZG1pbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0Q7QUFFaEQsTUFBTUMsaUJBQWlCQyxtQkFBT0EsQ0FBQztBQUMvQixJQUFJRix1REFBeUIsSUFBSSxHQUFHO0lBQ2hDQSx5REFBMkIsQ0FBQztRQUN4Qk0sWUFBWU4sMkRBQTZCLENBQUNDO0lBQzlDO0FBQ0osQ0FBQztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL2FkbWluLWFwcC8uL3NyYy9maXJlYmFzZS9GaXJlYmFzZUFkbWluLmpzP2ZjNGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZmlyZWJhc2VBZG1pbiBmcm9tICdmaXJlYmFzZS1hZG1pbic7XHJcblxyXG5jb25zdCBzZXJ2aWNlQWNjb3VudCA9IHJlcXVpcmUoJy4vc2VydmljZS1hY2NvdW50Lmpzb24nKTtcclxuaWYgKGZpcmViYXNlQWRtaW4uYXBwcy5sZW5ndGggPT0gMCkge1xyXG4gICAgZmlyZWJhc2VBZG1pbi5pbml0aWFsaXplQXBwKHtcclxuICAgICAgICBjcmVkZW50aWFsOiBmaXJlYmFzZUFkbWluLmNyZWRlbnRpYWwuY2VydChzZXJ2aWNlQWNjb3VudCksXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmlyZWJhc2VBZG1pbiB9O1xyXG4iXSwibmFtZXMiOlsiZmlyZWJhc2VBZG1pbiIsInNlcnZpY2VBY2NvdW50IiwicmVxdWlyZSIsImFwcHMiLCJsZW5ndGgiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/firebase/FirebaseAdmin.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/sendNotification.js":
/*!*******************************************!*\
  !*** ./src/pages/api/sendNotification.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _firebase_FirebaseAdmin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../firebase/FirebaseAdmin */ \"(api)/./src/firebase/FirebaseAdmin.js\");\n\nasync function handler(req, res) {\n    const { title , notificationBody , topic  } = req.body;\n    const topicFormatted = topic.split(\" \").join(\"_\");\n    const message = {\n        notification: {\n            title: title,\n            body: notificationBody\n        },\n        android: {\n            notification: {\n                image: \"logo192.png\"\n            }\n        },\n        topic: topicFormatted\n    };\n    _firebase_FirebaseAdmin__WEBPACK_IMPORTED_MODULE_0__.firebaseAdmin.messaging().send(message).then((response)=>{\n        res.status(200).json({\n            message: response\n        });\n    }).catch((error)=>{\n        console.log(error);\n        res.status(400).end();\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3NlbmROb3RpZmljYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNkQ7QUFFOUMsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFQyxNQUFLLEVBQUVDLGlCQUFnQixFQUFFQyxNQUFLLEVBQUUsR0FBR0osSUFBSUssSUFBSTtJQUNuRCxNQUFNQyxpQkFBaUJGLE1BQU1HLEtBQUssQ0FBQyxLQUFLQyxJQUFJLENBQUM7SUFFN0MsTUFBTUMsVUFBVTtRQUNaQyxjQUFjO1lBQ1ZSLE9BQU9BO1lBQ1BHLE1BQU1GO1FBQ1I7UUFDRlEsU0FBUztZQUNMRCxjQUFjO2dCQUNaRSxPQUFPO1lBQ1Q7UUFDRjtRQUNGUixPQUFPRTtJQUNYO0lBRUFSLDRFQUNjLEdBQ1RnQixJQUFJLENBQUNMLFNBQ0xNLElBQUksQ0FBQyxDQUFDQyxXQUFhO1FBQ2hCZixJQUFJZ0IsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDVCxTQUFTTztRQUFRO0lBRTNDLEdBQ0NHLEtBQUssQ0FBQyxDQUFDQyxRQUFVO1FBQ2RDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWm5CLElBQUlnQixNQUFNLENBQUMsS0FBS00sR0FBRztJQUN2QjtBQUVSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZG1pbi1hcHAvLi9zcmMvcGFnZXMvYXBpL3NlbmROb3RpZmljYXRpb24uanM/MjVkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmaXJlYmFzZUFkbWluIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL0ZpcmViYXNlQWRtaW5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnN0IHsgdGl0bGUsIG5vdGlmaWNhdGlvbkJvZHksIHRvcGljIH0gPSByZXEuYm9keTtcclxuICAgIGNvbnN0IHRvcGljRm9ybWF0dGVkID0gdG9waWMuc3BsaXQoJyAnKS5qb2luKCdfJylcclxuXHJcbiAgICBjb25zdCBtZXNzYWdlID0ge1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbjoge1xyXG4gICAgICAgICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgICAgICAgIGJvZHk6IG5vdGlmaWNhdGlvbkJvZHlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgYW5kcm9pZDoge1xyXG4gICAgICAgICAgICBub3RpZmljYXRpb246IHtcclxuICAgICAgICAgICAgICBpbWFnZTogXCJsb2dvMTkyLnBuZ1wiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB0b3BpYzogdG9waWNGb3JtYXR0ZWQsXHJcbiAgICB9O1xyXG5cclxuICAgIGZpcmViYXNlQWRtaW5cclxuICAgICAgICAubWVzc2FnaW5nKClcclxuICAgICAgICAuc2VuZChtZXNzYWdlKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7bWVzc2FnZTogcmVzcG9uc2V9KVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXHJcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNDAwKS5lbmQoKVxyXG4gICAgICAgIH0pO1xyXG5cclxufSJdLCJuYW1lcyI6WyJmaXJlYmFzZUFkbWluIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRpdGxlIiwibm90aWZpY2F0aW9uQm9keSIsInRvcGljIiwiYm9keSIsInRvcGljRm9ybWF0dGVkIiwic3BsaXQiLCJqb2luIiwibWVzc2FnZSIsIm5vdGlmaWNhdGlvbiIsImFuZHJvaWQiLCJpbWFnZSIsIm1lc3NhZ2luZyIsInNlbmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/sendNotification.js\n");

/***/ }),

/***/ "(api)/./src/firebase/service-account.json":
/*!*******************************************!*\
  !*** ./src/firebase/service-account.json ***!
  \*******************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"type":"service_account","project_id":"just-in-time-5698c","private_key_id":"979b9cb7a8cfb0fd41ac4b87134195210d1c97af","private_key":"-----BEGIN PRIVATE KEY-----\\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1dfFdGxAoUvqK\\nKAfnNKpcrIWpThKz4oij+Kud3SKAbm/8CaJFU8j07nMMYwnMFd+B+iJfjKfVfhmT\\nqLE+nnTE7NDAGQz/FZMGOoR7Mm33xp2RzzxaCF64+kWvtf27wwKauICdN13Qvb8K\\n7InZjg5ynzZfob6FCgHAYsdj8GpwZ4/cQEbnIJaPlHxR2E2YHcyamqEwTRfJX500\\nZei1tVeOMdCErzBnr2cKp9HNz0YJTdQMmPPKI8K51sd/NGhDrjO0KyFpAs5XuOpT\\nteOiCA4nFpmCL+niDrTQJ/mQ0KZ+2NtSvZ64ORjhhwTsBpp1zHPQ05vmcPOFCWC2\\nYvPDODMvAgMBAAECggEACK6BYzp5vewmZ3i91A59fhyU8oI1O90BO5MYpt9fGLTv\\n76eIV3fIPAuyfmu4msaLIH1WqqqglwLG930RKdVL8eYAoMgyCnw+QgSHtRs3Dq02\\nebToBsiyu3fh4KO85YBRfhSItrzg5K1HWB70A3Ab+djrMY0b/+J4Lfur3XixpvoA\\njTwDRluic+1kFZNnTHVMvnEkPYjMDWbkDcz0VNubXMidBh+tEZjrvblBxt2++Enq\\nQHE5nK6m9D3HfjskzdX/Wws0IW2VxGSru6UX5106Chge+AoTkxF7rr2vHpsyuNnU\\n6NKDHjCy5ZNJMRk20VsFMb+r9SlHl+ds7josYfk0QQKBgQD+EQd9ZejVRlTdfcrz\\n7z7hvYV2N0PCI81qXgryIrgXLBv0z+H1e9bILD93xoRcngs1XmPeKJameQZ7JARx\\nOoI8Dt5QLOnqn2G06gJ/uPVW8rC8T2ZIq8ZjI/T7wiaEaYw2w4pzRQuQNX17Ttoz\\nDj9PqHBa/1heUhTCaAgLb6lyQQKBgQC213aiCiUdS7XsjsbcBKxcvVT1hXbGBAou\\nNW5X3s1jn0fhxP30+Czu1DO7Is4rq+7ZHBBCA1dV51oOYuRGzih7VjitbCDLEJrN\\nC0A5nxdrCzxCq73x8qJlAR8fQiBeve8jI28aPzmxJVkJ44TVQMhpc/Yy6gQRpyLC\\n/ksEuiNpbwKBgQDaLxOoi9EE/u44fCPDkq0EvXYUzGcDHS3176ckw84mEDo95hyd\\nbWlI5D7pBHF8/DiR72qCSYb+laaML6Uk++MF4prmbXvAgnktHV1iBBulPKusO9+R\\n/vpS/3kOj2/2fJHuIcUPMrc4c8c8Er5t5AlYxkUe0HQ6I/Ex9pcaAx2YQQKBgQCT\\nS6iqiXm0zBVW6P6SqMEiRPR4hnhUtVRuPWUTLM5RfzOtUcE04+luzUyPaU6mJ/BW\\nvyDpzT9CWQpXpJs530MFeURXkVApxsqufG3U/bEj7v0wyKJQk6L3s5ua1u605FYN\\n/LG4d07GwsukB8Iu+e155o1kHtoATqDWbX2J5Vo5yQKBgDA0GYNpVf+WzRhoqNRh\\n34B/hLpzxfla8J6NEBLsPfu4e+3BdPRNGPh7KHENC8Z6l6CPLPLhBZFLbjdjgHrL\\nsVzEglbsPLKFAMhCD8LghJ+7MHRZR8ZugJMQ2OnBdQa7zAhHqbaitg6oAKi//atC\\nZOBDo1ZYDaxhLPna2FFrdKTg\\n-----END PRIVATE KEY-----\\n","client_email":"firebase-adminsdk-lfl9t@just-in-time-5698c.iam.gserviceaccount.com","client_id":"104890952766105802144","auth_uri":"https://accounts.google.com/o/oauth2/auth","token_uri":"https://oauth2.googleapis.com/token","auth_provider_x509_cert_url":"https://www.googleapis.com/oauth2/v1/certs","client_x509_cert_url":"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-lfl9t%40just-in-time-5698c.iam.gserviceaccount.com"}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/sendNotification.js"));
module.exports = __webpack_exports__;

})();