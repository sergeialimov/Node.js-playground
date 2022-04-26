/**
 * What would be output of the following code
 * 
 * The answer: { value: 0, done: false }
 */

function* getNext() {
  for (let i = 0; i < 0; i++) {
    yield i;
  }
  
}

let caller = getNext();

console.log(caller.next());
