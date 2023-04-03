import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SideNavBar.css";
import Insta_logo from '../../Images/images/logoinsta.png';

function Navbar() {
  const history = useHistory();

  const handleCreatePostBtn = (e) => {
    e.preventDefault();
    history.push("/createPost");
  };

  return (
    <div className="nav_bar">
      <h1 className="header">
        <img  className='loginPage_logo' src={Insta_logo} />
      </h1>
      <ul className="listing">
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Home
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Search
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Explore
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Reels
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Messages
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Notifications
          </button>
        </li>
        <li className="l1">
          <button
            type="button"
            className="btn btn-link nav_btn"
            onClick={handleCreatePostBtn}
          >
            Create
          </button>
        </li>
        <li className="l1">
          <button type="button" className="btn btn-link nav_btn">
            Profile
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
