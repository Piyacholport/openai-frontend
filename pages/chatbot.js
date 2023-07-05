import React, { useState } from 'react';

const BotPage = () => {
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;

    const userMessage = { content: message, isUser: true };
    const botMessage = { content: `คุณพิมพ์: ${message}`, isUser: false };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    event.target.reset();
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div>
      <h1>Bot Page</h1>
      <div>
        {messages.length === 0 ? (
          <p>No messages available.</p>
        ) : (
          messages.map((msg, index) => (
            <p key={index} className={msg.isUser ? 'user' : 'bot'}>
              {msg.isUser ? (
                <span className="user-message">{msg.content}</span>
              ) : (
                <span className="bot-message">{msg.content}</span>
              )}
            </p>
          ))
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">ส่ง</button>
      </form>
      <button onClick={handleClearChat}>Clear Chat</button>
    </div>
  );
};

export default BotPage;
