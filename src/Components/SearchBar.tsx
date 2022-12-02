import React from 'react'
import { styled, alpha, Divider } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  fontSize: "10px",
  position: "relative",
  borderRadius: "20px",
  border: "1px solid #d9d9d9",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));


const SearchBar = (props: any) => {
  return (
    <Search sx={{ fontSize: "10px", width: '20rem !important', backgroundColor: "#f6f6f6", border: "2px solid #d9d9d9" }}>
      <SearchIconWrapper>
        <SearchIcon />
        <Divider orientation="vertical" variant="middle" flexItem
          sx={{ borderColor: "secondary.main" }}></Divider>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(e) => {
          props.setSearchInput(e.target.value);
        }}
      />
    </Search>
  )
}

export default SearchBar