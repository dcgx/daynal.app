import { LOGIN, LOGOUT } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName,
      };
    case LOGOUT:
      return {};
    default:
      return state;
  }
};
