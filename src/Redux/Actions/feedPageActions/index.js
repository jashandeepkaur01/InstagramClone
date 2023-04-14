import {
  GETCOMMENTS,
  GETDATA,
  LIKE,
  LOGINDATA,
  LOGOUT,
  POSTCOMMENT,
  REEL,
  REPORTDATA,
  RESENDOTP,
  SETCOMMENTDATA,
  SETDATA,
  SETLIKEDATA,
  SETLOGINDATA,
  SETLOGOUTDATA,
  SETREELSDATA,
  SETUPLOADEDDATA,
  UPLOADDATA,
} from "./actionStates";
export const getData = (data) => {
  return {
    type: GETDATA,
    data,
  };
};

export const setData = (data) => {
  return {
    type: SETDATA,
    data,
  };
};

export const LoginData = (data) => {
  console.log("loginData.............");
  return {
    type: LOGINDATA,
    data,
  };
};

export const setLoginData = (data) => {
  return {
    type: SETLOGINDATA,
    data,
  };
};

export const uploadData = (data) => {
  return {
    type: UPLOADDATA,
    data,
  };
};

export const setUploadedPost = (data) => {
  return {
    type: SETUPLOADEDDATA,
    data,
  };
};

export const logOut = (data) => {
  return {
    type: LOGOUT,
    data,
  };
};

export const setLogout = (data) => {
  return {
    type: SETLOGOUTDATA,
    data,
  };
};

export const reportData = (data) => {
  return {
    type: REPORTDATA,
    data,
  };
};

export const resendOTP = (data) => {
  return {
    type: RESENDOTP,
    data,
  };
};

export const like = (data) => {
  return {
    type: LIKE,
    data,
  };
};

export const postComment = (data) => {
  return {
    type: POSTCOMMENT,
    data,
  };
};

export const setLikesData = (data) => {
  return {
    type: SETLIKEDATA,
    data,
  };
};

export const getComment = (data) => {
  return {
    type: GETCOMMENTS,
    data,
  };
};

export const setCommentData = (data) => {
  return {
    type: SETCOMMENTDATA,
    data,
  };
};

export const reels = (data) => {
  return {
    type: REEL,
    data,
  };
};

export const setReelsData = (data) => {
  return {
    type: SETREELSDATA,
    data,
  };
};
