import { all, put, takeLatest } from "redux-saga/effects";
import { LOGOUT } from "Redux/Actions/Auth";
import {
  setCommentData,
  setData,
  setLikesData,
  setLoginData,
  setLogout,
  setReelsData,
} from "Redux/Actions/feedPageActions";

import {
  GETCOMMENTS,
  GETDATA,
  LIKE,
  LOGINDATA,
  POSTCOMMENT,
  REEL,
  REPORTDATA,
  RESENDOTP,
  UPLOADDATA,
} from "Redux/Actions/feedPageActions/actionStates";

import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function* showData(payload) {
  try {
    const response = yield axiosInstance.get(
      API.POST + "?page=" + payload.data
    );
    console.log(response);
    yield put(setData(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error.response.data.message);
    }
  }
}

function* loginCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.LOGIN, payload);
    yield put(setLoginData(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* logoutCall({ data: { success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.LOGOUT);
    yield put(setLogout(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* reportCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.REPORT, payload);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* uploadDataCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.POST, payload);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* resendOTPCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.RESEND, payload);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* likeCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.LIKES, payload);

    if (success) {
      yield put(setLikesData(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}
function* commentCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.COMMENT, payload);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error.response.data.message);
    }
  }
}

function* getCommentsCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.get(API.COMMENT, {
      params: {
        pk: payload,
      },
    });

    if (success) {
      success(response);

      yield put(setCommentData(response?.data?.comments));
    }
  } catch (error) {
    if (fail) {
      fail(error?.response?.data?.message);
    }
  }
}

function* getReels(payload) {
  try {
    const response = yield axiosInstance.get(
      API.REEL + "?page=" + payload.data
    );
    yield put(setReelsData(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error.response.data.message);
    }
  }
}
function* Saga() {
  yield all([
    yield takeLatest(GETDATA, showData),
    yield takeLatest(LOGINDATA, loginCall),
    yield takeLatest(LOGOUT, logoutCall),
    yield takeLatest(REPORTDATA, reportCall),
    yield takeLatest(UPLOADDATA, uploadDataCall),
    yield takeLatest(RESENDOTP, resendOTPCall),
    yield takeLatest(LIKE, likeCall),
    yield takeLatest(POSTCOMMENT, commentCall),
    yield takeLatest(GETCOMMENTS, getCommentsCall),
    yield takeLatest(REEL, getReels),
  ]);
}

export default Saga;
