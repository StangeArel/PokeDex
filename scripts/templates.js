function generateTemplatesForRenderPokemons(onePokemon) {
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
                            <div class="pokemonTypes">Hallo Du</div>
                            <button class="btnCheckAbilities" style="background:${color} !important">Check Abilities</button>
                        </div>
                    </div>
                </div>
    `
}