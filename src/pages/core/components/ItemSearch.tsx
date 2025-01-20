import { Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../../interfaces/interfaceSearchPokemon";

interface ItemSearchProps {
  option: Pokemon;
  optionProps: object;
}

const ItemSearch: React.FC<ItemSearchProps> = ({ option, optionProps }) => {
  const navigate = useNavigate();

  // Pb de render
  console.log("ItemSearch rendered");

  const handleClick = () => {
    console.log(`pokedex_id: ${option.pokedex_id} name : ${option.name.fr}`);
    navigate(`/pokemon/${option.pokedex_id}`);
  };
  return (
    <Box
      component="li"
      sx={{
        height: "7em",
        gap: "1em",
      }}
      {...optionProps}
      onClick={handleClick}
    >
      <section>
        <img
          loading="lazy"
          width="50"
          src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${option.pokedex_id}/regular.png`}
          alt={`Illustration de ${option.name.fr}`}
        />
      </section>
      <section>
        <p>
          {option.name.fr} ({option.name.en}) + {option.name.jp}
        </p>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          gap: ".5em",
        }}
      >
        {option.types?.map((type) => (
          <Avatar
            key={type.name}
            src={`${type.image}`}
            alt={`${type.name}`}
            sx={{ width: "1em", height: "1em" }}
          />
        ))}
      </section>
    </Box>
  );
};

export default ItemSearch;
