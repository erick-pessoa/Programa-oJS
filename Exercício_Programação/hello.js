const texto = "Maria123 Silva456";
const texto2 = "Maria123!@# Silva";

const regex = /[0-9]/g; //regex para remover os numeros
const regex2 = /[^A-Za-z\s]/g; //regex para remover os caracteres nao alfanumericos

Resultado = texto.replace(regex, "");
Resultado2 = texto2.replace(regex2, "");

console.log("João da Conceição".replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, ""));

