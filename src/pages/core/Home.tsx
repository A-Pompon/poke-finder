import { Card } from "@mui/material";
import Header from "./Header";
import ListSearch from "../user/components/ListSearch";
import "./../../styles/home.css";
import CustomTextField from "./components/CustomTextField";

import { useEffect, useState } from "react";
import { pokemonService } from "../../_services/pokemonService";
import { PokemonArray } from "../../interfaces/interfaceSearchPokemon";

// import useSearch from "../../hooks/useSearch";

const Home = () => {
  // ===== TEST CALL API =====
  const [pokemons, setPokemons] = useState<PokemonArray | null>();

  useEffect(() => {
    const fetchData = async () => {
      const data = await pokemonService.getAllPokemons();
      setPokemons(data);
    };

    fetchData();
  }, []);
  // ===== TEST CALL API =====

  return (
    <>
      <section
        style={{
          //   width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Header />
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // width: "40%",
            width: "320px",
            minHeight: "100vh",
            backgroundColor: "rgba(0,0,0,0.3)",
            //   position: "relative",
          }}
        >
          <CustomTextField label="Rechercher" placeholder="Nom du pokémon" />

          <button className="btn primary">Rechercher</button>

          <ListSearch />

          {pokemons !== null && pokemons !== undefined && (
            <ul>
              {pokemons.map((pokemon) => (
                <p key={pokemon.pokedex_id}>{pokemon.pokedex_id}</p>
              ))}
            </ul>
          )}
        </Card>
      </section>
    </>
  );
};

export default Home;
