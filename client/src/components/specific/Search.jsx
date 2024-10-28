import {
  Dialog,
  DialogTitle,
  InputAdornment,
  List,
  ListItem,
  Stack,
  TextField,
  DialogActions,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useInputValidation } from "6pp";
import UserItem from "../shared/UserItem";
import { sampleChat } from "../../constants/sampleData";
import CloseIcon from "@mui/icons-material/Close";

const Search = () => {
  const search = useInputValidation("");
  const addFriendHandler = (id) => {
    console.log(id);
  };
  let isLoadingSendFriendRequest = false;
  const [users, setUser] = useState(sampleChat);
  console.log(search);
  const [open, setOpen] = useState(true);

  const closeDialog = (bool) => {
    setOpen(false);
  };
  return (
    <Dialog open={open}>
      <IconButton sx={{ width: "40px", height: "40px" }} onClick={closeDialog}>
        <CloseIcon />
      </IconButton>
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
        <List>
          {users.map((i) => (
            <UserItem
              user={i}
              handler={addFriendHandler}
              handlerIsLoading={isLoadingSendFriendRequest}
            />
          ))}
        </List>
      </Stack>
    </Dialog>
  );
};

export default Search;
