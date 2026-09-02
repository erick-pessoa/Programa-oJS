const Janela_cliente = document.querySelector(".Janela_cliente");
const Btn_cadastrar = document.querySelector(".btn-cadastrar");
const btn_save = document.querySelector("#btn-salvar");
const inputName = document.querySelector("#nome");
const inputCpf = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");

Btn_cadastrar.addEventListener("click", () => {
  Janela_cliente.classList.toggle("FechaJanela");
});

/* SAVE BUTTON*/
btn_save.addEventListener("click", () => {

  let createFormLi = document.createElement("li");
  createFormLi.innerHTML = ` 
 <li>Nome: ${inputName.value}</li>
 <li>CPF: ${inputCpf.value}</li>
 <li>EMAIL: ${inputEmail.value}</li>
 <li>TELEFONE: ${inputTelefone.value}</li>
 
  `
  document.querySelector('#list_people').appendChild(createFormLi);
  

});
