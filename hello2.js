const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    let name = require('url').parse(req.url, true).query.name;

    if(name == undefined)
    {
        res.end(`
        <html>
            <head>
                <meta charset= "UTF-8">
                <title>Exemplo Hello</title>
            <head>
            <body>
                <h1>Olá Mundo!</h1>
            </body>
        </html>
        `);
    }
    else if (name == 'burningbird')
    {

    }
    else
    {
        res.end(`
        <html>
            <head>
                <meta charset= "UTF-8">
                <title>Exemplo Hello</title>
            <head>
            <body>
                <h1>Olá ${name}!</h1>
            </body>
        </html>
        `);

    }
}).listen(8124);