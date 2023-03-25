import './main.css';
import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../util/Cookie.js';


function MainPage() {
  let navigate = useNavigate();
  const isLogin = getCookie('token');
  if (isLogin) {
    return (
      <>
        <div className="container">
          <div className="row main-wrap">
            {/* main desc left */}
            <div className="col-md-6">
              <h5 className='main-wrap-header'>
                idea Connection
              </h5>
              <h1 className='main-wrap-headline'>
                Anyone can<br /> implement an<br /> idea
              </h1>
              <div className='main-wrap-btns'>
                <button className='main-btns-join' onClick={() => { navigate('/idea_list') }}>Idea List</button>
                <button className='main-btns-learn' onClick={() => { navigate('/introduce') }}>Learn More</button>
              </div>
            </div>
            {/* main desc left end */}

            {/* main img */}
            <div className="col-md-6">
              <div className='main-img-wrap'>
                <div className='main-img-border1'>
                  <div className='border1-circle'></div>
                  <img src={process.env.PUBLIC_URL + '/img/portrait.jpg'} alt='logo image' className='border1-circle-img' />
                  <div className='main-img-border2'>
                    <img src={process.env.PUBLIC_URL + '/img/hijab.jpg'} alt='logo image' className='border2-circle-img' />
                    <div className='main-img-border3'>
                      <div className='border3-circle1'></div>
                      <div className='border3-circle2'></div>
                      <img src={process.env.PUBLIC_URL + '/img/girl.jpg'} alt='logo image' className='border3-circle-img' />
                      <div className='main-img-border4'>
                        <img src={process.env.PUBLIC_URL + '/img/happy.jpg'} alt='logo image' className='center-img' />
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
    )
  }
  return (
    <>
      <div className="container main">
        <div className="row main-wrap">
          {/* main desc left */}
          <div className="col-md-6">
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
          <div className="col-md-6">
            <div className='main-img-wrap'>
              <div className='main-img-border1'>
                <div className='border1-circle'></div>
                <img src={process.env.PUBLIC_URL + '/img/portrait.jpg'} alt='logo image' className='border1-circle-img' />
                <div className='main-img-border2'>
                  <img src={process.env.PUBLIC_URL + '/img/hijab.jpg'} alt='logo image' className='border2-circle-img' />
                  <div className='main-img-border3'>
                    <div className='border3-circle1'></div>
                    <div className='border3-circle2'></div>
                    <img src={process.env.PUBLIC_URL + '/img/girl.jpg'} alt='logo image' className='border3-circle-img' />
                    <div className='main-img-border4'>
                      <img src={process.env.PUBLIC_URL + '/img/happy.jpg'} alt='logo image' className='center-img' />
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
  )
}

export default MainPage;