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

    const frmCadastro = document.getElementById("frmCadastro");
    frmCadastro.onsubmit = (evt) => {
        
        let linha = '<tr>';
        var data = new FormData(frmCadastro)
        for(let item of data)
            linha += `<td>${item[1]}</td>`;
        linha += '<td><input type="button" value="X" /></td></tr>';

        //se tem apenas uma TD, é a default
        const tbody = document.querySelector('table > tbody');
        if(tbody.querySelectorAll('tr > td').length === 1)
            tbody.innerHTML = "";

        tbody.innerHTML += linha;

        divListagem.style.display = "block";
        divCadastro.style.display = "none";

        frmCadastro.reset();

        const buttons = document.querySelectorAll("input[value='X']");
        for(let btn of buttons){
            if(btn.onclick !== null) continue;
            btn.onclick = (evt) => {
                if(confirm('Tem certeza que deseja excluir este cliente?')){
                    btn.closest('tr').remove();
                }
            }
        }

        evt.preventDefault();
    }
});