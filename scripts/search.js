/**
 * Toggles the visibility of the search input field for Pokémon search.
 * Prevents event propagation to avoid unintended side effects.
 * If the search input is hidden, it becomes visible and receives an "active" class after a short delay.
 * If the search input is already visible, it calls `hideSearchInput()` to hide it.
 *
 * @function toggleSearch
 * @param {Event} event - The event object from the triggered action.
 */
function toggleSearch(event) {
    event.stopPropagation();
    let searchInput = document.getElementById("pokemonSearch");

    if (searchInput.classList.contains("hidden")) {
        searchInput.classList.remove("hidden");
        setTimeout(function() {
            searchInput.classList.add("active");
        }, 10);
    } else {
        hideSearchInput();
    }
}

/**
 * Hides the Pokémon search input field by first removing the "active" class
 * and then adding the "hidden" class after a short delay.
 * This creates a smooth transition effect when hiding the input field.
 *
 * @function hideSearchInput
 */
function hideSearchInput() {
    let searchInput = document.getElementById("pokemonSearch");
    searchInput.classList.remove("active");
    setTimeout(function() {
        searchInput.classList.add("hidden");
    }, 300);
}

/**
 * Filters the list of Pokémon based on the user's search input.
 * If the input length is less than 3 characters, the full Pokémon list is displayed.
 * Otherwise, it filters the list to include only Pokémon whose names contain the search query.
 * After filtering, it updates the displayed Pokémon list.
 *
 * @function searchPokemoninList
 */
function searchPokemoninList() {
    let searchInput = document.getElementById("pokemonSearch"); 
    let searchInputValue = searchInput.value.toLowerCase().trim();
    if (searchInputValue.length < 3) {
        currentPokemonDataList = pokemonDataList;
    } else {
        currentPokemonDataList = pokemonDataList.filter(function(onePokemon){
            return onePokemon.name.includes(searchInputValue);
        });
    }
    renderPokemonList();
}
