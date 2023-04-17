import { combineReducers } from "redux";

import { ACTION_STATES } from "../Actions/ActionStates";
import { LOGOUT } from "../Actions/Auth";
import errorReducer from "./Api/ErrorReducer";
import loadingReducer from "./Api/LoadingReducer";
import authReducer from "./Auth";
import HomeReducer from "./HomeReducer";

const appReducer = combineReducers({
  auth: authReducer,
  loading: loadingReducer,
  error: errorReducer,
  HomeReducer,
});

const rootReducer = (state, action) => {
  if (action.type === LOGOUT + ACTION_STATES.SUCCESS) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
