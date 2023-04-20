import { Avatar } from "@mui/material";
import usePagination from "Hooks/PaginationHook";
import { reels } from "Redux/Actions/feedPageActions";
import { baseURL } from "Shared/Constants";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "../../Post/Post.css";

function Reels() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [comment, setComment] = useState("");
  const [postData, setPostData] = useState([]);
  const [commentErrStatus, setCommentErrStatus] = useState(false);
  const [commentErr, setCommentErr] = useState("");
  const ReelsData = useSelector((state) => state?.HomeReducer?.reelData);
  const TotalReels = useSelector((state) => state?.HomeReducer?.totalReels);
  const [page] = usePagination(TotalReels);
  useEffect(() => {
    setTimeout(() => {
      if (Math.ceil(TotalReels / 5) !== page) {
        dispatch(reels(page));
      }
    }, 1000);
  }, [dispatch, page]);

  return (
    <>
      <div id="container_main_div" className="container">
        {ReelsData?.map((item, idx) => {
          return (
            <div key={idx} className="main_content">
              <div className="post_header">
                <Avatar className="post_img" src="" />
                <div className="post_username">{item.username}</div>
              </div>
              <div className="main_div">
                <video
                  style={{ width: "100%" }}
                  src={baseURL + item.Video}
                  alt="reel"
                  type="video/mp4"
                  controls
                  autoPlay
                  muted
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Reels;
