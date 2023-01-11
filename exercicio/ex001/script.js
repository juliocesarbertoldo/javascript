function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let texto = window.document.getElementById('texto')
    let imagem = window.document.getElementById('imagem')

    texto.innerHTML = `Agora são ${hora} horas`

    if (hora < 12) {
        imagem.src = 'imagens/fotomanha.png'
        document.body.style.background = '#cec575'
    } else if (hora <= 18) {
        imagem.src = 'imagens/fototarde.png'
        document.body.style.background = '#c74c71'
    } else {
        imagem.src = 'imagens/fotonoite.png'
        document.body.style.background = '#07193a'
    }
}

document.onload = carregar()