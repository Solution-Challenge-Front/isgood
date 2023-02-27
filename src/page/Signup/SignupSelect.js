import './Signup.css';
import {useNavigate} from 'react-router-dom';
import {Button, Container } from 'react-bootstrap';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function SignupSelect(){
    let navigate = useNavigate();
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return(
        <div className='signupselect_main' data-aos="fade-up">
            <div className='signupselect_container'>
                <Container className="panel">
                    <h2>활동 유형을 선택해 주세요</h2>
                    <br/>
                    <div className="select">
                        <div className='select1'>
                            <p>등록자에 대한 기능 ~ </p>
                            <Button  variant="secondary"  onClick={()=>{ navigate('/signup1')}}>
                                아이디어 등록자로 시작하기
                            </Button>
                        </div>
                        <div className='select2'>
                        <p>이용자에 대한 기능 ~ </p>
                            <Button  variant="secondary"  onClick={()=>{ navigate('/signup2')}}>
                                아이디어 이용자로 시작하기
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default SignupSelect;