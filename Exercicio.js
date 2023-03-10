const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    const usuario = url.parse (req.url, true) .query.usuario;
    const senha = url.parse(req.url, true) .query.senha;

    if (usuario == undefined || senha === undefined)
    {
        res.end(`
            <html>
                <head>
                    <title>Controle de Acesso</title>
                </head>
                <body>
                    <h1>Acesso Negado!</h1>
                </body>
            </html>
        `)
    }
    else if(usuario == 'usuario' && senha == 'senha')
    {
        res.end(`
        <html>
            <head>
                <title>Controle de Acesso</title>
            </head>
            <body>
                <h1>Acesso Concedido!</h1>
            </body>
        </html>
    `);   
    }
    else
    {
        res.end(`
        <html>
            <head>
                <title>Controle de Acesso</title>
            </head>
            <body>
                <h1>Acesso Negado!</h1>
            </body>
        </html>
    `);    
    }
}).listen(3000);