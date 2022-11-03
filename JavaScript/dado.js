var ultimaFace = 1;
var faceAnterior = 1;
var j = 1;

var p1 = 0
var p2 = 0
var p3 = 0
var p4 = 0

function sorteioDado(){


    if (j == 1) {
        document.getElementById("popup").src = "img/play1.png";
    } else if (j == 2) {
        document.getElementById("popup").src = "img/play2.png";
    } else if (j == 3) {
        document.getElementById("popup").src = "img/play3.png";
    } else if (j == 4) {
        document.getElementById("popup").src = "img/play4.png";
    }


    let face = Math.floor(Math.random() * 6) + 1;
    switch (face) {
        case 1:
            if (ultimaFace == 1){
                document.getElementById('face').src = 'img/face1.png';

                document.getElementById('play'+ j).style.left = c1.left + 'px';
                document.getElementById('play'+ j).style.top = c1.top + 'px';

                j++;
                if (j>4){
                    j = 1;
                }

                play+j++
                
            } else {
                document.getElementById('face').src = 'img/face1.png';

                document.getElementById('play'+ j).style.left = c1.left + 'px';
                document.getElementById('play'+ j).style.top = c1.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }

                
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 1;
            faceAnterior = 1;
            break;
        case 2:
            if (ultimaFace == 2){
                document.getElementById('face').src = 'img/face2.png';

                document.getElementById('play'+ j).style.left = c2.left + 'px';
                document.getElementById('play'+ j).style.top = c2.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }

            } else {
                document.getElementById('face').src = 'img/face2.png';

                document.getElementById('play'+ j).style.left = c2.left + 'px';
                document.getElementById('play'+ j).style.top = c2.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 2;
            faceAnterior = 2;
            break
        case 3:
            if (ultimaFace == 3){
                document.getElementById('face').src = 'img/face3.png';

                document.getElementById('play'+ j).style.left = c3.left + 'px';
                document.getElementById('play'+ j).style.top = c3.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }
                
            } else {
                document.getElementById('face').src = 'img/face3.png';

                document.getElementById('play'+ j).style.left = c3.left + 'px';
                document.getElementById('play'+ j).style.top = c3.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 3;
            faceAnterior = 3;
            break;
        case 4:
            if (ultimaFace == 4){
                document.getElementById('face').src = 'img/face4.png';

                document.getElementById('play'+ j).style.left = c4.left + 'px';
                document.getElementById('play'+ j).style.top = c4.top + 'px';
                if (j>4){
                    j = 1;
                }
                j++;
            } else {
                document.getElementById('face').src = 'img/face4.png';

                document.getElementById('play'+ j).style.left = c4.left + 'px';
                document.getElementById('play'+ j).style.top = c4.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }

            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 4;
            faceAnterior = 4;
            break;
        case 5:
            if (ultimaFace == 5){
                document.getElementById('face').src = 'img/face5.png';

                document.getElementById('play'+ j).style.left = c5.left + 'px';
                document.getElementById('play'+ j).style.top = c5.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }

            } else {
                document.getElementById('face').src = 'img/face5.png';

                document.getElementById('play'+ j).style.left = c5.left + 'px';
                document.getElementById('play'+ j).style.top = c5.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 5;
            faceAnterior = 5;
            break;
        case 6:
            if (ultimaFace == 6){
                document.getElementById('face').src = 'img/face6.png';

                document.getElementById('play'+ j).style.left = c6.left + 'px';
                document.getElementById('play'+ j).style.top = c6.top + 'px';
                j++;
                if (j>4){
                    j = 1;
                }

            } else {
                document.getElementById('face').src = 'img/face6.png';

                document.getElementById('play'+ j).style.left = c6.left + 'px';
                document.getElementById('play'+ j).style.top = c6.top + 'px';
                j++;

                if (j > 4){
                    j = 1;
                }
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 6;
            faceAnterior = 6;
            break;
    };
};