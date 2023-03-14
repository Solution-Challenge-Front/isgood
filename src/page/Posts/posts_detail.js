import { useLocation, useNavigate } from 'react-router-dom';
import './posts_detail.css'
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { getCookie } from "../../util/Cookie";

function PostDetail() {
  let navigate = useNavigate()
  const [idea, setIdea] = useState({});
  const location = useLocation();

  const id = location.state.id
  
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
          alert("토큰이 유효하지 않음")
        } else if (statusCode === 404) {
          alert("게시물이 존재하지 않습니다.")
        } else if (statusCode === 500) {
          alert("서버 에러입니다.")
        }
      });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
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
                        alert("토큰 오류")
                      } else if (statusCode === 404) {
                        alert("정보가 일치하지 않습니다.")
                      } else if (statusCode === 500) {
                        alert("서버 에러")
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