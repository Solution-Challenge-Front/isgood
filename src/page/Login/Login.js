
import {useNavigate} from 'react-router-dom';
import React, { useEffect } from "react";
import {Button, Container, Form, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import './Login.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { setCookie, getCookie, removeCookie } from '../../util/Cookie';

function Login(){

    let[id, get_id] = useState('');
    let[password, get_password] = useState('');
    let navigate = useNavigate();
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])
    return(
        <div className='login_main' data-aos="fade-up">
            <div className='login_container'>
                <Container className="login_panel">
                    <h2>로그인</h2>
                    <br/>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <p>아이디를 입력하세요</p>
                            <Form.Control type="text" placeholder="아이디" onChange={(e)=>{
                                get_id(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <p>비밀번호를 입력하세요</p>
                            <Form.Control type="text" placeholder="비밀번호" onChange={(e)=>{
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
                                    if (result.status === 201) {
                                        setCookie("token", result.data.jwt, {
                                            path: "/",
                                        })
                                        axios.post(`${process.env.REACT_APP_API_KEY}/auth/check`,
                                            {
                                            pw: password
                                            },
                                            {
                                                headers: {
                                                    Authorization: getCookie("token"),
                                                }
                                            }
                                        ).then((result) => {
                                            if (result.data.statusCode === 201) {
                                                alert(result.data.message)
                                                navigate('/')
                                            }
                                        }).catch((err) => {
                                            if (err.data.statusCode === 400) {
                                                alert(err.data.message)
                                            } else if (err.data.statusCode === 501) {
                                                alert(err.data.message)
                                            }
                                        })
                                    }
                                }).catch((err) => {
                                    if (err.status === 401) {
                                        alert(err.data.message)
                                    } else if (err.status === 500) {
                                        alert(err.data.message)
                                    }
                            })
                        }}
                    >
                        Login
                    </Button>
                </Container>
            </div>
        </div>
    );
}
export default Login;