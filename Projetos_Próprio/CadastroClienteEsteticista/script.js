const Janela_cliente = document.querySelector(".Janela_cliente");
const Btn_cadastrar = document.querySelector(".btn-cadastrar");
const btn_save = document.querySelector("#btn-salvar");
const inputName = document.querySelector("#nome");
const inputCpf = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputTelefone = document.querySelector("#telefone");
const inputText = document.querySelector("#textClient");
const inputPesquisa = document.querySelector("#pesquisa");
const btnCancelar = document.querySelector("#btn-cancelar");
let clientesArray = [];

const ClientesSalvos =
  localStorage.getItem("clientes"); /*Pegando os dados salvos*/

if (ClientesSalvos) {
  /*Verificando se os dados foram salvos*/
  clientesArray = JSON.parse(ClientesSalvos); /*Convertendo os dados salvos*/
}

renderizarClientes(clientesArray);

/* RENDERIZAR CLIENTES SALVADOS*/

function renderizarClientes(clientes) {

  const list = document.querySelector("#list_people");

  list.innerHTML = "";

  clientes.forEach((cliente, index) => {

    let createFormLi = document.createElement("li");

    createFormLi.classList.add("FormLi");

    createFormLi.innerHTML = `<div class="client-nome"> 
        Nome: ${cliente.nome}
        </div>

        <div class="client-cpf">
        CPF: ${cliente.cpf}
        </div>

        <div class="client-email">
        Email: ${cliente.email}
         </div>

        <div class="client-telefone">
        Telefone: ${cliente.telefone}
        </div>

        <div class="client-texto"> 
        Texto: ${cliente.texto}</div>

 
        <div class="Lapis_X_Salve">

        <button type="button" class="remove" onclick="removeForm(${cliente.id})">❌</button>

        <button type="button" class="btn_edit" onclick="EditForm(this,${cliente.id})">✏️</button>

    </div>`;

    list.appendChild(createFormLi);
  });
}

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
  /* Verificando se todos os campos foram preenchidos */
  if (
    inputName.value === "" ||
    inputCpf.value === "" ||
    inputEmail.value === "" ||
    inputTelefone.value === "" ||
    inputText.value === ""
  ) {
    alert("Preencha todos os campos!");
    return;
  }

  /*Local Store */
  let cliente = {
    id: Date.now(),
    nome: inputName.value,
    cpf: inputCpf.value,
    email: inputEmail.value,
    telefone: inputTelefone.value,
    texto: inputText.value,
  };

  clientesArray.push(cliente);
  localStorage.setItem("clientes", JSON.stringify(clientesArray));

  renderizarClientes(clientesArray);

  inputName.value = "";
  inputCpf.value = "";
  inputEmail.value = "";
  inputTelefone.value = "";
  inputText.value = "";

  Janela_cliente.classList.add("FechaJanela");
});

/* REMOVE LIST OF PEOPLE*/
const removeForm = (id) => {
  const Confirmar = confirm("Deseja realmente excluir este cliente ?");

  if (Confirmar) {
    

    clientesArray = clientesArray.filter(cliente => cliente.id !== id);

    localStorage.setItem("clientes", JSON.stringify(clientesArray));

    renderizarClientes(clientesArray);

    console.log(clientesArray)
  }
};

/* EDIT LIST OF PEOPLE*/
const EditForm = (e, id) => {

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
    <input type="text" placeholder="Nome do Cliente" value="${nameText}"> 
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
   
    const AddInforClient = clientesArray.find(item => item.id === id); 

    AddInforClient.nome = name.querySelector("input").value;
    AddInforClient.cpf = cpf.querySelector("input").value;
    AddInforClient.email = email.querySelector("input").value;
    AddInforClient.telefone = telefone.querySelector("input").value;
    AddInforClient.textp = text.querySelector("textarea").value;

    localStorage.setItem("clientes", JSON.stringify(clientesArray));

    renderizarClientes(clientesArray);
  });
};

/* Search client*/

inputPesquisa.addEventListener("input", () => {

  const pesquisa = inputPesquisa.value.toLowerCase();

  const clientesFiltrados = clientesArray.filter(
    (cliente) =>
      cliente.nome.toLowerCase().includes(pesquisa) ||
      cliente.cpf.toLowerCase().includes(pesquisa),
  );
  
  renderizarClientes(clientesFiltrados);
});
