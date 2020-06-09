import React, { useState, useEffect } from "react";
import styles from "./PokeCard.module.css";



const PokeCard = () => {
    const [ pokemon, setPokemon ] = useState('')

const loadPokemon = async () => {
    const pokeId = Math.floor((Math.random()*899)+1);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}/`);
    if (response.ok) {
        const pokeInfo = await response.json();
        setPokemon(pokeInfo);
    };
};

useEffect(() => {
    loadPokemon();
}, []);

console.log(pokemon);
console.log(pokemon.name)

    
return (
  <div className={styles.cardBody}>
    <header className={styles.pokeHeader}>{pokemon.name}</header>
    <div className={styles.imageWrapper}></div>
    <div className={styles.pokeStats}></div>
  </div>
);};

export default (PokeCard);