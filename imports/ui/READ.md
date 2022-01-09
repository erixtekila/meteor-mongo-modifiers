# Test in Meteor's mongo package.

The last [Grapher](https://github.com/cult-of-coders/grapher) doesn't handle correcly `linkMany.add()` and `linkMany.remove()`. 
It raises an exception of an unused modifier `$set` while only `$addToSet` or `$pullAll` have being been used !

```sh
Exception while invoking method 'expertise.team.update' MongoError: '$set' is empty. You must specify a field like so: {$set: {<field>: ...}}
I20220108-22:54:42.971(1)?     at Function.create (/Users/ergo/.meteor/packages/npm-mongo/.3.9.1.vw5upk.wuuvf++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/mongodb/lib/core/error.js:57:12)
I20220108-22:54:42.971(1)?     at toError (/Users/ergo/.meteor/packages/npm-mongo/.3.9.1.vw5upk.wuuvf++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/mongodb/lib/utils.js:130:22)
I20220108-22:54:42.971(1)?     at /Users/ergo/.meteor/packages/npm-mongo/.3.9.1.vw5upk.wuuvf++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/mongodb/lib/operations/common_functions.js:384:39
I20220108-22:54:42.971(1)?     at handler (/Users/ergo/.meteor/packages/npm-mongo/.3.9.1.vw5upk.wuuvf++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/mongodb/lib/core/sdam/topology.js:953:24)
I20220108-22:54:42.972(1)?     at /Users/ergo/.meteor/packages/npm-mongo/.3.9.1.vw5upk.wuuvf++os+web.browser+web.browser.legacy+web.cordova/npm/node_modules/mongodb/lib/cmap/connection_pool.js:350:13
````

