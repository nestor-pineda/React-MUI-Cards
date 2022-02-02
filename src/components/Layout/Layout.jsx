import { Pages } from "./style";
import SideBar from "../SideBar/SideBar";
import { makeStyles } from "@mui/styles";
import NavBar from "../NavBar/NavBar";
import { ThemeProviderLightDark } from "../../themeContext/ThemeContext";

const useStyles = makeStyles({
  layout: {
    display: "flex",
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#ff0000",
  },
  sidebar: {
    width: "240px",
    minHeight: "100vh",
    backgroundColor: "#ccc",
  },
  page: {
    width: "calc(100% - 240px)",
    height: "100vh",
    backgroundColor: "#eee",
  },
  navbar: {
    width: "100%",
    height: "20px",
    backgroundColor: "blue",
  },
  pageContent: {
    width: "100%",
    minHeight: "90vh",
    backgroundColor: "green",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.layout}>
      <ThemeProviderLightDark>
        <SideBar className={classes.sidebar} />
        <div className={classes.page}>
          <NavBar className={classes.navbar} />
          <Pages className={classes.pageContent}>{children}</Pages>
        </div>
      </ThemeProviderLightDark>
    </div>
  );
};
export default Layout;
