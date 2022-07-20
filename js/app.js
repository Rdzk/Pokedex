const pokemonName = document.querySelector("#pokemon_name");
const pokemonNumber = document.querySelector("#pokemon_number");
const pokemonImage = document.querySelector("#pokemon_image");
const form = document.querySelector("#form");
const input = document.querySelector("#input_search");
const buttonNext = document.querySelector("#btn-next");
const buttonPrev = document.querySelector("#btn-prev");

let searchPokemon = 1;

const fetchPokemon = async (pokemon) => {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );
  const data = await APIresponse.json();
  return data;
};

const renderPokemon = async (pokemon) => {
  const data = await fetchPokemon(pokemon);

  pokemonName.innerHTML = data.name;
  pokemonNumber.innerHTML = data.id;
  pokemonImage.src =
    data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
      "front_default"
    ];
  input.value = "";
  searchPokemon = data.id;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(input.value);
});

buttonPrev.addEventListener("click", () => {
  searchPokemon -= 1;
  renderPokemon(searchPokemon);
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
