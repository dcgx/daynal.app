import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

// Firebase config
var firebaseConfig = {
  apiKey: 'AIzaSyCXOybvdD5VRUsJR8OODxiFuU6VxRlSxN4',
  authDomain: 'daynal-70acc.firebaseapp.com',
  projectId: 'daynal-70acc',
  storageBucket: 'daynal-70acc.appspot.com',
  messagingSenderId: '301309414805',
  appId: '1:301309414805:web:bd08c471af3ec358313a9c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { auth, db, storage, googleAuthProvider };
