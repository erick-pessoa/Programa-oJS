const pessoas = [
  { id: 10, nome: "Ana" },
  { id: 20, nome: "Bia" },
  { id: 30, nome: "Carla" },
];

const procura = pessoas.find(pessoa => pessoa.id === 20);

procura.nome = "Beatriz";

console.log(pessoas);