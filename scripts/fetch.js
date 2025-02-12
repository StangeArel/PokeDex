/**
 * Fetches a list of Pokémon from the PokéAPI based on the current limit and offset.
 * Displays a loading spinner during the request and updates the Pokémon list upon successful retrieval.
 * 
 * @async
 * @function fetchPokemonsList
 * @returns {Promise<void>} - A promise that resolves when the Pokémon list is fetched and rendered.
 */
async function fetchPokemonsList() {
    toggleLoadingSpinner(); // Show loading spinner

    try {
        const response = await fetch(
            pokeApiUrl + `?limit=${pokeApiLimit}&offset=${pokeApiOffset}`
        );

        // Handle API errors
        if (!response.ok) {
            return console.error("API error");
        }

        const responseJson = await response.json();
        const data = responseJson.results;

        // Fetch details for each Pokémon
        await fetchPokemonsDetails(data);

        // Render the Pokémon list
        renderPokemonList();
    } catch (error) {
        console.error("Error fetching Pokémon list:", error);
    } finally {
        toggleLoadingSpinner(); // Hide loading spinner
    }
}

/**
 * Fetches detailed information for each Pokémon in the provided list.
 * Iterates over the given Pokémon list, retrieves additional details from the API, 
 * and stores the relevant data in the `pokemonDataList` array.
 * 
 * @async
 * @function fetchPokemonsDetails
 * @param {Array} pokemonList - An array of Pokémon objects containing basic information, including API URLs.
 * @returns {Promise<void>} - A promise that resolves once all Pokémon details are fetched and stored.
 */
async function fetchPokemonsDetails(pokemonList) {
    for (let i = 0; i < pokemonList.length; i++) {
        let onePokemonUrl = pokemonList[i].url;
        let onePokemonDetails = await fetch(onePokemonUrl);

        // Handle API errors
        if (!onePokemonDetails.ok) {
            return console.error("API error");
        }

        const onePokemonDetailsJson = await onePokemonDetails.json();

        // Store relevant Pokémon details in the data list
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
    
    // Update the current Pokémon data list
    currentPokemonDataList = pokemonDataList;
}
