import React, { useEffect, useState } from "react";
import "./posts.css";
import "../../App.css";

function Posts() {
  let [title, setTitle] = useState(["홈", "주제", "커뮤니티"]);
  return (
    <div className="posts">
      <Sidebar />
      <PostContent />
    </div>
  );
}
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content-wrap">
        <div className="sidebar-content">
          <div className="sidebar-menu">
            <div className="sidebar-menu-title">홈</div>
            <ul className="sidebar-menu-list">
              <li className="sidebar-menu-item">
                <a href="#"> 전체 </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-title">주제</div>
            <ul className="sidebar-menu-list">
              <li className="sidebar-menu-item">
                <a href="#"> 환경 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="#"> 금융 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="#"> 안전 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="#"> 기타 </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-title">커뮤니티</div>
            <ul className="sidebar-menu-list">
              <li className="sidebar-menu-item">
                <a href="#"> 자유게시판 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="#"> 토론게시판 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostContent() {
  return (
    <div className="postContent">
      <div id="content">
        <div className="sub-header" style={{ zIndex: "auto" }}>
          <h2 className="sub-header-title">
            <a href="#">환경</a>
          </h2>
        </div>
        <div className="post">
          <h4>글제목</h4>
          <p>글내용(간단)</p>
        </div>
        <div className="post">
          <h4>글제목</h4>
          <p>글내용(간단)</p>
        </div>
      </div>
    </div>
  );
}
export default Posts;
