import {combineReducers} from 'redux';
import tabReducer from "./tabReducer";

const reducerMap = {
  tabs: tabReducer,
};

export default combineReducers(reducerMap);