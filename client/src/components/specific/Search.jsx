import {
  Dialog,
  DialogTitle,
  InputAdornment,
  Stack,
  TextField,
} from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useInputValidation } from "6pp";

const Search = () => {
  const search = useInputValidation("");
  console.log(search);
  return (
    <Dialog open>
      <Stack p={"2rem"} direction={"column"} width={"25rem"}>
        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={search.value}
          onChange={search.changeHandler}
          variant="standard"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Dialog>
  );
};

export default Search;
