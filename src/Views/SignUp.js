import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import "./SignUp.css";
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
      console.log(history,"history");
      history.push("/Details",{params:signUpData.email})
    }
    else{
      console.log("fiels are required");
    }
  }


  
  return (
    <div className="container">
      <div className=" border border-secondary w-50">
        <h1>
          <i>Instagram</i>
        </h1>
        <p>Sign up to see photos and videos from your friends.</p>
        <button id="logInBtn" className="btn btn-info btn-block">Log in with facebook</button>

        {/* ....................signUp Form..................... */}
        <form>
          <br />
          <input className="form-control" type="email" name="email" value={signUpData.email} placeholder="Email" onChange={handleChange}/>
          <br />
          <input className="form-control" type="text" name="fullName" value={signUpData.fullName} placeholder="Full Name" onChange={handleChange} />
          <br />
          <input className="form-control" type="text" name="userName" value={signUpData.userName} placeholder="Username" onChange={handleChange}/>
          <br />
          <input className="form-control" type="password" name="password" value={signUpData.password} placeholder="Password" onChange={handleChange}/>
          <br />
        
        <p>People who use our service may have uploaded your contact information to Istagram</p><br/>
        <p>By signing up,you agree to our Terms,Privacy Policy and Cookies Policy.</p>
        <br/>
       <button id="logInBtn"  onClick={postUserData} className="btn btn-info btn-block" >Sign up</button>
        <br/>
        </form>
      </div>
      <br/>
      <div class=" border border-secondary w-50">
        <p>Have an account?Log in</p>
      </div>
    </div>
  );
}

export default SignUp;
