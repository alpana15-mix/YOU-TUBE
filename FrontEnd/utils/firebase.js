// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-18a97.firebaseapp.com",
  projectId: "login-18a97",
  storageBucket: "login-18a97.firebasestorage.app",
  messagingSenderId: "326175081428",
  appId: "1:326175081428:web:9bff594b9e72b642eb4c41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export{auth,provider}