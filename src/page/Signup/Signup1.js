import './Signup.css';
import {useNavigate} from 'react-router-dom';
import {Button, Container, Form, Col, Row } from 'react-bootstrap'
import { useState } from 'react';

function Signup1(){
    let[nickname, get_nickname] = useState('');
    let[id, get_id] = useState('');
    let[password, get_password] = useState('');
    let navigate = useNavigate();
    return(
        <div className='signup1_main'>
            <div className='signup_container'>
                <Container className="panel">
                    <h2>아이디어 등록자</h2>
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
                    <Form.Group as={Row} className="mb-3">
                        <Col sm>
                            <p>넥네임를 입력하세요</p>
                            <Form.Control type="text" placeholder="닉네임" onChange={(e)=>{
                                get_nickname(e.target.value)
                            }} />
                        </Col>
                    </Form.Group>
                </Container>
            </div>
        </div>
    );
}
export default Signup1;