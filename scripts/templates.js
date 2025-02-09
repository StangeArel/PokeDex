function generateTemplatesForRenderPokemons(i, onePokemon) {
    const formattedName = onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1);
    let color = colours[onePokemon.types[0].type.name];
    return ` 
                <div class="pokemonCard flipped">
                    <div class="cardsInside">
                        <div class="cardFront">
                            <div class="pokemonCardHeader">
                                <h2>#${onePokemon.id}</h2>
                                <h2>${formattedName}</h2>
                            </div>
                            <img class="pokemonImg" src="${onePokemon.imgUrl}" alt="img. Pokemon">
                        </div>
                        <div class="cardBack" style="background:${color}">
                            <img class="pokemonGif" src="${onePokemon.gifUrl}" alt="gif. Pokemon">
                            <h2>${formattedName}</h2>
                            <div class="pokemonTypes" id="pokemonTypes">${generateTemplatesTypes(onePokemon)}</div>
                            <button onclick="toggleAbilityOverlay(${i})" class="btnCheckAbilities" style="background:${color} !important">Check Abilities</button>
                        </div>
                    </div>
                </div>
    `
}

function generateTemplatesForOverlay(i) {
    let onePokemon = currentPokemonDataList[i];
    let color = colours[onePokemon.types[0].type.name];

    const formattedName = onePokemon.name.charAt(0).toUpperCase() + onePokemon.name.slice(1);
    return `<div class="overlayCard" style="background:${color} !important" onclick="stopPropation(event)">
                <img class="pokemonImgOverlayCard" src="${onePokemon.imgUrl}" alt="img. Pokemon">
                <div class="overlayHeader">
                    <h1>${formattedName}</h1>
                </div>
                <div class="overlayMain">
                <p>Hallo</p>
                </div>
                <div class="overlayFooter">
                    <button onclick="previousBtnInOverlay()" id="previous"></button>
                    <button onclick="nextBtnInOverlay()" id="next"></button>
                </div>
            </div>
        `
}

function generateTemplatesTypes(onePokemon) {
    let template = ``;
    for (let index = 0; index < onePokemon.types.length; index++) {
        const typeName = onePokemon.types[index].type.name;
        template += `<img class="typeImg" src="../assets/img/typeImgs/${typeName}.svg">`;
    }
    return template;
}