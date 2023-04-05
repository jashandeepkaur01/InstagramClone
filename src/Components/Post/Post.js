import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "Shared/Constants";
import "./Post.css";
import love from "../../Images/images/love.svg";
import comment from "../../Images/images/message.svg";
import share from "../../Images/images/share.svg";
import { Avatar } from "@mui/material";
import ReportIcon from "../../Images/images/option.png";
import { Modal } from "react-bootstrap";
import { like, reportData } from "Redux/Actions/feedPageActions";
import { useHistory } from "react-router-dom";

function Post() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };
  const [likes,setlikes]=useState(0);
  const ImagesData = useSelector((state) => state?.HomeReducer?.feedData);
  console.log("imagesData.........", ImagesData);
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCommentBox, setCommentBox] = useState(false);

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleReportIcon = (e) => {
    console.log("event", e);
    handleShow();
  };
  const openCommentBox = () => {
    setCommentBox(true);
  };

  const closeCommentBox = () => {
    setCommentBox(false);
  };

  const handleReportAction = (data, id) => {
    console.log("data", data.id);
    console.log("id", id);
    const form = new FormData();
    form.append("type", 1);
    form.append("id", data.id);
    form.append("reason_id", id);
    handleClose();
    handleShowModal();
    dispatch(
      reportData({
        payload: form,
        success: (response) => {
          history.push("/home");
        },
        fail: (err) => {
          setErrMsg(err.message);
          handleOpenErrPopUp();
        },
      })
    );
  };

  const handleLikeClick = (id) => {
    const form = new FormData();
    form.append("post_id",id)
    dispatch(like({
      payload: form,
      success:(response)=>{
        setlikes();
      },
      fail:(err)=>{
        setErrMsg(err.message);
        handleOpenErrPopUp();
        
      }
    }))
  };

  const handleComment = () => {
    openCommentBox();
  };
  return (
    <div id="container_main_div" className="container">
      {ImagesData?.map((item, idx) => {
        return (
          <div key={idx} className="main_content">
            <div className="post_header">
              <Avatar className="post_img" src="" />
              <div className="post_username">Username</div>
              <div className="reportIcon">
                <img onClick={handleReportIcon} src={ReportIcon} />
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <h2>Report</h2>
                </Modal.Header>
                <Modal.Body>
                  <div>Why are you report this post?</div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 1)}>
                    It's spam
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 2)}>
                    Hate speech or symbols
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 3)}>
                    Violence or dangereous organizations
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 4)}>
                    Sale of illegal or regulated organizations
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 5)}>
                    Bullying or harassment
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 6)}>
                    Intellectual property violation
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 7)}>
                    False Infomation
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 8)}>
                    Suicide, self-injury or eating disorders
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 9)}>
                    I just don't like it
                  </div>
                  <hr />
                  <div onClick={() => handleReportAction(item, 10)}>
                    Something else
                  </div>
                  <hr />
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={handleClose}>Close</button>
                </Modal.Footer>
              </Modal>

              <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Body>
                  <h2>Reported!</h2>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={handleCloseModal}>Ok</button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="main_div">
              <img src={baseURL + item.Image} />
            </div>
            <div className="discription">
              <p>{item.Description}</p>
            </div>
            <div style={{ marginLeft: "10px" }}>
              <img
                src={love}
                className="post_reactImg"
                onClick={()=>handleLikeClick(item.id)}
              />
             <div></div>
              <img
                src={comment}
                onClick={handleComment}
                className="post_reactImg"
              />
              <Modal show={showCommentBox} onHide={closeCommentBox}>
                <Modal.Header closeButton>
                  <h2>Comments</h2>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <button onClick={closeCommentBox}>close</button>
                </Modal.Footer>
              </Modal>
              <img src={share} className="post_reactImg" />
            </div>
            <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
              7799 likes
            </div>
            <div>
              <input
                required
                type="text"
                className="post_commentBox"
                placeholder="Add a comment..."
              />
            </div>
            <Modal show={Err} onHide={handleCloseErrPopUp}>
              <Modal.Body>
                <h2>{ErrMsg}</h2>
              </Modal.Body>
              <Modal.Footer>
                <button onClick={handleCloseErrPopUp}>Ok</button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

export default Post;
