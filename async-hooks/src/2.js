const async_hooks = require('async_hooks')
const asyncHook = async_hooks.createHook({ init })
asyncHook.enable()
function init(asyncId, type, triggerAsyncId, resource) {
  console.log(asyncId, type)
}