import { LOGIN } from "../Actions/Auth";
import { ACTION_STATES } from "../Actions/ActionStates";
import {  SETLOGINDATA }from "Redux/Actions/feedPageActions/actionStates";

const initialState = {
  token: null,
  userData: null
};
const authReducer = (state = initialState, action) => { 
  switch (action.type) {
    case SETLOGINDATA:
      return {...state,token:action?.data?.Token, userData: action?.data?.data }
    case LOGIN + ACTION_STATES.SUCCESS: {
      return {
        ...state,
        token: action.token,
      };
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
