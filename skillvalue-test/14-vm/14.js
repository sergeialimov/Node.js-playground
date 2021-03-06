/**
 * What would be a result
 * 
 * The answer: the result is ReferenceError: require is not defined
 * 
 * Comment: to fix that use the following explanation
 * https://stackoverflow.com/questions/20899863/the-module-property-is-undefined-when-using-vm-runinthiscontext
 */


// import vm from 'vm';
const vm = require('vm');

let xxx = '';

const sandbox = { xxx };


vm.createContext(sandbox);
vm.runInContext('const os = require(`os`); xxx = os.hostname();', sandbox);

console.log(sandbox.xxx);
