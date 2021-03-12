import {
  SHOW_ERROR,
  HIDE_ERROR,
  START_LOADING,
  FINISH_LOADING,
} from '../constants/actionTypes';

export const showError = (errorMessage) => ({
  type: SHOW_ERROR,
  payload: errorMessage,
});

export const hideError = () => ({
  type: HIDE_ERROR,
});

export const startLoading = () => ({
  type: START_LOADING,
  payload: true,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
  payload: false,
});
