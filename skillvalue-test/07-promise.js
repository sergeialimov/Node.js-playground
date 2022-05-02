/**
 * What is the output of the following code?
 * 
 * The answer: catch 1 smth
 * 
 * Comments: 
 * reject here is the single parameter placed first. In reality that's not rejece, but resolve
 */

function methodToReject(param) {
  return new Promise((reject) => { // resolve
    reject(Promise.reject('smth'));
  });
}

methodToReject()
  .catch((err) => {
    console.error(`catch 1 ${err}`);
    // throw Error('One more error'); // enter the second catch
  })
  .catch((err) => {
    console.error(`catch 2 ${err}`);
  })

