let textoComum = document.getElementById('texto-comum');
let textoCriptografado = document.getElementById('criptografia');

let buttonCriptografar = document.getElementById('btn');
let buttonDescriptografar = document.getElementById('btn2');

let garnet = document.getElementById('temporario');
let caixaTexto = document.getElementById('criptografado');

let botaoCopiar = document.getElementById('copiar')


function Criptografar(){
    
    let traducao = textoComum.value
    .replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat");
    
    textoCriptografado.textContent = traducao;


    // console.log(traducao)

    if (textoComum.value.trim() == " " || textoComum.value.trim() == ""){
        alert("É necessário digitar uma mensagem.")
        garnet.classList.add("ativo")
        caixaTexto.classList.add("ativo")
     } else{
        garnet.classList.remove("ativo")
        caixaTexto.classList.remove("ativo")
    };

}

function Descriptografar(){
    
    let inverso = textoComum.value
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    
    textoCriptografado.textContent = inverso;

    if (textoComum.value.trim() == " " || textoComum.value.trim() == ""){
        alert("É necessário digitar uma mensagem.")
        garnet.classList.add("ativo")
     } else{
        garnet.classList.remove("ativo")
        caixaTexto.classList.remove("ativo")
    };
}

function Copiar(){

    var copiado = document.getElementById("criptografia");

    navigator.clipboard.writeText(copiado.value);

    alert("Perfeito! Mensagem criptografada copiada.")

}

let criptografar = document.querySelector("#texto-comum")

criptografar.addEventListener('keypress', function (e) {

    if (!checkChar(e)) {
        e.preventDefault();
        alert("Apenas letras minúsculas e sem acento!")
    }

});

function checkChar(e) {
    const char = String.fromCharCode(e.keyCode);

    const padrao = '[a-z0-9 ]';

    if (char.match(padrao)) {
        return true;
    }
}