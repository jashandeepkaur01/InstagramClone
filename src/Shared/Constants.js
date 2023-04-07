export const STRINGS = {
  SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
  OFFLINE_MESSAGE:
    "You appear to be offline. Please check your internet connection.",
};

export const baseURL = "https://89b8-122-160-165-213.in.ngrok.io/";

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
