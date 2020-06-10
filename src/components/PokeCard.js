import React from "react";
import { connect } from "react-redux";
import styles from "./PokeCard.module.css";
import { loadPokemon } from '../store/pokemonStore';


class PokeCard extends React.Component {
  constructor(props){
    super(props)
  };
  
  async componentDidMount() {
    await this.props.loadPokemon();
    console.log(this.props);
  };

  componentDidUpdate() {
    console.log(this.props);
  }
        
  render() {
    return (
      <div className={styles.cardBody}>
        <header className={styles.pokeHeader}>
          <span></span>
          <span></span>
        </header>
        <div className={styles.imageWrapper}>
          <img className={styles.pokeImage} alt="pokemon-card" />
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
  return { pokemon: state.token };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadPokemon: () => dispatch(loadPokemon()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokeCard);