import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import "../ForgetPassword/SendLink.css";

function SendLink() {
  const history = useHistory();

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
          history.push("/message");
        }
      });
    }
  };
  return (
    <div id="container1" className="container border border-secondary">
      <h2>User's Confirmation</h2>
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
  );
}

export default SendLink;
