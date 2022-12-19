// Tornar o index.html em um servidor local
// Exemplo: http://localhost:8080/index.html

// Variáveis
var socket = io();
var player;
var players = [];
var playerCount = 0;

// Função para criar um novo jogador
function createPlayer() {
    player = new Player();
    player.id = playerCount;
    playerCount++;
    players.push(player);
}

// Função para atualizar a posição do jogador
function updatePlayerPosition() {
    socket.emit('updatePlayerPosition', player);
}

