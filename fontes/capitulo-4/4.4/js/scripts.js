//scripts.js
document.addEventListener("DOMContentLoaded", function(event) { 
    const divListagem = document.getElementById("divListagem");
    divListagem.style.display = "none";

    const divCadastro = document.getElementById("divCadastro");

    document.getElementById("btnListar").onclick = (evt) => {
        divListagem.style.display = "block";
        divCadastro.style.display = "none";
    }

    document.getElementById("btnCadastrar").onclick = (evt) => {
        divListagem.style.display = "none";
        divCadastro.style.display = "block";
    }
});