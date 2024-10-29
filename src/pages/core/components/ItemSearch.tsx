import { Avatar, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Pokemon } from "../../../interfaces/interfaceSearchPokemon";

interface ItemSearchProps {
  option: Pokemon;
  optionProps: object;
}

const ItemSearch: React.FC<ItemSearchProps> = ({ option, optionProps }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(`pokedex_id: ${option.pokedex_id} name : ${option.name.fr}`);
    navigate(`/pokemon/${option.pokedex_id}`);
  };
  return (
    <Box
      component="li"
      sx={{
        height: "7em",
        display: "flex",
        alignItems: "center",
        "& > img": {
          marginRight: "0.5em",
          flexShrink: 0,
        },
      }}
      {...optionProps}
      onClick={handleClick}
    >
      <img
        loading="lazy"
        width="50"
        src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${option.pokedex_id}/regular.png`}
        alt={`Illustration de ${option.name.fr}`}
      />
      {option.name.fr} ({option.name.en}) +{option.name.jp}
      {option.types?.map((type) => (
        <Avatar
          key={type.name}
          src={`${type.image}`}
          alt={`${type.name}`}
          sx={{ width: "1em", height: "1em" }}
        />
      ))}
    </Box>
  );
};

export default ItemSearch;
