import io from "socket.io-client";

export const ChatController = () => {
  const socket = io.connect("http://localhost:3000");

  return {
    SendChat: async (message) => {
      return await socket.emit("chat message", message);
    },
     GetAns: async (answer) => {
      return await socket.on("answer message", answer);
    },  

  
  };
};
