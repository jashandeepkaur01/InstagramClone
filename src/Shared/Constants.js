export const STRINGS = {
  SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
  OFFLINE_MESSAGE:
    "You appear to be offline. Please check your internet connection.",
};

export const baseURL = "https://d4e5-122-160-165-213.ngrok-free.app/";

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

export const Reactions = [
  {
    label: "haha",
    node: <div>😄</div>,
    key: 2,
  },
  {
    label: "angry",
    node: <div>😡</div>,
    key: 3,
  },
  {
    label: "cute",
    node: <div>🥰</div>,
    key: 4,
  },
  {
    label: "lovely",
    node: <div>😍</div>,
    key: 5,
  },
  {
    label: "thumbsUp",
    node: <div>👍</div>,
    key: 6,
  },
];
