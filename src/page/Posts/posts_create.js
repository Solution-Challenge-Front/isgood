import axios from "axios";
import "./post_create.css";
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { setCookie, getCookie, removeCookie } from '../../util/Cookie';
import { useNavigate } from "react-router-dom";

function PostCreate() {
  let [title, setTitle] = useState('');
  let [introduce, setIntroduce] = useState('');
  let [desc, setDesc] = useState('');
  let navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const token = getCookie('token');


  if (token) {
    setIsLogin(true);
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Form className="mt-5 idea-create-form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>아이디어 제목</Form.Label>
                  <Form.Control
                    type="email" placeholder="아이디어 제목"
                    onChange={(e) => { setTitle(e.target.value) }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>아이디어 소개</Form.Label>
                  <Form.Control
                    as="textarea"
                    onChange={(e) => { setIntroduce(e.target.value) }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>아이디어 내용</Form.Label>
                  <Form.Control
                    as="textarea" rows={10}
                    onChange={(e) => { setDesc(e.target.value) }}
                  />
                </Form.Group>
                <Button
                  as="input" type="submit" value="Submit"
                  onClick={() => {
                    axios.post(`${process.env.REACT_APP_API_KEY}/idea/create`, {
                      title: title,
                      introduce: introduce,
                      text: desc
                    },
                      {
                        headers: {
                          Authorization: getCookie("token")
                        }
                      })
                      .then((result) => {
                        const statusCode = result.status
                        if (statusCode === 201) {
                          alert(result.data.message);
                          navigate('/idea_list')
                        }
                      }).catch((err) => {
                        const statusCode = err.status
                        if (statusCode === 400) {
                          navigate('/idea_list')
                          alert("권한이 없습니다.");
                        } else if (statusCode === 500) {
                          navigate('/idea_list')
                          alert('다시 작성부탁드립니다.');
                        }
                      })
                  }}
                />{' '}
              </Form>
            </div>
          </div>
        </div>

      </>
    )
  } else {
    navigate('/login')
    alert('로그인을 해주세요')
    return(
    <>
    </>
    );
    
  }
}

export default PostCreate;