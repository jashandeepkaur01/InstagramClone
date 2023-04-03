import React from "react";
import { useSelector } from "react-redux";
import { baseURL } from "Shared/Constants";
import "./Post.css";

import love from '../../Images/images/love.svg';
import comment from '../../Images/images/message.svg';
import share from '../../Images/images/share.svg';
import { Avatar } from "@mui/material";
import ReportIcon from "../../Images/images/option.png";

function Post() {
  const data = useSelector((state) => state?.HomeReducer?.feedData[3]);
  const ImagesData = data ? Object.values(data) : [];
  return (
    <div id="container_main_div" className="container">
      {ImagesData?.map((item, idx) => {
        return (

          

          <div key={idx} className="main_content">

          <div className='post_header'>
            <Avatar className='post_img' src=''/>
            <div className='post_username'>Username</div>
            <div className="reportIcon"><img src={ReportIcon} /></div>
        </div>
            <div className="main_div">
              <img src={baseURL + item.Image}/>
            </div>
            <div className="discription">
              <p>{item.Description}</p>
            </div>


            
         <div style={{"marginLeft":"10px"}}>
                <img src={love} className='post_reactImg'/>
                <img src={comment} className='post_reactImg'/>
                <img src={share} className='post_reactImg'/>
            </div>
            <div style={{"fontWeight":"bold","marginLeft":"20px"}}>
                7799 likes
            </div>

            <div>
            <div className="post_comment">Hello comment 1</div>
            <div className="post_comment">Hello comment 2</div>
            <div className="post_comment">Hello comment 3</div>
            <div className="post_comment">Hello comment 4</div>
            <div className="post_comment">Hello comment 5</div>
            <input type="text" className='post_commentBox' placeholder='Add a comment...' />
        </div>
        </div>
        );
      })}
    </div>
  );
}

export default Post;
