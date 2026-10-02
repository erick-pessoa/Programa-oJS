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

        <button type="button" class="remove" onclick="removeForm(${cliente.id})">Excluir</button>

        <button type="button" class="btn_edit" onclick="EditForm(this,${cliente.id})">Editar</button>

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

/* Remove caracteres nao alfanumericos*/
inputName.addEventListener("input", () => {
  inputName.value = inputName.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
});

inputCpf.addEventListener("input", () => {
  inputCpf.value = inputCpf.value.replace(/[^0-9]/g, "");
  inputCpf.value = inputCpf.value.slice(0, 11);
});

inputTelefone.addEventListener("input", () => {
  inputTelefone.value = inputTelefone.value.replace(/[^0-9]/g, "");
  if (inputTelefone.value.length > 11) {
    inputTelefone.value = inputTelefone.value.slice(0, 11);
  }
});

/* SAVE BUTTON*/
btn_save.addEventListener("click", () => {
  
  /* Verificando se todos os campos foram preenchidos */
  if (
    inputName.value === "" ||
    inputCpf.value === "" 
  ) {
    alert("Preencha pelo menos nome e cpf !!");
    return;
  }

  if (inputCpf.value.length < 11){
    alert("Preencha o CPF com 11 digitos !!");
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
    clientesArray = clientesArray.filter((cliente) => cliente.id !== id);

    localStorage.setItem("clientes", JSON.stringify(clientesArray));

    renderizarClientes(clientesArray);

    console.log(clientesArray);
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
  <input id="editeInputRemoveAlfanumericosName" type="text" placeholder="Nome do Cliente" value="${nameText}"> 
  `;
  
  cpf.innerHTML = `CPF:
  <input id="editeInputRemoveAlfanumericosCpf" type="text" value="${cpfText}">
  `;
  
  email.innerHTML = `Email:
  <input type="text" value="${emailText}">
  `;
  
  telefone.innerHTML = `Telefone:
  <input id="removeEditAlfanumericoTelefone" type="text" value="${telefoneText}">
  `;
  
  text.innerHTML = `Texto:
  <textarea>${textText}</textarea>
    `;
    
   /* Remove caracteres nao alfanumericos do input edit*/
  const editeInputRemoveAlfanumericosName = client.querySelector("#editeInputRemoveAlfanumericosName");
  editeInputRemoveAlfanumericosName.addEventListener("input", () => {
    editeInputRemoveAlfanumericosName.value = editeInputRemoveAlfanumericosName.value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");
  });

  const editeInputRemoveAlfanumericosCpf = client.querySelector("#editeInputRemoveAlfanumericosCpf");
editeInputRemoveAlfanumericosCpf.addEventListener("input", () => { 
    editeInputRemoveAlfanumericosCpf.value = editeInputRemoveAlfanumericosCpf.value.replace(/[^0-9]/g, "");
    editeInputRemoveAlfanumericosCpf.value = editeInputRemoveAlfanumericosCpf.value.slice(0, 11);
});

const removeEditAlfanumericoTelefone = client.querySelector("#removeEditAlfanumericoTelefone");
removeEditAlfanumericoTelefone.addEventListener("input", () => {
    removeEditAlfanumericoTelefone.value = removeEditAlfanumericoTelefone.value.replace(/[^0-9]/g, "");
    removeEditAlfanumericoTelefone.value = removeEditAlfanumericoTelefone.value.slice(0, 11);
});

 
  const containerBotoes = client.querySelector(".Lapis_X_Salve");
  const editButton = containerBotoes.querySelector(".btn_edit");
  editButton.style.display = "none";

  const saveEditButton = document.createElement("button");
  saveEditButton.type = "button";
  saveEditButton.classList.add("Edit_Sucess");
  saveEditButton.textContent = "Salvar";

  containerBotoes.appendChild(saveEditButton);



  saveEditButton.addEventListener("click", () => {
    const AddInforClient = clientesArray.find((item) => item.id === id);

    AddInforClient.nome = name.querySelector("input").value;
    AddInforClient.cpf = cpf.querySelector("input").value;
    AddInforClient.email = email.querySelector("input").value;
    AddInforClient.telefone = telefone.querySelector("input").value;
    AddInforClient.texto = text.querySelector("textarea").value;

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
