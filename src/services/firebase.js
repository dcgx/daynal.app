import { initializeApp } from "firebase/app"
// import { getFirestore, collection, doc } from 'firebase/firestore'
// import { getStorage } from 'firebase/storage'
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth"

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_FIREBASE_FIREBASE_APP_ID,
}

console.log(firebaseConfig)

// Initialize Firebase
initializeApp(firebaseConfig)

// const auth = auth.create
// const firestore = getFirestore()
// const storage = getStorage()
const googleAuthProvider = new GoogleAuthProvider()
const facebookAuthProvider = new FacebookAuthProvider()

// export { auth, firestore, storage, googleAuthProvider }
export {
  googleAuthProvider,
  facebookAuthProvider,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
}
