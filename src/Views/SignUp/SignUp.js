import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import { emailValidation } from "Shared/Utilities";
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

  const [emailStatus, setEmailStatus] = useState(false);
  const [nameStatus, setNameStatus] = useState(false);
  const [userNameStatus, setUserNameStatus] = useState(false);
  const [passStatus, setPassStatus] = useState(false);
  const [signUpValidation, setSignUpValidation] = useState("");

  const [signUpData, setSignUpData] = useState({
    email: "",
    fullName: "",
    userName: "",
    password: "",
  });

  const handleChange = (formData) => {
    setEmailStatus(false);
    setNameStatus(false);
    setUserNameStatus(false);
    setPassStatus(false);
    setSignUpData({
      ...signUpData,
      [formData.target.name]: formData.target.value,
    });
  };

  const formData = new FormData();
  formData.append("email", signUpData.email);
  formData.append("fullname", signUpData.fullName);
  formData.append("username", signUpData.userName);
  formData.append("password", signUpData.password);

  const postUserData = (e) => {
    e.preventDefault();
    if (signUpData.email.trim() === "") {
      setEmailStatus(true);
      setSignUpValidation("Email is required");
      return;
    } else if (signUpData.fullName.trim() === "") {
      setNameStatus(true);
      setSignUpValidation("FullName is required");
      return;
    } else if (signUpData.userName.trim() === "") {
      setUserNameStatus(true);
      setSignUpValidation("UserName is required");
      return;
    } else if (signUpData.password.trim() === "") {
      setPassStatus(true);
      setSignUpValidation("Password is required");
      return;
    } else if (!emailValidation(signUpData.email)) {
      setSignUpValidation("Email is invalid");
      setEmailStatus(true);
      return;
    } else if (signUpData.password.trim().length < 8) {
      setSignUpValidation("Password should be greater than 8 characters");
      setPassStatus(true);
      return;
    }
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
          className="loginPage_text"
          placeholder="Enter email"
          type="text"
          name="email"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">
          {emailStatus ? signUpValidation : ""}
        </span>
        <input
          className="loginPage_text"
          placeholder="Full name"
          type="text"
          name="fullName"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">
          {nameStatus ? signUpValidation : ""}
        </span>
        <input
          className="loginPage_text"
          placeholder="Username"
          type="text"
          name="userName"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">
          {userNameStatus ? signUpValidation : ""}
        </span>
        <input
          className="loginPage_text"
          placeholder="Password"
          type="password"
          name="password"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">
          {passStatus ? signUpValidation : ""}
        </span>
        <button type="submit" className="login_Btn" onClick={postUserData}>
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
