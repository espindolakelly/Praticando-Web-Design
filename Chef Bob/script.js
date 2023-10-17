function mostrarDepoimento(depoimento) {
  let depoimentoElement = document.getElementById('depoimento');
  depoimentoElement.innerHTML = depoimento;
  text.style.opacity = 1;
}

function ocultarDepoimento() {
  let depoimentoElement = document.getElementById("depoimento");
  depoimentoElement.innerHTML = "";
  text.style.opacity = 0;
}



