/*
  {
    entries: [],
    isActive: null,
  }
*/

import { LOAD_ENTRIES, SELECT_ENTRY } from '../constants/actionTypes';

const initialState = {
  entries: [],
  selectedEntry: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ENTRY:
      return {
        ...state,
        selectedEntry: {
          ...action.payload,
        },
      };
    case LOAD_ENTRIES:
      return {
        ...state,
        entries: [...action.payload],
      };
    default:
      return state;
  }
};
