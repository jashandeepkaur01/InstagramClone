import Verify from "Components/Atoms/ForgetPassword/VerifyMail/Verify";
import LoginPage from "Views/LoginPage/LoginPage";
import ChangePassword from "../Components/Atoms/ForgetPassword/ChangePassword/ChangePassword";
import SendLink from "../Components/Atoms/ForgetPassword/VerifyEmail/SendLink";

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
