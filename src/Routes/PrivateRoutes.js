import { login } from "Redux/Actions/Auth";
import CreatePost from "Views/CreatePost";
import Dashbord from "Views/Dashboard";
import HomePage from "Views/Home/HomePage";
import Discription from "Views/Main Content/Discription";


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
       {
        path:'/discription',
        component:Discription,
        title:"post discription",
      }
];
