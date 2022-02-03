import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { makeStyles } from "@mui/styles";
import ButtonTheme from "../Button/ButtonTheme";
import { useThemeUpdate } from "../../themeContext/ThemeContext";
import { format } from "date-fns";

// const useStyles = makeStyles({
//   navbar: {
//     marginLeft: "240",
//   },
// });

export default function NavBar() {
  // const classes = useStyles();
  const toggleTheme = useThemeUpdate();

  return (
    <AppBar position="relative" elevation="0">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <ButtonTheme color="inherit" onClick={toggleTheme}>
          dark
        </ButtonTheme>
      </Toolbar>
    </AppBar>
  );
}
