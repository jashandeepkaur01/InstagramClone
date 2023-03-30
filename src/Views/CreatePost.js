import React, { useEffect, useState } from 'react';
import "../Views/CreatePost.css";
import { ChangeEvent } from 'react';
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
    history.push("/discription")
  }
 
  return (
    <div id="container" className='container w-50'>
      <h2>Create new Post</h2><hr/>
      <input type="file" id="select-image" onChange={handleFileChange}/>
      <label>{imageUrl && selectedImage && (
        <div  textAlign = "center">
          <img src={imageUrl} alt={selectedImage.name} height="100px" />
          <button onClick={handleNextClick}>Next</button>
        </div>
      )}</label><br/>
      
    </div>
  )
}

export default CreatePost