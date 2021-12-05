/*
  {
    entries: [],
    isActive: null,
  }
*/

import { actionTypes } from '../constants/actionTypes';

const initialState = {
  entries: [],
  selectedEntry: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.addEntry: {
      return {
        ...state,
        entries: [action.payload, ...state.entries],
      };
    }
    case actionTypes.updateEntry: {
      return {
        ...state,
        entries: state.entries.map((entry) =>
          entry.id === action.payload.id ? action.payload.entry : entry
        ),
      };
    }
    case actionTypes.deleteEntry:
      return {
        ...state,
        selectedEntry: '',
        entries: state.entries.filter((entry) => entry.id !== action.payload),
      };
    case actionTypes.loadEntries:
      return {
        ...state,
        entries: [...action.payload],
      };
    case actionTypes.selectEntry:
      return {
        ...state,
        selectedEntry: {
          ...action.payload,
        },
      };
    case actionTypes.resetSelectedEntry:
      return {
        ...state,
        selectedEntry: action.payload,
      };
    default:
      return state;
  }
};
