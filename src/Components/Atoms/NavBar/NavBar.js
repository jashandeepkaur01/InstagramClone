import { Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { logOut } from "Redux/Actions/feedPageActions";
import find from "../../../Images/images/find.svg";
import home from "../../../Images/images/home.svg";
import insta_logo from "../../../Images/images/logoinsta.png";
import react from "../../../Images/images/love.svg";
import message from "../../../Images/images/message.svg";
import personImg from "../../../Images/images/pp1.png";
import "./NavBar.css";
function NavBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [logoutModal, setLogoutModal] = useState(false);

  const handleLogoutAction = () => {
    dispatch(
      logOut({
        success: (response) => {
          localStorage.clear();
          history.push("/login");
        },
        fail: (err) => {
          console.log(err, "logout error.....");
        },
      })
    );
  };
  return (
    <div>
      <div className="NavBar_Content">
        <Grid container>
          <Grid item xs={2}></Grid>
          <Grid item xs={3}>
            <img
              className="navBar_logo"
              src={insta_logo}
              width="135px"
              alt="insta_logo"
            />
          </Grid>
          <Grid item xs={3}>
            <input
              type="text"
              className="navBar_search"
              placeholder="Search"
            ></input>
          </Grid>
          <Grid item xs={3} style={{ display: "flex" }}>
            <img className="NavBar_img" src={home} width="25px" alt="home" />
            <img
              className="NavBar_img"
              src={message}
              width="25px"
              alt="message"
            />
            <img className="NavBar_img" src={find} width="25px" alt="find" />
            <img className="NavBar_img" src={react} width="25px" alt="react" />
            <Avatar
              className="NavBar_img"
              src={personImg}
              style={{ maxWidth: "25px", maxHeight: "25px" }}
            />
          </Grid>
          <Grid item xs={1}>
            <div>
              <button
                className="logoutBtn"
                onClick={() => setLogoutModal(true)}
              >
                Logout
              </button>
            </div>
          </Grid>
        </Grid>
        <Modal show={logoutModal}>
          <Modal.Body>
            <h2>Are you sure you want to logout</h2>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleLogoutAction}>Ok</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default NavBar;
