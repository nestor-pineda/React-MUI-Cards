import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router";

const useStyles = makeStyles({
  myDrawer: {
    width: 240,
    color: "#ff0000",
  },
  myDrawerPaper: {
    width: 240,
  },
  active: {
    backgroundColor: "#f4fafa",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  //Dinamicaly puts a lcass into the link item where we are... To change the style of the active menu item.

  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Notes",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create",
    },
  ];

  return (
    <Drawer className={classes.myDrawer} variant="permanent" anchor="left" classes={{ paper: classes.myDrawerPaper }}>
      <div>
        <Typography variant="h5">Some Note</Typography>
      </div>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} button onClick={() => navigate(item.path)} className={location.pathname == item.path ? classes.active : null}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.text}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
