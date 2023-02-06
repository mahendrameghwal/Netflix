import { logo } from "../images/image";
import { Link  , useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";
import { Usefirebase } from "../Firebase/Firebase";


const Header = () => {
  const [users, setusers] = useState("");
const navigate = useNavigate()

 const Firebase = Usefirebase();

  const Islogin = Firebase.LoginOrNot;

  

console.log(Islogin);
 const Signoutuser =()=>{
  Firebase.LogoutUser();
  navigate("/")

 }

 const Signinuser =()=>{
  navigate("/signin")
 }

 
  return (
    <div className="fixed-header header container-fluid">
      <div>
        <Link to={"/"}>
          <img alt="netflix-logo" className="logo" src={logo} />
        </Link>
      </div>

      <div>
        <button className="btn btn-header transparent">English</button>

        {Islogin  ? (
         
            <button onClick={Signoutuser}  className="btn btn-header btn-read">Sign out</button>
         
        ) : (
          
            <button onClick={Signinuser} className="btn btn-header btn-read">Sign in</button>
        
        )}
      </div>
    </div>
  );
};

export default Header;
