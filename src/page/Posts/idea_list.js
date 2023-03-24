import axios from "axios"
import { useEffect, useState } from "react"
import { setCookie, getCookie, removeCookie } from '../../util/Cookie';
import { useNavigate } from "react-router";

import { Card } from 'react-bootstrap'

import './idea_list.css'


function Idealist() {
  const [idea, setIdea] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      setIsLogin(true);
      axios
        .get(`${process.env.REACT_APP_API_KEY}/idea/list`, {
          headers: {
            Authorization: token,
          },
        })
        .then((result) => {
          const statusCode = result.status;
          if (statusCode === 201) {
            const ideas = result.data.data;
            setIdea(ideas);
          }
        })
        .catch((err) => {
          const statusCode = err.status;
          if (statusCode === 400) {
            alert("로그인이 필요합니다.");
            navigate('/login');
          }
        });
    } else {
      alert("로그인이 필요합니다.");
      navigate('/login');
    }
  }, []);
  if (isLogin) {    
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <h2>아이디어 목록</h2>
            </div>
                {idea.map((item,i) => (
                  <div className="col-4 idea-wrap">
                    <Card style={{ width: '18rem' ,height: '18rem'}}>
                      <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                          생성일:{item.first_date}<br/>
                          수정일:{item.update_date}
                        </Card.Text>
                        <Card.Link onClick={() => {
                          navigate(`/idea_list/${item._id}`, { state: { id: item._id  } })
                        }}>아이디어 보러가기</Card.Link>
                        <Card.Link href="#">{item.creator}</Card.Link>
                      </Card.Body>
                    </Card>
                  </div>
                ))}
          </div>
        </div>
      </>
    );
  }
}

export default Idealist 