const initialState = {
  notes: [],
  selectedNote: {},
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === '@note/created') {
    return state.concat(action.payload);
  }
  return state;
}
