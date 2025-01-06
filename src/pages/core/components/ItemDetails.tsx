import { useParams, useNavigate } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";
import { useEffect, useState } from "react";
import { Pokemon } from "../../../interfaces/interfaceSearchPokemon";

const ItemDetails = () => {
  const { resultSearchPokemon } = useSearch();
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();

  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  const handleBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    if (resultSearchPokemon !== null && itemId) {
      setPokemonData(resultSearchPokemon[+itemId]);
      console.log(pokemonData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>POKEMON N° : {itemId}</h2>
      <img
        loading="lazy"
        width="50"
        src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${itemId}/regular.png`}
        alt={`Illustration de ${pokemonData?.name.fr}`}
      />
      <p>{pokemonData?.name.fr}</p>
      <button onClick={handleBack} className="btn primary">
        Retour
      </button>
    </div>
  );
};

export default ItemDetails;
