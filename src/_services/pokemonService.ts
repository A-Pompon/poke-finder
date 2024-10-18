import Axios from "./callerService";

const CACHE_KEY = "pokemonPokedexData";
const CACHE_EXPIRATION_KEY = "pokemonDataExpiration";
const CACHE_DURATION = 1000 * 60 * 60;
const POKEDEX_API_URL = "pokemon";

const getAllPokemons = async () => {
  try {
    const cachedData = localStorage.getItem(CACHE_KEY);
    const expirationTime = localStorage.getItem(CACHE_EXPIRATION_KEY);

    if (cachedData && expirationTime && Date.now() < Number(expirationTime)) {
      console.log("Données récupérées depuis le cache");
      return JSON.parse(cachedData);
    }

    const response = await Axios.get(POKEDEX_API_URL, {
      headers: {
        "User-Agent": "PokeFinder/1.0 (arnaudpomponio@yahoo.com)",
        From: "arnaudpomponio@yahoo.com",
        "Content-Type": "application/json",
      },
    });

    const pokemonPokedexData = response.data;

    localStorage.setItem(CACHE_KEY, JSON.stringify(pokemonPokedexData));
    localStorage.setItem(
      CACHE_EXPIRATION_KEY,
      (Date.now() + CACHE_DURATION).toString()
    );

    console.log("Données récupérées depuis l'API et stockées en cache");
    return pokemonPokedexData;
  } catch (error) {
    console.error("Erreur lors de la récupération des Pokémons : ", error);
    throw error;
  }
};

export const pokemonService = {
  getAllPokemons,
};
