import React, { Component } from 'react'

const Pokemon = (props) => {
        const { match, history } = props;
        const { params } = match;
        const { pokemonId } = params;

return <div>{ `Pokemon page for pokemon #${pokemonId}`}</div>
};


export default Pokemon;