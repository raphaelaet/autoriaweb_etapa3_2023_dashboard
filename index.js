/*
document.querySelector - Buscar um elemento a partir de seletores CSS (### MAIS UTILIZADO ###)
document.getElementById - Buscar um elemento a partir do valor de id
document.getElementsByClassName - Buscar um elemento a partir do nome da classe
document.getElementsByTagName - Buscar um elemento pelo nome da tag (HTML)
document.querySelectorAll - Buscar todos os elementos a partir de um seletor CSS
*/

let formulario = document.querySelector(".formulario_produto");
let corpoTabela = document.querySelector(".corpo_tabela_produto");
let campos = document.querySelectorAll(".campo")

/*
function sumberFormularioSimples(evento) {
    evento.preventDefault();
    alert("Teste")
}
formulario.addEventListener("submit",sumberFormularioSimples);
*/


/*
formulario.addEventListener("submit", function(evento){
    evento.preventDefault();
    alert("Teste II")
});
*/

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault();
    let tr = document.createElement("tr");
    for (let i=0; i < campos.length; i++) {
        let td = document.createElement("td");
        td.textContent = campos[i].value;
        tr.appendChild(td)
    }
    corpoTabela.appendChild(tr);
});