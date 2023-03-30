import React from 'react'
import './Details.css';
import birthdayIcon from '../Assests/Images/images.png';
import arrow from '../Assests/Images/downArrow.png';
import { useHistory, useLocation } from 'react-router-dom';
function Details() {

  const location = useLocation();
  const myparam = location.state.params;
  console.log("parameters.............",myparam)
    const history = useHistory();
    const handleDetailClick=(e)=>{  
        history.push("/verify",{params:myparam});
    }

    const handlePreviousClick=(e)=>{
      history.push("/signup",{params:myparam})
    }
  return (
    <div>
    <div id="container" className='container  border border-secondary'>
    <img src={birthdayIcon} alt="birthday icon" />
    <h4>Add Your Birthday</h4>
    <p>This won't be a part of your public profile.<br/>
    <button type="button" class="btn btn-link">Why do I need to provide my birthday?</button></p>
    <div className='d-flex justify-content-center '>
        <div className='bdy_div border border-secondary'><img src={arrow} alt="down arrow" /></div>
        <div className='bdy_div border border-secondary'><img src={arrow} alt="down arrow" /></div>
        <div className='bdy_div border border-secondary'><img src={arrow} alt="down arrow" /></div>
    </div>
    <p>You need to enter the date you were born</p>
    <br/>
    <p>Use your own birthday, even if this account is for a<br/> business,  a pet, or something else</p><br/>
   
    <button type="button" id="nextBtn" class="btn btn-info" onClick={handleDetailClick}>Next</button>
    <br/>
    <button type="button" onClick={handlePreviousClick} class="btn btn-link">Go Back</button>
</div>
    {/* <div id="div_block" className="container  border border-secondary ">
        <p>Have an account?<button type="button" class="btn btn-link">Log in</button></p>
      </div> */}
    </div>

    
  )
}

export default Details