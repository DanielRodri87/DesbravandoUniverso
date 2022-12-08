const fimbranco = "left: -628px; top: 266px;"
const fimverde = "left: -597px; top: 236px;"
const fimazul = "left: -593px; top: 271px;"
const fimpreto = "left: -632px; top: 238px;"

// play1 = branco
// play2 = verde
// play3 = azul
// play4 = preto

function winner() {
    if (play1.style.cssText == fimbranco) {
        alert("O jogador 1 ganhou!")
    } else if (play2.style.cssText == fimverde) {
        alert("O jogador 2 ganhou!")
    } else if (play3.style.cssText == fimazul) {
        alert("O jogador 3 ganhou!")
    } else if (play4.style.cssText == fimpreto) {
        alert("O jogador 4 ganhou!")
    }
}
