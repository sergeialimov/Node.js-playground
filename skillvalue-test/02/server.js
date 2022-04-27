import http from 'http';

// const { listenerCount } = require('process');

const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 404;
    response.end();
  });
  
  response.on('error', (err) => {
    console.error(err);
  })
  
  if (request.method === 'GET' && request.url == '/test') {
    // console.log(request.url);
    // request.pipe(response);
    response.writeHead(200, { 'Content-Type': 'application/json'})
    response.end(JSON.stringify({ data: 'Hey' }));
  } else {
    response.statusCode = 404;
    response.end();
  }


}).listen(8081);

server.on('connection', (socket) => {
  console.log('new connection');
});

console.log('server is listening on 8081');