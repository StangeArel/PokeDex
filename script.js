/**
 * Renders the list of Pokémon by iterating over the `currentPokemonDataList` array.
 * Each Pokémon is processed to generate its HTML template and appended to the `pokemonList` container.
 *
 * @function renderPokemonList
 */
function renderPokemonList() {
    let pokemonListRef = document.getElementById("pokemonList");
    pokemonListRef.innerHTML = ""; // Clear the existing list

    for (let i = 0; i < currentPokemonDataList.length; i++) {
        const onePokemon = currentPokemonDataList[i];
        let template = generateTemplatesForRenderPokemons(i, onePokemon);
        pokemonListRef.innerHTML += template; // Append the new Pokémon template
    }
}

/**
 * Toggles the visibility of the ability overlay by adding or removing the "d_none" class.
 * If a valid integer index is provided, it updates the `currentIndex` and renders the overlay for the specified Pokémon.
 *
 * @function toggleAbilityOverlay
 * @param {number} i - The index of the Pokémon in the `currentPokemonDataList`. If a valid number is provided, the overlay is rendered for that Pokémon.
 */
function toggleAbilityOverlay(i) {
    let overlay = document.getElementById("abilityOverlay");
    overlay.classList.toggle("d_none"); // Toggle visibility of the overlay

    if (Number.isInteger(i)) {
        currentIndex = i; // Update current index
        renderOverlay(i); // Render overlay content for the given Pokémon index
    }
}

/**
 * Renders the ability overlay for a specific Pokémon.
 * The function updates the inner HTML of the overlay with the generated template for the given Pokémon index
 * and toggles the card content accordingly.
 *
 * @function renderOverlay
 * @param {number} i - The index of the Pokémon in the `currentPokemonDataList` whose ability overlay should be displayed.
 */
function renderOverlay(i) {
    let overlayRef = document.getElementById("abilityOverlay");
    overlayRef.innerHTML = generateTemplatesForOverlay(i); // Populate the overlay with the generated template
    toggleCardContent(1, i); // Toggle card content to show the appropriate Pokémon details
}

/**
 * Prevents an event from propagating (bubbling) up the DOM tree.
 * This function is useful when you want to stop an event from triggering
 * parent element event listeners.
 *
 * @function stopPropation
 * @param {Event} event - The event object that should stop propagation.
 */
function stopPropation(event) {
    event.stopPropagation();
}

/**
 * Advances to the next Pokémon in the overlay.
 * If the current index reaches the last Pokémon in the list,
 * it loops back to the first Pokémon.
 *
 * @function nextBtnInOverlay
 */
function nextBtnInOverlay() {
    currentIndex++;
    if (currentIndex >= currentPokemonDataList.length) {
        currentIndex = 0;
    }
    renderOverlay(currentIndex);
}

/**
 * Moves to the previous Pokémon in the overlay.
 * If the current index reaches the first Pokémon in the list,
 * it loops back to the last Pokémon.
 *
 * @function previousBtnInOverlay
 */
function previousBtnInOverlay() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentPokemonDataList.length - 1;
    }
    renderOverlay(currentIndex);
}

/**
 * Increases the offset for fetching more Pokémon data and triggers the API call 
 * to load the next batch of Pokémon.
 *
 * @function loadMore
 */
function loadMore() {
    pokeApiOffset += pokeApiLimit;
    fetchPokemonsList();
}

/**
 * Toggles the visibility of the loading spinner overlay.
 * If the overlay is currently visible, it will be hidden, and vice versa.
 *
 * @function toggleLoadingSpinner
 */
function toggleLoadingSpinner() {
    let overlay = document.getElementById("loadingOverlay");
    overlay.classList.toggle("d_none");
}

/**
 * Toggles the content displayed in the card based on the button ID.
 * Depending on the button clicked, it updates the card content with different templates.
 *
 * @function toggleCardContent
 * @param {number} buttonId - The ID of the button clicked (1 for "About", 2 for "Stats").
 * @param {number} i - The index of the Pokémon data to display.
 */
function toggleCardContent(buttonId, i) {
    let cardContentRef = document.getElementById("cardContent");
    let templateString = "";

    if (buttonId == 1) {
        templateString = generateTemplatesAbout(i);
        cardContentRef.innerHTML = templateString;
    } else if (buttonId == 2) {
        templateString = generateTemplatesStats(i);
        cardContentRef.innerHTML = templateString;
        showStatsChart(i);
    }
}
