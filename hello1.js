const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Ola Mundo!');

}).listen(8124);

console.log('Sistema rodando em localhot:8124');