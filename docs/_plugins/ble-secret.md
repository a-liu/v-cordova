---
title: SMS
add_url: cordova-plugin-ble-central
description: Send sms messages from the device
---

SMS is made available in `Vue.cordova.ble-secret`. This is used only for round of bluetooth.

###### Sample code

```javascript
let success = () => { console.log('success') }
let error = (e) => { console.log('error : ', e) }

Vue.cordova.ble-secret.encode(arg, success, error)
Vue.cordova.ble-secret.decode(arg, success, error)
```

###### Install

```bash
cordova plugin add cordova-plugin-ble-secret
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-ble-secret" target="_blank" class="icon npm">cordova-plugin-ble-secret</a>
