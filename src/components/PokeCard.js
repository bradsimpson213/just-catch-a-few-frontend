import React from "react";
import styles from "./PokeCard.module.css";

class PokeCard extends React.Component {

    render() {

        return(
            <div className={styles.cardBody}>
                <header className={styles.pokeHeader}>Spiritomb
                </header>
                <div className={styles.imageWrapper}>

                </div>
                <div className={styles.pokeStats}>

                </div>
            </div>
        )
    }

}

export default PokeCard;