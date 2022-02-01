import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbar: {
    marginLeft: "240",
  },
});

export default function NavBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.navbar}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News lskdjfla shlkjs kljgh skljghskjgs kfjghskjh djfgslkg kjl
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}
