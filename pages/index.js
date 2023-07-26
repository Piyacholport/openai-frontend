import Head from "next/head";
import Image from "next/image";
import Link from "next/Link";
import Navbar from "../components/navbar";
import Title from "../components/title";
import React, { useState, useEffect } from "react";
import MyComponent from "./Mycomponent";
import io from "socket.io-client";
import { useSelector, useDispatch } from "react-redux";

const socket = io("http://localhost:3000");

export default function Chat() {
  const messages = useSelector((state) => state.messages);
  const message = useSelector((state) => state.message);
  const answer = useSelector((state) => state.answer);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("answer message", (answer) => {
      dispatch({ type: "SET_ANSWER", payload: answer });
    });

    socket.on("connect", () => {
      console.log("Connected to the server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from the server");
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  const handleClearChat = () => {
    dispatch({ type: "SET_MESSAGES", payload: [] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.message.value;

    let botResponse = "";
    if (message === "Hello" || message === "สวัสดี") {
      botResponse = answer;
    } else {
      botResponse = "ไม่เข้าใจคำถามค่ะ";
    }

    const usermessage = { content: message, isUser: true };
    const botmessage = { content: botResponse, isUser: false };

    console.log("user:", message, "\nbot:", botResponse);
    socket.emit("chat message", message);
    dispatch({
      type: "SET_MESSAGES",
      payload: [...messages, usermessage, botmessage],
    });
    dispatch({ type: "SET_MESSAGE", payload: "" });

    event.target.reset();
  };

  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen flex-col bg-[#f5f5f5] ">
        <Navbar />

        <div className="text-right mr-5 mt-20 ">
          <div>
            <label htmlFor="" className="btn" onClick={handleClearChat}>
              <span>
                <Image
                  src="./icon/trash.svg"
                  alt="trash"
                  width={20}
                  height={20}
                />
              </span>
              clear chat
            </label>

            <label htmlFor="my_modal_6" className="btn">
              <span>
                <Image
                  src="./icon/upload.svg"
                  alt="upload"
                  width={20}
                  height={20}
                />
              </span>
              upload file
            </label>

            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-left">
                  Please Select File
                </h3>
                <div className="py-4 text-center">
                  <MyComponent />
                </div>
                <div className="text-center">
                  <button className="btn">
                    <span>
                      <Image
                        src="./icon/upload.svg"
                        alt="upload"
                        width={20}
                        height={20}
                      />
                    </span>
                    upload file
                  </button>
                </div>

                <div className="modal-action">
                  <label htmlFor="my_modal_6" className="btn">
                    Close
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 pb-20 overflow-y-auto h-[520px] ">
          {messages.length === 0 ? (
            <Title />
          ) : (
            messages.map((msg, index) => (
              <div key={index} className={msg.isUser ? "user" : "bot"}>
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
                        <button className="mt-3 mb-3 bg-sky-500 text-white py-2 px-4 rounded">
                          retry
                        </button>
                        <button className="mt-3 mb-3 ml-3 bg-sky-500 text-white py-2 px-4 rounded">
                          more..
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        <div className="btm-nav">
          <form onSubmit={handleSubmit}>
            <div className="flex w-96 h-full">
              <input
                type="text"
                name="message"
                placeholder="Add new question"
                className="w-full h-full focus:outline-none "
              />
              <button type="submit">
                <span>
                  <Image
                    src="./icon/sendmessage.svg"
                    alt="sendmessage"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
