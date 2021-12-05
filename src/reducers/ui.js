import { actionTypes } from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  errorMessage: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.showError:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case actionTypes.hideError:
      return {
        ...state,
        errorMessage: null,
      };
    case actionTypes.showAlertDialog:
      return {
        ...state,
        alertMessage: action.payload.message,
        isOpenAlertDialog: action.payload.isOpen,
      };
    case actionTypes.hideAlertDialog:
      return {
        ...state,
        // alertMessage: action.payload.message,
        isOpenAlertDialog: action.payload.isOpen,
      };
    case actionTypes.startLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    case actionTypes.finishLoading:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
