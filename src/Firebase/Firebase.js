import { createContext, useContext, useState , useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup, signInWithEmailAndPassword  , onAuthStateChanged ,signOut
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
  
  //signup for make a new acount of user
  const SignUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(FirebaseAuth, email, password);
  };
 //sign with google
  const SignWithGoogle = () => {
    signInWithPopup(FirebaseAuth, GoogleProvider);
    
  };

//login with email and password
 const LoginUserWithEmailAndPassword=(email, password)=>{
  return signInWithEmailAndPassword(FirebaseAuth,email ,password)
 }

 const LogoutUser =()=>{
return signOut(FirebaseAuth)

 }


  //put data in real time database
  const PutData = (key, data) => set(ref(Database, key), data);

// check user loggedin or not 
const [user, setuser]=useState("");
useEffect(() => {
 
  
  onAuthStateChanged(FirebaseAuth,(user)=>{
    user ? setuser(user) : setuser(null)
  })
  
}, [user])



 const LoginOrNot  = user ? true : false;



  return (
    <FirebaseContext.Provider
      value={{ LoginOrNot, LogoutUser,  SignUserWithEmailAndPassword, PutData,LoginUserWithEmailAndPassword , SignWithGoogle }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export { firebaseapp };
