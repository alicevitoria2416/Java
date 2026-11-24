
// Mensagem externa
function mensagem() {
    alert("Olá!");
}


// Alterar texto e cor
let botaoAlterar = document.getElementById("botaoAlterar");
let paragrafo = document.getElementById("paragrafo");

botaoAlterar.onclick = function() {
    paragrafo.textContent = "Faço o ensino médio no IFSP Câmpus Birigui!";
    paragrafo.style.color = "blue";
    document.body.style.backgroundColor = "lightblue";
    paragrafo.style.fontSize = "22px";
};


// Mostrar o que está sendo digitado
let campo = document.getElementById("campo");
let espelho = document.getElementById("espelho");

campo.oninput = function() {
    espelho.textContent = campo.value;
};


// Adicionar curiosidade
let adicionar = document.getElementById("adicionar");
let curiosidades = document.getElementById("curiosidades");

adicionar.onclick = function() {
    let novo = document.createElement("p");

    novo.textContent = "Gosto de aprender coisas novas!";

    curiosidades.appendChild(novo);
};


// Remover curiosidade
let remover = document.getElementById("remover");

remover.onclick = function() {
    if (curiosidades.lastElementChild) {
        curiosidades.lastElementChild.remove();
    }
};


// Efeito na imagem
let imagem = document.querySelector("#imagem");

imagem.onmouseover = function() {
    imagem.classList.add("efeito");
};

imagem.onmouseout = function() {
    imagem.classList.remove("efeito");
};


// Selecionar todos os parágrafos de curiosidades
let lista = document.querySelectorAll("#curiosidades p");
