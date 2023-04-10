import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import { emailValidation } from "Shared/Utilities";
import "./SendLink.css";
function SendLink() {
  const history = useHistory();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [Err, setErr] = useState(false);
  const [ErrMsg, setErrMsg] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [emailStatus, setEmailStatus] = useState(false);
  const handleOpenErrPopUp = () => {
    setErr(true);
  };
  const handleCloseErrPopUp = () => {
    setErr(false);
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    setEmailStatus(false);
  };

  const handleSubmit = (e) => {
    const form = new FormData();
    form.append("email", email);
    if (email === "") {
      setEmailErr("Email is required");
      setEmailStatus(true);
      return;
    } else if (emailValidation(email)) {
      setEmailErr("Invalid Email");
      setEmailStatus(true);
      return;
    }
    axiosInstance
      .post(API.FORGOTPASSWORD, form)
      .then((res) => {
        handleShow();
      })
      .catch((err) => {
        setErrMsg(err.message);
        handleOpenErrPopUp();
      });
  };

  return (
    <>
      <div id="container1" className="container border border-secondary">
        <h2 className="header">User's Confirmation</h2>

        <input
          id="input1"
          required
          className="form-control"
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="email"
        />
        <br />
        <span className="text-danger">{emailStatus ? emailErr : ""}</span>
        <button
          id="linkBtn"
          type="button"
          value={email}
          onClick={handleSubmit}
          className="btn btn-info btn-block"
        >
          Send login link
        </button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h2>Email sent</h2>
        </Modal.Header>
        <Modal.Body>
          <div>Please go and check your email...</div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>

      <Modal show={Err} onHide={handleCloseErrPopUp}>
        <Modal.Body>
          <h2>{ErrMsg}</h2>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleCloseErrPopUp}>Ok</button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendLink;
