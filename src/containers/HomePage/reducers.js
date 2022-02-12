import { ActionTypes } from "./constants";

const defaultState = {
  users: []
};

export default function homePageReducer(state = defaultState, action) {
  // Always on any reducer it has a switch to check the action type
  switch(action.type) {
    case ActionTypes.SET_USERS:
      return { ...state, users: action.payload }
    default: 
      return state;
  }
}