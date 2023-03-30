import React from 'react';
import "../Main Content/Discription.css";

function Discription() {
    const sharePostBtn=(e)=>{
        console.log(e)
    }
  return (
    <div className='post_div'>
    <div>
    <h2>New Post</h2><hr/><button onClick={sharePostBtn}>Share</button></div>
    <textarea placeholder="Write a caption"></textarea>
    <ul>
      <li>Tag People</li>
      <li>Add location</li>
      <li>Add music</li>
        
    </ul>
    </div>
  )
}

export default Discription