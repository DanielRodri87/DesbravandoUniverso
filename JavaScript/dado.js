var ultimaFace = 1;
var faceAnterior = 1;

function sorteioDado(){
    let face = Math.floor(Math.random() * 6) + 1;

    switch (face) {
        case 1:
            if (ultimaFace == 1){
                document.getElementById('face').src = 'img/face1.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 1 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face1.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 1;
            faceAnterior = 1;
            break;
        case 2:
            if (ultimaFace == 2){
                document.getElementById('face').src = 'img/face2.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 2 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face2.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 2;
            faceAnterior = 2;
            break
        case 3:
            if (ultimaFace == 3){
                document.getElementById('face').src = 'img/face3.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 3 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face3.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 3;
            faceAnterior = 3;
            break;
        case 4:
            if (ultimaFace == 4){
                document.getElementById('face').src = 'img/face4.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 4 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face4.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 4;
            faceAnterior = 4;
            break;
        case 5:
            if (ultimaFace == 5){
                document.getElementById('face').src = 'img/face5.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 5 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face5.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 5;
            faceAnterior = 5;
            break;
        case 6:
            if (ultimaFace == 6){
                document.getElementById('face').src = 'img/face6.png';
                document.getElementById('avisoDualsSorteio').innerHTML = 'Face 6 novamente!';
            } else {
                document.getElementById('avisoDualsSorteio').innerHTML = '';
                document.getElementById('face').src = 'img/face6.png';
            };
            document.getElementById('ultimoSorteado').innerHTML = 'Face Anterior: ' + faceAnterior;
            ultimaFace = 6;
            faceAnterior = 6;
            break;
    };
};
