import React from "react";
import styles from "./PokeCard.module.css";


class PokeCard extends React.Component {
    constructor(props) {
        super(props)
    };


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

export default PokeCard;