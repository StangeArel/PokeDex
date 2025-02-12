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

function hideSearchInput() {
    let searchInput = document.getElementById("pokemonSearch");
    searchInput.classList.remove("active");
    setTimeout(function() {
        searchInput.classList.add("hidden");
    }, 300);
}

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