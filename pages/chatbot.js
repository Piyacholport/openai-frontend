import React, { useState } from "react";

const BotPage = () => {
  const [messages, setMessages] = useState([]);

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;

    let botResponse = "";
    if (message === "Hello") {
      botResponse = "Good Morning";
    } else {
      botResponse = "ไม่เข้าใจคำถาม";
    }

    const userMessage = { content: message, isUser: true };
    const botMessage = { content: botResponse, isUser: false };

    setMessages((prevMessages) => [...prevMessages, userMessage, botMessage]);

    event.target.reset();
  };

  return (
    <div>
      <h1>Bot Page</h1>
      <div>
        {messages.map((msg, index) => (
          <React.Fragment key={index}>
            {msg.isUser ? (
              <div className="chat chat-end">
                <div className="chat-bubble bg-[#D3D3D3] text-gray-700 shadow-md">
                 
                  <p className="user">
                    <span className="user-message">{msg.content}</span>
                  </p>
                  
                </div>
              </div>
            ) : (
              <div className="chat chat-start">
                <div className="chat-bubble bg-[#ffffff] text-gray-700 shadow-md">
                  <p className="bot">
                    <span className="bot-message">Bot: {msg.content}</span>
                  </p>
                 
                    <div className="">
                      <button className="mt-2 mb-3 bg-sky-500 text-white py-2 px-4 rounded">
                        retry
                      </button>
                      <button className="mt-2 mb-3 ml-3 bg-sky-500 text-white py-2 px-4 rounded">
                        more..
                      </button>
                    </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button type="submit">ส่ง</button>
      </form>
    </div>
  );
};

export default BotPage;
