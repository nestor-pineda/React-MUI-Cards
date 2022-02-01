import { Pages } from "./style";
import SideBar from "../SideBar/SideBar";
// import Drawer from "@mui/material/Drawer";
// import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar />
      <Pages>{children}</Pages>
    </div>
  );
};
export default Layout;
