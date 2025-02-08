const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";
let pokeApiLimit = 30;
let pokeApiOffset = 0;
const pokemonList = document.getElementById("main");
let pokemonDataList = [];
let currentIndex;

/* const pokeApiTypesUrl = "https://pokeapi.co/api/v2/type";
let typesData = [];  */


const colours = {
    normal: 'rgba(168, 167, 122, 0.6)',
    fire: 'rgba(238, 129, 48, 0.6)',
    water: 'rgba(99, 144, 240, 0.6)',
    electric: 'rgba(247, 208, 44, 0.6)',
    grass: 'rgba(122, 199, 76, 0.6)',
    ice: 'rgba(150, 217, 214, 0.6)',
    fighting: 'rgba(194, 46, 40, 0.6)',
    poison: 'rgba(163, 62, 161, 0.6)',
    ground: 'rgba(226, 191, 101, 0.6)',
    flying: 'rgba(169, 143, 243, 0.6)',
    psychic: 'rgba(249, 85, 135, 0.6)',
    bug: 'rgba(166, 185, 26, 0.6)',
    rock: 'rgba(182, 161, 54, 0.6)',
    ghost: 'rgba(115, 87, 151, 0.6)',
    dragon: 'rgba(111, 53, 252, 0.6)',
    dark: 'rgba(112, 87, 70, 0.6)',
    steel: 'rgba(183, 183, 206, 0.6)',
    fairy: 'rgba(214, 133, 173, 0.6)',
};

