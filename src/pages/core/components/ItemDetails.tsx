import { useParams, useNavigate } from "react-router-dom";
import useSearch from "../../../hooks/useSearch";
import { useEffect, useState } from "react";
import { Pokemon } from "../../../interfaces/interfaceSearchPokemon";
import "./../../../styles/itemDetails.css";
import { Avatar } from "@mui/material";
import NotFound from "../NotFound";

const ItemDetails = () => {
  const { resultSearchPokemon } = useSearch();
  const { itemId } = useParams<{ itemId: string }>();
  const navigate = useNavigate();
  const [pokemonData, setPokemonData] = useState<Pokemon | null>(null);

  // Pb avec l'actualisation des données à l'intérieur, seul le numéro changent (car c'est itemId)
  // A TESTER :
  // Mettre un useState qui s'actualise avec un ou le useEffect déjà présent et qui s'actualise lorsque itemId s'actualise
  // Revoir le CSS de la section Talents ??
  // Tjrs pb de re-render à gérer
  const nextPoke = () => {
    const nextId = Number(itemId) + 1;
    navigate(`/pokemon/${nextId}`);
  };

  const previousPoke = () => {
    const nextId = Number(itemId) - 1;
    navigate(`/pokemon/${nextId}`);
  };

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    if (resultSearchPokemon !== null && itemId) {
      setPokemonData(resultSearchPokemon[+itemId]);
      console.log(pokemonData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="mainItemDetails">
      {pokemonData === null ? (
        <NotFound />
      ) : (
        <>
          <h1>{pokemonData?.name.fr}</h1>
          <img
            className="imgPokemon"
            loading="lazy"
            width="50"
            src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${itemId}/regular.png`}
            alt={`Illustration de ${pokemonData?.name.fr}`}
          />
          <section className="listInfoItemDetails">
            <h3>Caractéristiques :</h3>
            <p>
              Nom : {pokemonData?.name.fr} | {pokemonData?.name.en} |{" "}
              {pokemonData?.name.jp}
            </p>
            <p>Génération : {pokemonData?.generation}</p>
            <p>Catégorie : {pokemonData?.category}</p>
            <p>
              Pokemon N° : {itemId}/
              {resultSearchPokemon ? resultSearchPokemon.length - 1 : "Error"}
            </p>
            <section className="listTypesContainer">
              <p>Types : </p>
              <section className="listTypes">
                {pokemonData?.types?.map((type) => (
                  <section className="listTypesImg">
                    <span className={type.name.toLowerCase()}>{type.name}</span>
                    <Avatar
                      key={type.name}
                      src={`${type.image}`}
                      alt={`${type.name}`}
                      sx={{ width: "1em", height: "1em" }}
                    />
                  </section>
                ))}
              </section>
            </section>
            <p>Hauteur : {pokemonData.height}</p>
            <p>Poids : {pokemonData.weight}</p>
          </section>
          <section>
            <h3>Talents :</h3>
            {pokemonData.talents?.map((talent) => (
              <p>{talent.name}</p>
            ))}
          </section>
          <section>
            <h3>Statistiques :</h3>
            <dl className="statsItemDetails">
              <dt>HP :</dt>
              <dd>{pokemonData.stats?.hp}</dd>

              <dt>Attaque :</dt>
              <dd>{pokemonData.stats?.atk}</dd>

              <dt>Défense :</dt>
              <dd>{pokemonData.stats?.def}</dd>

              <dt>Attaque Spéciale :</dt>
              <dd>{pokemonData.stats?.spe_atk}</dd>

              <dt>Défense Spéciale :</dt>
              <dd>{pokemonData.stats?.spe_def}</dd>

              <dt>Vitesse :</dt>
              <dd>{pokemonData.stats?.vit}</dd>
            </dl>
          </section>
          <section className="buttonItemDetails">
            <section
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-around",
                gap: "1em",
              }}
            >
              <button onClick={previousPoke} className="btn primary">
                Précédent
              </button>
              <button onClick={nextPoke} className="btn primary">
                Suivant
              </button>
            </section>
            <button onClick={handleBack} className="btn primary">
              Retour
            </button>
          </section>
        </>
      )}
    </main>
  );
};

export default ItemDetails;
