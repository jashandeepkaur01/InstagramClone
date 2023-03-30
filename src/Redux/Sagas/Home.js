import axios from 'axios'
import { takeLatest, put,all } from 'redux-saga/effects'
import { setData, setLoginData } from 'Redux/Actions/feedPageActions';

import { GETDATA, LOGINDATA, SETLOGINDATA } from 'Redux/Actions/feedPageActions/actionStates'
import { updateAuthToken } from 'Shared/Axios';


function* showData(payload){
    try{
        console.log("payload")
        const response = yield axios.get("https://58c2-122-160-165-213.in.ngrok.io/post/");
        console.log("fgfhfhghgj..............",response);
        yield put(setData(Object.values(response?.data)));
    }
    catch(error){
        if(payload && payload?.fail){
            payload.fail(error)
        }
    }
}

function* loginCall({ data: {  payload , success, fail} }){
    debugger;                                                                                                   
    try{
        const response =  yield axios.post("https://58c2-122-160-165-213.in.ngrok.io/login/",payload)
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