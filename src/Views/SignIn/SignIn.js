import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginData } from "Redux/Actions/feedPageActions";
import { emailValidation } from "Shared/Utilities";
import errIcon from "../../Images/images/error.png";
import "../LoginPage/LoginPage.css";
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

  const [emailStatus, setEmailStatus] = useState(false);
  const [passStatus, setPassStatus] = useState(false);
  const [validateFormErr, setValidateErr] = useState("");
  const history = useHistory();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (formData) => {
    setEmailStatus(false);
    setPassStatus(false);
    setLoginData({
      ...loginData,
      [formData.target.name]: formData.target.value,
    });
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", loginData.email);
    formData.append("password", loginData.password);
    if (loginData.email.trim() === "") {
      setValidateErr("Email is required");
      setEmailStatus(true);
      return;
    }
    if (loginData.password.trim() === "") {
      setValidateErr("Password is required");
      setPassStatus(true);
      return;
    }
    if (!emailValidation(loginData.email)) {
      setValidateErr("Email invalid...");
      setEmailStatus(true);
      return;
    }
    dispatch(
      LoginData({
        payload: formData,
        success: () => {
          history.push("/home");
        },
        fail: (err) => {
          console.log(err, "error");
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
          placeholder="Enter email"
          type="text"
        />
        <br />
        <span className="text-danger">
          {emailStatus ? validateFormErr : ""}
        </span>
        <input
          className="loginPage_text"
          required
          onChange={handleChange}
          name="password"
          placeholder="Password"
          type="password"
        />
        <br />
        <span className="text-danger">{passStatus ? validateFormErr : ""}</span>
        <button className="login_Btn" onClick={handleLoginBtn}>
          Log In
        </button>
      </form>
      <Modal show={Err} onHide={handleCloseErrPopUp}>
        <Modal.Body>
          <div>
            <div className="errorDiv">
              <img className="errorIcon" src={errIcon} alt="errorIcon" />
              <div className="errorMsgDiv">{ErrMsg}</div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="modalBtn" onClick={handleCloseErrPopUp}>
            Ok
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default SignIn;
