emailjs.init({
  publicKey: "q9v4mF73rB6-st1DT",
});

document.getElementById('form').addEventListener('submit', function (event) {    

           event.preventDefault();

           const formData = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            assunto: document.getElementById('assunto').value,
            mensagem: document.getElementById('Mensagem').value                                                                                                                                                                                                                     
           }

           const serviuceID = "service_a6ckn2e";
           const templateID = "template_5auanj9";


           emailjs.send(serviuceID,templateID, formData);

          
  });
