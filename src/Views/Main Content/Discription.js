import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { API } from 'Shared/Constants';
import { axiosInstance } from 'Shared/Request';
import "../Main Content/Discription.css";

function Discription() {
  const history = useHistory();
  const location = useLocation();
  const myparam = location.state.params;
  const [discription,setDiscription] = useState("");

  const handleDiscriptionChange=(data)=>{
    setDiscription(data.target.value);
  }
    const sharePostBtn=(e)=>{
        const form = new FormData();
        form.append("image",myparam);
        form.append("discription",discription);
        axiosInstance.post(API.POST,form).then(()=>{
          console.log("data posted")
        })
        .catch((err)=>{
          console.log(err)
        })
        
    }
  return (
    <div className='post_div'>
    <div>
    <h2>New Post</h2><hr/><button onClick={sharePostBtn}>Share</button></div>
    <textarea placeholder="Write a caption" onChange={handleDiscriptionChange}></textarea>
    <ul>
      <li>Tag People</li>
      <li>Add location</li>
      <li>Add music</li>
        
    </ul>
    </div>
  )
}

export default Discription