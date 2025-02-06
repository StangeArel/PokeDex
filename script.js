function renderPokemonList() {
    let pokemonListRef = document.getElementById("pokemonList");
    pokemonListRef.innerHTML = "";
    for (let i = 0; i < pokemonDataList.length; i++) {
        const onePokemon = pokemonDataList[i];
        let template = generateTemplatesForRenderPokemons(onePokemon);
        pokemonListRef.innerHTML += template;
    }
}