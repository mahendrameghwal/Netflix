import React from "react";
import { Section1 } from "../components/Mainsection";


const Signin = () => {
  return (
    <div className="signin">
     <Section1 />
      <div className="signin-container">
        <section className="inputs-container">
          <h2>Sign in</h2>
          <lable>Username</lable> <br/>
          <input type={"text"} placeholder="E-mail"/>
   
          <br/>
          <lable>Password</lable> <br/>
          <input placeholder="Password" type={"text"} />
          <br/>
          <button className="submit-btn btn-read btn">Submit</button>
        </section>
        <p>new to netflix</p>
      </div>
    </div>
  );
};

export default Signin;
