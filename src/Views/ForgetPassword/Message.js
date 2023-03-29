import React from "react";
import { useHistory } from "react-router-dom";

function Message() {
  const history = useHistory();
  const handleClick = (e) => {
    history.push("/changePassword/:token/:uid")
  };
  return (
    <div className="container d-flex justify-content-center">
      <h3>Email Sent</h3>
      <br />
      <button type="button" onClick={handleClick}>
        Ok
      </button>
    </div>
  );
}

export default Message;
