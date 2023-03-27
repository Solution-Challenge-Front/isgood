import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getCookie } from "../../util/Cookie";
import io from "socket.io-client";
import "./chat.css";

let socket;

const jwtToken = getCookie("token");

if (jwtToken === undefined) {
  socket = io.connect(process.env.REACT_APP_SOCKET, {});
} else {
  socket = io.connect(process.env.REACT_APP_SOCKET, {
    query: { jwt: jwtToken },
  });
}

function Chat(props) {
  //삼항연산자 사용해서 스피너 돌게하기
  let [messages, setMessages] = useState([]); // 메세지 담을 거

  //  룸네임 가져오기
  const location = useLocation();

  const roomname = { roomname: location.state && location.state.roomname };

  let [nickname, setNick] = useState("");
  // sender 비교
  let [userId, setId] = useState("");

  useEffect(() => {
    if (jwtToken === undefined) {
      socket = io.connect(process.env.REACT_APP_SOCKET, {});
    } else {
      socket = io.connect(process.env.REACT_APP_SOCKET, {
        query: { jwt: jwtToken },
      });
    }
    socket.emit("join", roomname); //join 이벤트 발생
    socket.on("join", (data) => {});

    socket.on("response", (response) => {
      console.log(response);
      setNick(response.nickname);
      setId(response.id); //닉네임 , 아이디 받기
    });

    socket.on("message", (message) => {
      //메세지 이벤트
      setMessages((messages) => [...messages, message]);
    });

    axios
      .post(
        `${process.env.REACT_APP_API_KEY}/httpchat/record`,
        {
          roomname: location.state.roomname, // 채팅방 정보주기
        },
        {
          headers: {
            Authorization: getCookie("token"),
          },
        }
      )
      .then((result) => {
        // 기존 채팅 불러오기

        let copy = [...messages, ...result.data.chat_data];
        setMessages(copy);
      })
      .catch((err) => {});
  }, []);

  const [profilePicture, setProfilePicture] = useState(
    "https://example.com/profile-picture.jpg"
  );
  //소켓
  const [response, setResponse] = useState("");
  const [messageInput, setMessageInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();
    const message = {
      roomname: location.state.roomname,
      message: messageInput,
      date: new Date().toString(),
    };
    setMessages((messages) => [...messages, message]);
    socket.emit("message", message);

    setMessageInput("");
  };

  return (
    <div className="chat">
      <div className="chatMain">
        <div className="header">
          <div className="profileName">
            <img src={process.env.PUBLIC_URL + "/lol.jpg"} />
            <h5>{nickname}</h5>
          </div>

          <ul className="messages">
            {messages.map((message, index) => (
              <li
                key={index}
                className={`message-bubble ${
                  message.sender === userId ? "other" : "self"
                }`} // userId 면 클래스가 other 아니면 self
              >
                {message.message}
                <div className="time">{message.date} </div>
              </li>
            ))}
          </ul>
          <form onSubmit={sendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              name="messageInput"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
