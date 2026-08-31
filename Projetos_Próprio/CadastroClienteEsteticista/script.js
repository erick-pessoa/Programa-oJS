const Janela_cliente = document.querySelector(".Janela_cliente");
const Btn_cadastrar = document.querySelector(".btn-cadastrar");

Btn_cadastrar.addEventListener("click", () => {
  Janela_cliente.classList.toggle("FechaJanela");
});
