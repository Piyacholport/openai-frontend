import io from 'socket.io-client';

const socket = io.connect('https://example.com'); 

const sendMessage = (message) => {
  socket.emit('chatMessage', message);
};

export default { socket, sendMessage };