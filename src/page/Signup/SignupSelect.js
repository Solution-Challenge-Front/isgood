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
                            <h3>아이디어 등록자</h3>
                            <div className='inform_box'>
                                
                                <p>아이디어를 등록할 수 있습니다.</p>
                                <p>타인의 아이디어를 열람할 수 없습니다.</p>
                                <p>등록한 아이디어를 통하여 투자자와 접촉할 수 있습니다.</p>
                                <p>그외에 기본기능을 이용할 수 있습니다.</p>
                            </div>
                            <Button  variant="secondary"  onClick={()=>{ navigate('/signup1')}}>
                                아이디어 등록자로 시작하기
                            </Button>
                        </div>
                        <div className='select2'>
                            <h3>투자자</h3>
                            <div className='inform_box'>
                                
                                <p>아이디어를 등록할 수 없습니다.</p>
                                <p>타인의 아이디어를 허용범위 내에서 열람할 수 있습니다.</p>
                                <p>등록된 아이디어를 통하여 등록자와 접촉할 수 있습니다.</p>
                                <p>그외에 기본기능을 이용할 수 있습니다.</p>                              
                            </div>
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