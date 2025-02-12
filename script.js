function renderPokemonList() {
    let pokemonListRef = document.getElementById("pokemonList");
    pokemonListRef.innerHTML = "";
    for (let i = 0; i < currentPokemonDataList.length; i++) {
        const onePokemon = currentPokemonDataList[i];
        let template = generateTemplatesForRenderPokemons(i, onePokemon);
        pokemonListRef.innerHTML += template;
    }
}

function toggleAbilityOverlay(i) {
    let overlay = document.getElementById("abilityOverlay");
    overlay.classList.toggle("d_none");
    if (Number.isInteger(i)) {
        currentIndex = i;
        renderOverlay(i);
    }
}

function renderOverlay(i) {
    let overlayRef = document.getElementById("abilityOverlay");
    overlayRef.innerHTML = generateTemplatesForOverlay(i);
    toggleCardContent(1, i);
}

function stopPropation(event) {
    event.stopPropagation();
}

function nextBtnInOverlay() {
    currentIndex++;
    if (currentIndex >= currentPokemonDataList.length) {
        currentIndex = 0;
    }
    renderOverlay(currentIndex);
}

function previousBtnInOverlay() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = currentPokemonDataList.length - 1;
    }
    renderOverlay(currentIndex);
}

function loadMore() {
    pokeApiOffset += pokeApiLimit;
    fetchPokemonsList();
}

function toggleLoadingSpinner() {
    let overlay = document.getElementById("loadingOverlay");
    overlay.classList.toggle("d_none");
}

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
