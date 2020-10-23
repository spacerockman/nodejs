//set http, hostname port

//'require' is kind like 'import' in Java
const http = require('http');
const config = require('./easyserver_config').config;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/palin');
    res.end('Hello, world');
});

server.listen(config.port, config.hostname, () => {
    console.log(`Server running at http://${config.hostname}:${config.port}`);
});