import './Signup.css';
import {useNavigate} from 'react-router-dom';
import {Button, Container } from 'react-bootstrap'


function Signup2(){
    let navigate = useNavigate();
    return(
        <div className='signup2_main'>
            <div className='signup_container'>
                <Container className="panel">
                    <h2>아이디어 이용자</h2>
                    <br/>
                    
                </Container>
            </div>
        </div>
    );
}
export default Signup2;