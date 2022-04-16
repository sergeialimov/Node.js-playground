const async_hooks = require('async_hooks');

const asyncHook = async_hooks.createHook({ init, destroy }).enable();

const reqContextMap = new Map();

function createRequestContext (data) {
  reqContextMap.set(asyncHook.executionAsyncId(), data);
}

function getRequestContext() {
  return reqContextMap.get(asyncHook.executionAsyncId())
}

function init(asyncId, type, triggerAsyncId, resourse) {
  // Store the same context data for child async resourses
  if (reqContextMap.has(triggerAsyncId)) {
    reqContextMap.set(asyncId, reqContextMap.get(triggerAsyncId));
  }
}

function destroy(asyncId) {
  if (reqContextMap.has(asyncId)) {
    reqContextMap.delete(asyncId);
  }
}