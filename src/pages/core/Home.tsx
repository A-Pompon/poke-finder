import { Card } from "@mui/material";
import Header from "./Header";
import ListSearch from "../user/components/ListSearch";
import "./../../styles/home.css";
import CustomTextField from "./components/CustomTextField";

const Home = () => {
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
          <CustomTextField
            label="Rechercher"
            placeholder="Nom du pokémon"
            // value={search}
            // onChange={(e) => setSearch(e.target.value)}
            // onClear={handleClear}
          />

          <button className="btn primary">Rechercher</button>

          <ListSearch />
        </Card>
      </section>
    </>
  );
};

export default Home;
