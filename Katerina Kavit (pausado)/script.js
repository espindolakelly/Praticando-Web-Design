function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdownOptions");
    var dropdownSelect = document.getElementById("dropdownSelect");

    if (dropdownOptions.style.display === "block") {
        dropdownOptions.style.display = "none";
        dropdownSelect.classList.remove("dropdown-aberto");
    } else {
        dropdownOptions.style.display = "block";
        dropdownSelect.classList.add("dropdown-aberto");
    }
}

function selecionarOpcao(descricao) {
    var descricaoDiv = document.getElementById("descricao");
    descricaoDiv.innerHTML = descricao;

    // Fechar o dropdown após a seleção
    var dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.style.display = "none";

    var dropdownSelect = document.getElementById("dropdownSelect");
    dropdownSelect.classList.remove("dropdown-aberto");
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    var dropdownOptions = document.getElementById("dropdownOptions");
    var dropdownSelect = document.getElementById("dropdownSelect");

    if (!event.target.matches('.dropdown-select')) {
        if (dropdownOptions.style.display === "block") {
            dropdownOptions.style.display = "none";
            dropdownSelect.classList.remove("dropdown-aberto");
        }
    }
}