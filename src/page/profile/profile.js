import React, { useEffect } from "react";
import "./profile.css";
import "../../App.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profileHead">
        <div className="headPic">
          <img src={process.env.PUBLIC_URL + "/lol.jpg"} width="360px" />
        </div>
        <div className="headContext">
          <h3>Profile</h3>
        </div>
      </div>
      <div className="profileContanier">
        <div className="userName">
          <p>Username</p>
          <div>투자자 </div>
          <div className="name">박병주</div>
        </div>
        <div className="phoneNum">
          <p>Phonenumber</p>
          <div>010</div>
          <div>1234</div>
          <div>5678</div>
        </div>
        <div className="yourPhoto">
          <div className="photoContext">
            <p>User Photo</p>
          </div>

          <img src={process.env.PUBLIC_URL + "/lol.jpg"} />
        </div>
        <div className="youtBio">
          <div className="bioContext">
            <p>User's short introduction.</p>
          </div>
          <div className="bioMain">
            저기요 동의대역 어떻게 가는지 아세요? 뉴진스의 하잎보이요
            나나난나ㅏ난나나 하잎보이 하잎보이
          </div>
        </div>
        <div className="email">
          <div className="youEmail">
            <p>Alternative contact email</p>
          </div>
          <div className="emailContext">zkakcnd@naver.com</div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
