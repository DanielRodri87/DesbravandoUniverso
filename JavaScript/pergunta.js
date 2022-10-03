function sorteioPergunta() {
  var perguntas = [
    "Qual o nome dado a uma morte estrelar?\n\na) Supernova\nb) Neutron Star\nc) Black Hole",
    "Qual o nome dado a uma estrela que já explodiu?\n\na) Black Hole\nb) Neutron Star\nc) Supernova",
    "Qual o nome da maior estrela já descoberta?\n\na) VY Canis Majoris\nb) Rigel\nC) Betelgeuse",
  ];

  var sorteio = Math.floor(Math.random() * perguntas.length);
  var fraseSorteada = perguntas[sorteio];
  document.getElementById('pergunta').innerHTML = fraseSorteada;
  document.getElementById('sorte_sorteada').innerHTML = 'Sorte ou Azar';
};
