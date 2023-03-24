
import { useNavigate } from 'react-router-dom';
import React, { useEffect } from "react";
import { Button, Container, Form, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import './Login.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { setCookie, getCookie, removeCookie } from '../../util/Cookie';

import { useGoogleLogin } from '@react-oauth/google'
import GoogleButton from 'react-google-button';

function Login() {
    let [d, set_d] = useState([]);
    const googleSocialLogin = useGoogleLogin({
        onSuccess: (codeResponse) => {
            console.log(codeResponse)
            set_d(codeResponse.code);
            set_d(codeResponse.code);
            axios.post('http://192.168.20.232:8080/auth/gauth',{
                data : codeResponse.code
            })
                .then((result) => {
                console.log(result)
            })
        },
        flow: 'auth-code',
    })
    
    let [id, get_id] = useState('');
    let [password, get_password] = useState('');
    let navigate = useNavigate();
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='login_main' data-aos="fade-up">
            <div className='login_container'>
                <Container className="login_panel">
                    <h2>로그인</h2>
                    <br />
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <p>아이디를 입력하세요</p>
                            <Form.Control type="text" placeholder="아이디" onChange={(e) => {
                                get_id(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <p>비밀번호를 입력하세요</p>
                            <Form.Control type="text" placeholder="비밀번호" onChange={(e) => {
                                get_password(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <Button variant="secondary" className='Login_button'
                        onClick={() => {
                            axios.post(`${process.env.REACT_APP_API_KEY}/auth/login`, {
                                id: id,
                                pw: password
                            })
                                .then((result) => {
                                    const statusCode = result.status;   
                                    if (statusCode === 201) {
                                        setCookie("token", result.data.jwt, {
                                            path: "/",
                                        })
                                        navigate('/')
                                    }
                                })
                                .catch((err) => {
                                    const statusCode = err.status;

                                    if (statusCode === 401) {
                                        alert("ID 또는 비밀번호가 일치하지 않음")
                                    } else if (statusCode === 500) {
                                        navigate('/login')
                                    }
                                })
                        }}
                    >
                        Login
                    </Button>
                    <GoogleButton onClick={() => {googleSocialLogin();
                    
                    }} />

                </Container>
                
            </div>
        </div>
    );
}
export default Login;