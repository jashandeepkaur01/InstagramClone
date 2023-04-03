import axios from "axios";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";
import "./Details.css";

function Verify() {
  const location = useLocation();
  const myparam = location.state.params;

  const [verifyCode, setVerifyCode] = useState("");
  const handleChange = (e) => {
    setVerifyCode(e.target.value);
  };

  let history = useHistory();
  const formData = new FormData();
  formData.append("email", myparam);
  formData.append("otp", verifyCode);

  const verifyCodeBtn = async (e) => {
    await axiosInstance
      .post(API.VERIFY, formData)
      .then((res) => {
        console.log("response = ", res);
        if (res.data.status) {
          // history.push("/login");
        } else {
          console.log(
            ".............wrong otp entered..........................."
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlepreviousPage = (e) => {
    history.push("/Details", { params: myparam });
  };
  return (
    <div>
      <div id="container" className="container  border border-secondary">
        <h3>Enter Confirmation Code</h3>
        <br />
        <p>
          Enter the confirmation code we sent to jashandeep.kaur@chicmic.co.in.{" "}
          <button type="button" class="btn btn-link">
            Resend Code.
          </button>
        </p>
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
    </div>
  );
}

export default Verify;
