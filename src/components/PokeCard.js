import React, { useState, useEffect } from "react";
import styles from "./PokeCard.module.css";

import { connect } from "react-redux";
import { loadPokemon } from "../store/pokemonStore";


class PokeCard extends React.Component {
    constructor(props) {
        super(props)
    };

    componentDidMount() {
        this.props.loadPokemon();
        
    };

    componentDidUpdate() {
        console.log("from PokeCard update")
        console.log(this.props.pokemon);
    }


    render() {
        // const { name, hp, imageUrl, move1, move2 } = this.props.pokemon;
        return (
          <div className={styles.cardBody}>
            <header className={styles.pokeHeader}>
              <span></span>
              <span></span>
            </header>
            <div className={styles.imageWrapper}>
              <img className={styles.pokeImage} alt="pokemon-image" />
            </div>
            <div className={styles.pokeStats}>
              <div></div>
              <div></div>
            </div>
          </div>
        );
    };
};


const mapStateToProps = (state) => {
  return { pokemon: state.pokemon };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: () => dispatch(loadPokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);