
let resultado = window.document.getElementById('resultado')
let vlrAdd = window.document.getElementById('vlrAdd')
let botaoAdd = window.document.getElementById('botaoAdd')
botaoAdd.addEventListener('click', adicionar)
let lista = []

function adicionar(numero) {
    numero = window.document.getElementById('numero')

    if (numero.value.length == 0 || numero.value < 1 || numero.value > 100 || lista.indexOf(numero.value) != -1) {
        window.alert('Valor inválido ou já adicionado na lista')
    } else {
            lista.push(numero.value)
            let item = document.createElement('option')
            item.text = `Valor ${numero.value} adicionado.`
            vlrAdd.appendChild(item)
    }
}

function finalizar() {
    
}
