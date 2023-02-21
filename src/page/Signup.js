import React, { useState } from "react";
import { Section1 } from "../components/Mainsection";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  //! User information
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errmsg, seterrmsg] = useState("");

  const HandleForm = async (e) => {
    e.preventDefault();

    navigate("/signin");
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
