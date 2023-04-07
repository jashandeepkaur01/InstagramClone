import { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { uploadData } from "Redux/Actions/feedPageActions";
import Insta_logo from "../../../Images/images/logoinsta.png";
import "./SideNavBar.css";

function Navbar() {
  const history = useHistory();
  const [show, setShow] = useState(false);

  const [selectedImage, setSelectedImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  const handleReelSection = () => {
    history.push("/reel");
  };

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
    formData.append("image", selectedImage);
    formData.append("description", description);
    dispatch(
      uploadData({
        payload: formData,
        success: (response) => {
          history.push("/home");
        },
        fail: (err) => {
          setErrMsg(err.message);
          handleOpenErrPopUp();
        },
      })
    );
    handleClose();
  };

  return (
    <div className="nav_bar">
      <h1 className="header">
        <img className="loginPage_logo" src={Insta_logo} alt="logo" />
      </h1>
      <ul className="listing">
        <li className="l1">
          <button type="button" className="sideNavButton">
            Home
          </button>
        </li>
        <li className="l1">
          <button type="button" className="sideNavButton">
            Search
          </button>
        </li>
        <li className="l1">
          <button type="button" className="sideNavButton">
            Explore
          </button>
        </li>
        <li className="l1">
          <button
            onClick={handleReelSection}
            type="button"
            className="sideNavButton"
          >
            Reels
          </button>
        </li>
        <li className="l1">
          <button type="button" className="sideNavButton">
            Messages
          </button>
        </li>
        <li className="l1">
          <button type="button" className="sideNavButton">
            Notifications
          </button>
        </li>
        <li className="l1">
          <button
            type="button"
            className="sideNavButton"
            onClick={handleCreatePostBtn}
          >
            Create
          </button>
        </li>
        <li className="l1">
          <button type="button" className="sideNavButton">
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
      <Modal show={Err} onHide={handleCloseErrPopUp}>
        <Modal.Body>
          <h2>{ErrMsg}</h2>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseErrPopUp}>Ok</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;
