import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import ButtonTheme from "../Button/ButtonTheme";
import { useThemeUpdate } from "../../themeContext/ThemeContext";

// const useStyles = makeStyles({
//   navbar: {
//     marginLeft: "240",
//   },
// });

export default function NavBar() {
  // const classes = useStyles();
  const toggleTheme = useThemeUpdate();

  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News lskdjfla shlkjs kljgh skljghskjgs kfjghskjh djfgslkg kjl
        </Typography>
        <ButtonTheme color="inherit" onClick={toggleTheme}>
          dark
        </ButtonTheme>
      </Toolbar>
    </AppBar>
  );
}
