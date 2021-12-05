export const entryReducer = (state = [], action) => {
  if (action.type === '@entry/created') {
    return state.concat(action.payload);
  }
  return state;
};
