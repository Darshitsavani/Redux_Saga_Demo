import { REQUEST_DATA,RECEIVE_DATA } from "./actionTypes";

import { ADD_FOOD, DELETE_FOOD } from '../actions/types';

const initialState = {
  dataList: []
}

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_DATA:
      return {
        ...state,
        dataList: action.payload
      };
    default:
      return state;
  }
}

export default mainReducer;