// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChX5aK9SNFLKwEYiqROVJF5hY-iE5rqwo",
  authDomain: "nobero-login-81f57.firebaseapp.com",
  projectId: "nobero-login-81f57",
  storageBucket: "nobero-login-81f57.firebasestorage.app",
  messagingSenderId: "197962918351",
  appId: "1:197962918351:web:d1c22178034d40374e8aba",
  measurementId: "G-HKM9P8K3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const Provider = new GoogleAuthProvider();

export {auth, Provider}
