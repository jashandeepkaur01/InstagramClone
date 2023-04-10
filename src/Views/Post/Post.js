import { Avatar } from "@mui/material";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  getComment,
  like,
  postComment,
  reportData,
} from "Redux/Actions/feedPageActions";
import { baseURL, reportReasons } from "Shared/Constants";
import likes from "../../Images/images/likes.png";
import love from "../../Images/images/love.svg";
import Comment from "../../Images/images/message.svg";
import ReportIcon from "../../Images/images/option.png";
import share from "../../Images/images/share.svg";
import "./Post.css";

function Post() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [comment, setComment] = useState("");
  const [commentArr, setCommmentArr] = useState([]);
  const [commentErrStatus, setCommentErrStatus] = useState(false);
  const [commentErr, setCommentErr] = useState("");

  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };
  const ImagesData = useSelector((state) => state?.HomeReducer?.feedData);
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
    handleShow();
  };
  const openCommentBox = () => {
    setCommentBox(true);
  };

  const closeCommentBox = () => {
    setCommentBox(false);
  };

  const handleReportAction = (data, id) => {
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
          setErrMsg(err.response.data.message);
          handleOpenErrPopUp();
        },
      })
    );
  };

  const handleLikeClick = (item) => {
    const form = new FormData();
    item.is_liked ? (item.is_liked = false) : (item.is_liked = true);
    form.append("post_id", item.id);
    form.append("like_id", 1);
    dispatch(
      like({
        payload: form,
        success: (response) => {},
        fail: (err) => {
          setErrMsg(err.response.data.message);
          handleOpenErrPopUp();
        },
      })
    );
  };

  const handleCommentInput = (data) => {
    setComment(data.target.value);
  };

  const handleCommentSection = (id) => {
    const formdata = new FormData();
    formdata.append("parent_id", 0);
    formdata.append("post_id", id);
    formdata.append("comment", comment);
    if (comment === "") {
      setCommentErrStatus(true);
      setCommentErr("Comment required");
      return;
    }
    dispatch(
      postComment({
        payload: formdata,
        success: (response) => {
          setComment("");
        },
        fail: (err) => {
          setErrMsg(err.response.data.message);
          handleOpenErrPopUp();
        },
      })
    );
  };
  const handleComment = (item) => {
    openCommentBox();

    dispatch(
      getComment({
        payload: item.id,
        success: (response) => {
          setCommmentArr(response?.data?.comments);
        },
        fail: (err) => {
          setErrMsg(err.response.data.mesage);
          handleOpenErrPopUp();
        },
      })
    );
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
                <img onClick={handleReportIcon} src={ReportIcon} alt="report" />
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <h2>Report</h2>
                </Modal.Header>
                <Modal.Body>
                  <div>
                    <b>Why are you report this post?</b>
                  </div>
                  <hr />
                  {reportReasons.map((data, idx) => {
                    return (
                      <>
                        <div
                          key={idx}
                          onClick={() => handleReportAction(item, idx + 1)}
                        >
                          {data}
                        </div>
                        <hr />
                      </>
                    );
                  })}
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
              <img src={baseURL + item.Image} alt="post" />
            </div>
            <div className="discription">
              <p>{item.Description}</p>
            </div>
            <div style={{ marginLeft: "10px" }}>
              {item.is_liked ? (
                <img
                  src={likes}
                  className="post_reactImg"
                  onClick={() => handleLikeClick(item)}
                  alt="likes"
                />
              ) : (
                <img
                  src={love}
                  className="post_reactImg"
                  onClick={() => handleLikeClick(item)}
                  alt="like"
                />
              )}
              <img
                src={Comment}
                onClick={() => handleComment(item)}
                alt="comment"
                className="post_reactImg"
              />
              <Modal show={showCommentBox} onHide={closeCommentBox}>
                <Modal.Header closeButton>
                  <h2>Comments</h2>
                </Modal.Header>
                <Modal.Body>
                  {commentArr.map((val) => {
                    return <div key={val.id}>{val.Comment}</div>;
                  })}
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={closeCommentBox}>close</button>
                </Modal.Footer>
              </Modal>
              <img src={share} className="post_reactImg" alt="share" />
            </div>
            <div style={{ fontWeight: "bold", marginLeft: "20px" }}>
              {item.LikeCount}
            </div>
            <div>
              <input
                required
                type="text"
                className="post_commentBox"
                placeholder="Add a comment..."
                onChange={handleCommentInput}
                value={comment}
              />
              <button
                className="commentBtn"
                onClick={() => handleCommentSection(item.id)}
              >
                Send
              </button>
              <span className="text-danger">
                {commentErrStatus ? commentErr : ""}
              </span>
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
