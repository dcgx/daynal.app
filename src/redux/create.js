import { createStore as _createStore } from 'redux';
import reducer from './reducer';

export default function createStore() {
  const store = _createStore(reducer);

  return store;
}
