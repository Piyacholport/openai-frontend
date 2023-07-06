// pages/chatbot.js

import { useState, useEffect } from 'react';
import socketConnection from '../socketIO/socket-io-connection'; 

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage) {
      socketConnection.sendMessage(inputMessage);
      setInputMessage('');
    }
  };

  useEffect(() => {
    const handleIncomingMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };

    // รับข้อความตอบกลับจากเซิร์ฟเวอร์ Socket.IO
    socketConnection.socket.on('chatMessage', handleIncomingMessage);

    return () => {
      // ยกเลิกการฟังเหตุการณ์เมื่อหน้าถูกถอดเลิก
      socketConnection.socket.off('chatMessage', handleIncomingMessage);
    };
  }, []);

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <div>
        <input type="text" value={inputMessage} onChange={handleInputChange} />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}
