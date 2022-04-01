    import React from "react";
    import { makeStyles } from "@material-ui/core/styles";
    import { AppBar } from "@material-ui/core";
    import pokeball from "../pokeball.png"
    const useStyles = makeStyles((theme) => ({
        Nav: {
    background: "#2F3B5C"
        },
        
    }));
    const NavBar = () => {
        const classes = useStyles();
        return ( 
            <AppBar position="static" className={classes.Nav}>
                <img src={pokeball} style={{ width: "30px", height: "30px" , paddingLeft:"10px",  paddingTop:"10px",  paddingBottom:"10px"}} />
            </AppBar>

        )
    };
    export default NavBar;