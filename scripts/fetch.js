// PokemonList:
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
/*     await fetchTypesList(); */
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
            stats: onePokemonDetailsJson.stats
        });
    }
    currentPokemonDataList = pokemonDataList;
}

// Typs:
/* async function fetchTypesList() {
    const response = await fetch(pokeApiTypesUrl);
    if (!response.ok) {
        return console.error("api error");
    }
    const responseJson = await response.json();
    const data = responseJson.results;
    await fetchTypesDetails(data);
}

async function fetchTypesDetails(typesList) {
    for (let i = 0; i < typesList.length; i++) {
        let oneTypeUrl = typesList[i].url;
        let oneTypeDetails = await fetch(oneTypeUrl);
        if (!oneTypeDetails.ok) {
            return console.error("api error");
        }
        const oneTypeDetailsJson = await oneTypeDetails.json();
        typesData.push({
            name: oneTypeDetailsJson.name,
            imgUrl: oneTypeDetailsJson.sprites['generation-vii']['lets-go-pikachu-lets-go-eevee'].name_icon
        });
    }
}
 */