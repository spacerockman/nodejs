//set http, hostname port

//'require' is kind like 'import' in Java
const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/palin');

    switch(req.url){
        case '/':
            res.end('Hello, world');
            break;
        case'/about':
            res.end('This is about page');
            break;
        case '/home':
            res.statusCode = 200;
            res.end('this is Home page');
            break;
        case '/error':
            res.statusCode = 400;
            res.end('this is error page');
            break;
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});