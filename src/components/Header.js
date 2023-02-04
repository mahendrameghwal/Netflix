import { logo } from "../images/image";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [user, setuser] = useState("");
  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     setuser(user);
  //     console.log(user);
  //   });
  // }, []);
  // const Signout = () => {
  //   auth.signOut().then(() => {
  //     setuser(null);
  //   });
  // };
  return (
    <div className="fixed-header header container-fluid">
      <div>
        <Link to={"/"}>
          <img alt="netflix-logo" className="logo" src={logo} />
        </Link>
      </div>

      <div>
        <button className="btn btn-header transparent">English</button>

        {user ? (
          <Link to={"/"}>
            <button  className="btn btn-header btn-read">Sign out</button>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <button className="btn btn-header btn-read">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
