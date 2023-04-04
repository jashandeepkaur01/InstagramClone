import axios from 'axios'
import { Children } from 'react';
import { takeLatest, put,all } from 'redux-saga/effects'
import { LOGOUT } from 'Redux/Actions/Auth';
import { setData, setLoginData, setLogout } from 'Redux/Actions/feedPageActions';

import { GETDATA, LOGINDATA, REPORTDATA, SETLOGINDATA } from 'Redux/Actions/feedPageActions/actionStates'
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

function* logoutCall({data:{success,fail}}){
    try{
        const response = yield axiosInstance.post(API.LOGOUT)
        yield put(setLogout(response?.data));
        if(success){
            
            success(response)
        }
        
    }
    catch(error){
       if(fail){
        fail(error)
       }
    }
}

function* reportCall({data:{payload,success,fail}}){
                                                                                                    
    try{
        
        const response =  yield axiosInstance.post(API.REPORT,payload)
        // yield put(setLoginData(response?.data));
        console.log("response",response)
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
    yield takeLatest(LOGINDATA,loginCall),yield takeLatest(LOGOUT,logoutCall),
yield takeLatest(REPORTDATA,reportCall)])
 
}

export default Saga;