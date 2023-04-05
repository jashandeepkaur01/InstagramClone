import Verify from "Components/ForgetPassword/VerifyMail/Verify";
import SendLink from "../Components/ForgetPassword/VerifyEmail/SendLink";
import ChangePassword from "../Components/ForgetPassword/ChangePassword/ChangePassword";
import LoginPage from "Components/LoginPage/LoginPage";

import HomePage from "Components/HomePage/HomePage";
export const PUBLIC_ROUTES = [
  {
    path: "/login",
    component: LoginPage,
    title: "Login Page",
    exact: true,
  },

  {
    path: "/verify",
    component: Verify,
    title: "Verification Page",
  },
  {
    path: "/home",
    component: HomePage,
    title: "Home Page",
  },

  {
    path: "/sendlink",
    component: SendLink,
    title: "send Link",
  },
  {
    path: "/changePassword/:token/:uid",
    component: ChangePassword,
    title: "Change Password",
  },
];
