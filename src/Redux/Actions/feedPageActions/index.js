import {GETDATA,LOGINDATA,SETDATA, SETLOGINDATA} from "./actionStates";
export const getData = (data)=>{
    return{
        type:GETDATA,
        data,
    };
};

export const setData=(data)=>{
    return{
        type:SETDATA,
        data,
    };
};

export const LoginData=(data)=>{
    console.log("loginData.............")
    return{
        type:LOGINDATA,
        data,
    }
}

export const setLoginData=(data)=>{
    return{
        type:SETLOGINDATA,
        data,
    }
}