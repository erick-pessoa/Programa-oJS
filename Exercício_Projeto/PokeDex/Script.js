const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImagem = document.querySelector(".pokemon");
const inputSearch = document.querySelector(".input_search");

/* Buscando API*/
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );
  /*Convertenbd para JSON*/
  const data = await APIResponse.json();
  return data;
};

const renderisaPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImagem.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
};

inputSearch.addEventListener("input", async (event)=>{
    const pokemon = event.target.value;
    renderisaPokemon(pokemon);
})
