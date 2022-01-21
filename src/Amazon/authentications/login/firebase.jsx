import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyByWB4X1o0C5n5pdJt8kTk7KnrmeJAHPE0",
    authDomain: "clone-gamers.firebaseapp.com",
    projectId: "clone-gamers",
    storageBucket: "clone-gamers.appspot.com",
    messagingSenderId: "553354813986",
    appId: "1:553354813986:web:39d405504393469355e07b",
    measurementId: "G-PLQZ9QCTNQ"
  };

  const app = firebase.initializeApp(firebaseConfig)
  const auth = app.auth()
  const db = app.firestore()

export {db,auth}
