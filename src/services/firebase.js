import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.REACT_FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
const storage = getStorage();
const googleAuthProvider = new GoogleAuthProvider();

export { auth, db, collection, doc, storage, googleAuthProvider };
