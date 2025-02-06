const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
const pokeApiLimit = 4;
const pokeApiOffset = 0;
const pokemonList = document.getElementById("main");
let pokemonDataList = [];

const colours = {
	normal: '#A8A77A',
	fire: '#EE8130',
	water: '#6390F0',
	electric: '#F7D02C',
	grass: '#7AC74C',
	ice: '#96D9D6',
	fighting: '#C22E28',
	poison: '#A33EA1',
	ground: '#E2BF65',
	flying: '#A98FF3',
	psychic: '#F95587',
	bug: '#A6B91A',
	rock: '#B6A136',
	ghost: '#735797',
	dragon: '#6F35FC',
	dark: '#705746',
	steel: '#B7B7CE',
	fairy: '#D685AD',
};

async function fetchPokemonsList() {
    const response = await fetch(
        pokeApiUrl + `?limit=${pokeApiLimit}&offset=${pokeApiOffset}`
    );
    if (!response.ok) {
        return console.error("api error");
    }
    const responseJson = await response.json();
    const data = responseJson.results;
    await fetchPokemonsDetails(data);
    renderPokemonList();
}

async function fetchPokemonsDetails(pokemonList) {
    for (let i = 0; i < pokemonList.length; i++) {
        let onePokemonUrl = pokemonList[i].url;
        let onePokemonDetails = await fetch(onePokemonUrl);
        if (!onePokemonDetails.ok) {
            return console.error("api error");
        }
        const onePokemonDetailsJson = await onePokemonDetails.json();
        pokemonDataList.push({
            name: onePokemonDetailsJson.name,
            id: onePokemonDetailsJson.id,
            imgUrl: onePokemonDetailsJson.sprites.other.home.front_shiny,
            gifUrl: onePokemonDetailsJson.sprites.versions["generation-v"]["black-white"].animated.front_default,
        });
    }
}

function renderPokemonList() {
    let pokemonListRef = document.getElementById("pokemonList");
    pokemonListRef.innerHTML = "";
    for (let i = 0; i < pokemonDataList.length; i++) {
        const onePokemon = pokemonDataList[i];
        let template = generateTemplatesForRenderPokemons(onePokemon);
        pokemonListRef.innerHTML += template;
    }
}

function generateTemplatesForRenderPokemons(onePokemon) {
    const formattedName = onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1);
    return `
                <div class="pokemonCard flipped">
                    <div class="cardsInside">
                        <div class="cardFront">
                            <div class="pokemonCardHeader">
                                <h2>#${onePokemon.id}</h2>
                                <h2>${formattedName}</h2>
                            </div>
                            <img class="pokemonImg" src="${onePokemon.imgUrl}" alt="img. Pokemon">
                        </div>
                        <div class="cardBack">
                            <img class="pokemonGif" src="${onePokemon.gifUrl}" alt="gif. Pokemon">
                            <h2>${formattedName}</h2>
                            <div class="pokemonTypes">Hallo Du</div>
                        </div>
                    </div>
                </div>
    `
}