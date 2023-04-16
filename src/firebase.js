
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDwSa94pGdsWfcZQSJ8lk0P5-BGqSxXWRY",
  authDomain: "disney-clone-clone.firebaseapp.com",
  projectId: "disney-clone-clone",
  storageBucket: "disney-clone-clone.appspot.com",
  messagingSenderId: "848363696642",
  appId: "1:848363696642:web:c376783cb90f7232bb6d1b",
  measurementId: "G-C2TS7XBJBP"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;



