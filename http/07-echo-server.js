const http = require('http');
const { listenerCount } = require('process');

http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 404;
    response.end();
  });

  response.on('error', (err) => {
    console.error(err);
  })

  if (request.method === 'POST' && request.url == '/echo') {
    request.pipe(response);
  } else {
    response.statusCode = 404;
    response.end();
  }


}).listen(8081);
