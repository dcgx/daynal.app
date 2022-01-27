import { initializeApp } from "firebase/app"

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth"

import { collection, getFirestore, onSnapshot } from "firebase/firestore"

const db = getFirestore()

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_REACT_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_REACT_FIREBASE_FIREBASE_APP_ID,
}

class Firebase {
  constructor() {
    initializeApp(firebaseConfig)
  }

  onSnapshotCollection = (path) => {
    onSnapshot(collection(db, "notes"), (snapshot) => {
      console.log(snapshot.docs.map((doc) => doc.data()))
    })
  }

  doAuthWithGithub = () => {
    const provider = new GithubAuthProvider()
    provider.addScope("read:user")

    return new Promise((resolve, reject) => {
      signInWithPopup(provider).then(async (res) => {
        if (res) {
          let { user } = res
          if (!user.emailVerified) {
            console.log("sendEmailVerification")
          }
        }
      })
    })
  }

  doAuthWithFacebook = () => {
    const provider = new FacebookAuthProvider()
  }

  doAuthWithGoogle = () => {
    const provider = new GoogleAuthProvider()
  }

  doSignOut = () => {
    signOut()
  }
}

export { Firebase }
