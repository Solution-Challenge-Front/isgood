
import {useNavigate} from 'react-router-dom';
import {Button, Container, Form, Col, Row } from 'react-bootstrap'
import { useState } from 'react';

function Login(){

    let[id, get_id] = useState('');
    let[password, get_password] = useState('');

    return(
        <div className='login_main'>
            <div className='login_container'>
                <Container className="panel">
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
                </Container>
            </div>
        </div>
    );
}
export default Login;