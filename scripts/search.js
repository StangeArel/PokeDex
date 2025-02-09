
function toggleSearch(event) { // Erstellt eine Funktion namens "toggleSearch", die das Suchfeld ein- oder ausblendet.
    event.stopPropagation();
    let searchInput = document.getElementById("pokemonSearch"); // Holt das Input-Feld mit der ID "pokemonSearch".

    if (searchInput.classList.contains("hidden")) { // Prüft, ob das Suchfeld die Klasse "hidden" hat (also unsichtbar ist).
        searchInput.classList.remove("hidden"); // Entfernt die Klasse "hidden", damit das Suchfeld sichtbar wird.

        setTimeout(function() { // Setzt eine kleine Verzögerung für eine sanfte Animation.
            searchInput.classList.add("active"); // Fügt die Klasse "active" hinzu, um das Suchfeld größer zu machen.
        }, 10); // Warte 10 Millisekunden, bevor die Animation startet.

    } else { // Falls das Suchfeld bereits sichtbar ist...
        hideSearchInput();
    }
}

function hideSearchInput() {
    let searchInput = document.getElementById("pokemonSearch"); // Holt das Input-Feld erneut.
    searchInput.classList.remove("active"); // Falls ja, wird das Suchfeld schmal gemacht.

    setTimeout(function() { // Verzögerung, bevor das Suchfeld endgültig verschwindet.
        searchInput.classList.add("hidden"); // Fügt die Klasse "hidden" hinzu, damit das Suchfeld komplett verschwindet.
    }, 300); // Warte 300 Millisekunden für eine sanfte Schließanimation.
}

function searchPokemoninList() {
    let searchInput = document.getElementById("pokemonSearch"); 
    let searchInputValue = searchInput.value.toLowerCase().trim();
    let searchResult = pokemonDataList.filter(function(onePokemon){
        return onePokemon.name.includes(searchInputValue);
    });
}