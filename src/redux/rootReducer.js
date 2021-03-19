import {combineReducers} from 'redux';
import tabReducer from "./tabReducer";

const reducerMap = {
  userTab: tabReducer,
};

export default combineReducers(reducerMap);