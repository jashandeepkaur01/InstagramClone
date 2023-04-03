import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { API } from 'Shared/Constants';
import { axiosInstance } from 'Shared/Request';
import './SignUp.css';

function SignUp() {


  const history = useHistory();

  // ..........state initialization..................

  const [signUpData,setSignUpData] = useState({
    email:'',
    fullName:'',
    userName:'',
    password:'',
  })

  // ............... store form input field data in the state.................

  const handleChange =(formData) =>{
    if(formData.target.name === "email")
    {
      setSignUpData({
        ...signUpData,
        email:formData.target.value
      })
    }
    if(formData.target.name === "fullName")
    {
      setSignUpData({
        ...signUpData,
        fullName:formData.target.value
      })
    }
    if(formData.target.name === "userName")
    {
      setSignUpData({
        ...signUpData,
        userName:formData.target.value
      })
    }
    if(formData.target.name === "password")
    {
      setSignUpData({
        ...signUpData,
        password:formData.target.value
      })
    }
   
  }
 
  // ..............json format to formData Object format.................
  const formData = new FormData();
  formData.append("email",signUpData.email)
  formData.append("fullname",signUpData.fullName)
  formData.append("username",signUpData.userName)
  formData.append("password",signUpData.password)

  // ..............store data to the database......................

  const postUserData =(e) =>{
    console.log(signUpData)
    e.preventDefault();
   
    if(signUpData.email!==''&& signUpData.fullName!==''&& signUpData.userName!=='' && signUpData.password!==''){
      axiosInstance.post(API.SIGNUP,formData).then(()=>{
        
      })
      .catch((err)=>{
        console.log(err)
      })
     
      history.push("/Details",{params:signUpData.email})
    }
    else{
      console.log("fiels are required");
    }
  }

    return (
        <div>
            <input className='loginPage_text' placeholder="Phone number or email" type="text" onChange={handleChange}></input>
            <input className='loginPage_text' placeholder="Full name" type="text" onChange={handleChange}></input>
            <input className='loginPage_text' placeholder="Username" type="text" onChange={handleChange}></input>
            <input className='loginPage_text' placeholder="Password" type="password" onChange={handleChange}></input>
            <button className='login_Btn' onClick={postUserData}>Sign up</button>


        </div>
    )
}

export default SignUp