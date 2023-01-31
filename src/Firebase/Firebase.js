// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBWQOZEnNlE7Mgog7cJQqP6fZWIXL4UCIM",
  authDomain: "netflix-52efc.firebaseapp.com",
  projectId: "netflix-52efc",
  storageBucket: "netflix-52efc.appspot.com",
  messagingSenderId: "743366865377",
  appId: "1:743366865377:web:ac07716f2d67c4113862a0",
  measurementId: "G-6Y1P7WKTDY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};
