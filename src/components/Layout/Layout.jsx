import { Pages } from "./style";
import SideBar from "../SideBar/SideBar";
import { makeStyles } from "@mui/styles";
import NavBar from "../NavBar/NavBar";

const useStyles = makeStyles({
  root: {
    display: "",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar className={classes.appbar} />
      <SideBar />
      <Pages>{children}</Pages>
    </div>
  );
};
export default Layout;
