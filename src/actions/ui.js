import { actionTypes } from '../constants/actionTypes';

export const showError = (errorMessage) => ({
  type: actionTypes.showError,
  payload: errorMessage,
});

export const hideError = () => ({
  type: actionTypes.hideError,
});

export const showAlertDialog = (message) => ({
  type: actionTypes.showAlertDialog,
  payload: {
    message,
    isOpen: true,
  },
});

export const hideAlertDialog = () => ({
  type: actionTypes.hideAlertDialog,
  payload: {
    isOpen: false,
    message: null,
  },
});

export const startLoading = () => ({
  type: actionTypes.startLoading,
  payload: true,
});

export const finishLoading = () => ({
  type: actionTypes.finishLoading,
  payload: false,
});
