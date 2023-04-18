const {
  GETDATA,
  SETDATA,
  LOGINDATA,
  SETLIKEDATA,
  SETREELSDATA,
  SETCOMMENTDATA,
} = require("Redux/Actions/feedPageActions/actionStates");

const initialData = {
  feedData: [],
  loginData: [],
  reelData: [],
  commentData: [],
  totalPost: 10,
};

const HomeReducer = (data = initialData, action) => {
  switch (action.type) {
    case GETDATA:
      return data;

    case SETDATA:
      return {
        ...data,
        feedData: [
          ...data.feedData,
          ...action?.data?.data?.map((data) => ({ ...data })),
        ],

        totalPost: action?.data?.count,
      };

    case LOGINDATA:
      return data;

    case SETLIKEDATA:
      return {
        ...data,
        ...data.feedData,
        feedData: data.feedData.map((val) => {
          if (val.id === action.data.post_id) {
            val.LikeCount = action.data.total_like;
          }
          return val;
        }),
      };
    case SETCOMMENTDATA:
      return {
        ...data,
        commentData: action?.data?.map((data) => ({ ...data })),
      };
    case SETREELSDATA:
      return { ...data, reelData: action?.data?.map((data) => ({ ...data })) };

    default:
      return data;
  }
};

export default HomeReducer;
