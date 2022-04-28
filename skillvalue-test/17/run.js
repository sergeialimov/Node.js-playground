/**
 * What would be a result
 * 
 * The answer: exportConst1 undefined, exportConst2 2
 * 
 * Comments: because the second export line changes value of module.exports
 */

const { exportConst1 } = require('./17.js');
const { exportConst2 } = require('./17.js');

console.log(`exportConst1 ${exportConst1}`);
console.log(`exportConst2 ${exportConst2}`);
