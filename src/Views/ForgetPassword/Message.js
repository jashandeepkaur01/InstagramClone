import React from "react";
import { useHistory } from "react-router-dom";
import "../ForgetPassword/Message.css";
function Message() {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/changePassword/:token/:uid")
  };
  return (
    <div id="messageId" className="container d-flex justify-content-center">
      <h3 id="messageHeading">Email Sent</h3><br/>
      {/* <p>Go and check the email</p> */}
      <button id="messageBtn" type="button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}

export default Message;


