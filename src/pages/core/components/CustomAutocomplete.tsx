import {
  Autocomplete,
  Popper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import useSearch from "../../../hooks/useSearch";
import ItemSearch from "./ItemSearch";
import { useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Pokemon } from "../../../interfaces/interfaceSearchPokemon";

const CustomPopper = styled(Popper)({
  ".MuiAutocomplete-paper": {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    borderRadius: "8px",
    backdropFilter: "blur(4px)",
    "& li:hover": {
      backgroundColor: "rgba(75, 0, 0, 0.3)",
      cursor: "pointer",
    },
  },
  "& .MuiAutocomplete-listbox": {
    maxHeight: "70vh",
  },
});

const CustomAutocomplete = () => {
  const { resultSearchPokemon } = useSearch();
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<Pokemon | null>(null);

  const handleOptionChange = (
    event: React.SyntheticEvent,
    value: Pokemon | null
  ) => {
    event.preventDefault();
    setSelectedOption(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && selectedOption) {
      event.preventDefault();
      navigate(`/pokemon/${selectedOption.pokedex_id}`);
    }
  };

  // Pb de render
  // const filteredOptions = resultSearchPokemon?.slice(1) || [];
  // TEST
  const filteredOptions = useMemo(
    () => resultSearchPokemon?.slice(1) || [],
    [resultSearchPokemon]
  );

  return (
    <>
      {resultSearchPokemon && resultSearchPokemon.length > 0 && (
        <Autocomplete
          options={filteredOptions}
          getOptionLabel={(option) => option.name.fr}
          PopperComponent={CustomPopper}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <ItemSearch
                key={option.pokedex_id}
                option={option}
                optionProps={optionProps}
              />
            );
          }}
          noOptionsText={
            <Typography
              sx={{
                color: "white",
                textAlign: "center",
                padding: "8px",
              }}
            >
              Nom inconnu.
            </Typography>
          }
          renderInput={(params) => (
            <TextField
              sx={{ color: "white" }}
              variant="filled"
              {...params}
              label="Rechercher"
              placeholder="Nom de pokémon"
            />
          )}
          onKeyDown={handleKeyDown}
          onChange={handleOptionChange}
          fullWidth
          // disableCloseOnSelect // Empeche de fermer lorsqu'on select un item
          sx={{
            mt: "1.5em",
            mb: "1em",
            borderRadius: "50px",
            border: "3px solid",
            borderTopColor: "red",
            borderRightColor: "black",
            borderLeftColor: "black",
            borderBottomColor: "white",
            backgroundColor: "transparent",
            "& ::before, & ::after": {
              display: "none",
            },
            "& .MuiIconButton-root": {
              color: "white",
            },
            "& .MuiInputBase-root": {
              color: "rgb(255, 255, 255)",
              borderRadius: "50px",
              border: "none",
              "&.MuiInputBase-root:hover": {
                boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
              },
            },
            "& label": {
              color: "rgb(255, 255, 255)",
              "&.Mui-focused": { color: "rgb(255, 255, 255)" },
            },
          }}
        />
      )}
    </>
  );
};

export default CustomAutocomplete;
