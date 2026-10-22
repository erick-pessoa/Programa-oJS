//1º Exercício
// const idade = 18;
// if (idade >= 18) {
//     console.log("Você é maior de idade");
// }else{
//     console.log("Você não é maior de idade");
// }

//2º Exercício
// function par (num){
//     if(num % 2 == 0 ){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(par(6));

//3º Exercício
// const maiorNumber = (a,b)=>{
//     if(a > b){
//         console.log('O maior número é o A:'+a)
//     }else{
//         console.log('O maior número é o B:'+b)
//     }
// }
// console.log(maiorNumber(50,100));

//4º Exercício
// const nota = 1;
// if(nota <= 6){
//     console.log("Nota ruim")
// }if(nota > 6 && nota <= 8){
//     console.log("Nota média")
// }if(nota > 8 && nota <= 10 || nota > 10){
//     console.log("Nota alta")
// }

//5º Exercício
// const texto = "";
// if(texto === ""){
//     console.log("O texto está vazio")
// }else{
//     console.log("O texto não está vazio")
// }

//6º Exercício
// const number = 10;
// if(number >=1 && number <=10){
//     console.log("O número está entre 1 e 10")
// }else{
//     console.log("O número não está entre 1 e 10")
// }

//7º Exercício
// const dia = "Sábado";
// if(dia === "Sábado" || dia === "Domingo"){
//     console.log("É final de semana")
// }else{
//     console.log("Não é final de semana")
// }

//8º Exercício
// == ele converte o "5" para um número e compara os dois números para verificar se são iguais.
// === Ele comparar o valor e se é o mesmo tipo de dado, caso não seja, ele retorna false.
// if("5"== 5){
//     console.log("É verdade")
// }else{
//     console.log("Não é verdade")
// }
// if("6"=== 6){
//     console.log("É verdade")
// }else{
//     console.log("Não é verdade")
// }

//9º Exercício
// const vazio = 'asfsadfs';
// if(!vazio ){
//     console.log("Está vazio")        
// }else{
//     console.log("Não está vazio")
// }

// 10º Exercício
// const maiorIdade = (idade)=>{
//     return idade >= 18;
// }    
// console.log(maiorIdade(15));

//11º Exercício
//  const frutas = ["Banana", "Maçã", "Uva"];
//  console.log(frutas[2]);

//12º Exercício
// const frutas = ["Banana", "Maçã", "Uva"];
// frutas.push("Melancia");
// console.log(frutas);

//13º Exercício
// const frutas = ["Banana", "Maçã", "Uva"];
// frutas.pop();
// console.log(frutas);

//14º Exercício
// const frutas = ["Banana", "Maçã", "Uva"];
// for(i=0;i<frutas.length;i++){
//     console.log(frutas[i]);
// }

//15º Exercício
//  const frutas = ["Banana", "Maçã", "Uva"];
// frutas.forEach(item=>{
//     console.log(item);
// })

//16º Exercício
// const numbers = [1, 1, 1, 1, 6];
// let soma = 0
// numbers.forEach(item =>{
//     soma += item; 
// })
// console.log(soma);

//17º Exercício
// const frutas = ["Banana", "Maçã", "Uva"];

// for(i=0;i<frutas.length;i++){
//     console.log("Posição "+i+": "+frutas[i]);
// }

// 18º Exercício
// const frutas = [""]
// const devolucao = (item) =>{
//      for(i=0;i<item.length;i++){
//         if(item[i].length === 0){
//             return true;
//         }else{
//             return false;
//         }
//      }
// }
// console.log(devolucao(frutas));

// 19º Exercício
// const numbers = [1, 1, 1, 1, 6];

// const resultado = numbers.map(item => item*2)

// console.log(resultado)

// 20º Exercício
// const numbers = ["Banana", "Maçã", "Uva"]
// console.log(numbers.includes("Banana"))

// 21º Exercício
// const numbers = [1, 1, 1, 1, 6];
// const numerosPares = numbers.filter(item=> item%2===0)
// console.log(numerosPares)

// 22º Exercício
// const numbers = [1, 1, 1, 1, 6,4,5,6,7,8,9,10];
// const numerosPares = numbers.filter(item=> item>3)
// console.log(numerosPares)

// 23º Exercício
// const pessoas = [{nome: "Ana", idade: 20}, {nome: "Bia", idade:15}]
// const pessoasMaiores = pessoas.filter(pessoa => pessoa.idade > 18)
// console.log(pessoasMaiores)

// 24º Exercício
// const arrayMisto = [42, null, "texto", undefined, 0, false, "", null]
// const resultArray = arrayMisto.filter(item => item !== null && item !== undefined)
// console.log(resultArray)

// 25º Exercício
// const arrayMisto = [10, "Banana", 42, "Abacaxi", true, "Laranja", 7]
// const resultArray = arrayMisto.filter(item => typeof item === "string")
// console.log(resultArray)

// 26º Exercício
// const produtos = [
//   { nome: 'Camiseta', preco: 50 },
//   { nome: 'Calça Jeans', preco: 120 },
//   { nome: 'Meias', preco: 20 },
//   { nome: 'Tênis', preco: 250 },
//   { nome: 'Boné', preco: 80 }
// ];
// const produtosMaiores = produtos.filter(item => item.preco >100)
// console.log(produtosMaiores)

// 27º Exercício
// const nomes = ['Ana', 'Bruno', 'Alice', 'Carlos', 'Amanda'];
// const NomeComA = nomes.filter(item => item.startsWith('A'))
// console.log(NomeComA)

// 28º Exercício
// • O propósito do filter é operar sobre uma lista e gerar uma nova lista modificada. Para o desenvolvedor que está escrevendo o 
// código, o retorno precisa ser previsível. Se ele retornasse null, undefined ou false 
// quando nenhum item passasse no teste, o programa exigiria uma validação extra (como um if) antes de qualquer outra operação.

//29° Exercício
// const usuarios = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Bruno' },
//   { id: 3, nome: 'Carla' }
// ];
// const removerUsuario = usuarios.filter((item) =>item.id !== 2)
// console.log(removerUsuario)

//30° Exercício
// const numeroImpar = [10, 15, 22, 33, 40, 55];
// const numerosImpares = numeroImpar.filter(item => item % 2 === 1 )
// console.log(numerosImpares)

//31° Exercício
// const clientes = [
//   { id: 10, nome: 'Ana' },
//   { id: 20, nome: 'Carlos' },
//   { id: 30, nome: 'Beatriz' }
// ];
// const clientesId20 = clientes.find(cliente => cliente.id === 20)
// console.log(clientesId20)

//32° Exercício
// const númeroMaior = [10, 15, 22, 33, 40, 55]
// const númerosMaiores = númeroMaior.find(item => item >18)
// console.log(númerosMaiores)

//33° Exercício
// const maiorNumber = [10, 30, 60, 80]
// const maiorNumberNow = maiorNumber.find(item => item > 50)
// console.log(maiorNumberNow)

//34° Exercício
// const maiorNumber = [10, 30, 60, 80]
// const maiorNumberNow = maiorNumber.find(item => item > 120)
// console.log(maiorNumberNow)
// O que apareceu no console, foi undefined, porque não existe um número maior que 120

//35° Exercício
// Na minha opnião o find e o filter são muito parecidos, o find retorna o primeiro elemento que satisfaz a condição, eo filter retorna um array com todos os elementos que satisfazem a condição.