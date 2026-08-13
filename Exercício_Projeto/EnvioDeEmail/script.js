emailjs.init({
  publicKey: "q9v4mF73rB6-st1DT",
});

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    nome: document.getElementById("nome").value,
    email: document.getElementById("email").value,
    assunto: document.getElementById("assunto").value,
    mensagem: document.getElementById("mensagem").value,
  };

  const serviuceID = "service_a6ckn2e";
  const templateID = "template_5auanj9";
  const button_enviar = document.getElementById("button_enviar");

  button_enviar.textContent = "Enviando...";

  emailjs.send(serviuceID, templateID, formData).then(() => {
      alert("Enviado com Sucesso!");
      button_enviar.textContent = "Enviar";
    }).catch((error) => {
      alert("Occorreu um erro ao enviar o email: " + error);
      button_enviar.textContent = "Enviar";
    });
});
