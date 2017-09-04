---
title: SMS
add_url: cordova-plugin-ble-central
description: Send sms messages from the device
---

SMS is made available in `Vue.cordova.ble`. This is used only for round of bluetooth.

###### Sample code

```javascript
let success = () => { console.log('success') }
let error = (e) => { console.log('error : ', e) }

Vue.cordova.ble.scan(services, timeout, success, error)
```

###### Install

```bash
cordova plugin add cordova-plugin-ble-central
```

###### Source

<a href="https://www.npmjs.com/package/cordova-plugin-ble-central" target="_blank" class="icon npm">cordova-plugin-ble-central</a>
