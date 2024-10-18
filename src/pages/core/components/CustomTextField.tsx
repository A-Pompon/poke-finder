import React from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { IoMdClose } from "react-icons/io";
import useSearch from "../../../hooks/useSearch";

type CustomTextFieldProps = {
  label: string;
  placeholder?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  placeholder,
}) => {
  const { query, setQuery, setResultsSearchPokemon } = useSearch();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    console.log(query);
  };

  const handleClearSearch = () => {
    setQuery("");
    setResultsSearchPokemon(null);
  };

  return (
    <TextField
      label={label}
      placeholder={placeholder}
      value={query}
      onChange={handleSearch}
      variant="filled"
      slotProps={{
        input: {
          endAdornment: (
            <InputAdornment position="end">
              <IoMdClose className="icons" onClick={handleClearSearch} />
            </InputAdornment>
          ),
        },
      }}
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
        "& .MuiInputBase-root": {
          color: "rgb(255, 255, 255)",
          borderRadius: "50px",
        },
        "& .MuiInputBase-root:hover": {
          boxShadow: "0px 0px 10px 5px rgba(255, 255, 255, 0.3)",
        },
        "& .MuiFormLabel-root": {
          color: "rgb(255, 255, 255)",
        },
        "& label.Mui-focused": {
          color: "rgb(255, 255, 255)",
        },
        "& ::before, & ::after": {
          display: "none",
        },
      }}
    />
  );
};

export default CustomTextField;
