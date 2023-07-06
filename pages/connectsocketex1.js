import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const BotPage = () => {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // เชื่อมต่อกับเซิร์ฟเวอร์ socket.io เมื่อโหลดคอมโพเนนต์
    const newSocket = io('http://localhost:3000');
    setSocket(newSocket);

    // ล้างการเชื่อมต่อ socket เมื่อถอดออก
    return () => {
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket) {
      // รับ botMessage จากเซิร์ฟเวอร์และอัพเดต messages
      socket.on('botMessage', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const handleSendMessage = (message) => {
    if (socket) {
      // ส่ง userMessage ไปยังเซิร์ฟเวอร์
      socket.emit('userMessage', message);
      // อัพเดต messages ในสถานะ (state) ของคอมโพเนนต์
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  const handleClearMessages = () => {
    setMessages([]);
  };

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <p key={index}>{message}</p>
        ))}
        {messages.length === 0 && <p>Welcome</p>}
      </div>
      <button onClick={handleClearMessages}>Clear Chat</button>
      <button onClick={() => handleSendMessage('Hello')}>Send Message</button>
    </div>
  );
};

export default BotPage;
