import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Firebase config
const firebaseConfig = {};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage, googleAuthProvider };
