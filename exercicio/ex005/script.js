
let resultado = window.document.getElementById('resultado')
let vlrAdd = window.document.getElementById('vlrAdd')
let botaoAdd = window.document.getElementById('botaoAdd')
botaoAdd.addEventListener('click', adicionar)
let botaoRes = window.document.getElementById('botaoRes')
botaoRes.addEventListener('click', finalizar)
let lista = []
let finalizou = false

function adicionar(numero) {
    resultado.innerHTML = ''
    finalizou = false
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

function finalizar(menor, maior) {
    if (lista.length == 0) {
        window.alert('Adicione um valor a lista antes de finalizar!')
    } else if (finalizou == true) {
        window.alert('O resultado já está informado na tela!\nAdicione um novo valor para um resultado diferente')
    } else {
        let soma = 0
        let media = 0
        for (let posicao in lista) {
            if (posicao == 0) {
                menor = maior = lista[0]
            } else if (menor > lista[posicao]) {
                menor = lista[posicao]
            } else if (maior < lista[posicao]) {
                maior = lista[posicao]
            }

            soma += Number(lista[posicao])
            media = soma / lista.length
        }
        resultado.innerHTML += `<p>Ao todo temos ${lista.length} elemento(s) cadastrado(s).</p>`
        resultado.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        resultado.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        resultado.innerHTML += `<p>Somando todos o valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`

        finalizou = true
    }
}
