import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function SignUp() {
  const history = useHistory();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  // ..........state initialization..................

  const [signUpData, setSignUpData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });

  // ............... store form input field data in the state.................

  const handleChange = (formData) => {
    setSignUpData({
      ...signUpData,
      [formData.target.name]: formData.target.value,
    });
  };

  // ..............json format to formData Object format.................
  const formData = new FormData();
  formData.append("email", signUpData.email);
  formData.append("fullname", signUpData.fullName);
  formData.append("username", signUpData.userName);
  formData.append("password", signUpData.password);

  // ..............store data to the database......................

  const postUserData = (e) => {
    e.preventDefault();

    axiosInstance
      .post(API.SIGNUP, formData)
      .then(() => {
        history.push("/verify", { params: signUpData.email });
      })
      .catch((err) => {
        setErrMsg(err.message);
        handleOpenErrPopUp();
      });
  };

  return (
    <div>
      <form>
        <input
          required
          className="loginPage_text"
          placeholder="Phone number or email"
          type="text"
          name="email"
          onChange={handleChange}
        ></input>
        <input
          required
          className="loginPage_text"
          placeholder="Full name"
          type="text"
          name="fullName"
          onChange={handleChange}
        ></input>
        <input
          required
          className="loginPage_text"
          placeholder="Username"
          type="text"
          name="userName"
          onChange={handleChange}
        ></input>
        <input
          required
          className="loginPage_text"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        ></input>
        <button className="login_Btn" onClick={postUserData}>
          Sign up
        </button>
      </form>
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

export default SignUp;
