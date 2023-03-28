import AboutUs from "Views/AboutUs";
import { Link } from "react-router-dom";
import SignUp from "Views/SignUp";
import Details from "Views/Details";
import { login } from "Redux/Actions/Auth";
import Verify from "Views/Verify";
import HomePage from "Views/HomePage";


export const PUBLIC_ROUTES = [

  {
    path:"/login",
    component:login,
    title:"Login Page",
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
 }
  
  
];
