import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  getAuth,
  googleAuthProvider,
  facebookAuthProvider
} from '../../services/firebase'

export const startSignInWithGoogle = () => {
  return async (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, googleAuthProvider)
      .then(({ user }) => {
        dispatch(signIn(user.uid, user.displayName))
      })
      .catch((err) => console.log(err, 'err'))
  }
}

export const startSignInWithFacebook = () => {
  return async (dispatch) => {
    const auth = getAuth()
    signInWithPopup(auth, facebookAuthProvider)
      .then(({ user }) => {
        dispatch(signIn(user.uid, user.displayName))
      })
      .catch((err) => console.log(err, 'err'))
  }
}

export const startSignInWithEmailAndPassword = (email, password) => {
  return async (dispatch) => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(signIn(user.uid, user.displayName))
      })
      .catch((err) => console.log(err, 'err'))
  }
}

export const startSignUpWithEmailNameAndPassword = (email, name, password) => {
  return async (dispatch) => {
    createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({ displayName: name })
        dispatch(signIn(user.uid, user.displayName))
      })
      .catch((error) => {
        console.log(error)
      })
  }
}

export const startSignOut = () => {
  return async (dispatch) => {
    await signOut()

    dispatch(signOutOfApp())
  }
}

export const signIn = (uid, displayName) => ({
  type: '@auth/signIn',
  payload: {
    uid,
    displayName
  }
})

export const signOutOfApp = () => ({
  type: '@auth/signOut'
})
