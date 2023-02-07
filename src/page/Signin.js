import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { Usefirebase } from "../Firebase/Firebase";
import { Section1 } from "../components/Mainsection";
import { BiShow, BiHide } from "react-icons/bi";

const Signin = () => {
  const Firebase = Usefirebase();
  const navigate = useNavigate();


  useEffect(()=>{
    if (Firebase.LoginOrNot) {
      navigate("/main")
    }
  
   },[Firebase, navigate ])

  //for password show and hide
  const [showpassword, setshowpassword] = useState();

  const [ErrorMessage, setErrorMessage] = useState("");



  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
    

   
  const HandleGoogle= async(e)=>{
    e.preventDefault();
       try {
         await Firebase.SignWithGoogle().then((response)=>{
           console.log(response);
           navigate("/main")
        })
       } catch (error) {
        setErrorMessage(error)
       }
        
     
  }

  
  


  const HandleForm = async (e) => {
    e.preventDefault();
    try {
      await Firebase.LoginUserWithEmailAndPassword(
        values.email,
        values.password
      )
        .then((response) => {
          console.log(response);
          console.log(Firebase);
          navigate("/main");
        })
        .catch((error) => {
          console.log(error.code);
          switch (error.code) {
            case "auth/network-request-failed":
              setErrorMessage(
                "A network error has occurred. Please check your connection and try again"
              );

              break;
            case "auth/invalid-email":
              setErrorMessage("The email address is not valid");

              break;
            case "auth/wrong-password":
              setErrorMessage("wroung password you have entered !!");
              break;
            case "auth/user-not-found":
              setErrorMessage("User not Found ");
              break;
            default:
              if (!values.name || !values.email || !values.password) {
                setErrorMessage("please fill All values correctly ");
              } else if (!values.email) {
                setErrorMessage("please fill a vaild email  ");
              } else if (!values.password) {
                setErrorMessage("please fill password ");
              }

              break;
          }
        });
    } catch (error) {
      setErrorMessage(error);
    }
  };



  return (
    <div className="signin">
      <Section1 />
      <div className="signin-container">
        <p
          style={{ fontSize: "0.90rem", textAlign: "center", color: "#eb8703" }}
        >
          {ErrorMessage}
        </p>
        <form
          onSubmit={(e) => {
            HandleForm(e);
          }}
        >
          <section className="inputs-container">
            <h2>Sign in</h2>
            <label>E-mail</label> <br />
            <input
              onChange={(e) => {
                setvalues((prev) => ({ ...prev, email: e.target.value }));
              }}
              type={"email"}
              placeholder="E-mail"
            />
            <br />
            <label>Password</label> <br />
            <div>
              <input
                className="passwords"
                type={!showpassword ? "password" : "text"}
                onChange={(e) => {
                  setvalues((prev) => ({ ...prev, password: e.target.value }));
                }}
                placeholder="Password"
              />
              {showpassword ? (
                <BiHide
                  onClick={() => {
                    setshowpassword(!showpassword);
                  }}
                  className="showhideicon"
                />
              ) : (
                <BiShow
                  onClick={() => {
                    setshowpassword(!showpassword);
                  }}
                  className="showhideicon"
                />
              )}
            </div>
            <br />
            <section style={{ margin: "20px 0" }}>
              <button onClick={HandleForm} className="submit-btn btn-read btn">
                Log in
              </button>
              <br />
              <div
                className="w-100"
                style={{ textAlign: "center", margin: "10px 0 -10px 0" }}
              >
                {" "}
                <span>OR</span>
              </div>
             
             
            </section>
          </section>

          <Link to={"/signup"}>
            <button type="submit" className="signupbtn btn ">
              new to netflix
            </button>
          </Link>
        </form>

        <button onClick={HandleGoogle}
        type="submit"
        className=" submit-btn google btn-read btn my"
      >
        <FcGoogle /> Sign with Google
      </button>
      </div>
    </div>
  );
};

export default Signin;
