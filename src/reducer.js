import { combineReducers } from 'redux';

import auth from './reducers/auth';
import ui from './reducers/ui';
import entry from './reducers/entry';

import { actionTypes } from './constants/actionTypes';

const appReducer = combineReducers({
  auth,
  ui,
  entry,
});

const rootReducer = (state, action) => {
  // Clear all data in redux store to initial.
  if (action.type === actionTypes.destroySession) state = undefined;

  return appReducer(state, action);
};

export default rootReducer;
