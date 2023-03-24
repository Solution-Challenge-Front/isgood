import './introduce.css';
import {Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
function Introduce4(){
    let navigate = useNavigate();
    return(
        <div>
            <div className="animation" data-aos="fade-up">
                <div className='introduce_container'>
                    <div className='int1_text'>
                        <h1 className='int1_title'>Welcome Idea Connect</h1>
                        <h2>A service that can share ideas with <br/>people around the world and<br/> develop the world!</h2>
                    </div>
                    <div className='int1_img_container'>
                        <div className='int4_img'>
                        </div>
                    </div>
                </div>
                <div className='int4_buttonbox'>
                    <Button variant="secondary" onClick={()=> { navigate('/signupselect') }}>회원가입</Button>
                    <Button variant="secondary" onClick={()=> { navigate('/login') }}>로그인</Button>
                </div>
            </div>
        </div>
    );
}
export default Introduce4;