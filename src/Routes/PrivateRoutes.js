import HomePage from "Views/HomePage/HomePage";
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
];
