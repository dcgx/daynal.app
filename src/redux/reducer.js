import { combineReducers } from 'redux'

import noteReducer from './reducers/noteReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
  note: noteReducer,
  auth: authReducer
})

export default rootReducer
