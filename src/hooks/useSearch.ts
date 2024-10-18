import { useContext } from "react";
import { SearchPokemonContext } from "../contexts/SearchPokemonProvider";

export const useSearch = () => {
  const context = useContext(SearchPokemonContext);
  if (!context) {
    throw new Error("useSearch must be used within a SearchPokemonProvider");
  }
  return context;
};

export default useSearch;
