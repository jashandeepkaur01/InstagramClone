import { getComment } from "Redux/Actions/feedPageActions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../Views/CommentSection/Comment1";
import Comment1 from "../../Views/CommentSection/Comment1";

export default function CommentSec(data) {
  const [comments, setComments] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getComment({
        payload: data.data.id,
        success: (response) => {
          setComments(response?.data?.comments);
        },
        fail: (err) => {
          console.log(err);
        },
      })
    );
  }, [dispatch, addReply]);

  function addReply(commentId, replyText) {
    let commentsWithNewReply = [...comments];
    // insertComment(commentsWithNewReply, commentId, replyText);
    setComments(commentsWithNewReply);
  }

  // function newComment(text) {
  //   return {
  //     id: new Date().getTime(),
  //     Comment: text,
  //     child: [],
  //     post_id: data.data.id,
  //   };
  // }

  // function insertComment(comments, parentId, text) {
  //   for (let i = 0; i < comments.length; i++) {
  //     let comment = comments[i];
  //     if (comment.id === parentId) {
  //       comment.child.unshift(newComment(text));
  //     }
  //   }

  //   for (let i = 0; i < comments.length; i++) {
  //     let comment = comments[i];
  //     insertComment(comment.child, parentId, text);
  //   }
  // }

  return (
    <>
      <div className="comment-input-box">
        <ul>
          {comments.map((comment) => {
            return (
              <Comment1
                id={comment.id}
                comment={comment}
                addReply={addReply}
                postId={data.data.id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}
