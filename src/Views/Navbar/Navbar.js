import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../Navbar/Navbar.css";
// import CustomModal from "Components/Atoms/CustomModal/CustomModal";

function Navbar() {
    const history = useHistory();

   
    const handleCreatePostBtn = (e)=>{
        e.preventDefault();
        history.push("/createPost")
    }
 
  return (
    <div className="nav_bar">
      <h1 className="header">
        <i>Instagram</i>
      </h1>
      <ul className="listing">
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
            Home
          </button>
        </li>
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
            Search
          </button>
        </li>
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
            Explore
          </button>
        </li>
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
            Reels
          </button>
        </li>
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
            Messages
          </button>
        </li>
        <li className="l1">
          <button
            type="button"
            class="btn btn-link"
           
          >
            Notifications
          </button>
        </li>
        <li className="l1">
          <button
            type="button"
            class="btn btn-link"
           onClick={handleCreatePostBtn}
          >
            Create
          </button>
         
         
        </li>
        <li className="l1">
        <button
            type="button"
            class="btn btn-link"
           
          >
           Profile
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
