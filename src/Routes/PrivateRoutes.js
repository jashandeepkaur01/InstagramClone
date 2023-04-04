import { login } from "Redux/Actions/Auth";

import Dashbord from "Views/Dashboard";

import HomePage from "Components/HomePage/HomePage"

export const PRIVATE_ROUTES = [
  {
    path:"/home",
    component:HomePage,
    title:"Home Page",
  },

   
];
