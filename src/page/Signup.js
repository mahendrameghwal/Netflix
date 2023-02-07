import React, { useState , useEffect } from "react";
import { Section1 } from "../components/Mainsection";
import { Link, useNavigate } from "react-router-dom";
import { Usefirebase } from "../Firebase/Firebase";

const Signup = () => {
  const Firebase = Usefirebase();
  

  const navigate = useNavigate();


  useEffect(()=>{
    if (Firebase.LoginOrNot) {
      navigate("/main")
    }
  
   },[Firebase, navigate ])

 
  //! User information
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errmsg, seterrmsg] = useState("");

  const HandleForm = async (e) => {
    e.preventDefault();

    await Firebase.SingUpUserEmailAndPassword(values.email, values.password)
    .then((Response) => {
      navigate("/signin");
      Firebase.PutData("users/" + values.name, values.email, values.password);
          console.log(Response);
    })
    .catch((error) => {
          switch (error.code) {
          case "auth/email-already-in-use":
          seterrmsg(
            "The email address is already in use by another account."
          );
          break;
           case "auth/network-request-failed":
          seterrmsg(
            "A network error has occurred. Please check your connection and try again."
          );
          break;

          case "auth/invalid-email":
          seterrmsg("The email address is not valid");
          break;
          case "auth/weak-password":
          seterrmsg("please fill a strong password");
          break;
          default:
          if (!values.name || !values.email || !values.password) {
            seterrmsg("please fill All values correctly ");
          } else if (!values.name) {
            seterrmsg("please fill a vaild name ");
          } else if (!values.email) {
            seterrmsg("please fill a vaild email  ");
          } else if (!values.password) {
            seterrmsg("please  fill password ");
          }

          break;
      }
    });

  };

  return (
    <div className="signin">
      <Section1 />

      <div className=" signin-container">
        <section className="inputs-container">
          <form>
            <p
              style={{
                fontSize: "0.90rem",
                textAlign: "center",
                color: "#eb8703",
              }}
            >
              {errmsg}
            </p>
            <h2>Sign up</h2>
            <label>Name</label> <br />
            {}
            <input
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, name: e.target.value }));
              }}
              type={"text"}
              placeholder="username"
              required
            />
            <br />
            <label>email</label> <br />
            <input
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, email: e.target.value }));
              }}
              placeholder="email"
              type={"email"}
              required
            />
            <br />
            <label>Password</label> <br />
            <input
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, password: e.target.value }));
              }}
              type={"password"}
              placeholder="password"
              required
            />
           
              <button
                onClick={HandleForm}
                type="submit"
                className="submit-btn btn-read btn"
              >
                Create acount
              </button>
          
            <Link
              style={{
                fontSize: "0.90rem",
                textAlign: "center",
                color: "#737373",
                
              }}
              to={"/signin"}
            >
              Log in
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
