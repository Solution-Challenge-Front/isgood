import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCookie } from "../../util/Cookie";
import { useLocation, useNavigate } from "react-router-dom";
import "./chatlist.css";

function ChatList() {
  let navigate = useNavigate();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}/httpchat/list`, {
        //jwt만 필요함
        headers: {
          Authorization: getCookie("token"),
        },
      })

      .then((result) => {
        let copy = [...result.data.room_data];
        setRooms(copy);

        //roomname, nickname 주기로함
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="chat-room-list">
      {rooms.map((room, i) => (
        <div
          onClick={() => {
            navigate("/chat", {
              state: {
                roomname: rooms[i].roomname,

                id: rooms[i].id,
              },
            });
          }}
          className="chat-room-item"
          key={room.name}
        >
          <div className="chat-room-icon">R</div>
          <div className="chat-room-details">
            <div className="chat-room-name">Room {i}</div>
            <div className="chat-room-meta">
              <div className="chat-room-nickname">{rooms[i].nickname}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
