let resultado = window.document.getElementById('resultado')
let botao = window.document.getElementById('botao')
botao.addEventListener('click', verificar)

function verificar(idade) {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = Number(window.document.getElementById('anoNasc').value)
    idade = anoAtual - anoNasc

    if (idade >= anoAtual) {
        window.alert('[ERRO] Ano de Nascimento inválido ou não informado!')
    } else {
        let checkSexo = window.document.getElementsByName('sexo')
        let sexo = ''
        let imagem = document.createElement('img')
        if (checkSexo[0].checked) {
            sexo = 'um Homem'
            if (idade < 12) {
                imagem.setAttribute('src', 'imagens/crianca_menino.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'imagens/jovem_menino.png')
            } else if (idade < 60) {
                imagem.setAttribute('src', 'imagens/adulto_menino.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso_menino.png')
            }
        } else {
            sexo = 'uma Mulher'
            if (idade < 12) {
                imagem.setAttribute('src', 'imagens/crianca_menina.png')
            } else if (idade < 18) {
                imagem.setAttribute('src', 'imagens/jovem_menina.png')
            } else if (idade < 60) {
                imagem.setAttribute('src', 'imagens/adulto_menina.png')
            } else {
                imagem.setAttribute('src', 'imagens/idoso_menina.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${sexo} com ${idade} anos`
        resultado.appendChild(imagem)
    }
}