import { actionTypes } from "../constants/actionTypes";

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.signIn:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case actionTypes.signOut:
      return {};
    default:
      return state;
  }
};
