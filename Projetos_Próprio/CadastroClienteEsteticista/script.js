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

const emEdicao = new Set();

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

    if(emEdicao.has(cliente.id)){
       createFormLi.innerHTML = criarCardEdicao(cliente);
    } else{
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

        <button type="button" class="btn_edit" onclick="EditForm(${cliente.id})">Editar</button>

    </div>`;

    list.appendChild(createFormLi);
    }
  });
}

function criarCardEdicao(cliente) {
  return `
    <div class="client-nome">
      Nome:
      <input id="editNome-${cliente.id}" type="text" value="${cliente.nome}">
    </div>

    <div class="client-cpf">
      CPF:
      <input id="editCpf-${cliente.id}" type="text" value="${cliente.cpf}">
    </div>

    <div class="client-email">
      Email:
      <input id="editEmail-${cliente.id}" type="text" value="${cliente.email}">
    </div>

    <div class="client-telefone">
      Telefone:
      <input id="editTelefone-${cliente.id}" type="text" value="${cliente.telefone}">
    </div>

    <div class="client-texto">
      Texto:
      <textarea id="editTexto-${cliente.id}">${cliente.texto}</textarea>
    </div>

    <div class="Lapis_X_Salve">
      <button type="button" class="remove" onclick="removeForm(${cliente.id})">Excluir</button>
      <button type="button" class="Edit_Sucess" onclick="salvarEdicao(${cliente.id})">Salvar</button>
    </div>
  `;
}

const salvarEdicao = (id)=>{

  const AddInforClient = clientesArray.find((item)=>item.id===id);

  const clientEditNome = document.querySelector(`#editNome-${id}`);
  const clientEditCpf = document.querySelector(`#editCpf-${id}`);
  const clientEditEmail = document.querySelector(`#editEmail-${id}`);
  const clientEditTelefone = document.querySelector(`#editTelefone-${id}`);
  const clientEditTexto = document.querySelector(`#editTexto-${id}`);

  AddInforClient.nome = clientEditNome.value;
  AddInforClient.cpf = clientEditCpf.value;
  AddInforClient.email = clientEditEmail.value;
  AddInforClient.telefone = clientEditTelefone.value;
  AddInforClient.texto = clientEditTexto.value;

  localStorage.setItem("clientes", JSON.stringify(clientesArray));

  emEdicao.delete(id);

  renderizarClientes (clientesArray);

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
  }
};

/* EDIT LIST OF PEOPLE*/
const EditForm = (id) => {
  
  emEdicao.add(id);
  renderizarClientes(clientesArray);
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
