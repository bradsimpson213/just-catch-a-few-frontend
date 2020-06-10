import React, { useState, useEffect, useRef } from 'react';
import uniqid from 'uniqid'; 
import { baseWSUrl } from './config'

import Home from './components/Home';
import GameBoard from './components/GameBoard';


const App = (props) => {
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const webSocket = useRef(null);
  
  useEffect(() => {
     if (!username) {
      return;
    }

    const ws = new WebSocket(`${baseWSUrl}`);
    ws.onopen = (e) => {
      console.log(`Connection open: ${e}`);
      setMessages([]);
    };

    ws.onerror = (e) => {
      console.error(e);
    };

    ws.onclose = (e) => {
      console.log(`Connection closed: ${e}`);
      webSocket.current = null;
      setUsername('');
      setMessages([]);
    };

    webSocket.current = ws;
 
    return function cleanup() {
      if (webSocket.current !== null) {
        webSocket.current.close();
      }
    };
  }, [username]);

  useEffect(() => {
    return function cleanup() {
      if (webSocket.current !== null) {
        webSocket.current.close();
      }
    };
  }, [])

  useEffect(() => {
    if (webSocket.current !== null) {
    
      webSocket.current.onmessage = (e) => {
        console.log(`Processing incoming message ${e.data}...`);

        const chatMessage = JSON.parse(e.data);
        const message = chatMessage.data;
        message.created = new Date(message.created);

        setMessages([chatMessage.data, ...messages]);
      };
    }
  }, [messages]);

  const updateUsername = (username) => {
    setUsername(username);
  };

  const handleSendMessage = (message) => {
    const newMessage = {
      id: uniqid(),
      username,
      message,
      created: new Date(),
    }

    const jsonNewMessage = JSON.stringify({
      type: 'send-chat-message',
      data: newMessage,
    });

    console.log(`Sending message ${jsonNewMessage}...`);

    webSocket.current.send(jsonNewMessage);
  };

  const handleLeave = () => {
    setUsername('');
  };

  return (
    <>
      {username ? (
        <GameBoard messages={messages} handleSendMessage={handleSendMessage}
        handleLeave={handleLeave} />) : ( <Home updateUsername={updateUsername} />)};
    </>
  );
}

export default App;
