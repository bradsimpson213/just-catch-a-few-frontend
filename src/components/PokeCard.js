import React from "react";
import { connect } from "react-redux";
import styles from "./PokeCard.module.css";
// import { loadPokemon } from '../store/pokemonStore';


class PokeCard extends React.Component {
  constructor(props){
    super(props)
  }; 
  color = (pokeType) => {
    switch (pokeType) {
      case "fire": return "orangered";
      case "steel": return "silver";
      case "psychic": return "violet";
      case "water": return "deepskyblue";
      case "ice": return "aqua";
      case "electric": return "yellow";
      case "grass": return "yellowgreen"
      case "rock": return "sienna";
      case "fighting": return "darkorange";
      case "ground": return "peru";
      case "dragon": return "goldenrod";
      case "poison": return "darkorchid";
      case "bug": return "lawngreen";
      case "ghost": return "plum";
      case "fairy": return "hotpink";
      case "dark": return "black"
      default: return "gray";
    }; 
  };

  render() {
   const cardNumber = this.props.props;
   const pokeCard = this.props.pokemon[cardNumber].pokemon;
   const cardColor = { background: this.color(pokeCard.type)};
   console.log(pokeCard);
    return (
      <div className={styles.cardBody} style={cardColor} draggable="true">
        <header className={styles.pokeHeader}>
          <span className={styles.pokeName}>{pokeCard.name}</span>
          <span className={styles.pokeHp}>{pokeCard.hp}</span>
        </header>
        <div className={styles.imageWrapper}>
          <img className={styles.pokeImage} src={pokeCard.imageUrl} draggable= "false" alt="pokemon-card" />
        </div>
        <div className={styles.pokeMoves}>
          <div>{pokeCard.move1}</div>
          <div>{pokeCard.move2}</div>
          <div>{pokeCard.type}</div>
        </div>
      </div>
  );
};
};

const mapStateToProps = (state) => {
  return { pokemon: state.pokeReducer };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadPokemon: () => dispatch(loadPokemon()),
//   };
// };

export default connect(mapStateToProps)(PokeCard);