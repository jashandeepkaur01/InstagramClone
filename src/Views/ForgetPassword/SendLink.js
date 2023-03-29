import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function SendLink() {
    const history = useHistory();
    const url = "https://ead9-122-160-165-213.in.ngrok.io/forgotpassword/"
    const [email,setEmail] = useState("");
    const handleChange=(e)=>{
        setEmail(e.target.value);
    }
    const form = new FormData();
    form.append("email",email)

    const handleSubmit=(e)=>{
        if(email!=''){
            axios.post(url,form).then((res)=>{
                if(res.data.status){
                    history.push("/message")
                }
            });
        }

    }
  return (
    <div className='container border border-secondary w-50'>
        <input
                className="form-control"
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="email"
              />
              <br/>
              
              <button
                type="button"
                value={email}
                onClick={handleSubmit}
                className="btn btn-info btn-block"
              >
                Send login link
              </button>
    </div>
  )
}

export default SendLink