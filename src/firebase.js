import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBgUGvzo2PZoeLXbYtqf3cUZF_5u1wrH6o",
  authDomain: "messenger-clone-24409.firebaseapp.com",
  projectId: "messenger-clone-24409",
  storageBucket: "messenger-clone-24409.appspot.com",
  messagingSenderId: "940035332942",
  appId: "1:940035332942:web:d030cf3edaa2406b7a5c1f",
  measurementId: "G-3C445CNGC2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
