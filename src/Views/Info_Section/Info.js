import React from 'react'
import './Info.css';
import { Avatar } from '@mui/material';
import imageSrc from '../../Images/images/pp1.png';
function Info() {
  return (
    <div>
        <div className='info_container'>
        <Avatar src={imageSrc} className='info_image' />
        
        </div>
    </div>
  )
}

export default Info