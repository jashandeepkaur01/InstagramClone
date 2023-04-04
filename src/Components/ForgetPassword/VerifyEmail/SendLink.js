
import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import "./SendLink.css";
import Modal from 'react-bootstrap/Modal';

function SendLink() {
  const history = useHistory();
  const [show,setShow]= useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const form = new FormData();
  form.append("email", email);

  const handleSubmit = (e) => {
    if (email !== "") {
      axiosInstance.post(API.FORGOTPASSWORD, form).then((res) => {
        if (res.data.status) {
         
            handleShow();
         
        }
        else{

          <p>Please enter valid email id...</p>
        }
      });
    }
  };
  return (
    <>
    <div id="container1" className="container border border-secondary">
      <h2 className="header">User's Confirmation</h2>
      <input
        id="input1"
        className="form-control"
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="email"
      />
      <br />
      

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
        <Modal.Header closeButton><h2>Email sent</h2></Modal.Header>
        <Modal.Body><div>Please go and check your email...</div></Modal.Body>
     <Modal.Footer><button onClick={handleClose}>Close</button></Modal.Footer>
      </Modal>
        </>
  );
}

export default SendLink;