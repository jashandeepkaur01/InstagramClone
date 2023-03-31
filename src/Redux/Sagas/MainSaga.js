import axios from 'axios'
import { Children } from 'react';
import { takeLatest, put,all } from 'redux-saga/effects'
import { setData, setLoginData } from 'Redux/Actions/feedPageActions';

import { GETDATA, LOGINDATA, SETLOGINDATA } from 'Redux/Actions/feedPageActions/actionStates'
import { updateAuthToken } from 'Shared/Axios';
import { API } from 'Shared/Constants';
import { axiosInstance } from 'Shared/Request';


function* showData(payload){
    try{
      console.log("Page.....",payload.data)
        const response = yield axiosInstance.get(API.POST,payload.data);
        yield put(setData(Object.values(response?.data)));
        
    }
    catch(error){
        if(payload && payload?.fail){
            payload.fail(error)
            console.log("error...........",error)
        }
    }
}

function* loginCall({ data: {  payload , success, fail} }){
                                                                                                    
    try{
        
        const response =  yield axiosInstance.post(API.LOGIN,payload)
        yield put(setLoginData(response?.data));
        if(success){
            success(response);
        }
     }
    catch(error){
        if(fail){
            fail(error);
        }
    }
}


function* Saga(){
    yield all([yield takeLatest(GETDATA,showData),
    yield takeLatest(LOGINDATA,loginCall)])
 
}

export default Saga;