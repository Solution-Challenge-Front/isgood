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
                  onChange={(e)=>{setTitle(e.target.value)}}  
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>아이디어 소개</Form.Label>
                <Form.Control
                  as="textarea"
                  onChange={(e)=>{setIntroduce(e.target.value)}}
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
                    text : desc
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
                        navigate('/posts/1')
                      }
                    }).catch((err) => {
                      const statusCode = err.status
                      if (statusCode === 400) {
                        alert(err.data.message);
                      } else if (statusCode === 500) {
                        alert(err.data.message);
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
}

export default PostCreate;