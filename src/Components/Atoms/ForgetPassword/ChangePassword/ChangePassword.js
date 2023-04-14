import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import { numberValidation } from "Shared/Utilities";
import "./ChangePassword.css";
function ChangePassword() {
  const history = useHistory();
  const [password, setPassword] = useState({
    newPassword: "",
    confirmPassword: "",
  });

  const { token, uid } = useParams();
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [passErrMsg, setPassErrMsg] = useState("");
  const [passStatus, setPassStatus] = useState(false);
  const [confirmPassStatus, setConfirmPassStatus] = useState(false);
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  const handleChange = (e) => {
    setPassStatus(false);
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    const formdata = new FormData();
    formdata.append("token", token);
    formdata.append("uid", uid);
    formdata.append("password", password.newPassword);
    formdata.append("confirmpassword", password.confirmPassword);
    if (password.newPassword === "") {
      setPassStatus(true);
      setPassErrMsg("Password is required");
      return;
    }
    if (!numberValidation(password.newPassword)) {
      setPassErrMsg("password must be a number");
      setPassStatus(true);
      return;
    }
    if (password.confirmPassword === "") {
      setPassErrMsg("Password is required");
      setConfirmPassStatus(true);
      return;
    }
    axiosInstance
      .post(API.CONFIRM, formdata)
      .then((res) => {
        if (res.data.status) {
          history.push("/login");
        }
      })
      .catch(() => {
        setErrMsg("password don't match");
        handleOpenErrPopUp();
      });
  };
  return (
    <div id="container_div" className="container ">
      <form>
        <label>Enter New Password</label>
        <br />
        <input
          name="newPassword"
          placeholder="new password"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">{passStatus ? passErrMsg : ""}</span>
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          name="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
        ></input>
        <br />
        <span className="text-danger">
          {confirmPassStatus ? passErrMsg : ""}
        </span>
        <br />
        <button type="button" onClick={handleClick}>
          Set Password
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
export default ChangePassword;
