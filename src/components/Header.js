import { logo } from "../images/image";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  // const Signoutuser = ({userdata}) => {

  //   navigate("/");
  // };

  const Signinuser = () => {
    navigate("/signin");
  };

  return (
    <div className="fixed-header header ">
      <div>
        <Link to={"/"}>
          <img alt="netflix-logo" className="logo" src={logo} />
        </Link>
      </div>

      <div>
        <button className="btn btn-header transparent">English</button>

        {false ? (
          <button className="btn btn-header btn-read">
            Sign out
          </button>
        ) : (
          <Link to={"/signin"}>
            {" "}
            <button onClick={Signinuser} className="btn btn-header btn-read">
              Sign in
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
