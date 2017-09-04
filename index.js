/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof ble === 'undefined') {
      return cb(false)
    }

    // pass through the ble object
    Vue.cordova.ble = ble

    return cb(true)

  }, false)
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof ble_secret === 'undefined') {
      return cb(false)
    }

    // pass through the ble_secret object
    Vue.cordova.ble_secret = ble_secret

    return cb(true)

  }, false)
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.camera === 'undefined') {
      return cb(false)
    }

    // pass through the camera object
    Vue.cordova.camera = navigator.camera

    return cb(true)

  }, false)
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof chrome.sockets.tcp === 'undefined') {
      return cb(false)
    }

    // pass through the object
    Vue.cordova.chromeSocketsTcp = chrome.sockets.tcp

    return cb(true)

  }, false)
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.contacts === 'undefined') {
      return cb(false)
    }

    // pass through the contacts object
    Vue.cordova.contacts = navigator.contacts

    return cb(true)

  }, false)
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof device === 'undefined' || typeof device.cordova === 'undefined') {
      return cb(false)
    }

    // default values
    Vue.cordova.device = {
      cordova: null,
      model: null,
      platform: null,
      uuid: null,
      version: null,
      manufacturer: null,
      isVirtual: null,
      serial: null
    }

    Object.keys(Vue.cordova.device).forEach(key => {
      if (typeof device[key] !== 'undefined') {
        Vue.cordova.device[key] = device[key]
      }
    })

    return cb(true)

  }, false)
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof navigator.geolocation === 'undefined') {
      return cb(false)
    }

    // pass through the geolocation object
    Vue.cordova.geolocation = navigator.geolocation

    return cb(true)

  }, false)
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

exports.install = function (Vue, options, cb) {
  document.addEventListener('deviceready', () => {

    if (typeof window.sms === 'undefined') {
      return cb(false)
    }

    // pass through the sms object
    Vue.cordova.sms = window.sms

    return cb(true)

  }, false)
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// list here all supported plugins
const pluginsList = [
  'cordova-plugin-camera',
  'cordova-plugin-device',
  'cordova-plugin-geolocation',
  'cordova-plugin-contacts',
  'cordova-plugin-chrome-apps-sockets-tcp',
  'cordova-plugin-sms',
  'cordova-plugin-ble-central',
    'cordova-plugin-ble-secret'
]

exports.install = (Vue, options) => {

  // declare global Vue.cordova object
  Vue.cordova = Vue.cordova || {
    deviceready: false,
    plugins: []
  }

  // Cordova events wrapper
  Vue.cordova.on = (eventName, cb) => {
    document.addEventListener(eventName, cb, false)
  }

  // let Vue know that deviceready has been triggered
  document.addEventListener('deviceready', () => {
    Vue.cordova.deviceready = true
  }, false)

  // load supported plugins
  pluginsList.forEach(pluginName => {
    let plugin = __webpack_require__(9)("./" + pluginName)
    plugin.install(Vue, options, pluginLoaded => {
      if (pluginLoaded) {
        Vue.cordova.plugins.push(pluginName)
      }
      if (Vue.config.debug) {
        console.log('[VueCordova]', pluginName, '→', pluginLoaded ? 'loaded' : 'not loaded')
      }
    })
  })

}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cordova-plugin-ble-central": 0,
	"./cordova-plugin-ble-central.js": 0,
	"./cordova-plugin-ble-secret": 1,
	"./cordova-plugin-ble-secret.js": 1,
	"./cordova-plugin-camera": 2,
	"./cordova-plugin-camera.js": 2,
	"./cordova-plugin-chrome-apps-sockets-tcp": 3,
	"./cordova-plugin-chrome-apps-sockets-tcp.js": 3,
	"./cordova-plugin-contacts": 4,
	"./cordova-plugin-contacts.js": 4,
	"./cordova-plugin-device": 5,
	"./cordova-plugin-device.js": 5,
	"./cordova-plugin-geolocation": 6,
	"./cordova-plugin-geolocation.js": 6,
	"./cordova-plugin-sms": 7,
	"./cordova-plugin-sms.js": 7
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ })
/******/ ]);