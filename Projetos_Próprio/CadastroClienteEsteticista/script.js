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

 <div class="client-nome"> 
 Nome: ${inputName.value}
 </div>

 <div class="client-cpf">
  CPF: ${inputCpf.value}
  </div>

 <div class="client-email">
  Email: ${inputEmail.value}
  </div>

 <div class="client-telefone">
  Telefone: ${inputTelefone.value}
  </div>

 <div class="client-texto"> 
 Texto: ${inputText.value}</div>

 
 <div class="Lapis_X_Salve">

        <span class="remove" onclick="removeForm(this)">❌</span>

        <button type="button" class="btn_edit" onclick="EditForm(this)">✏️</button>

    </div>

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
  e.closest('li').remove();
};

/* EDIT LIST OF PEOPLE*/
const EditForm = (e) => {
  const client = e.parentElement;

  const name = client.querySelector(".client-nome");
  const cpf = client.querySelector(".client-cpf");
  const email = client.querySelector(".client-email");
  const telefone = client.querySelector(".client-telefone");
  const text = client.querySelector(".client-texto");

  const nameText = name.textContent.replace("Nome: ", "");
  const cpfText = cpf.textContent.replace("CPF: ", "");
  const emailText = email.textContent.replace("Email: ", "");
  const telefoneText = telefone.textContent.replace("Telefone: ", "");
  const textText = text.textContent.replace("Texto: ", "");

  const InputNameEdit = document.createElement("input");
  InputNameEdit.value =   nameText;

  const inputCpfEdit = document.createElement("input");
  inputCpfEdit.value = cpfText;

  const inputEmailEdit = document.createElement("input");
  inputEmailEdit.value = emailText;

  const inputTelefoneEdit = document.createElement("input");
  inputTelefoneEdit.value = telefoneText;

  const inputTextEdit = document.createElement("input");
  inputTextEdit.value = textText;

  name.replaceWith(InputNameEdit);
  cpf.replaceWith(inputCpfEdit);
  email.replaceWith(inputEmailEdit);
  telefone.replaceWith(inputTelefoneEdit);
  text.replaceWith(inputTextEdit);


  const containerBotoes = client.querySelector(".Lapis_X_Salve");
  const saveEditButton = document.createElement("button");
  saveEditButton.type = "button";
  saveEditButton.classList.add("Edit_Sucess");
  saveEditButton.textContent = "✅";

  containerBotoes.appendChild(saveEditButton);

  saveEditButton.addEventListener("click", () => {
    const newName = document.createElement("div");
    newName.classList.add("client-nome");
    newName.textContent = `Nome: ${InputNameEdit.value}`;
    InputNameEdit.replaceWith(newName);

    const newCpf = document.createElement("div");
    newCpf.classList.add("client-cpf");
    newCpf.textContent = `CPF: ${inputCpfEdit.value}`;
    inputCpfEdit.replaceWith(newCpf);

    const newEmail = document.createElement("div");
    newEmail.classList.add("client-email");
    newEmail.textContent = `Email: ${inputEmailEdit.value}`;
    inputEmailEdit.replaceWith(newEmail);

    const newTelefone = document.createElement("div");
    newTelefone.classList.add("client-telefone");
    newTelefone.textContent = `Telefone: ${inputTelefoneEdit.value}`;
    inputTelefoneEdit.replaceWith(newTelefone);

    const newText = document.createElement("div");
    newText.classList.add("client-texto");
    newText.textContent = `Texto: ${inputTextEdit.value}`;
    inputTextEdit.replaceWith(newText);

    saveEditButton.remove();
  });
};
