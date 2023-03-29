import axios from 'axios';
import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

function ChangePassword() {
    const url = "https://ead9-122-160-165-213.in.ngrok.io/confirm/";
    const history = useHistory();
    const [password,setPassword] = useState({
        newPassword:'',
        confirmPassword:'',
    })

    const {id1,id2} = useParams();
    console.log(id1,"  ",id2);

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
   
    const formdata = new FormData();
    formdata.append("newPassword",password.newPassword);
    formdata.append("confirmPassword",password.confirmPassword);

    const handleClick=(e)=>{
        axios.post(url,formdata).then((res)=>{
            if(res.data.status){
                console.log(res," ok")
            }
        }).catch((err)=>{
            console.log("error",err)
        });
    }
  return (
    <div className='container w-50'>
    <form>
    <label>Enter New Password</label><br/>
        <input name='newPassword' placeholder='new password' onChange={handleChange}></input><br/><br/>
        <label>Confirm Password</label><br/>
        <input name='newPassword' placeholder='confirm password' onChange={handleChange} ></input><br/><br/>
        <button type="button" onClick={handleClick}>Set Password</button>
    </form>
    </div>
  )
}

export default ChangePassword