import './main.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../util/Cookie.js';


function MainPage() {
  let [state, set_state] = useState();
  let [user, set_user] = useState();
  let navigate = useNavigate();
  const isLogin = getCookie('token');
  if (isLogin) {
    return (
      <>
        <div className="container">
          <div className={'tuto' +" "+ state}>
            <div className='tuto_container'>
              <div className='tuto1'>
                <h2>Idea Connection Tutorial</h2>
                <div className='t_box'>
                  <div className='t_content'>
                    <h3>Please select your user type</h3>
                    <div className='user_select'>
                      <button>Idea Registrant</button>
                      <button>Rdea Investor</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='tuto1'>
                <h2>Idea Connection Tutorial</h2>
                <div className='t_box'>
                  <div className='t_content'>
                    <h3>Please select your user type</h3>
                    <div className='user_select'>
                      <button>Idea Registrant</button>
                      <button>Rdea Investor</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <button className='main-btns-join' onClick={() => { set_state("") }}>close</button>
          </div>
          <div className="row main-wrap">
            {/* main desc left */}
            <div className="col-md-8">
              <h5 className='main-wrap-header'>
                idea Connection
              </h5>
              <h1 className='main-wrap-headline'>
                Anyone can<br/> implement an<br/> idea
              </h1>
              <div className='main-wrap-btns'>
                <button className='main-btns-join' onClick={() => { set_state("active") }}>Tutorial</button>
                <button className='main-btns-learn' onClick={() => { navigate('/introduce') }}>Learn More</button>
              </div>
            </div>
            {/* main desc left end */}
  
            {/* main img */}
            <div className="col-md-4">
              <div className='main-img'>
              </div>
            </div>
            {/* main img end */}
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <div className="container">
        <div className="row main-wrap">
          {/* main desc left */}
          <div className="col-md-8">
            <h5 className='main-wrap-header'>
              idea Connection
            </h5>
            <h1 className='main-wrap-headline'>
              Anyone can<br /> implement an<br /> idea
            </h1>
            <div className='main-wrap-btns'>
              <button className='main-btns-join' onClick={() => { navigate('/login') }}>Login</button>
              <button className='main-btns-learn' onClick={() => { navigate('/introduce') }}>Learn More</button>
            </div>
          </div>
          {/* main desc left end */}

          {/* main img */}
          <div className="col-md-4">
            <div className='main-img'>
            </div>
          </div>
          {/* main img end */}
        </div>
      </div>
    </>
  )
}

export default MainPage;