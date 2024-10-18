import { createContext, ReactNode, useState } from "react";
import { SearchPokemonContextType } from "../interfaces/searchPokemon";
import { PokemonArray } from "../interfaces/interfaceSearchPokemon";

const SearchPokemonContext = createContext<SearchPokemonContextType | null>(
  null
);

interface SearchPokemonProviderProps {
  children: ReactNode;
}

const SearchPokemonProvider = ({ children }: SearchPokemonProviderProps) => {
  const [resultSearchPokemon, setResultsSearchPokemon] =
    useState<PokemonArray | null>(null);
  const [query, setQuery] = useState<string>("");
  return (
    <SearchPokemonContext.Provider
      value={{
        query,
        setQuery,
        resultSearchPokemon,
        setResultsSearchPokemon,
      }}
    >
      {children}
    </SearchPokemonContext.Provider>
  );
};

export { SearchPokemonContext, SearchPokemonProvider };
