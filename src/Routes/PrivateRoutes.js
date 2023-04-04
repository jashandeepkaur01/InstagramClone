import { login } from "Redux/Actions/Auth";
import CreatePost from "../Components/CreatePost/CreatePost";
import Dashbord from "Views/Dashboard";

import HomePage from "Components/HomePage/HomePage"

export const PRIVATE_ROUTES = [
  {
    path:"/home",
    component:HomePage,
    title:"Home Page",
      },

      {
        path:"/createPost",
        component:CreatePost,
        title:"Create Post",
       },
   
];
