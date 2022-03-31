import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    Nav: {
   background: "#2F3B5C"
    },
    
  }));
const NavBar = () => {
    const classes = useStyles();
    return ( 
        <AppBar position="static" className={classes.Nav}>
            Poke
        </AppBar>

    )
};
export default NavBar;