import React, { useEffect, useState } from 'react'
import "./StatusBar.css";
import { Avatar } from '@mui/material';
import statusImg from "../../Images/images/pp1.png";
import { convertLength } from '@mui/material/styles/cssUtils';
function StatusBar() {
    const [statusList,setStatusList] = useState([]);
  
 
    
    const getData=()=>{
        let data=[{
           "username":"jashanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"jashagjghjnhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"dxgfdfshanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"gchghjanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"jashagjghjnhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"dxgfdfshanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"gchghjanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"jashagjghjnhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"dxgfdfshanhans",
           "image":"../../Images/images/pp1.png"
        },
        {
            "username":"gchghjanhans",
           "image":"../../Images/images/pp1.png"
        }
    ]
    setStatusList(data)
    }

    useEffect(()=>{
        getData();
       
    },[])


  return (
    <div>
        <div className='statusBar_container'>
        {console.log(statusList,"fhgh")}
        {statusList.map((item,idx)=>{
            
           return( <div className='status'>
            
                <Avatar className="statusBar_status" src={item.image} />
                <div className='statusBar_text'>{item.username}</div>
            </div>)
        })}
       
        
        </div>
    </div>
  )
}

export default StatusBar