// https://stackoverflow.com/questions/20899863/the-module-property-is-undefined-when-using-vm-runinthiscontext


const vm = require('vm');
const m = require('module');

let xxx = 'test';

const sandbox = { xxx };

vm.createContext(sandbox);
const code = `
  const os = require('os');
  xxx = os.hostname();
  console.log(xxx)
`;

// const code = 'console.log(`hello from the context`)';

vm
  .runInThisContext(m.wrap(code))
  (exports, require, module, __filename, __dirname);

console.log(sandbox.xxx);
