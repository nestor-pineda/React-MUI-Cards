import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  myDrawer: {
    width: 240,
  },
  myDrawerPaper: {
    width: 240,
  },
});

const SideBar = () => {
  const classes = useStyles();

  return (
    <Drawer className={classes.myDrawer} variant="permanent" anchor="left" classes={{ paper: classes.myDrawerPaper }}>
      <div>
        <Typography variant="h5">Some Note</Typography>
      </div>
    </Drawer>
  );
};

export default SideBar;
