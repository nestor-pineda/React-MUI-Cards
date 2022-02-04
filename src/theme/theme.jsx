import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: green,
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});
export default theme;

//CON STYLED COMPONENTS

/* const theme = {
  palette: {
    primary: {
      main: "#FF0000",
    },
    secondary: "#998877",
  },
  typography: {
    fontFamily: "Raleway",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

export default theme;
 */
