const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
const pokeApiLimit = 5;
const pokeApiOffset = 0;
const pokemonList = document.getElementById("main");
let pokemonDataList = []; 

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
            imgUrl: onePokemonDetailsJson.sprites.other.home.front_shiny
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
    return `
                <div class="pokemonCard">
                    <div class="cardsInside cardInnere">
                        <div class="pokemonCardHeader">
                            <h2>#${onePokemon.id}</h2>
                            <h2>${onePokemon.name}</h2>
                        </div>
                        <img class="pokemonImg" src="${onePokemon.imgUrl}" alt="img. Pokemon">
                        <div class="pokemonTypes">
                            <img src="" alt="">
                        </div>
                    </div>
                </div>
    `
}