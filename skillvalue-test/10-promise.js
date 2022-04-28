/**
 * What is the output of the following code?
 * 
 * The answer: Err "reject1"
 * 
 * Comments: doubleReject isn't invoked at all. And `reject` there is `resolve`
 * 
 */

 let promises = [Promise.resolve('resolve1'), Promise.reject('reject1')];
 const res = Promise.all(promises)
  .then((result) => { console.log(`Then ${JSON.stringify(result)}`) })
  .catch((err) => { console.error(`Err ${JSON.stringify(err)}`)})


  function doubleReject() {
    return new Promise((reject) => {
      reject(reject('reject'));
    })
  }
 