$( function() {
    $( ".player" ).draggable();
  } );

// Criar um servidor local javascript
// npm install -g http-server
// http-server -p 8080

play1 = document.getElementById("play1");
play2 = document.getElementById("play2");
play3 = document.getElementById("play3");
play4 = document.getElementById("play4");

// Relacionar o player com os 4 primeiros que entrarem no localhost
socket.on('player1', function(data){
    play1.innerHTML = data;
});

socket.on('player2', function(data){
    play2.innerHTML = data;
});

socket.on('player3', function(data){
  play3.innerHTML = data;
});

socket.on('player4', function(data){
  play4.innerHTML = data;
});

