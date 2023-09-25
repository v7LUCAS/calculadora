
function calcularMedia() {
    var notas = document.querySelectorAll('p');
    var total = 0;
    var count = 0;

    
    for (var i = 1; i < notas.length - 2; i += 2) { 
        var nota = parseFloat(notas[i].textContent);
        if (!isNaN(nota)) { 
            total += nota;
            count++;
        }
    }

    
    var media = total / count;
    
    
    var mensagem = document.querySelector('p:last-child');
    if (!isNaN(media)) {
        if (media >= 60) {
            mensagem.textContent = 'Aprovado!';
        } else {
            var pontosFaltantes = 60 - media;
            mensagem.textContent = 'Não, falta ' + pontosFaltantes.toFixed(2) + ' para passar.';
        }
    } else {
        mensagem.textContent = 'Notas inválidas.';
    }
}


window.addEventListener('load', calcularMedia);
