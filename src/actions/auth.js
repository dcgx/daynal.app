import { actionTypes } from '../constants/actionTypes';

import { auth, googleAuthProvider } from '../services/firebase';
import { finishLoading, startLoading } from './ui';

export const startSignInWithGoogle = () => {
  return (dispatch) => {
    auth.signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(signIn(user.uid, user.displayName));
    });
  };
};

export const startSignInWithEmailAndPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());
    auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(signIn(user.uid, user.displayName));
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
        dispatch(signIn(user.uid, user.displayName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const startSignOut = () => {
  return async (dispatch) => {
    await auth.signOut();

    dispatch(signOut());
    dispatch({ type: actionTypes.destroySession });
  };
};

export const signIn = (uid, displayName) => ({
  type: actionTypes.signIn,
  payload: {
    uid,
    displayName,
  },
});

export const signOut = () => ({
  type: actionTypes.signOut,
});
