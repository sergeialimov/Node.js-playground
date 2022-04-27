/**
 * What is the output of the following code?
 * 
 * The answer: methodA has been called
 * 
 * Comments: methodA returns not resolved promise. But it also prints to the console
 */

function methodA(param) {
  return new Promise((resolve, reject) => {
    let newJsonObject = JSON.parse(param);
    console.log('methodA has been called');
    resolve(newJsonObject);
  });
}

methodA('{"a": "test"}').catch((err) => {
  console.error(`error ${err}`);
});
