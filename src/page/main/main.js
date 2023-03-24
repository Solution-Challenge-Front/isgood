import './main.css';
import { useNavigate } from 'react-router-dom';

function MainPage() {
  let navigate = useNavigate();
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
              Anyone can<br/> implement an<br/> idea
            </h1>
            <div className='main-wrap-btns'>
              <button className='main-btns-join' onClick={() => { navigate('/login')}}>Join Us</button>
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