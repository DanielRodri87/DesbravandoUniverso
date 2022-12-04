function sorteioSorte(){
    var janela = window.open("./JavaScript/sorteiosorte.html", "sorte", "width=1366", "height=768", "align=center");
    // Ao abrir a janela, deixar o tabuleiro borrado
    janela.document.getElementById("imgjogo").style.filter = "blur(5px)";
}
function sorteioPergunta(){
    var janela = window.open("./JavaScript/sorteiopergunta.html", "sorte", "width=1366", "height=768", "align=center");
    janela.document.getElementById("imgjogo").style.filter = "blur(5px)";

}