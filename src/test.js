import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import io from "socket.io-client";
import { Routes, Route, Link } from "react-router-dom";
import { getCookie } from "./cookie";

// routes
import Test from "./test.js";
const jwtToken = getCookie("token");
let socket;
if (jwtToken === undefined) {
  socket = io.connect("192.168.20.232:8088", {});
} else {
  socket = io.connect("192.168.20.232:8088", {
    query: { jwt: jwtToken },
  });
}

function App() {
  const [state, setState] = useState({ message: "", name: "" });
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("a", (socket) => {
      const { name, message } = socket;

      setChat([...chat, { name, message }]);
    });

    socket.on("jwt", (socket) => {
      const { error } = socket;
      console.log(socket);
      if (error) {
        // Handle JWT error here, such as displaying an error message to the user
        console.error(`JWT error: ${error}`);
        // Send the error message to the server for logging
        fetch("/api/log-jwt-error", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ error }),
        });
      }
    });
  }, [chat]);

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onMessageSubmit = (e) => {
    e.preventDefault();
    const { name, message } = state;
    socket.emit("message", { name, message });
    setState({ message: "", name });
  };

  const onJoin = (e) => {
    const common = true;
    const idea_id = 8;

    e.preventDefault();

    socket.emit("join", { common, idea_id }, (response) => {
      console.log(response); // Handle server response here
    });
    setState({ ...state, message: "" });
  };

  const renderChat = () => {
    return (
      <ul>
        {chat.map((message, index) => (
          <li key={index}>
            <strong>{message.name}: </strong>
            <span>{message.message}</span>
          </li>
        ))}
      </ul>
    );
  };
  console.log("chat: " + chat);
  console.log(jwtToken);
  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <h1>Message</h1>
        <div className="name-field">
          <input
            name="name"
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
          />
        </div>
        <div>
          <input
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            variant="outlined"
            label="Message"
          />
        </div>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Chat log</h1>
        <div className="chatBody">{renderChat()}</div>
      </div>
      <button onClick={onJoin}>Join Chat</button>
      <Routes>
        <Route path="/1" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
