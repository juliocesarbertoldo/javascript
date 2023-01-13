let resultado = window.document.getElementById('resultado')
let botao = window.document.getElementById('botao')
botao.addEventListener('click', tabuada)

function tabuada(num) {
    num = window.document.getElementById('numero')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        num = num.value
        let cont = 0
        resultado.innerHTML = ''
        while (cont <= 10) {
            if (cont == 0) {
                let tab = document.createElement('option')
                tab.text = `----- Tabuada -----`
                resultado.appendChild(tab)
            }
            let tab = document.createElement('option')
            tab.text = `${num} X ${cont} = ${num * cont}`
            tab.value = `item${cont}`
            resultado.appendChild(tab)
            cont++
        }
    }
}