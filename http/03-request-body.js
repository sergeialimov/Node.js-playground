const { request } = require("http");

let body = [];

request.on('data', (chunk) => {
  body.push(chunk);
}).on('end', () => {
  body = Buffer.concat(chunk).toString();
  // at this point `body` has the entire request body stored in it as a string
});
