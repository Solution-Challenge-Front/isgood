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
          <p>Update your photo and personal detail</p>
        </div>
        <div className="isSave">
          <button
            style={{ background: "navy", color: "white", marginRight: "10px" }}
          >
            save
          </button>
          <button style={{ background: "white", color: "navy" }}>Cancel</button>
        </div>
      </div>
      <div className="profileContanier">
        <div className="userName">
          <p>Username</p>
          <div>투자자 </div>
          <input
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="phoneNum">
          <p>Phonenumber</p>
          <select id="txtMobile1">
            <option value="">::선택::</option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="019">019</option>
            <option value="010">010</option>
          </select>
          <input
            type="text"
            id="txtMobile2"
            size="4"
            onkeypress="onlyNumber();"
          />
          <input type="text" id="txtMobile3" size="4" />
        </div>
        <div className="yourPhoto">
          <div className="photoContext">
            <p>Your Photo</p>
            <p>This will be displayed on your profile.</p>
          </div>

          <img src={process.env.PUBLIC_URL + "/lol.jpg"} />
          <div className="isUpdate">
            <button
              style={{
                background: "navy",
                color: "white",
                marginRight: "10px",
              }}
            >
              Update
            </button>
            <button style={{ background: "white", color: "navy" }}>
              Delete
            </button>
          </div>
        </div>
        <div className="youtBio">
          <div className="bioContext">
            <p>Yout bio</p>
            <p>Write a short introduction.</p>
          </div>
          <textarea id="story" name="story" rows="5" cols="50">
            Add a short bio...
          </textarea>
        </div>
        <div className="email">
          <div className="youEmail">
            <p>Alternative contact email</p>
            <p>Enter an alternative email if you'd like to be</p>
            <p>contacted via a different email</p>
          </div>
          <input
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Profile;
