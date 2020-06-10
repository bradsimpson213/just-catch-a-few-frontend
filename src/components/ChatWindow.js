import React, { useState } from 'react';
import styles from './ChatWindow.module.css';



const ChatWindow = ({ messages, handleSendMessage, handleLeave }) => {
    const [message, setMessage] = useState('');

    const handleOnChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendOnClick = () => {
        handleSendMessage(message);
        setMessage('');
    };

    const handleLeaveOnClick = () => {
        handleLeave();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.chat_window}>
                <input type='text' value={message} onChange={handleOnChange} />
                <button type='button' onClick={handleSendOnClick}>Send</button>
                {/* <button type='button' onClick={handleLeaveOnClick}>Leave</button> */}
                <div className={styles.messages}>
                    {messages.map(m => (
                        <p key={m.id}><strong>{m.username}:</strong> {m.message}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChatWindow;