const initialState = {
  user: {}
}

export default function reducer(state = initialState, action = {}) {
  if (action.type === '@auth/signIn') {
    setUidToLocalStorage(action.payload.uid)
    return (state.user = action.payload)
  }
  return state
}

const setUidToLocalStorage = (uid) => {
  localStorage.setItem('daynal.app.uid', uid)
}
