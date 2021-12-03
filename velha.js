var jogador,vencedor = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');

mudarJogador("X");

function escolherQuadrado(id){
    if (vencedor != null){
        return;
    }
    var quadrado = document.getElementById(id);
    if(quadrado.innerHTML != '-'){
        return;
    }
    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
    if(jogador == "X"){
        mudarJogador("O");
    }else{
        mudarJogador("X");
    }

    checkVencedor();
}

function mudarJogador(valor){
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checkVencedor(){

    //check linhas
    if(checkSequencia(quadrados[0],quadrados[1],quadrados[2])){
        mudarCorVencedor(quadrados[0],quadrados[1],quadrados[2]);
        declararVencedor(quadrados[0]);
        return;
    }
    if(checkSequencia(quadrados[3],quadrados[4],quadrados[5])){
        mudarCorVencedor(quadrados[3],quadrados[4],quadrados[5]);
        declararVencedor(quadrados[3]);
        return;
    }
    if(checkSequencia(quadrados[6],quadrados[7],quadrados[8])){
        mudarCorVencedor(quadrados[6],quadrados[7],quadrados[8]);
        declararVencedor(quadrados[6]);
        return;
    }

    //check colunas
    if(checkSequencia(quadrados[0],quadrados[3],quadrados[6])){
        mudarCorVencedor(quadrados[0],quadrados[3],quadrados[6]);
        declararVencedor(quadrados[0]);
        return;
    }
    if(checkSequencia(quadrados[1],quadrados[4],quadrados[7])){
        mudarCorVencedor(quadrados[1],quadrados[4],quadrados[7]);
        declararVencedor(quadrados[1]);
        return;
    }
    if(checkSequencia(quadrados[2],quadrados[5],quadrados[8])){
        mudarCorVencedor(quadrados[2],quadrados[5],quadrados[8]);
        declararVencedor(quadrados[2]);
        return;
    }

    //check diagonais
    if(checkSequencia(quadrados[0],quadrados[4],quadrados[8])){
        mudarCorVencedor(quadrados[0],quadrados[4],quadrados[8]);
        declararVencedor(quadrados[0]);
        return;
    }
    if(checkSequencia(quadrados[2],quadrados[4],quadrados[6])){
        mudarCorVencedor(quadrados[2],quadrados[4],quadrados[6]);
        declararVencedor(quadrados[2]);
        return;
    }

    //em caso de empate, reinicia o jogo
    if (verificarQuadrados() >= 9){
        reinicia();
    }
}

function verificarQuadrados(){
    var quad = 0;
    for(let i=0; i<quadrados.length; i++){
        if(quadrados[i].innerHTML != '-'){
            quad++;
        }
    }
    return quad;
}

function mudarCorVencedor(quadrado1,quadrado2,quadrado3){
    quadrado1.style.background = "#0f0"
    quadrado2.style.background = "#0f0"
    quadrado3.style.background = "#0f0"
}

function declararVencedor(quadrado){
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function checkSequencia(quadrado1,quadrado2,quadrado3){
    var check = false;

    if(quadrado1.innerHTML!='-' && quadrado1.innerHTML == quadrado2.innerHTML && quadrado2.innerHTML == quadrado3.innerHTML){
        check = true;
    }

    return check;
}

function reinicia(){
    vencedor = null;
    vencedorSelecionado.innerHTML = '';

    for (const i of quadrados) {
        i.style.background = "#eee";
        i.style.color = "#eee";
        i.innerHTML = "-";
    }

    mudarJogador("X");
}