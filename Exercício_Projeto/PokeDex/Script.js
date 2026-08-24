const pokemonName = document.querySelector(".pokemon_name");
const pokemonNumber = document.querySelector(".pokemon_number");
const pokemonImagem = document.querySelector(".pokemon");
const input_search = document.querySelector(".input_search");
const btn_next = document.querySelector(".btn-next");
const btn_prev = document.querySelector(".btn-prev");

/* Buscando API*/
const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );
  if (APIResponse.status === 200) {
    /*Convertenbd para JSON*/
    const data = await APIResponse.json();
    return data;
  }
};

const renderisaPokemon = async (pokemon) => {

  pokemonName.innerHTML = "Loading...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImagem.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];
  } else {
    pokemonName.innerHTML = "not found :(";
    pokemonNumber.innerHTML = "";
    pokemonImagem.src = "";
    
  }
};

input_search.addEventListener('input', (event) => {
  event.preventDefault();
  renderisaPokemon(input_search.value);
});

renderisaPokemon(1);
