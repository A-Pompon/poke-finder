import { Dispatch, SetStateAction } from "react";
import { PokemonArray } from "./interfaceSearchPokemon";

export interface SearchPokemonContextType {
  resultSearchPokemon: PokemonArray | null;
  setResultsSearchPokemon: Dispatch<SetStateAction<PokemonArray | null>>;
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}
