import { Autocomplete, Box, TextField } from "@mui/material";
import useSearch from "../../../hooks/useSearch";

const CustomAutocomplete = () => {
  const { /*query, setQuery, setResultsSearchPokemon,*/ resultSearchPokemon } =
    useSearch();

  return (
    <>
      {resultSearchPokemon && resultSearchPokemon.length > 0 && (
        <Autocomplete
          options={resultSearchPokemon}
          getOptionLabel={(option) => option.name.fr}
          renderOption={(props, option) => {
            const { key, ...optionProps } = props;
            return (
              <Box
                key={key}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...optionProps}
              >
                <img
                  loading="lazy"
                  width="50"
                  src={`https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/${option.pokedex_id}/regular.png`}
                  alt={`Illustration de ${option.name.fr}`}
                />
                {option.name.fr} ({option.name.en}) +{option.name.jp}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField sx={{ color: "white" }} {...params} label="Rechercher" />
          )}
          fullWidth
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
            },
            "& .MuiInputBase-root:hover": {
              boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
            },
            "& .MuiFormLabel-root": {
              color: "rgb(255, 255, 255)",
            },
            "& label.Mui-focused": {
              color: "rgb(255, 255, 255)",
              pt: "16px",
            },
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
        />
      )}
    </>
  );
};

export default CustomAutocomplete;
