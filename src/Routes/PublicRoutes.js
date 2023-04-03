import AboutUs from "Views/AboutUs";
import { Link } from "react-router-dom";
import Details from "Views/Details";
import { login } from "Redux/Actions/Auth";
import Verify from "Views/Verify";
import CreatePost from "Views/CreatePost";
import SendLink from "Views/ForgetPassword/SendLink";
import Message from "Views/ForgetPassword/Message";
import ChangePassword from "Views/ForgetPassword/ChangePassword";
import Discription from "Views/Main Content/Discription";
import LoginPage from "Components/LoginPage/LoginPage";

import HomePage from "Components/HomePage/HomePage"
export const PUBLIC_ROUTES = [

  {
    path:"/login",
    component: LoginPage,
    title:"Login Page",
    exact:true
  },
  
  {
    path:"/Details",
    component:Details,
    title:"Details Page",
  },
  {
    path:"/verify",
    component:Verify,
    title:"Verification Page",
  },
 {
  path:"/home",
  component:HomePage,
  title:"Home Page",
 },
 
 {
  path:'/sendlink',
  component:SendLink,
  title:"send Link",
 },
{
  path:'/message',
  component:Message,
  title:"Email Sent message"
},
{
  path:'/changePassword/:token/:uid',
  component:ChangePassword,
  title:"Change Password"
},

  
  
];
