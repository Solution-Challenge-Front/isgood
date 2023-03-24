import { useLocation, useNavigate } from 'react-router-dom';
import './posts_detail.css'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from "../../util/Cookie";
import Chat from "../ChatTest/chat.js"

function PostDetail() {
  let navigate = useNavigate()
  const [idea, setIdea] = useState({});
  const location = useLocation();


  //roomname , 닉네임, 스테이터스 코드
  const [roomname, setroom] = useState('1')
  const [nickname, setnick] = useState('최동우')


  const id = location.state.id

  const jwtToken = getCookie("token");
  console.log('token:' +   jwtToken)
  useEffect(() => {
    axios.post(`${process.env.REACT_APP_API_KEY}/idea/openOne`,
      {
        _id:id
      },
      {
        headers: {
          Authorization: getCookie("token"),
        },
      }
        )
      .then((result) => {
        const statusCode = result.status;
        if (statusCode === 201) {
          const ideas = result.data.data;
          setIdea(ideas);
        }
      })
      .catch((err) => {
        const statusCode = err.status;
        if (statusCode === 401) {
          alert("권한이 없습니다.")
          navigate('/idea_list')
        } else if (statusCode === 404) {
          alert("게시물이 존재하지 않습니다.")
        } else if (statusCode === 500) {
          alert("에러발생 목록페이지로 돌아갑니다.")
          navigate('/idea_list')
        }
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <button onClick={()=>{
               <Chat nickname={nickname}/>
               axios.post(`${process.env.REACT_APP_API_KEY}/httpchat/create`,
               {
                 id: id
               },
               {
                headers: {
                  Authorization: getCookie("token"),
                },
              })
              .then((result)=>{
                console.log(result.data)
                setroom(result.data.roomname)
                setnick(result.data.nickname)
                console.log(nickname)
              })         
            }}>1:1채팅</button>
           
            <h2 className="post-detail-title mt-5"
            >
              {idea.title}
            </h2>
            <div className="post-detail-desc mt-3">
              {idea.introduce}
            </div>
            <div className="detail-btns mb-2 mt-3">
              <Button variant="primary" size="lg"
                onClick={() => {
                  navigate('/post_update')
                }}>
                수정하기
              </Button>{' '}
              <Button variant="secondary" size="lg"
                onClick={() => {
                  axios.post(`${process.env.REACT_APP_API_KEY}/idea/delete`,
                    {
                      _id: id
                    },
                    {
                      headers: {
                        Authorization: getCookie("token"),
                      },
                    }
                  )
                    .then((result) => {
                      const statusCode = result.status;
                      if (statusCode === 200) {
                        const ideas = result.data.data;
                        setIdea(ideas);
                        alert("삭제되었습니다.")
                        navigate("/idea_list")
                      }
                    })
                    .catch((err) => {
                      const statusCode = err.state;
                      if (statusCode === 400) {
                        alert("권한이 없습니다.")
                        navigate('/idea_list')
                      } else if (statusCode === 404) {
                        alert("정보가 일치하지 않습니다.")
                      } else if (statusCode === 500) {
                        alert("에러발생, 목록으로 돌아갑니다.")
                        navigate('/idea_list')
                      }
                    })
              }}
              >
                삭제하기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PostDetail;