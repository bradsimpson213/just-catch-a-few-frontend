import React from 'react';
import styles from './GameBoard.module.css';
import ChatWindow from './ChatWindow';
import PokeCard from './PokeCard';

class GameBoard extends React.Component {
    constructor(props) {
        super(props)
    };

    handleChatHide = (e) => {
    };
  

    render() {
        const cards = [0,1,2,3];
        return (
          <main className={styles.gameBoard}>
            <nav className={styles.navbar}>
              <button className={styles.newGameButton}>New Game</button>
              <button className={styles.quitButton}>Quit Game</button>
              <img
                className={styles.navLogo}
                src="https://fontmeme.com/permalink/200609/4653f7098e77b540fb3515a454473098.png"
                alt="game-logo"
              />
              <button className={styles.chatButton} onClick={this.handleChatHide()}>Open Chat</button>
                <div className={styles.chatBox}></div>
            </nav>
            <div className={styles.activeCards}>
              <div className={styles.playerActive}>
                <div className={styles.playerActive__drop}></div>
              </div>
              <div className={styles.opponentActive}>
                <div className={styles.opponentActive__drop}></div>
              </div>
            </div>
            <div className={styles.playerHand}>
              <div className={styles.handHolder}>
                {cards.map((card, index) => <PokeCard key={index} props={card} />)};
              </div>
              <ChatWindow
                  messages={this.props.messages}
                  handleSendMessage={this.props.handleSendMessage}
                  handleLeave={this.props.handleLeave}
                />
             
            </div>
            <footer></footer>
          </main>
        );
    };
};

export default GameBoard;