
import { takeLatest, put, all } from "redux-saga/effects";
import { LOGOUT } from "Redux/Actions/Auth";
import {
  setData,
  setLoginData,
  setLogout,
} from "Redux/Actions/feedPageActions";

import {
  GETDATA,
  LIKE,
  LOGINDATA,
  REPORTDATA,
  RESENDOTP,
  UPLOADDATA,
} from "Redux/Actions/feedPageActions/actionStates";

import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function* showData(payload) {
  try {
    const response = yield axiosInstance.get(API.POST, payload.data);
    console.log("response",response)
  
    yield put(setData(response?.data?.data));
   
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
      console.log("error...........", error);
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
      fail(error);
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
      fail(error);
    }
  }
}

function* reportCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.REPORT, payload);
    console.log("response", response);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
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
      fail(error);
    }
  }
}

function* resendOTPCall({ data: { payload, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.RESEND,payload);
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* likeCall({data:{payload,success,fail}})
{
  try{
    const response = yield axiosInstance.get(API.LIKES,payload);
    if(success){
      console.log("response",response)
      success(response);
    }
  }catch(error){
    if(fail){
      fail(error)
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
    yield takeLatest(LIKE,likeCall),
  ]);
}

export default Saga;
