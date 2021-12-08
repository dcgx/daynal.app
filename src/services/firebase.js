import { initializeApp } from 'firebase/app'
import { getFirestore, collection, doc } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// Firebase config
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: process.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_FIREBASE_FIREBASE_APP_ID
}

console.log(firebaseConfig)

// Initialize Firebase
initializeApp(firebaseConfig)

const auth = getAuth()
const firestore = getFirestore()
const storage = getStorage()
const googleAuthProvider = new GoogleAuthProvider()

export { auth, firestore, storage, googleAuthProvider }
