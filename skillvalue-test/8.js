/**
 * What is the output of the following code?
 * 
 * The answer: result smth
 * 
 * Comments: 
 * that's not a reject, again
 */

 function doubleReject(param) {
  return new Promise((reject) => { // resolve
    reject(reject('smth'));
  });
}

doubleReject()
  .then((result) => { console.log(`result ${result}`)})
  .catch((err) => {
    console.error(`catch 1 ${err}`);
  })
  .catch((err) => {
    console.error(`catch 2 ${err}`);
  })
