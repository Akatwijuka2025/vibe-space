import React, { useState } from 'react';
import './Chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Friend', text: 'Hey! Welcome to Vibe Space.' },
    { id: 2, sender: 'You', text: 'Thanks! Setting up the messaging feature now.' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      text: inputText
    };

    setMessages([...messages, newMessage]);
    setInputText('');
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h3>Vibe Space Chat</h3>
      </div>
      
      <div className="chat-messages">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`message-bubble ${msg.sender === 'You' ? 'sent' : 'received'}`}
          >
            <span className="sender-name">{msg.sender}</span>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>

      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input 
          type="text" 
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type a message..." 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
