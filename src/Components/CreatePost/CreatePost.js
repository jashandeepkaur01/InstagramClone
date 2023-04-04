import React, { useEffect, useState } from 'react';
import "../CreatePost/CreatePost";
import { useHistory } from 'react-router-dom';


function CreatePost() {
  const [selectedImage,setSelectedImage] = useState(null);
  const [imageUrl,setImageUrl] = useState(null);
  const history = useHistory();

useEffect(()=>{
  if(selectedImage){
    setImageUrl(URL.createObjectURL(selectedImage));
  }
},[selectedImage])

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };



  const handleNextClick=(e)=>{
  }

  
  return (
    <div id="container" className='container w-50'>
      <h2>Create new Post</h2><hr/>
      <div className='selectDiv'>
      <input type="file" id="select-image" onChange={handleFileChange}/>
      <label>{imageUrl && selectedImage && (
        <div  textAlign = "center">
          <img src={imageUrl} alt={selectedImage.name} className="selectedPost"/>
          <button className="nextBtn" onClick={handleNextClick}>Next</button>
        </div>
      )}</label><br/>
      </div>
    </div>
  )
}

export default CreatePost