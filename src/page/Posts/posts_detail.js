import { useNavigate } from 'react-router-dom';
import './posts_detail.css'
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function PostDetail() {
  let navigate = useNavigate()
  let [detailTit, setDetailTit] = useState('title');
  let [detailDesc, setDetailDesc] = useState('DESC');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 className="post-detail-title mt-5"
            >
              {detailTit}
            </h2>
            <div className="post-detail-desc mt-3">
              {detailDesc}
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
                  //삭제구현
                  axios.get('url')
                    .then(() => {
                    
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