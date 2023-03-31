import AboutUs from "Views/AboutUs";
import { Link } from "react-router-dom";
import SignUp from "Views/SignUp";
import Details from "Views/Details";
import { login } from "Redux/Actions/Auth";
import Verify from "Views/Verify";
import HomePage from "Views/Home/HomePage";
import CreatePost from "Views/CreatePost";
import SendLink from "Views/ForgetPassword/SendLink";
import Message from "Views/ForgetPassword/Message";
import ChangePassword from "Views/ForgetPassword/ChangePassword";
import Discription from "Views/Main Content/Discription";


export const PUBLIC_ROUTES = [

  {
    path:"/login",
    component:login,
    title:"Login Page",
    exact:true
  },
  {
    path:"/signup",
    component:SignUp,
    title:"SignUp Page",
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
