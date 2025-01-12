let botaoReiniciar = document.getElementById('btn-reiniciar');
function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    
    if (ate < de) {
        resultado.innerHTML = `<label class="texto__paragrafo">O número no campo "Do número" está maior do que o "Até o número", favor ajustar!</label>`;
    } else{
        if (quantidade > ate - de + 1) {
            resultado.innerHTML = `<label class="texto__paragrafo">Quantidade de números muito grande!</label>`;
        } else {
            let sorteados = [];
            let numero;
        
            for (let i = 0; i < quantidade; i++) {
                numero = obterNumeroAleatorio(de, ate);
        
                while (sorteados.includes(numero)) {
                    numero = obterNumeroAleatorio(de, ate);
                }
                sorteados.push(numero);
            }
            let resultado = document.getElementById('resultado');
            resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
            if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
                alterarStatusBotao();
            } else {}
        }
    }  
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')) {
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.add('container__botao-desabilitado');
        botaoReiniciar.classList.remove('container__botao');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}