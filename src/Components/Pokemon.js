import React, { useEffect, useState } from "react";
import {
  Typography,
  CircularProgress,
  Button,
  Grid,
  Card,
  CardContent,
} from "@material-ui/core";
import { toFirstCharUppercase } from "./constants";
import axios from "axios";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, height, weight, types, sprites } = pokemon;
    const { front_default } = sprites;
    return (
      <>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} align="center">
            <Typography style={{ marginTop: "30px" }} variant="h6">
              {toFirstCharUppercase(name)} {`#${id}`}
            </Typography>
            <Typography > </Typography>
                {types.map((typeInfo) => {
                  const { type } = typeInfo;
                  const { name } = type;
                  return <Typography key={name}> {`${name}`}</Typography>;
                })}
            <img
              style={{ width: "200px", height: "200px", margin: "auto" }}
              src={front_default}
              alt="pokemon"
            />
          </Grid>

          <Grid item xs={12} lg={3} spacing={2}>
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#222631" , color:"white"}} align="center">
              <CardContent>
                <Typography>Pokedex Information</Typography>
                <Typography  component="div">
                  Description
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} lg={3} spacing={2}>
            <Card sx={{ minWidth: 275 }} style={{backgroundColor: "#222631", color:"white"}} align="center">
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                 
                  gutterBottom
                >
                  Pokemon Info
                </Typography>
                <Typography sx={{ mb: 1.5 }}>
                  Height: {height}
                </Typography>
                <Typography >Weight: {weight}</Typography>
                
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    );
  };

  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}

      {pokemon !== undefined && (
        <Button justify="center" variant="contained" onClick={() => history.push("/")}>
          Back to Pokedex
        </Button>
      )}
    </>
  );
};

export default Pokemon;
