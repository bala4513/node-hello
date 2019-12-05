const http = require('http');

const hostname = '0.0.0.0';
const port = 8001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World LIGHT YAGAMI 11 running from container checking swarm changed congif in jenkins !!!!!!!!!!!!!!!!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
