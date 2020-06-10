import React from "react";
import { connect } from "react-redux";
import styles from "./PokeCard.module.css";
// import { loadPokemon } from '../store/pokemonStore';


class PokeCard extends React.Component {
  constructor(props){
    super(props)
  };
  
  componentDidMount() {
    // console.log("loading pokemon - pokecard")
    // this.props.loadPokemon();
  };

   render() {
   console.log(this.props);
   const cardNumber = this.props.props;
   const pokeCard = this.props.pokemon[cardNumber].pokemon;
   console.log(pokeCard);
    return (
      <div className={styles.cardBody} draggable="true">
        <header className={styles.pokeHeader}>
          <span className={styles.pokeName}>{pokeCard.name}</span>
          <span className={styles.pokeHp}>{pokeCard.hp}</span>
        </header>
        <div className={styles.imageWrapper}>
          <img className={styles.pokeImage} src={pokeCard.imageUrl} draggable= "false" alt="pokemon-card" />
        </div>
        <div className={styles.pokeStats}>
          <div>{pokeCard.move1}</div>
          <div>{pokeCard.move2}</div>
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