import React, { useState, useEffect } from "react";
import "./chatlist.css";

function ChatList() {
  const rooms = [
    { name: "Room 1" ,nickname: '병주' },
    { name: "Room 2", nickname: "진우"},
    
  ];

  return (
    <div className="chat-room-list">
      {rooms.map((room) => (
        <div className="chat-room-item" key={room.name}>
          <div className="chat-room-icon">{room.name.charAt(0)}</div>
          <div className="chat-room-details">
            <div className="chat-room-name">{room.name}</div>
            <div className="chat-room-meta">
              <div className="chat-room-nickname">
                {room.nickname}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;
