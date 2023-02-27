import React, { useEffect, useState } from "react";
import "./posts.css";
import "../../App.css";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import subject from "../../subject.js";

function Posts(props) {
  let [title, setTitle] = useState(["홈", "주제", "커뮤니티"]);
  let { id } = useParams();
  let navigate = useNavigate();
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
                <a href="/posts/0"> 전체 </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-title">주제</div>
            <ul className="sidebar-menu-list">
              <li className="sidebar-menu-item">
                <a href="/posts/1"> 환경 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="/posts/2"> 금융 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="/posts/3"> 안전 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="/posts/4"> 기타 </a>
              </li>
            </ul>
          </div>
          <div className="sidebar-menu">
            <div className="sidebar-menu-title">커뮤니티</div>
            <ul className="sidebar-menu-list">
              <li className="sidebar-menu-item">
                <a href="/posts/5"> 자유게시판 </a>
              </li>
              <li className="sidebar-menu-item">
                <a href="/posts/6"> 토론게시판 </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function PostContent(props) {
  let { id } = useParams();
  let serach_id = subject.find(function (x) {
    return x.id == id;
  });

  return (
    <div className="postContent">
      <div id="content">
        <div className="sub-header" style={{ zIndex: "auto" }}>
          <h2 className="sub-header-title">
            <a href="#">{serach_id.name}</a>
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
