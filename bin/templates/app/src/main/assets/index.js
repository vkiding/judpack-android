/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	;__jud_define__("@jud-component/0f3c9ae76450de3e67cfabcbf5621bf7", [], function(__jud_require__, __jud_exports__, __jud_module__){

	;__jud_module__.exports.template = __jud_module__.exports.template || {}
	;Object.assign(__jud_module__.exports.template, {
	  "type": "div",
	  "children": [
	    {
	      "type": "text",
	      "style": {
	        "fontSize": 100
	      },
	      "attr": {
	        "value": "Hello World."
	      }
	    }
	  ]
	})
	})
	;__jud_bootstrap__("@jud-component/0f3c9ae76450de3e67cfabcbf5621bf7", {
	  "transformerVersion": "0.3.1"
	},undefined)

/***/ }
/******/ ]);