import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function Verify() {
  const location = useLocation();
  let history = useHistory();
  const myparam = location.state.params;
  const dispatch = useDispatch();
  const [verifyCode, setVerifyCode] = useState("");
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };
  const handleChange = (e) => {
    setVerifyCode(e.target.value);
  };

  const handleResendOtp = () => {
    const formData = new FormData();
    formData.append("email", myparam);
    dispatch();
  };

  const verifyCodeBtn = (e) => {
    const formData = new FormData();
    formData.append("email", myparam);
    formData.append("otp", verifyCode);
    axiosInstance
      .post(API.VERIFY, formData)
      .then((res) => {
        history.push('/login');
      })
      .catch((err) => {
        setErrMsg(err.message);
        handleOpenErrPopUp();
      });
  };

  const handlepreviousPage = (e) => {
    history.push("/SignUp", { params: myparam });
  };
  return (
    <div>
      <div id="container" className="container  border border-secondary">
        <h3>Enter Confirmation Code</h3>
        <br />
        <p>
          Enter the confirmation code we sent to {myparam}
          <button type="button" class="btn btn-link" onClick={handleResendOtp}>
            Resend Code.
          </button>
        </p>
        <form>
        <input
          className="form-control"
          type="text"
          name="code"
          onChange={handleChange}
          value={verifyCode}
          placeholder="Confirmation Code"
        />
        <br />
        <button
          type="button"
          id="nextBtn2"
          onClick={verifyCodeBtn}
          className="btn btn-info btn-block"
        >
          Next
        </button>
        </form>
        <br />
        <button type="button" onClick={handlepreviousPage} class="btn btn-link">
          Go Back
        </button>
      </div>
      <div id="div_block" className="container  border border-secondary ">
        <p>
          Have an account?
          <button type="button" class="btn btn-link">
            Log in
          </button>
        </p>
      </div>
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

export default Verify;
