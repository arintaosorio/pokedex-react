import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@material-ui/core";
import pokemon from "../pokemon.png"
const useStyles = makeStyles((theme) => ({
    footer: {
background: "#2F3B5C",
marginTop:"92vh",
bottom: "0"
    },
    
}));
const Footer = () => {
    const classes = useStyles();
    return ( 
        <AppBar style={{ position: "fixed", bottom: 0, height:"60px"}} className={classes.footer}>
            <img src={pokemon} style={{ width: "100px", height: "40px" , paddingRight:"10px",  paddingTop:"10px",  paddingBottom:"10px", marginLeft: "90vw"}} />
        </AppBar>

    )
};
export default Footer;