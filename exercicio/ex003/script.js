let resultado = window.document.getElementById('resultado')
let botao = window.document.getElementById('botao')
botao.addEventListener('click', contar)

function contar(inicio, fim, passo) {
    inicio = Number(window.document.getElementById('inicio').value)
    fim = Number(window.document.getElementById('fim').value)
    passo = Number(window.document.getElementById('passo').value)
    resultado.innerHTML = 'Contando.. <br>'

    for (let valor = inicio; valor < fim; valor += passo) {
        resultado.innerHTML += `${valor} &#128073;`
    }
    resultado.innerHTML += '&#127937;'
}