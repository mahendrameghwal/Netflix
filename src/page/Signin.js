import React, { useState } from "react";
import { Link, Navigate} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { Section1 } from "../components/Mainsection";
import { BiShow, BiHide } from "react-icons/bi";

const Signin = () => {


  

  //for password show and hide
  const [showpassword, setshowpassword] = useState();

  const [ErrorMessage, setErrorMessage] = useState("");



  const [values, setvalues] = useState({
    email: "",
    password: "",
  });
    

   
  const HandleGoogle= async(e)=>{
    e.preventDefault();
    
      Navigate("/main")
  }

  
  


  const HandleForm = async (e) => {
    e.preventDefault();
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
