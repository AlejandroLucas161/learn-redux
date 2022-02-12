import { ActionTypes } from "./constants";

const defaultState = {
  users: null,
};

export default function userPageReducer(state = defaultState, action) {
  // Always on any reducer it has a switch to check the action type
  switch(action.type) {
    case ActionTypes.SET_USER:
      return { ...state, user: action.payload }
    default: 
      return state;
  }
}