import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB6j10rG4J02-Zhr0ZXkDfeBRPkYm10J4k",
  authDomain: "discord-clone-9a1ba.firebaseapp.com",
  projectId: "discord-clone-9a1ba",
  storageBucket: "discord-clone-9a1ba.appspot.com",
  messagingSenderId: "320206259513",
  appId: "1:320206259513:web:ac34b71efd4f29aa5954e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore;
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, db, provider};