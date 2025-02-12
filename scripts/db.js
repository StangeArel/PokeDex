/**
 * Base URL for the Pokémon API.
 * Used to fetch Pokémon data.
 * @constant {string}
 */
const pokeApiUrl = "https://pokeapi.co/api/v2/pokemon";

/**
 * The number of Pokémon to fetch per API request.
 * @type {number}
 */
let pokeApiLimit = 30;

/**
 * The offset for paginated API requests.
 * Determines where the next batch of Pokémon data starts.
 * @type {number}
 */
let pokeApiOffset = 0;

/**
 * Reference to the main HTML element where Pokémon data will be displayed.
 * @constant {HTMLElement}
 */
const pokemonList = document.getElementById("main");

/**
 * Array to store fetched Pokémon data.
 * @type {Array}
 */
let pokemonDataList = [];

/**
 * Tracks the current Pokémon index for navigation.
 * @type {number}
 */
let currentIndex;

/**
 * Stores the currently displayed Pokémon data.
 * Used for filtering or pagination.
 * @type {Array}
 */
let currentPokemonDataList = [];

/**
 * An object that maps Pokémon types to their corresponding RGBA color values.
 * These colors are used for visual representation of different Pokémon types.
 * 
 * @constant {Object.<string, string>}
 * @property {string} normal - Color for normal-type Pokémon.
 * @property {string} fire - Color for fire-type Pokémon.
 * @property {string} water - Color for water-type Pokémon.
 * @property {string} electric - Color for electric-type Pokémon.
 * @property {string} grass - Color for grass-type Pokémon.
 * @property {string} ice - Color for ice-type Pokémon.
 * @property {string} fighting - Color for fighting-type Pokémon.
 * @property {string} poison - Color for poison-type Pokémon.
 * @property {string} ground - Color for ground-type Pokémon.
 * @property {string} flying - Color for flying-type Pokémon.
 * @property {string} psychic - Color for psychic-type Pokémon.
 * @property {string} bug - Color for bug-type Pokémon.
 * @property {string} rock - Color for rock-type Pokémon.
 * @property {string} ghost - Color for ghost-type Pokémon.
 * @property {string} dragon - Color for dragon-type Pokémon.
 * @property {string} dark - Color for dark-type Pokémon.
 * @property {string} steel - Color for steel-type Pokémon.
 * @property {string} fairy - Color for fairy-type Pokémon.
 */
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
