import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Insta_image from "../../Images/images/instaImg.svg";
import Insta_logo from "../../Images/images/logoinsta.png";
import Fb from "../../Images/images/fb.png";
import appStore from "../../Images/images/app.png";
import playStore from "../../Images/images/play.png";
import "./LoginPage.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { useHistory } from "react-router-dom";
function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const history = useHistory();

  const changeLogin = () => {
    if (isLogin) {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  };

  const handleForgetPassword = (e) => {
    history.push("/sendlink");
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={3}>
          
        </Grid>
        <Grid item xs={6}>
          <div className="loginPage_main">
            <div>
              <img src={Insta_image} id="phoneImg" width="400px" />
            </div>
            <div>
              <div className="logoinPage_rightComponent">
                <img className="loginPage_logo" src={Insta_logo} />
                <div className="loginPage_signIn">
                  {isLogin ? <SignIn /> : <SignUp />}

                  <div className="login_ordiv">
                    <div className="login_divider"></div>
                    <div className="login_or">OR</div>
                    <div className="login_divider"></div>
                  </div>

                  <div className="login_fb">
                    <img
                      src={Fb}
                      height="15px"
                      style={{ marginRight: "5px" }}
                    />
                    Log in with Facebook
                  </div>
                  <div className="login_forgot" onClick={handleForgetPassword}>
                    Forgot Password?
                  </div>
                </div>
              </div>

              <div className="loginPage_signupOption">
                {isLogin ? (
                  <div className="loginPage_signin">
                    Don't have an account?
                    <span
                      onClick={changeLogin}
                      style={{ fontWeight: "bold", color: "#0395F6" }}
                    >
                      Sign up
                    </span>
                  </div>
                ) : (
                  <div className="loginPage_signup">
                    Have an account?
                    <span
                      onClick={changeLogin}
                      style={{ fontWeight: "bold", color: "#0395F6" }}
                    >
                      {" "}
                      Sign in
                    </span>
                  </div>
                )}
              </div>
              <div className="loginPage_downloadSection">
                <div>Get the app</div>
                <div className="loginPage_option">
                  <img
                    className="loginPage_divImg"
                    src={appStore}
                    width="136px"
                  />
                  <img
                    className="loginPage_divImg"
                    src={playStore}
                    width="136px"
                  />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;
