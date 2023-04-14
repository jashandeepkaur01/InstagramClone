import { postComment } from "Redux/Actions/feedPageActions";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "./Comment1.css";
export default function Comment1({ id, comment, addReply, postId }) {
  const [replyText, setReplyText] = useState("");
  const [showReplyBox, setShowReplyBox] = useState(false);
  const inputEl = useRef(null);
  const dispatch = useDispatch();
  const [comments, setComments] = useState([]);

  return (
    <li className="commentList" key={id}>
      {comment.Comment}
      {!showReplyBox && (
        <button
          type="button"
          className="btn btn-link"
          onClick={() => {
            setShowReplyBox(true);
            setTimeout(() => inputEl.current.focus());
          }}
        >
          reply
        </button>
      )}
      {showReplyBox && (
        <>
          <br />
          <textarea
            ref={inputEl}
            onChange={(e) => {
              setReplyText(e.target.value);
            }}
            type="text"
          />
          <br />
          <button
            type="button"
            onClick={() => {
              const formData = new FormData();
              formData.append("parent_id", id);
              formData.append("post_id", postId);
              formData.append("comment", replyText);

              dispatch(
                postComment({
                  payload: formData,
                  success: (res) => {
                    addReply(id, replyText);
                    setShowReplyBox(false);
                    setReplyText("");
                  },
                  fail: (err) => {
                    console.log("error", err);
                  },
                })
              );
            }}
          >
            save
          </button>
          <button
            type="button"
            onClick={() => {
              setShowReplyBox(false);
              setReplyText("");
            }}
          >
            cancel
          </button>
        </>
      )}
      {comment?.child?.length > 0 && (
        <ul>
          {comment.child.map((childComment) => {
            return (
              <Comment1
                id={childComment.id}
                comment={childComment}
                addReply={addReply}
                postId={childComment.post_id}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
