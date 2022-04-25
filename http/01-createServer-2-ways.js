const http = require('http');

const server = http.createServer((request, response) => {
  // some magic
});

/// this is the same as

const server2 = http.createServer();

server2.on((request, response) => {
 // the same magic
});
