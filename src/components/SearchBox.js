import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { retrieveWalletAction } from "../actions/walletActions";
import Search from "@mui/icons-material/Search";

export default function SearchBox() {
  const [searchInput, setSearchInput] = React.useState("");
  const dispatch = useDispatch();

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      dispatch(retrieveWalletAction(searchInput));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Input
            type="text"
            placeholder="Enter Wallet Address"
            className="search-input"
            onChange={(e) => {
              setSearchInput(e.target?.value);
            }}
            onKeyPress={handleKeyPress}
          ></Input>
          <Button
            variant="plain"
            disableElevation
            onClick={() => {
              dispatch(retrieveWalletAction(searchInput));
            }}
          >
            <Search />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
