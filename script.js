let botao = document.getElementById("botao");
let cartaoSala = document.getElementById("cartaoSala");

botao.addEventListener('click', acao);

function acao(){
    botao.classList.toggle("desativa");
    cartaoSala.classList.toggle("desativa");
}


let botao2 = document.getElementById("botao2");
let cartaoSala2 = document.getElementById("cartaoSala2");

botao2.addEventListener('click', acao2);

function acao2(){
    botao2.classList.toggle("desativa");
    cartaoSala2.classList.toggle("desativa");
}


let botao3 = document.getElementById("botao3");
let cartaoSala3 = document.getElementById("cartaoSala3");

botao3.addEventListener('click', acao3);

function acao3(){
    botao3.classList.toggle("desativa");
    cartaoSala3.classList.toggle("desativa");
}