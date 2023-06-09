import { Avatar } from "@mui/material";
import usePagination from "Hooks/PaginationHook";
import {
  getData,
  like,
  postComment,
  reportData,
} from "Redux/Actions/feedPageActions";
import { baseURL, reportReasons } from "Shared/Constants";
import { isValidFileUploaded, reactFunction } from "Shared/Utilities";
import CommentSec from "Views/CommentSection/CommentSec";
import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import likes from "../../Images/images/likes.png";
import love from "../../Images/images/love.svg";
import Comment from "../../Images/images/message.svg";
import ReportIcon from "../../Images/images/option.png";
import "./Post.css";

function Post() {
  const TotalPost = useSelector((state) => state?.HomeReducer?.totalPost);
  const dispatch = useDispatch();
  const [page] = usePagination(TotalPost);
  const ImagesData = useSelector((state) => state?.HomeReducer?.feedData);
  const [counterReaction, setCounterReactions] = useState([]);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    setListData(ImagesData);
  }, [ImagesData]);

  const handleSelect = (key, listData) => {
    const form = new FormData();
    form.append("post_id", listData.id);
    form.append("like_id", key);

    dispatch(
      like({
        payload: form,
        success: (res) => {
          setReactIcon(false);

          const reactionArr = reactFunction(listData.reactions);
          console.log("reactArr", reactionArr);

          setCounterReactions(reactionArr);
        },
        fail: (err) => {
          setErrMsg(err.response.data.message);
          handleOpenErrPopUp();
        },
      })
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (Math.ceil(TotalPost / 5) !== page) {
        dispatch(getData(page));
      }
    }, 1000);
  }, [dispatch, page]);

  const history = useHistory();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState([]);
  const [commentErrStatus, setCommentErrStatus] = useState(false);
  const [commentErr, setCommentErr] = useState("");
  const [key, setKey] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showCommentBox, setCommentBox] = useState(false);
  const [showReactIcon, setReactIcon] = useState(false);
  const [data, setData] = useState([]);
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

  const handleReportIcon = (data) => {
    setPostData(data);
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
        success: () => {
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
    item.is_liked = !item.is_liked;
    form.append("post_id", item.id);
    form.append("like_id", 1);
    dispatch(
      like({
        payload: form,
        success: () => {},
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
        success: () => {
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
    openCommentBox(item);
    setData(item);
  };

  // const handleReactionClick = (item) => {
  //   setKey(item.id);
  //   if (item.id) {
  //     setReactIcon(true);
  //   } else {
  //     setReactIcon(false);
  //   }
  // };

  const checkextension = (image) => {
    if (isValidFileUploaded(image)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div id="container_main_div" className="container">
        {listData?.map((item, idx) => {
          return (
            <div key={idx} className="main_content">
              <div className="post_header">
                <Avatar className="post_img" src="" />
                <div className="post_username">{item.username}</div>
                <div className="reportIcon">
                  <img
                    onClick={() => handleReportIcon(item)}
                    src={ReportIcon}
                    alt="report"
                  />
                </div>
              </div>
              <div className="main_div">
                {checkextension(item.Image) ? (
                  <img src={baseURL + item.Image} alt="post" />
                ) : (
                  <video
                    style={{ width: "100%" }}
                    src={baseURL + item.Image}
                    alt="reel"
                    type="video/mp4"
                    controls
                    autoPlay
                    muted
                  />
                )}
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

                {/* {key === item.id && showReactIcon ? (
                  <ReactionBarSelector
                    reactions={Reactions}
                    onSelect={(key) => handleSelect(key, item)}
                  />
                ) : (
                  ""
                )}
                {key === item.id ? (
                  <ReactionCounter reactions={counterReaction} />
                ) : (
                  ""
                )}
                <div
                  className="post_reactImg"
                  onClick={() => handleReactionClick(item)}
                >
                  😊
                </div>
                {item.total_reaction_count} */}
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
            </div>
          );
        })}
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
                  className="reportDiv"
                  key={idx}
                  onClick={() => handleReportAction(postData, idx + 1)}
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

      <Modal show={Err} onHide={handleCloseErrPopUp}>
        <Modal.Body>
          <h2>{ErrMsg}</h2>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseErrPopUp}>Ok</button>
        </Modal.Footer>
      </Modal>

      <Modal show={showCommentBox} onHide={closeCommentBox}>
        <Modal.Header closeButton>
          <h2>Comments</h2>
        </Modal.Header>
        <Modal.Body>
          <CommentSec data={data} />
        </Modal.Body>
        <Modal.Footer>
          <button onClick={closeCommentBox}>close</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post;
