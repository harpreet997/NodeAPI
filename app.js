const http = require('http');

const fs = require('fs');
const path = fs.readFileSync('./index.html')

const server = http.createServer((req, res) => {
console.log("Request completed");
res.writeHead(200, {'content-type': 'text/html'});
res.write(path);
res.end();
})

server.listen(5000);
