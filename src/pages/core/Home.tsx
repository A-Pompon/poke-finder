import { Card } from "@mui/material";
import Header from "./Header";
import "./../../styles/home.css";

import { useEffect } from "react";
import { pokemonService } from "../../_services/pokemonService";
import CustomAutocomplete from "./components/CustomAutocomplete";

import useSearch from "../../hooks/useSearch";

const Home = () => {
  const { setResultsSearchPokemon } = useSearch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await pokemonService.getAllPokemons();
      setResultsSearchPokemon(data);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Header />
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1em",
            width: "40%",
            minWidth: "300px",
            minHeight: "100vh",
            backgroundColor: "transparent",
            borderRadius: "8px",
          }}
        >
          <CustomAutocomplete />

          <button className="btn primary">Rechercher</button>
        </Card>
      </section>
    </>
  );
};

export default Home;
