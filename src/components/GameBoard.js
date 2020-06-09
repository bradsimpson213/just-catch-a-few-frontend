import React from 'react';
import styles from './GameBoard.module.css';

import ChatWindow from './ChatWindow';
import PokeCard from './PokeCard';

class GameBoard extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
          <div className={styles.gameBoard}>
            <ChatWindow
              messages={this.props.messages}
              handleSendMessage={this.props.handleSendMessage}
              handleLeave={this.props.handleLeave}
            />
            <PokeCard />
            <PokeCard />
          </div>
        );
    };
};

export default GameBoard;