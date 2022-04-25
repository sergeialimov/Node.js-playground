const { request } = require("http");

request.on('error', (err) => {
  // this prints the error message and stack to `stderr`
  console.error(err);
});

