import React from 'react';
import { useSelector } from 'react-redux';
import "../Main Content/MainContent.css";

function MainContent() {
  const data = useSelector((state)=>state?.HomeReducer?.feedData[3]);
  const ImagesData = data?Object.values(data):[];
  return (
    <div id="container_main_div" className='container'>
    {ImagesData?.map((item,idx)=>{
      return(
        <div key={idx} className='main_content'>
      <div className='main_div'><img src={"https://8d12-122-160-165-213.in.ngrok.io/"+item.Image}/></div>
      <div className='discription'><p>{item.Description}</p></div>
      </div>
    
  )
})}
</div>
  )
}

export default MainContent;