import vm from 'vm';
import util from 'util';

const x = 1;

const context = { x: 2 };

vm.createContext(context) // contextify the object

const code = 'x += 40; var y = 17;';

// x and y are global in the context
// Initially, x has value 2 because that is the value of context.x

vm.runInContext(code, context);

console.log(context.x); // 42
console.log(context.y); // 17

console.log(x); // 1, y isn't defined
