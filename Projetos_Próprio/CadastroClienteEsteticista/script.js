const Janela_cliente = document.querySelector(".Janela_cliente");
const Btn_cadastrar = document.querySelector(".btn-cadastrar");
const btn_save = document.querySelector("#btn-salvar");
const inputName = document.querySelector("#nome");
const inputCpf = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputText = document.querySelector("#textClient");
const btnCancelar = document.querySelector("#btn-cancelar");
let clientesArray = [];

/* SHOWING WINDOW OF CLIENT*/
Btn_cadastrar.addEventListener("click", () => {
  Janela_cliente.classList.toggle("FechaJanela");
});

/*Button Cancel */
btnCancelar.addEventListener("click", () => {
  Janela_cliente.classList.toggle("FechaJanela");
});

/* SAVE BUTTON*/
btn_save.addEventListener("click", () => {
  
  /*Local Store */
  let Cliente = {
    nome: inputName.value,
    cpf: inputCpf.value,
    email: inputEmail.value,
    telefone: inputTelefone.value,
    texto: inputText.value,
  };

  clientesArray.push(Cliente);

  localStorage.setItem("clientes", JSON.stringify(clientesArray));

  let createFormLi = document.createElement("li");
  createFormLi.classList.add("FormLi");
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

        <button type="button" class="remove" onclick="removeForm(this)">❌</button>

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
  const Confirmar = confirm("Deseja realmente excluir este cliente ?");

  if (Confirmar) {
    e.closest("li").remove();
  }
};

/* EDIT LIST OF PEOPLE*/
const EditForm = (e) => {
  const client = e.closest("li");

  if (client.querySelector(".Edit_Sucess")) {
    return;
  }

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

  name.innerHTML = `Nome:
    <input type="text" value="${nameText}"> 
    `;

  cpf.innerHTML = `CPF:
  <input type="text" value="${cpfText}">
  `;

  email.innerHTML = `Email:
    <input type="text" value="${emailText}">
    `;

  telefone.innerHTML = `Telefone:
    <input type="text" value="${telefoneText}">
    `;

  text.innerHTML = `Texto:
    <textarea>${textText}</textarea>
    `;

  const containerBotoes = client.querySelector(".Lapis_X_Salve");
  const editButton = containerBotoes.querySelector(".btn_edit");
  editButton.style.display = "none";

  const saveEditButton = document.createElement("button");
  saveEditButton.type = "button";
  saveEditButton.classList.add("Edit_Sucess");
  saveEditButton.textContent = "✅";

  containerBotoes.appendChild(saveEditButton);

  saveEditButton.addEventListener("click", () => {
    const newName = name.querySelector("input").value;
    name.textContent = `Nome: ${newName}`;

    const newCpf = cpf.querySelector("input").value;
    cpf.textContent = `CPF: ${newCpf}`;

    const newEmail = email.querySelector("input").value;
    email.textContent = `Email: ${newEmail}`;

    const NewTelefone = telefone.querySelector("input").value;
    telefone.textContent = `Telefone: ${NewTelefone}`;

    const newText = text.querySelector("textarea").value;
    text.textContent = `Texto: ${newText}`;

    editButton.style.display = "inline-block";
    saveEditButton.remove();
  });
};
