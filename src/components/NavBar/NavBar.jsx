// import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import ButtonTheme from "../Button/ButtonTheme";
import { useThemeUpdate } from "../../themeContext/ThemeContext";
import { format } from "date-fns";
import { useTheme } from "../../themeContext/ThemeContext";

export default function NavBar() {
  const toggleTheme = useThemeUpdate();
  const darkTheme = useTheme();

  const light = "🌞";
  const dark = "🌛";

  const myStyles = {
    backgroundColor: darkTheme ? "black" : "tomato",
    color: "white",
  };

  return (
    <AppBar position="relative" elevation="0">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <ButtonTheme style={myStyles} onClick={toggleTheme}>
          {darkTheme ? light : dark}
        </ButtonTheme>
      </Toolbar>
    </AppBar>
  );
}
