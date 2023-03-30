import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import "../ForgetPassword/Changepassword.css";

function ChangePassword() {
    const url = "https://58c2-122-160-165-213.in.ngrok.io/confirm/";
    const history = useHistory();
    const [password,setPassword] = useState({
        newPassword:'',
        confirmPassword:'',
    })

    const { token,uid } = useParams();
    console.log(token,"  ",uid);

    const handleChange=(e)=>{
        if(e.target.name === 'newPassword')
        {
            setPassword({
                ...password,
                newPassword:e.target.value,
            })
        }
        if(e.target.name === 'confirmPassword')
        {
            setPassword({
                ...password,
                confirmPassword:e.target.value,
            })
        }
    }
   
   
    

    const handleClick=(e)=>{
        const formdata = new FormData();
        formdata.append("token",token);
        formdata.append("uid",uid);
        formdata.append("password",password.newPassword);
        console.log("confirmPass",password.confirmPassword)
        console.log(password.newPassword)
        formdata.append("confirmpassword",password.confirmPassword);
        axios.post(url,formdata).then((res)=>{
            if(res.data.status){
                console.log(res," ok")
                history.push("/login")
            }
        }).catch((err)=>{
            console.log("error",err)
        });
    }
  return (
    <div id="container_div" className='container '>
    <form>
    <label>Enter New Password</label><br/>
        <input name='newPassword' placeholder='new password' onChange={handleChange}></input><br/><br/>
        <label>Confirm Password</label><br/>
        <input name='confirmPassword' placeholder='confirm password' onChange={handleChange} ></input><br/><br/>
        <button type="button" onClick={handleClick}>Set Password</button>
    </form>
    </div>
  )
}

export default ChangePassword