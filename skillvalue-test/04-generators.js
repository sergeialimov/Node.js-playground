/**
 * What would be output of the following code
 * 
 * The answer: { value: undefined, done: true }
 */

function* getNext() {
  // for (let i = 0; i < 0; i++) {
  //   yield i;
  // }
  // yield 1;
  return 1;
  
}

let caller = getNext();

console.log(caller.next());
