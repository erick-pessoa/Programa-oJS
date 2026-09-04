const Janela_cliente = document.querySelector(".Janela_cliente");
const Btn_cadastrar = document.querySelector(".btn-cadastrar");
const btn_save = document.querySelector("#btn-salvar");
const inputName = document.querySelector("#nome");
const inputCpf = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputText = document.querySelector("#textClient");

let clientEdit = null;

/* SHOWING WINDOW OF CLIENT*/
Btn_cadastrar.addEventListener("click", () => {
  Janela_cliente.classList.toggle("FechaJanela");
});

/* SAVE BUTTON*/
btn_save.addEventListener("click", () => {
  let createFormLi = document.createElement("li");
  createFormLi.innerHTML = ` 
 <div class="client-nome"> Nome: ${inputName.value}</div>
 <div class="client-cpf"> CPF: ${inputCpf.value}</div>
 <div class="client-email"> Email: ${inputEmail.value}</div>
 <div class="client-telefone"> Telefone: ${inputTelefone.value}</div>
 <div class="client-texto"> Texto: ${inputText.value}</div>

 <span class="remove" onclick="removeForm(this)">❌</span>
 <button class="btn_edit" onclick="EditForm(this)">✏️</button>
 `;

  document.querySelector("#list_people").appendChild(createFormLi);

  document.querySelector("#nome").value = "";
  document.querySelector("#cpf").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#telefone").value = "";
  document.querySelector("#textClient").value = "";
});

/* REMOVE LIST OF PEOPLE*/
const removeForm = (e) => {
  e.parentElement.remove();
};

/* EDIT LIST OF PEOPLE*/
const EditForm = (e) => {

  const client = e.parentElement;
  const name = client.querySelector(".client-nome");
  name.textContent=`<div class="client-nome"> Nome: ${}</div>`;

};
