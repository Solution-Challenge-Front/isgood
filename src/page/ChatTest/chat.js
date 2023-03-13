import React, { useState, useEffect } from "react";
import "./chat.css";
function Chat() {
  let [messages, setMessages] = useState([
    {
      sender: "other",
      message: "Hello, how are you?",
    },
    {
      sender: "self",
      message: "I am good, thank you!",
    },
    {
      sender: "other",
      message: "That is great to hear!",
    },
  ]);
  const [profilePicture, setProfilePicture] = useState(
    "https://example.com/profile-picture.jpg"
  );
  return (
    <div className="chat">
      <div className="chatSide">
        <div className="chatModal">
          <h5>박병주</h5>
          <p>한번 뵐 수 있을까요?</p>
          <p>오후 1시 45분</p>
        </div>
        <div className="chatModal">
          <h5>배성준</h5>
          <p>연락 다시 드릴게요</p>
          <p>오후 1시 10분</p>
        </div>
      </div>
      <div className="chatMain">
        <div className="header">
          <div className="profileName">
            <img src={process.env.PUBLIC_URL + "/lol.jpg"} />
            <h5>김민준</h5>
          </div>

          <ul className="messages">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`message-bubble ${
                  message.sender === "self" ? "self" : "other"
                }`}
              >
                {message.message}
                <div className="time">오후3시</div>
              </li>
            ))}
          </ul>
          <form>
            <input
              type="text"
              placeholder="Type a message..."
              name="messageInput"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
