import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./SideNavBar.css";
import Insta_logo from "../../Images/images/logoinsta.png";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadData } from "Redux/Actions/feedPageActions";

function Navbar() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setSelectedImage(e.target.files[0]);
    }
  };
  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleCreatePostBtn = (e) => {
    e.preventDefault();
    handleShow();
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleNextClick = (e) => {
    const formData = new FormData();
    formData.append("image", imageUrl);
    formData.append("description", description);
    dispatch(
      uploadData({
        payload: formData,
        success: (response) => {
          history.push("/home");
        },
        fail: (err) => {
          console.log(err, "upload data.........");
        },
      })
    );
    handleClose();
  };

  return (
    <div className="nav_bar">
      <h1 className="header">
        <img className="loginPage_logo" src={Insta_logo} />
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <h2>Create Post</h2>
        </Modal.Header>
        <Modal.Body>
          <div className="selectDiv">
            <input type="file" id="select-image" onChange={handleFileChange} />
            <label>
              {imageUrl && selectedImage && (
                <div textAlign="center">
                  <img
                    src={imageUrl}
                    alt={selectedImage.name}
                    className="selectedPost"
                  />
                  <textarea
                    placeholder="Add a description...."
                    onChange={handleDescriptionChange}
                  ></textarea>
                  <button className="nextBtn" onClick={handleNextClick}>
                    Next
                  </button>
                </div>
              )}
            </label>
            <br />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Navbar;
