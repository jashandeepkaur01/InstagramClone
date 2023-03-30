const { GETDATA, SETDATA, LOGINDATA, SETLOGINDATA } = require("Redux/Actions/feedPageActions/actionStates");

const initialData ={
    feedData:[],
    loginData:[],

};

const HomeReducer =(data=initialData,action)=>{
    
    switch(action.type){
        case GETDATA:
            return data;
        case SETDATA:
            return {...data,feedData:action?.data?.map((data)=>({...data}))};
        case LOGINDATA:
            console.log("loginData",data)
            return data;

        default:
            
            return data;
    }
    

}

export default HomeReducer;