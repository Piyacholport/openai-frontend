// const store = require("./store/store");
const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const next = require("next");
const httpProxy = require("http-proxy");
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

// const getAnswer = () => {
//   const state = store.getState();
//   return state.chat.answer;
// };

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });

  socket.on("chat message", (message) => {
    console.log("Received message:", message);
    if (message) {
      //   const answer = getAnswer();
      //   socket.emit("answer message", answer);
      console.log("Message is : ", message);
    }
  });
});

const proxy = httpProxy.createProxyServer();

app.use((req, res, next) => {
  console.log("Received request:", req.method, req.url);
  proxy.web(req, res, { target: "http://localhost:3000" }, (error) => {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  });
});

proxy.on("error", (error) => {
  console.log("Proxy Error:", error);
});

const port = process.env.NEXT_PUBLIC_APP_PORT;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
