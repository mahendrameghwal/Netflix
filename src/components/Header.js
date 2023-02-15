import { logo } from "../images/image";
import { Link  , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { Usefirebase } from "../Firebase/Firebase";


const Header = () => {

const navigate = useNavigate()
const Firebase = Usefirebase();
const Islogin = Firebase.LoginOrNot;

useEffect(()=>{
  if (Firebase.LoginOrNot) {
    navigate("/main")
  }
 
 },[Firebase, navigate])


const Signoutuser =()=>{
  Firebase.LogoutUser().then(()=>{
    navigate("/")
  })
 

 }

 
const Signinuser =()=>{
  navigate("/signin")
 }






 
  return (
    <div className="fixed-header header ">
      <div>
        <Link to={"/"}>
          <img alt="netflix-logo" className="logo" src={logo} />
        </Link>
      </div>

      <div>
        <button className="btn btn-header transparent">English</button>

        {Islogin  ? 
         
            <button onClick={Signoutuser}  className="btn btn-header btn-read">Sign out</button>
         
         : 
          
          <Link to={"/signin"}>  <button onClick={Signinuser} className="btn btn-header btn-read">Sign in</button></Link>
        
        }
      </div>
    </div>
  );
};

export default Header;
