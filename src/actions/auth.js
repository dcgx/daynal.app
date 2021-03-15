import {
  HIDE_ERROR,
  LOGIN,
  LOGOUT,
  SHOW_ERROR,
} from '../constants/actionTypes';

import { auth, googleAuthProvider } from '../services/firebase';
import { finishLoading, startLoading } from './ui';

export const startSignInWithGoogle = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(login(user.uid, user.displayName));
    });
  };
};

export const startSignInWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
        dispatch(finishLoading());
      })
      .catch((error) => {
        dispatch(finishLoading());
      });
  };
};

export const startSignUpWithEmailNameAndPassword = (email, name, password) => {
  return (dispatch) => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name });
        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const startSignOut = () => {
  return async (dispatch) => {
    await auth.signOut();

    dispatch(logout());
  };
};

export const login = (uid, displayName) => ({
  type: LOGIN,
  payload: {
    uid,
    displayName,
  },
});

export const logout = () => ({
  type: LOGOUT,
});
