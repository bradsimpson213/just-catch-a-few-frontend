import React from 'react';
import styles from './GameBoard.module.css';

import { connect } from "react-redux";
import { loadPokemon } from "../store/pokemonStore";

import ChatWindow from './ChatWindow';
import PokeCard from './PokeCard';

class GameBoard extends React.Component {
    // constructor(props) {
    //     super(props)
    // };

    componentDidMount() {
        this.props.loadPokemon();
    }

    componentDidUpdate() {
        console.log(this.props);
    }

    render() {
        const pokemonInfo = this.props.pokemon;
        console.log(pokemonInfo);
        return (
          <main className={styles.gameBoard}>
            <nav className={styles.navbar}>
              <button className={styles.navButton}>New Game</button>
              <button className={styles.navButton}>Quit Game</button>
            </nav>
            {/* <ChatWindow
              messages={this.props.messages}
              handleSendMessage={this.props.handleSendMessage}
              handleLeave={this.props.handleLeave}
            /> */}

            <div className={styles.activeCards}>
              <div className={styles.playerActive}>
                <span>{this.props.messages.username}</span>
              </div>
              <div className={styles.opponentActive}></div>
            </div>
            <div className={styles.playerHand}>
              <div className={styles.handHolder}></div>
              {/* {pokemonInfo.map((pokemon) => <PokeCard key={pokemon.id} props={pokemon} />)};*/}
            </div>
            <footer></footer>
          </main>
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

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);