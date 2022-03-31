import React from "react";

const Pokemon = props => {
    const { match } = props;
    const { params } = match;
    const { pokemonId } = params;
    return(
        <div>
            poke
        </div>
    )
}
export default Pokemon;