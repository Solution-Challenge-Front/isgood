import axios from "axios";
import "./post_create.css";
import { Form, Button } from 'react-bootstrap';
import { useState } from "react";

function PostCreate() {
  let [title, setTitle] = useState('');
  let [desc, setDesc] = useState('');

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
                <Form.Label>아이디어 내용</Form.Label>
                <Form.Control
                  as="textarea" rows={10}
                  onChange={(e)=>{setDesc(e.target.value)}}
                />
              </Form.Group>
              <Button
                as="input" type="submit" value="Submit"
                onClick={() => {
                  axios.post('', {
                    title: title,
                    desc: desc
                  })
                    .then(() => {
                      
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