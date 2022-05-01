 function* getNext() {
  yield 1;
}
let caller = getNext();
console.log(caller.next()); // { value: 1, done: false }


function* getNext2() {
  return 1;
}
let caller2 = getNext2();
console.log(caller2.next()); // { value: 1, done: true }


function* getNext3() {
  return;
}
let caller3 = getNext3();
console.log(caller3.next()); // { value: undefined, done: true }

function* getNext4() {}
let caller4 = getNext4();
console.log(caller4.next()); // { value: undefined, done: true }

function* getNext5() {
  return null;
}
let caller5 = getNext5();
console.log(caller5.next()); // { value: null, done: true }

function* getNext6() {
  yield;
}
let caller6 = getNext6();
console.log(caller6.next()); // { value: undefined, done: false }