import './Signup.css';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Form, Col, Row } from 'react-bootstrap'
import { useState } from 'react';
import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { getCookie } from '../../util/Cookie';
import { useDispatch, useSelector } from "react-redux"

function Signup1(){
    let _id = "x"
    let a = useSelector((state) => { return state } )
    console.log(a)
    if(getCookie("token_id") !== undefined) {
        _id = getCookie("token_id")
    }
    useEffect(()=>{
        AOS.init({duration: 2000});
    },[])

    

    return(
        <div className='signup1_main' data-aos="fade-up">
            <div className='signup_container'>
                {
                    (_id == "x") ?
                     <Signup_content/>
                     : 
                     <Gsignup_content user = {a}/>
                }
            </div>
        </div>
    );
}
export default Signup1;

function Signup_content(){
    let navigate = useNavigate();
    let[nickname, get_nickname] = useState('');
    let[id, get_id] = useState('');
    let [password, get_password] = useState('');
    let [name, get_name] = useState('');
    let [nation, get_nation] = useState('');
    let [email, get_email] = useState('');
    let [phone, get_phone] = useState(0);
    return(
        <Container className="panel">
            <h2>아이디어 등록자</h2>
            <br />
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
                    <Form.Control type="password" placeholder="비밀번호" onChange={(e)=>{
                        get_password(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>이름을 입력하세요</p>
                    <Form.Control type="text" placeholder="이름" onChange={(e) => {
                        get_name(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>국가 정보를 입력하세요</p>
                    <Form.Control type="text" placeholder="국가 정보" onChange={(e) => {
                        get_nation(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>휴대폰 번호를 입력하세요('-'를 빼고 숫자만)</p>
                    <Form.Control type="text" placeholder="휴대폰 번호('-'빼고)" onChange={(e) => {
                        get_phone(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>이메일을 입력하세요</p>
                    <Form.Control type="text" placeholder="이메일" onChange={(e) => {
                        get_email(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>닉네임를 입력하세요</p>
                    <Form.Control type="text" placeholder="닉네임" onChange={(e)=>{
                        get_nickname(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Button variant="secondary" className='signup_button'
                onClick={() => { 
                    axios.post(`${process.env.REACT_APP_API_KEY}/auth/join`, {
                        common: true,
                        id: id,
                        pw: password,
                        name: name,
                        nation: nation,
                        email: email,
                        phone: Number(phone),
                        nickname: nickname
                    })
                        .then((result) => {
                            if (result.status === 201) {
                                alert("회원가입 성공")
                                navigate('/')
                        }
                        }).catch((result) => {
                            if (result.status === 401) {
                            alert("ID 중복입니다.")
                            } else if (result.status === 500) {
                                navigate('/signup1')
                        }
                    })
            }}
            >
                Sign up
            </Button>
        </Container>
    );
}

function Gsignup_content(user){
    console.log(user.user.g_user_info.mail)
    let navigate = useNavigate('');
    let[nickname, get_nickname] = useState('');
    let[id, get_id] = useState('');
    let [password, get_password] = useState('');
    let [name, get_name] = useState('');
    let [nation, get_nation] = useState('');
    let [email, get_email] = useState('');
    let [phone, get_phone] = useState(0);
    return(
        <Container className="panel">
            <h2>아이디어 등록자</h2>
            <br />
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>아이디를 입력하세요</p>
                    <Form.Control type="text" placeholder={user.user.g_user_info.mail.payload} readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>비밀번호를 입력하세요</p>
                    <Form.Control type="password" placeholder="비밀번호" onChange={(e)=>{
                        get_password(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>이름을 입력하세요</p>
                    <Form.Control type="text" placeholder={user.user.g_user_info.name.payload} readOnly />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>국가 정보를 입력하세요</p>
                    <Form.Control type="text" placeholder="국가 정보" onChange={(e) => {
                        get_nation(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>휴대폰 번호를 입력하세요('-'를 빼고 숫자만)</p>
                    <Form.Control type="text" placeholder="휴대폰 번호('-'빼고)" onChange={(e) => {
                        get_phone(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>이메일을 입력하세요</p>
                    <Form.Control type="text" placeholder="이메일" onChange={(e) => {
                        get_email(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm>
                    <p>닉네임를 입력하세요</p>
                    <Form.Control type="text" placeholder="닉네임" onChange={(e)=>{
                        get_nickname(e.target.value)
                    }} />
                </Col>
            </Form.Group>
            <Button variant="secondary" className='signup_button'
                onClick={() => { 
                    axios.post(`${process.env.REACT_APP_API_KEY}/auth/join`, {
                        common: true,
                        pw: password,
                        nation: nation,
                        email: email,
                        phone: Number(phone),
                        nickname: nickname,
                        _id: user._id
                    })
                        .then((result) => {
                            if (result.status === 201) {
                                alert("회원가입 성공")
                                navigate('/')
                        }
                        }).catch((result) => {
                            if (result.status === 401) {
                            alert("ID 중복입니다.")
                            } else if (result.status === 500) {
                                navigate('/signup1')
                        }
                    })
            }}
            >
                Sign up
            </Button>
        </Container>
    );
}
