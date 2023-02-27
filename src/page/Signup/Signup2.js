import './Signup.css';
import {useNavigate} from 'react-router-dom';
import {Button, Container } from 'react-bootstrap'
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Signup2(){
    let navigate = useNavigate();
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return(
        <div className='signup1_main' data-aos="fade-up">
            <div className='signup_container'>
                <Container className="panel">
                    <h2>아이디어 이용자</h2>
                    <br/>
                    <Button variant="secondary" className='signup_button'>Sign up</Button>
                </Container>
            </div>
        </div>
    );
}
export default Signup2;