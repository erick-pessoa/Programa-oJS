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
  button_enviar.disabled = true;

  emailjs.send(serviuceID, templateID, formData).then(() => {
    
    Toastify({
          text: "Enviado com sucesso!",
          duration: 3000,
          style:{
            background: "#28a745",
            color: "#fff"
          }

      }).showToast();

      document.getElementById("form").reset();
      
    }).catch((error) => {

     Toastify({
          text: "Erro ao enviar",
          duration: 3000,
          style:{
            background: "red",
            color: "#fff"
          }

      }).showToast();
      

    }).finally(() => {
      button_enviar.textContent = "Enviar";
        button_enviar.disabled = false;

      

    });
});
