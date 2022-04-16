const async_hooks = require('async_hooks')
const asyncHook = async_hooks.createHook({
  init,
  // destroy,
})

asyncHook.enable()

function init (asyncId, type, triggerAsyncId, resourse) {
  console.log(asyncId, type);
}

// function destroy(asyncId) {
//   // code
// }