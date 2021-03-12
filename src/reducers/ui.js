import {
  SHOW_ERROR,
  HIDE_ERROR,
  START_LOADING,
  FINISH_LOADING,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case HIDE_ERROR:
      return {
        ...state,
        errorMessage: null,
      };

    case START_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case FINISH_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
