/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./js/client.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	// All JavaScript in here will be loaded client/server -side.
	// Expose components globally so ReactJS.NET can use them
	var Components = __webpack_require__(/*! expose?Components!../../app */ 1);

/***/ },
/* 1 */
/*!*****************************************************!*\
  !*** ../~/expose-loader?Components!../app/index.js ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Components"] = __webpack_require__(/*! -!../app/index.js */ 2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/*!***********************!*\
  !*** ../app/index.js ***!
  \***********************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	    // All the components you'd like to render server-side
	    //HelloMessage: require('./build/HelloWorld'),
	    HelloMessage: __webpack_require__(/*! ./HelloWorld */ 3),
	    Foo: __webpack_require__(/*! ./Foo */ 5)
	}

/***/ },
/* 3 */
/*!*****************************!*\
  !*** ../app/HelloWorld.tsx ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var __extends = this && this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/// <reference path="../../../typings/index.d.ts" />
	var React = __webpack_require__(/*! react */ 4);
	var HelloMessage = function (_super) {
	    __extends(HelloMessage, _super);
	    function HelloMessage() {
	        _super.apply(this, arguments);
	    }
	    HelloMessage.prototype.render = function () {
	        return React.createElement("div", null, this.props.message);
	    };
	    return HelloMessage;
	}(React.Component);
	module.exports = HelloMessage;

/***/ },
/* 4 */
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 5 */
/*!**********************!*\
  !*** ../app/Foo.tsx ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../../typings/index.d.ts" />
	"use strict";
	
	var __extends = this && this.__extends || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() {
	        this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var React = __webpack_require__(/*! react */ 4);
	var Foo = function (_super) {
	    __extends(Foo, _super);
	    function Foo(props) {
	        _super.call(this, props);
	        this.state = {
	            title: this.props.title
	        };
	        this.Titles = ["Foo", "Bar", "Biz", "Bash"];
	    }
	    Foo.prototype.click = function (event) {
	        this.state.title = this.Titles[Math.floor(Math.random() * 4)];
	        this.setState(this.state);
	    };
	    Foo.prototype.render = function () {
	        var _this = this;
	        return React.createElement("div", null, React.createElement("h1", null, this.props.userName), React.createElement("h2", null, this.state.title), React.createElement("br", null), React.createElement("button", { className: "btn btn-primary", onClick: function (e) {
	                return _this.click(e);
	            } }, "Click me!"));
	    };
	    return Foo;
	}(React.Component);
	module.exports = Foo;

/***/ }
/******/ ]);
//# sourceMappingURL=client.bundle.js.map