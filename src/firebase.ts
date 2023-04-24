import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { GoogleAuthProvider, getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBk67CPuPlqQJPxkO5OyKSSeYCfSJLnjIw",
  authDomain: "discode-clone-udemy-2cc85.firebaseapp.com",
  projectId: "discode-clone-udemy-2cc85",
  storageBucket: "discode-clone-udemy-2cc85.appspot.com",
  messagingSenderId: "162317811746",
  appId: "1:162317811746:web:f31ca825d3c965aa5f4a7b"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
