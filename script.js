const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
const pokeApiLimit = 40;
const pokeApiOffset = 0;
const pokemonList = document.getElementById("main");

async function fetchPokemons() {
    const response = await fetch(
        pokeApiUrl + `?limit=${pokeApiLimit}&offset=${pokeApiOffset}`
    );
    if(!response.ok){
        return console.error("api error")
    }
    const responseJson = await response.json();
    const data = responseJson.results;
    console.log(data);
    return data;
}
fetchPokemons();

