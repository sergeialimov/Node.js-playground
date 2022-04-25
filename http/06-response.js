// http status code
response.statusCode = 404;

// setting response headers
response.setHeader('Content-type', 'application/json');
response.setHeader('X-Powered-By', 'bacon');

// explicitly sending header data
response.writeHead(200, {
  'Content-type': 'application/json',
  'X-powered-by': 'bacon',
});

// sending response body
response.write('<html>');
response.write('<body>');
response.write('<h1>Hello, http</h1>');
response.write('/body');
response.write('/html');
response.end();

/**
 * The end function on streams can also take in some optional data to send as
 * the last bit of dataon the stream, so we can simplify the example above as follows.
 */

response.end('<html><body><h1>Hello, World!</h1></body></html>');
