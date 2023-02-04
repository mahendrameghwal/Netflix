import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

// context
const FirebaseContext = createContext(null);



// config
const firebaseConfig = {
  apiKey: "AIzaSyBWQOZEnNlE7Mgog7cJQqP6fZWIXL4UCIM",
  authDomain: "netflix-52efc.firebaseapp.com",
  projectId: "netflix-52efc",
  storageBucket: "netflix-52efc.appspot.com",
  messagingSenderId: "743366865377",
  appId: "1:743366865377:web:ac07716f2d67c4113862a0",
  measurementId: "G-6Y1P7WKTDY",
  databaseURL: "https://netflix-52efc-default-rtdb.firebaseio.com",
};

//creating instance
const firebaseapp = initializeApp(firebaseConfig);
const FirebaseAuth = getAuth(firebaseapp);
const Database = getDatabase(firebaseapp);
const GoogleProvider = new GoogleAuthProvider();


export const Usefirebase = () => useContext(FirebaseContext);
// provider
export const FirebaseProvider = (props) => {
 

  const SignUserWithEmailAndPassword = (name ,email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, name , email, password);
  };

  const SignWithGoogle = () => {
    signInWithPopup(FirebaseAuth, GoogleProvider);
  };

  //put data in real time database

  const PutData = (key, data) => set(ref(Database, key), data);

  return (
    <FirebaseContext.Provider
      value={{  SignUserWithEmailAndPassword, PutData, SignWithGoogle }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { firebaseapp };
