import { applyMiddleware, compose, createStore as _createStore } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './reducer'

export default function createStore() {
  const composeEnhancers =
    (typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

  const store = _createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
