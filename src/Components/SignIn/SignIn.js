import React, { useState } from "react";
import "../LoginPage/LoginPage.css";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginData } from "Redux/Actions/feedPageActions";
import { Modal } from "react-bootstrap";

function SignIn() {
  const dispatch = useDispatch();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  // ..................useHistory(for navigate on another component...........)
  const history = useHistory();

  //  ...................state for storing Login Credentials............
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // ...............save data in the state while filing input fields of the form................
  const handleChange = (formData) => {
    setLoginData({
      ...loginData,
      [formData.target.name]: formData.target.value,
    });
  };

  // ..................API hit and validate login credentials............
  const handleLoginBtn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", loginData.email);
    formData.append("password", loginData.password);
    dispatch(
      LoginData({
        payload: formData,
        success: (response) => {
          history.push("/home");
        },
        fail: (err) => {
          console.log(err,"error")
          setErrMsg(err);
          handleOpenErrPopUp();
        },
      })
    );
  };

  return (
    <div>
      <form>
        <input
          className="loginPage_text"
          required
          onChange={handleChange}
          name="email"
          placeholder="Phone number, username, or email"
          type="text"
        />
        <input
          className="loginPage_text"
          required
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <button className="login_Btn" onClick={handleLoginBtn}>
          Log In
        </button>
      </form>
      <Modal show={Err} onHide={handleCloseErrPopUp}>
        <Modal.Body>
          <p>{ErrMsg}</p>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseErrPopUp}>Ok</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
