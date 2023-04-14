import HomePage from "Views/HomePage/HomePage";
import Profile from "Views/Profile/Profile";
import Reels from "Views/Reel/Reels/Reels";

export const PRIVATE_ROUTES = [
  {
    path: "/home",
    component: HomePage,
    title: "Home Page",
  },
  {
    path: "/reel",
    component: Reels,
    title: "Reels",
  },
  {
    path: "/profile",
    component: Profile,
    title: "Profile",
  },
];
