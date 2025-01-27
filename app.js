let listaDeNumerosSorteados = [];
let numeroMaximo = 10;
numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10'); 
}

mensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); //pega o valor do input
    if(chute == numeroSecreto){ //faz a comparação do valor digitado com o numero secreto
        exibirTextoNaTela('h1', 'Você acertou :)');
        palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        exibirTextoNaTela('p', `Você acertou o numero secreto com ${tentativas} ${palavraTentativa}`);
        document.getElementById('reiniciar').removeAttribute('disabled'); //remove o disabled do botão
    }else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');  
        }
        tentativas++;
        limparCampo() //limpa o campo
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeNumerosSorteados = listaDeNumerosSorteados.length;

    if (quantidadeDeNumerosSorteados == numeroMaximo) {
        listaDeNumerosSorteados = []; 
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
}}

//limpa o campo texto do input
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}