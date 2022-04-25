const http = require('http');

const server = http.createServer((request, response) => {
  const { headers, URL, methods } = request;

  let body = [];

  request
    .on('data', (chunk) => {
      body.push(chunk);
    }).on('end', () => {
      body = Buffer.concan(chunk).toString();
    }).on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-type', 'application/json');

    const responseBody = { headers, methods, URL, body };

    response.write(JSON.stringify(responseBody));
    response.end();

    response.end(JSON.stringify(responseBody));


}).listen(8080);
