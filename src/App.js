
import React from "react";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";
import { Route , Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <><Navbar></Navbar><Switch>
      <Route exact path="/" render={(props) => <Pokedex {...props} />} />
      <Route
        exact
        path="/:pokemonId"
        render={(props) => <Pokemon {...props} />} />
    </Switch>
    <Footer></Footer></>
  );
}

export default App;
