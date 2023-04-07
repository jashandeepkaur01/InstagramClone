const {
  GETDATA,
  SETDATA,
  LOGINDATA,
  SETLIKEDATA,
  SETREELSDATA,
} = require("Redux/Actions/feedPageActions/actionStates");

const initialData = {
  feedData: [],
  loginData: [],
  reelData: [],

};

const HomeReducer = (data = initialData, action) => {
  switch (action.type) {
    case GETDATA:
      return data;

    case SETDATA:
      return { ...data, feedData: action?.data?.map((data) => ({ ...data })) };

    case LOGINDATA:
      return data;

    case SETLIKEDATA:
      return {...data,
        ...data.feedData,feedData:data.feedData.map((val)=>{ 
        if(val.id === action.data.post_id){
           val.LikeCount = action.data.total_like;          
        }
        return val;
      })
    }

    case SETREELSDATA:
      return {...data,reelData:action?.data?.map((data)=>({...data}))}

    default:
      return data;
  }}


export default HomeReducer;
