
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDzAOWZIT3vS3AXGMXeDb8tUOKLdxx11l4",
  authDomain: "disneyplus-clone-a175e.firebaseapp.com",
  projectId: "disneyplus-clone-a175e",
  storageBucket: "disneyplus-clone-a175e.appspot.com",
  messagingSenderId: "319436798168",
  appId: "1:319436798168:web:897a0ec809f783c719bfad",
  measurementId: "G-685EHPF4BG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export { auth, provider, storage };
export default db;



