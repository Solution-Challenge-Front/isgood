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
  const [isLogin, setIsLogin] = useState(false);


  //roomname , 닉네임, 스테이터스 코드
  const [roomname, setroom] = useState('1')
  const [nickname, setnick] = useState('최동우')


  const id = location.state.id

  useEffect(() => {
    const token = getCookie('token');

    if (token) {
      setIsLogin(true);
      axios.post(`${process.env.REACT_APP_API_KEY}/idea/openOne`,
        {
          _id: id
        },
        {
          headers: {
            Authorization: token,
          },
        }
      )
        .then((result) => {
          const statusCode = result.status;
          if (statusCode === 201) {
            const ideas = result.data.data;
            setIdea(ideas);
            console.log(ideas)
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
        })
    } else {
      alert("권한이 필요합니다.");
      navigate('/');
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='post-detail-title mt-5'>
              <h3>
                {idea.title}
              </h3>
              <div className='post_flex_wrap'>
                <strong className='post_creator'>
                  {idea.creator}
                </strong>
                <span className='post_first_date'>
                  {idea.first_date}
                </span>
              </div>
            </div>
            <div className="post-detail-desc mt-3">
              {idea.introduce}
            </div>
            <div className="detail-btns mb-2 mt-3">
              <span className='update_date'>수정일 {idea.update_date}</span>
              <Button variant="primary chat-btn" size="lg" onClick={() => {
                <Chat nickname={nickname} />
                axios.post(`${process.env.REACT_APP_API_KEY}/httpchat/create`,
                  {
                    id: id
                  },
                  {
                    headers: {
                      Authorization: getCookie("token"),
                    },
                  })
                  .then((result) => {
                    console.log(result.data)
                    setroom(result.data.roomname)
                    setnick(result.data.nickname)
                    console.log(nickname)
                  })
              }}>1:1채팅</Button>
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