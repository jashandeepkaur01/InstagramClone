import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { axiosInstance } from 'Shared/Request';
import "../Main Content/Discription.css";

function Discription() {
  const history = useHistory();
  const dispatch = useDispatch();
    const sharePostBtn=(e)=>{
        console.log(e)
  
    }
  return (
    <div className='post_div'>
    <div>
    <h2>New Post</h2><hr/><button onClick={sharePostBtn}>Share</button></div>
    <textarea placeholder="Write a caption" on></textarea>
    <ul>
      <li>Tag People</li>
      <li>Add location</li>
      <li>Add music</li>
        
    </ul>
    </div>
  )
}

export default Discription