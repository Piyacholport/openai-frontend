// const store = require("./store/store");
// const express = require("express");
// const http = require("http");
// const socketIO = require("socket.io");
// const next = require('next')

// const exp = express();
// const server = http.createServer(exp);
// const io = socketIO(server);

// const { loadEnvConfig } = require('@next/env')
// loadEnvConfig('./', process.env.NODE_ENV !== 'production')
// const ENV = process.env
// const app = next({ dev: ENV.NEXT_PUBLIC_ENV === 'local', port: ENV.NEXT_PUBLIC_APP_PORT || 3000 })


// const getAnswer = () => {
//   const state = store.getState();
//   return state.answer;
// };
// io.on("connection", (socket) => {
//   console.log("A user connected");

//   socket.on("disconnect", () => {
//     console.log("A user disconnected");
//   });

//   socket.on("chat message", (message) => {
//     console.log("Received message:", message);
//     if (message) {
//       const answer = getAnswer();
//       socket.emit("answer message", answer);
//     } 
//   });
// });

// const port = ENV.NEXT_PUBLIC_APP_PORT || 3000;
// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const store = require("./store/store"); 

const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const next = require('next')

const exp = express();
const server = http.createServer(exp);
const io = socketIO(server);

const getAnswer = () => {
  const state = store.getState();
  return state.chat.answer;
};

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("chat message", (message) => {
    console.log("Received message:", message);
    if (message) {
      const answer = getAnswer();
      socket.emit("answer message", answer);
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
