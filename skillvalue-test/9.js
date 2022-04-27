/**
 * What is the output of the following code?
 * 
 * The answer: true
 * 
 * Comments: The Promise.all() method takes an iterable of promises as an input,
 * and returns a singlePromise that resolves to an array of the results of the input promises.
 * 
 */

let promises = [Promise.resolve('resolve1'), Promise.resolve('resolve2')];

Promise.all(promises)
  .then((result) => {
    console.log(result instanceof Array);
    console.log(promises);
  });



