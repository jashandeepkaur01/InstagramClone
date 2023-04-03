import React from 'react'
import "./NavBar.css";
import { Grid } from '@mui/material';
import insta_logo from "../../Images/images/logoinsta.png";
import home from "../../Images/images/home.svg";
import message from "../../Images/images/message.svg";
import find from "../../Images/images/find.svg";
import react from "../../Images/images/love.svg";
import Avatar from '@mui/material/Avatar';
import personImg from "../../Images/images/pp1.png";
import { useDispatch } from 'react-redux';
import { logOut } from 'Redux/Actions/feedPageActions';
import { useHistory } from 'react-router-dom';
function NavBar() {
    const dispatch = useDispatch();
    const history = useHistory();
   const handleLogoutAction=()=>{dispatch(logOut({
    
        success: (response) => {
            debugger;
            localStorage.clear();
            history.push("/login")
          },
          fail: (err) => {
              console.log(err,"logout error.....")
          }
    }))}
  return (
    <div>
        <div className='NavBar_Content'>
        <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
                <img className="navBar_logo" src={insta_logo} width="135px"/>
            </Grid>
            <Grid item xs={3}>
                <input type='text' className="navBar_search" placeholder='Search'></input>
            </Grid>
            <Grid item xs={3} style={{"display":"flex"}}>
                <img className="NavBar_img" src={home} width="25px"/>
                <img className="NavBar_img" src={message} width="25px"/>
                <img className="NavBar_img" src={find} width="25px"/>
                <img className="NavBar_img" src={react} width="25px"/>
                <Avatar className="NavBar_img" src={personImg} style={{"maxWidth":"25px","maxHeight":"25px"}}/>
            </Grid>
            <Grid item xs={1}>
                <div><button className='logoutBtn' onClick={handleLogoutAction}>Logout</button></div>
            </Grid>
        </Grid>
        </div>
    </div>
  )
}

export default NavBar