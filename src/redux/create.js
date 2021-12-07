import { createStore as _createStore } from 'redux';
import rootReducer from './reducer';

export default function createStore() {
  const store = _createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}
