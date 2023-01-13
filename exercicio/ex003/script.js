let resultado = window.document.getElementById('resultado')
let botao = window.document.getElementById('botao')
botao.addEventListener('click', contar)

function contar(inicio, fim, passo) {
    inicio = Number(window.document.getElementById('inicio').value)
    fim = Number(window.document.getElementById('fim').value)
    passo = Number(window.document.getElementById('passo').value)
    resultado.innerHTML = 'Contando.. <br>'

    if (inicio == 0 || fim == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        if (passo < 1) {
            window.alert('Passo inválido! Considerando PASSO 1')
        } else {
            for (let valor = inicio; valor < fim; valor += passo) {
                resultado.innerHTML += `${valor} &#128073;`
            }
            if (passo >= 1){
                resultado.innerHTML += '&#127937;'
            }
        }
    }

}