// Fazer a comunicação do servidor com o cliente, tudo que acontece é reaplicado nos clientes
// O servidor é o responsável por enviar as informações para os clientes

const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/helloworld', function(req, res) {
  res.status(200).send('Hello World!');
});

io.on('connection', function(socket) {
  console.log('O usuário conectou-se');
}
);

server.listen(6677, function() {
  console.log('Servidor está funcionando em http://localhost:6677');
});


