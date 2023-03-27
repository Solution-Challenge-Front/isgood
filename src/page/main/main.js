import "./main.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCookie, removeCookie } from "../../util/Cookie.js";
import Carousel from "react-bootstrap/Carousel";

function MainPage() {
  let [state, set_state] = useState();
  let [tuto, set_tuto] = useState(0);
  let navigate = useNavigate();
  const isLogin = getCookie("token");
  if (isLogin) {
    return (
      <>
        <div className="container">
          <div className={"tuto" + " " + state}>
            <div className="tuto_container">
              <div className={"tuto1" + " " + "t" + tuto}>
                <h2>1</h2>
                <div className="t_box"></div>
              </div>
              <div className={"tuto2" + " " + "t" + tuto}>
                <h2>2</h2>
                <div className="t_box"></div>
              </div>
              <div className={"tuto3" + " " + "t" + tuto}>
                <h2>3</h2>
                <div className="t_box"></div>
              </div>
            </div>
            <div className="tuto_btn">
              <button
                className="main-btns-join"
                onClick={() => {
                  tuto == 0 ? set_tuto(0) : set_tuto(tuto - 1);
                }}
              >
                {" "}
                이전{" "}
              </button>
              <button
                className="main-btns-join"
                onClick={() => {
                  tuto == 2 ? set_tuto(2) : set_tuto(tuto + 1);
                }}
              >
                {" "}
                다음{" "}
              </button>
            </div>
            <button
              className="main-btns-join"
              onClick={() => {
                set_state("");
              }}
            >
              close
            </button>
          </div>
          <div className="row main-wrap">
            {/* main desc left */}
            <div className="col-md-6">
              <h5 className="main-wrap-header">idea Connection</h5>

              <h1 className="main-wrap-headline">
                Anyone can
                <br /> implement an
                <br /> idea
              </h1>
              <div className="main-wrap-btns">
                <button
                  className="main-btns-join"
                  onClick={() => {
                    set_state("active");
                  }}
                >
                  Tutorial
                </button>
                <button
                  className="main-btns-join"
                  onClick={() => {
                    navigate("/idea_list");
                  }}
                >
                  Idea List
                </button>
                <button
                  className="main-btns-learn"
                  onClick={() => {
                    navigate("/introduce");
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
            {/* main desc left end */}

            {/* main img */}
            <div className="col-md-6">
              <div className="main-img-wrap">
                <div className="main-img-border1">
                  <div className="border1-circle"></div>
                  <img
                    src={process.env.PUBLIC_URL + "/img/portrait.jpg"}
                    alt="logo image"
                    className="border1-circle-img"
                  />
                  <div className="main-img-border2">
                    <img
                      src={process.env.PUBLIC_URL + "/img/hijab.jpg"}
                      alt="logo image"
                      className="border2-circle-img"
                    />
                    <div className="main-img-border3">
                      <div className="border3-circle1"></div>
                      <div className="border3-circle2"></div>
                      <img
                        src={process.env.PUBLIC_URL + "/img/girl.jpg"}
                        alt="logo image"
                        className="border3-circle-img"
                      />
                      <div className="main-img-border4">
                        <img
                          src={process.env.PUBLIC_URL + "/img/happy.jpg"}
                          alt="logo image"
                          className="center-img"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* main img end */}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="container main">
        <div className="row main-wrap">
          {/* main desc left */}
          <div className="col-md-6">
            <h5 className="main-wrap-header">idea Connection</h5>
            <h1 className="main-wrap-headline">
              Anyone can
              <br /> implement an
              <br /> idea
            </h1>
            <div className="main-wrap-btns">
              <button
                className="main-btns-join"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
              <button
                className="main-btns-learn"
                onClick={() => {
                  navigate("/introduce");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
          {/* main desc left end */}

          {/* main img */}
          <div className="col-md-6">
            <div className="main-img-wrap">
              <div className="main-img-border1">
                <div className="border1-circle"></div>
                <img
                  src={process.env.PUBLIC_URL + "/img/portrait.jpg"}
                  alt="logo image"
                  className="border1-circle-img"
                />
                <div className="main-img-border2">
                  <img
                    src={process.env.PUBLIC_URL + "/img/hijab.jpg"}
                    alt="logo image"
                    className="border2-circle-img"
                  />
                  <div className="main-img-border3">
                    <div className="border3-circle1"></div>
                    <div className="border3-circle2"></div>
                    <img
                      src={process.env.PUBLIC_URL + "/img/girl.jpg"}
                      alt="logo image"
                      className="border3-circle-img"
                    />
                    <div className="main-img-border4">
                      <img
                        src={process.env.PUBLIC_URL + "/img/happy.jpg"}
                        alt="logo image"
                        className="center-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main img end */}
        </div>
      </div>
    </>
  );
}

export default MainPage;
