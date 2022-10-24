let count = 0;

/**
 * The code inside of promise worked only once during initialization
 * On the invokation step Promise returns the same initial result
 */
const p = new Promise((resolve, reject) => {
  console.log('Action');
  count++;
  resolve(count);
});

p.then(result => { console.log(result); });

count = 5; // no matter. count is still 1 inside of the promise

p.then(result => { console.log(result); });