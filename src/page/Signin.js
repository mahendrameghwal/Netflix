/* eslint-disable no-lone-blocks */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import { Section1 } from "../components/Mainsection";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";

const Signin = ({setLoginUser}) => {
  const navigate = useNavigate();
  //for password show and hide
  const [showpassword, setshowpassword] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  const [ErrorMessage, setErrorMessage] = useState("");
  const [afterlogin, setafterlogin] = useState(null);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = async () => {
    const { email, password } = user;
    

    await axios
      .post("http://localhost:8800/signin", user)
      .then((resp) => {
        alert(resp.data.message)
         if (resp.data.LoggedInUser){
          setLoginUser(resp.data.LoggedInUser);
           navigate("/main")      
          localStorage.setItem("LoggedInuser", JSON.stringify(resp.data.LoggedInUser._id));
         }
      })
      .catch((err) => {
        console.log(err);
      });
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

        <section className="inputs-container">
          <h2>Sign in</h2>
          <br />
          <label>E-mail</label> <br />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            type={"email"}
          />
          <br />
          <label>Password</label> <br />
          <div>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="Enter your Password"
            ></input>
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
            <button onClick={login} className="submit-btn btn-read btn">
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
          <div className="tl">
            <button type="submit" className="  signupbtn btn ">
              new to netflix
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
