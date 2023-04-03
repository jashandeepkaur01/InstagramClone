import {GETDATA,LOGINDATA,LOGOUT,SETDATA, SETLOGINDATA, SETLOGOUTDATA, SETUPLOADEDDATA, UPLOADDATA} from "./actionStates";
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

export const uploadData=(data)=>{
    return{
        type:UPLOADDATA,
        data

    }
}

export const setUploadedPost=(data)=>{
    return{
        type:SETUPLOADEDDATA,
        data
    }
}

export const logOut = (data) =>{
    return{
        type:LOGOUT,   
        data
    }
}

export const setLogout = (data)=>{
    return{
        type:SETLOGOUTDATA,
        data
    }
}