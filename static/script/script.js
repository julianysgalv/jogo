const opcoes = ['hellokitty', 'mymelody', 'pochacco', 'cinnamaroli', 'badtemaru', 'kuromi', 'keroppi', 'pompompurin']
let escolha = ''
let pontosJogador = 0
let pontosComputador = 0

const regras = {
    
}

function escolherCarta() {
    const carta = Math.floor(Math.random() * opcoes.length)
    escolha = opcoes[carta]
    return escolha
}

