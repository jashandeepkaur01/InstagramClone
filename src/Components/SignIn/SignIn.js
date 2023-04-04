import React, { useState } from 'react';
import "../LoginPage/LoginPage.css";


import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { LoginData } from "Redux/Actions/feedPageActions";



function SignIn(){
    const dispatch = useDispatch();
    
  
    // ..................useHistory(for navigate on another component...........)
    const history = useHistory();
  
    //  ...................state for storing Login Credentials............
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
  
    // ...............save data in the state while filing input fields of the form................
    const handleChange = (formData) => {
      if (formData.target.name === "email") {
        setLoginData({
          ...loginData,
          email: formData.target.value,
        });
      }
      if (formData.target.name === "password") {
        setLoginData({
          ...loginData,
          password: formData.target.value,
        });
      }
    };
  

  
  
    // ..................API hit and validate login credentials............
    const handleLoginBtn = (e) => {
        debugger;
      const formData = new FormData();
      formData.append("email", loginData.email);
      formData.append("password", loginData.password);
      console.log(formData,'fgfdgfdh')
      if(loginData.email!=="" && loginData.password!==""){
      dispatch(LoginData({
        payload: formData,
        success: (response) => {
          
          history.push("/home")
        },
        fail: (err) => {
            console.log(err,"fdgfdgfg")
        }
      }));
    }
    else{
      <alert>All field are Required</alert>
    }
    }

    return (
        <div>
            <input className='loginPage_text' onChange={handleChange} name="email" placeholder="Phone number, username, or email" type="text"/>
            <input className='loginPage_text' onChange={handleChange} name="password" placeholder="Password" type="password"/>
            <button className='login_Btn' onClick={handleLoginBtn}>Log In</button>

        </div>
    )

    }

export default SignIn;