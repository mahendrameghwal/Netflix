import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { Section1 } from "../components/Mainsection";

const Signin = () => {
  const [email, setemail] = useState("");
  const [Password, setpassword] = useState("");

  const HandleForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className="signin">
      <Section1 />
      <div className="signin-container">
        <form
          onSubmit={(e) => {
            HandleForm(e);
          }}
        >
          <section className="inputs-container">
            <h2>Sign in</h2>
            <label>Username</label> <br />
            <input
              onChange={(e) => {
                setemail(e.target.value);
              }}
              type={"email"}
              placeholder="E-mail"
            />
            <br />
            <label>Password</label> <br />
            <input
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              placeholder="Password"
              type={"password"}
            />
            <br />
            <button className="submit-btn btn-read btn">Log in</button>
            <br/>

            <button type="submit" className="  submit-btn google btn-read btn my">
            <FcGoogle /> Sign with Google
          </button>
          </section>
          
        
        


        {  // <Link to={"/signup"}>
          //   <button type="submit" className="signupbtn btn ">
          //     new to netflix
          //   </button>
          // </Link>
        }
          
        </form>
      </div>
    </div>
  );
};

export default Signin;
