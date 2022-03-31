import React from "react";
import { Grid, Card, CardContent, CardActionArea, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
});

const getPokemonCard = () => {
  return (
    <Grid item xs={12} sm={2}>
      <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          image=""
        />
        <CardContent  >
          <Typography gutterBottom variant="h5" component="div">
           nombre
          </Typography>
          <Typography variant="body2" color="text.secondary">
            
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
    </Grid>
  );
};

const Pokedex = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.pokedexContainer}>
     
       {getPokemonCard()} 
       {getPokemonCard()} 
       {getPokemonCard()} 
       {getPokemonCard()} 
       {getPokemonCard()} 
      
    </Grid>
  );
};
export default Pokedex;
