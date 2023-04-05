import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
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
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };

  const handleChange = (e) => {
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
    axiosInstance
      .post(API.CONFIRM, formdata)
      .then((res) => {
        if (res.data.status) {
          history.push("/login");
        }
      })
      .catch((err) => {
        setErrMsg(err.message);
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
        <br />
        <label>Confirm Password</label>
        <br />
        <input
          name="confirmPassword"
          placeholder="confirm password"
          onChange={handleChange}
        ></input>
        <br />
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
