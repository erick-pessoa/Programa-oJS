function adicionarTarefa() {
  let ValorDoInput = document.querySelector("input").value;
  let CriaçãoDaLi = document.createElement("li");

  CriaçãoDaLi.innerHTML = ValorDoInput + '<span onclick="removerTarefa(this)">❌</span>';
  document.querySelector('ul').appendChild(CriaçãoDaLi);

  document.querySelector('input').value = '';
}


function removerTarefa(e) {
   e.parentElement.remove();
}