import { Card } from "@mui/material";
import Header from "./Header";
import ListSearch from "../user/components/ListSearch";
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
          <CustomAutocomplete />

          <button className="btn primary">Rechercher</button>

          <ListSearch />
        </Card>
      </section>
    </>
  );
};

export default Home;
