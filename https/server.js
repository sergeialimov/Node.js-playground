import https from 'https';
import fs from 'fs';

const options = {
  key: fs.readFileSync('certificate/key.pem'),
  cert: fs.readFileSync('certificate/cert.pem'),
};

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end('hello https\n');
}).listen(8000);
