import {navTabs} from "../utils/TabTypes";

const initialState = {selectedTab: navTabs[0]};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default tabReducer;