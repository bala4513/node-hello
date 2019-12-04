const http = require('http');

const hostname = '0.0.0.0';
const port = 8001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World LIGHT YAGAMI 10 running from container!!!!!!!!!!!!!!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
