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
 <div>Nome: ${inputName.value}</div>
 <div>CPF: ${inputCpf.value}</div>
 <div>EMAIL: ${inputEmail.value}</div>
 <div>TELEFONE: ${inputTelefone.value}</div>
 <div>Comentário: ${inputText.value}</div>

 <span id="remove" onclick="removeForm(this)">❌</span>
 <button id="edite" onclick="EditForm(this)">✏️</button>
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
const editForm = (e)=>{

  clientEdit = e.parentElement;


}