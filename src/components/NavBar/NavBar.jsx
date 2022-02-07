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

  const light = "../../../public/images/moon.png";
  const dark = "../../../public/images/sun.png";

  const myStyles = {
    backgroundColor: darkTheme ? "#ba000d" : "#ff7961",
    color: darkTheme ? "#fff" : "#000",
  };

  return (
    <AppBar position="relative" elevation="0" style={myStyles}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Today is the {format(new Date(), "do MMMM Y")}
        </Typography>
        <ButtonTheme style={myStyles} onClick={toggleTheme}>
          <img src={darkTheme ? light : dark} alt="theme color" />
        </ButtonTheme>
      </Toolbar>
    </AppBar>
  );
}
