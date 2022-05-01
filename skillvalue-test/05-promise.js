/**
 * What is the output of the following code?
 * 
 * The answer: error SyntaxError: Unexpected token s in JSON at position 0
 */

function methodA(param) {
  return new Promise((resolve, reject) => {
    let newJsonObject = JSON.parse(param);

    console.log('methodA has been called');

    resolve(newJsonObject);
  });
}

methodA('smth that isn\'t a JSON').catch((err) => {
  console.error(`error ${err}`);
});
