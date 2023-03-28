import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import FacebookLogo from "../Assests/Images/facebook.png";
import InstagramLogo from "../Assests/Images/instagram-logo_1199-122.avif";
import "./LogIn.css"

function LogIn() {
  
  // ....................API Link...................................
  const url = "https://3dc0-122-160-165-213.in.ngrok.io/login/"

  // ..................useHistory(for navigate on another component...........)
 const history = useHistory();

//  ...................state for storing Login Credentials............
  const [loginData,setLoginData] = useState({
    email:'',
    password:'',
  })

// ...............save data in the state while filing input fields of the form................
  const handleChange=(formData)=>{
    if(formData.target.name === 'email'){
      setLoginData({
        ...loginData,
        email:formData.target.value
      })
    }
    if(formData.target.name === 'password'){
      setLoginData({
        ...loginData,
        password:formData.target.value
      })
    }
  }
  

  // ..................convert Json data in the formData format........................
  const formData = new FormData();
  formData.append("email",loginData.email);
  formData.append("password",loginData.password);

// ..................
  const handleLoginBtn=async(e)=>{
    e.preventDefault();
    console.log(loginData)
    if(loginData.email!==''&&loginData.password!=='')
    {
      await axios.post(url,formData).then((res)=>{
        console.log(res)
        if(res.data.Token){
        history.push("/home");
        }else{
          console.log("Invalid username")
        }

      }).catch((err)=>{
        console.log("error.......",err);
      })
    }else{
      console.log("fields are required")
    }


  }

  
  const handleSignUpLink=(e)=>{
    history.push("/signup")
  }
  
  return (
    <div>
    <div className="container">
      <div className="row">
        <div className="instaLogo_img col-sm"> <img src={InstagramLogo} alt="instagram Logo" /></div>
        <div className="col-sm border border-secondary p-1" id="col2">
          <h1>
            <i>Instagram</i>
          </h1>
          <br />
          <form>
            <input
              className="form-control"
              type="text"
              name="email"
              onChange={handleChange}
              value={loginData.email}
              placeholder="Phone number,Username, or Email"
            />
            <br />
            <input
              className="form-control"
              type="text"
              name="password"
              onChange={handleChange}
              value={loginData.password}
              placeholder="password"
            />
            <br />
            <button type="button" id="logInBtn" onClick={handleLoginBtn} className="btn btn-info btn-block">
              Log in
            </button>
            <br />
          </form>
          
          <div id="signInBlock" className="d-flex justify-content-center">
            <img className="facebook_img" src={FacebookLogo} alt="facebook Logo" />
            <b>
              <p className="text-primary">Log in with facebook</p>
            </b>
          </div>
          <p className="text-primary">Forgot password?</p>
          <hr />

         
        </div>
        <div className="row2" id="signUp">
            <p>Don't have an account?<button type="button" class="btn btn-link" onClick={handleSignUpLink}>Sign up</button></p>
            
          </div>
      </div>
      
    </div>
    
    </div>
  );
}

export default LogIn;

