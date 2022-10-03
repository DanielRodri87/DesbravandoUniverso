function sorteioSorte(){
    var sortes = [
        "Volte uma posição!",
        "Avance duas posições!",
        "Fique uma rodada sem jogar!",
        "Jogue o dado novamente!",
        "Volte duas posições!",
        "Avance três posições! Que sorte!",
        "Volte três posições!",
        "Volte para a posição onde estava"
    ];
    var sorteio = Math.floor(Math.random() * sortes.length);
    var fraseSorteada = sortes[sorteio];
    document.getElementById('sorte_sorteada').innerHTML = fraseSorteada;
    document.getElementById('pergunta').innerHTML = 'Você deverá responder uma pergunta';
};