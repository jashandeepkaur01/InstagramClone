import React, { useEffect, useState } from 'react';
import "../Views/CreatePost.css";
import { ChangeEvent } from 'react';


function CreatePost() {
  const [selectedImage,setSelectedImage] = useState(null);
  const [imageUrl,setImageUrl] = useState(null);

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
 
  return (
    <div id="container" className='container w-50'>
      <h2>Create new Post</h2>
      <input type="file" id="select-image" onChange={handleFileChange}/>
      <label>{imageUrl && selectedImage && (
        <div  textAlign = "center">
          
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
        </div>
      )}</label>
    </div>
  )
}

export default CreatePost