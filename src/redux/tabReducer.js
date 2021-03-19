import {navTabs} from "../utils/TabTypes";

export const SELECT_TAB_ACTION = 'SELECT_TAB_ACTION';

const initialState = {selectedTab: navTabs[0]};

export const tabSelectionAction = (newTab) => ({
    type: SELECT_TAB_ACTION,
    data: {newTab}
});


const tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TAB_ACTION:
            return {...state, selectedTab: action.data.newTab}
        default:
            return state;
    }
};

export default tabReducer;