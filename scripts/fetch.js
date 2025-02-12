
async function fetchPokemonsList() {
    toggleLoadingSpinner();
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
    toggleLoadingSpinner();
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
            gifUrl: onePokemonDetailsJson.sprites.versions['generation-v']['black-white'].animated.front_default,
            types: onePokemonDetailsJson.types,
            stats: onePokemonDetailsJson.stats,
            height: onePokemonDetailsJson.height,
            weight: onePokemonDetailsJson.weight,
            baseExperience: onePokemonDetailsJson.base_experience,
            abilities: onePokemonDetailsJson.abilities
        });
    }
    currentPokemonDataList = pokemonDataList;
}
