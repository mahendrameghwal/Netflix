import React, { useState } from "react";
import { Section1 } from "../components/Mainsection";
import { Link, useNavigate } from "react-router-dom";
import {Usefirebase } from "../Firebase/Firebase";


const Signup = () => {
  const Firebase = Usefirebase();

  const navigate = useNavigate();

  // const [ user, setuser] = useState(null);
  //! User information
  const [values, setvalues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errmsg, seterrmsg] = useState("");


  const HandleForm = async (e) => {
    e.preventDefault();

    await Firebase.SignUserWithEmailAndPassword(
      values.name,
      values.email,
      values.password
    )
      .then((Response) => {
        Firebase.PutData("users/" + values.name, values.email, values.password);

        navigate("/signin");
        console.log("success");
        console.log(Response.user.email);
        console.log(values.name);
      })

      .catch((error) => {
        console.log(error.code);
        switch (error.code) {
          case "auth/email-already-in-use":
            seterrmsg(
              "The email address is already in use by another account."
            );
            break;
          case "auth/invalid-email":
            seterrmsg("The email address is not a vaild email");

            break;
          case "auth/weak-password":
            seterrmsg("please fill a strong password");
            break;
          default:
            if (!values.name || !values.email || !values.password) {
              seterrmsg("please fill All values correctly ");
            } else if (!values.name) {
              seterrmsg("please fill a vaild email  ");
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
            <p style={{ fontSize:"0.94rem", textAlign: "center", color: "#eb8703" }}>{errmsg}</p>
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
            <Link to={"/signin"}>
              {" "}
              <button
                onClick={HandleForm}
                type="submit"
                className="submit-btn btn-read btn"
              >
                Register
              </button>
            </Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Signup;
