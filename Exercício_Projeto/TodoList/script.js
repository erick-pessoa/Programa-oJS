function adicionarTarefa() {
  let ValorDoInput = document.querySelector("input").value;
  let CriaçãoDaLi = document.createElement("li");

  CriaçãoDaLi.innerHTML = ValorDoInput + '<span onclick="removerTarefa(this)">❌</span>';
  document.querySelector('ul').appendChild(CriaçãoDaLi);
}

function removerTarefa(span) {
   span.parentElement.remove();
}