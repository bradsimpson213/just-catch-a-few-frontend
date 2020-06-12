import React from 'react';
import styles from './GameBoard.module.css';
import ChatWindow from './ChatWindow';
import CardHolder from './CardHolder';

import { DragDropContext } from 'react-beautiful-dnd';

import initialData from './initialData';

class GameBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialData;
  }

  handleChatHide = (e) => {};

  onDragStart = () => {};  //not connected
  onDragUpdate = () => {};  //not connected

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if(!destination) {
      return;
    };

    if ( destination.droppableId === source.droppableId &&
          destination.index === source.index
    ) { return;
    };

    const cardHolder = this.state.cardHolders[source.droppableId];
    const newCardIds = Array.from(cardHolder.cardIds);

  };

  render() {
    const cards = [0, 1, 2, 3];
    // console.log(this.state);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <main className={styles.gameBoard}>
          <nav className={styles.navbar}>
            <button className={styles.newGameButton}>New Game</button>
            <button className={styles.quitButton}>Quit Game</button>
            <img
              className={styles.navLogo}
              src="https://fontmeme.com/permalink/200609/4653f7098e77b540fb3515a454473098.png"
              alt="game-logo"
            />
            <button
              className={styles.chatButton}
              onClick={this.handleChatHide()}
            >
              Open Chat
            </button>
            <div className={styles.chatBox}></div>
          </nav>
          <div className={styles.activeCards}>
            <div className={styles.playerActive}>
              <div className={styles.playerInfo}></div>
              <div className={styles.playerActive__drop}></div>
            </div>
            <div className={styles.opponentActive}>
              <div className={styles.opponentInfo}></div>
              <div className={styles.opponentActive__drop}></div>
            </div>
          </div>
          <div className={styles.playerHand}>
            {this.state.handOrder.map((columnId) => {
              const holder = this.state.cardHolders[columnId];
              const cards = holder.cardIds.map(
                (cardId) => this.state.cards[cardId]
              );
              return (
                <CardHolder
                  key={holder.id}
                  holder={holder}
                  cards={cards}
                />
              );
            })}
            <ChatWindow
              messages={this.props.messages}
              handleSendMessage={this.props.handleSendMessage}
              handleLeave={this.props.handleLeave}
            />
          </div>
          <footer></footer>
        </main>
      </DragDropContext>
    );
  }
};

export default GameBoard;