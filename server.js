var http = require('http');
var static = require('node-static');

var path = new static.Server(`${__dirname}/localhost/index.html`)

var io = require('socket.io')(http.createServer(function(req, res) {
    req.addListener('end', function() {
        path.serve(req, res);
    }).resume();
}).listen(3000));

io.on('connection', function(socket) {
    console.log('Conectado ao servidor');
    socket.on('disconnect', function() {
        console.log('Desconectado do servidor');
    });
    socket.on('sorteioDado', function(data) {
        console.log(data);
        sorteioDado();
    });
    socket.on('sorteioSorte', function(data) {
        console.log(data);
        sorteioSorte();
    });
    socket.on('sorteioPergunta', function(data) {
        console.log(data);
        sorteioPergunta();
    });
    socket.on('regras', function(data) {
        console.log(data);
        regras();
    });
    socket.on('move', function(data) {
        console.log(data);
        move(data);
    });
    socket.on('conf', function(data) {
        console.log(data);
        conf(data);
    });
});

// comando para rodar o servidor:
// node server.js

