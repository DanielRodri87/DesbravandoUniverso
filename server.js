// criar e rodar um servidor que redireciona para o index.html

var http = require('http');
var fs = require('fs');
var path = require('path');

// criando servidor
http.createServer(function (request, response) {
    console.log('request starting...');

    // pegando o arquivo index.html
    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './localhost/index.html';

    // extensão do arquivo
    var extname = path.extname(filePath);
    var contentType = 'localhost/html';
    switch (extname) {
        case '.js':
            contentType = 'localhost/javascript';
            break;
        case '.css':
            contentType = 'localhost/css';
            break;
    }

    // lendo o arquivo
    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end(); 
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(8080);

// rodar: node server.js