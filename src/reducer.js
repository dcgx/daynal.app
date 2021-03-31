import { combineReducers } from 'redux';

import auth from './reducers/auth';
import ui from './reducers/ui';
import entry from './reducers/entry';

export default combineReducers({
  auth,
  ui,
  entry,
});
