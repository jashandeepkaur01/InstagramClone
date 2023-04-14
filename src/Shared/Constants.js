export const STRINGS = {
  SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
  OFFLINE_MESSAGE:
    "You appear to be offline. Please check your internet connection.",
};

export const baseURL = "https://33a1-122-160-165-213.ngrok-free.app/";

export const API = {
  LOGIN: baseURL + "login/",
  SIGNUP: baseURL + "signup/",
  HOME: baseURL + "home/",
  FORGOTPASSWORD: baseURL + "forgotpassword/",
  POST: baseURL + "post/",
  CONFIRM: baseURL + "confirm/",
  VERIFY: baseURL + "verify/",
  REEL: baseURL + "reel/",
  LOGOUT: baseURL + "logout/",
  REPORT: baseURL + "report/",
  RESEND: baseURL + "resend/",
  LIKES: baseURL + "like/",
  COMMENT: baseURL + "comment/",
};

export const reportReasons = [
  "It's Span",
  "Hate speech or symbols",
  "Violence or dangerous organizations",
  "Sale of illegal or regulated goods",
  "Bullying or harassment",
  "Intellectual property violation",
  "False Information",
  "Suicide,self-injury or eating disorders",
  "I just don't like it",
  "Something else",
];

export const regex = /^[A-Za-z0-9+_.]{3,}@[A_Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

export const numberRegex = /^[0-9]+$/;

export const emojis = {
  people: ["😀", "😁", "😂", "😅", "😆"],
};

export const emojiColors = [
  "#b7e887",
  "#b5e0fe",
  "#f9ef67",
  "#f3c1fd",
  "#ffe1ae",
];
