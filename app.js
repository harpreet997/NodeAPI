const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<h1>Node JS Application</h1>');
    }
    else if (req.url === '/about') {
        res.write('<h1>About US Page</h1>');
    }
    else {
        res.write('No page found 404 error');
    }
    res.end();
})

server.listen(5000);