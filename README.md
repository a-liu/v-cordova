[Vue.js](https://vuejs.org/) plugin for [Cordova](https://cordova.apache.org/)

> Note : Compatible with every version of VueJS (1.x and 2.x)

# How to use

Add the NPM package to your project

```shell
npm install --save v-cordova
```

Add the plugin to your Vue instance according to your setup

```javascript
// CommonJS
var Vue = require('vue');
var VueCordova = require('v-cordova');
Vue.use(VueCordova);

// import
import Vue from 'vue'
import VueCordova from 'v-cordova'
Vue.use(VueCordova)
```

The package provides a global object `Vue.cordova`

```javascript
console.log(Vue.cordova);
```

This object provides API for the following [events](#events) and will hold the Cordova [plugins](#plugins) API objects you might be using.

> **This library is a syntax helper.** It provides an easier access to the global variables defined by Cordova.

### Demo

A repository with a [full working demo](https://github.com/a-liu/v-cordova) is available to help you bootstrap a new project or cherry-pick working code.
