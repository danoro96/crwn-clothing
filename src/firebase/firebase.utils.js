
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBA7SuHQm55FfYnCp6YjI679zXSy7lzyc8",
    authDomain: "crwn-db-78507.firebaseapp.com",
    databaseURL: "https://crwn-db-78507.firebaseio.com",
    projectId: "crwn-db-78507",
    storageBucket: "crwn-db-78507.appspot.com",
    messagingSenderId: "918786312802",
    appId: "1:918786312802:web:b5bb276706d20decc9df3b",
    measurementId: "G-7KS5KSYEGE"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase