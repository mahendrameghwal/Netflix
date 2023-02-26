import React, { useState } from "react";
import { Section1 } from "../components/Mainsection";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();

    //! User information
    const [ user, setuser ] = useState({
        name: "",
        email: "",
        password: "",
        conforimpassword: "",
    });

    const [ errmsg, seterrmsg ] = useState("");

    

    const Handlechange=(e)=>{
        const { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }

    const RegisterUser = () => {
        const { name, email, password, conforimpassword } = user;
        if( name && email && password ){
            axios.post("http://localhost:8800/signup", user)
            .then( res => {
                alert(res.data.message)
            }).then(error=>{
                console.log(error);
            })
        }  else if(password ===! conforimpassword){
             alert("oassword not match")
        }
        
        else {
            alert("invalid input")
        }
        
    }


    return (
        <div className="signin">
            <Section1 />

            <div className=" signin-container">
                <section className="inputs-container">
                    
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
                       
                        { }
                        <input
                        onChange={Handlechange}
                            placeholder="username"
                            type="text"
                            required
                            name="name"
                        />
                        <br />
                   
                        <input
                        onChange={Handlechange}
                            placeholder="email"
                            type="email"
                            required
                            autoComplete="on"
                            name="email"
                        />
                  <br />
                        <input
                        onChange={Handlechange}
                            type="password"
                            placeholder="password"
                            required
                            name="password"
                        />
                        <input
                        onChange={Handlechange}
                            type="password"
                            placeholder="conforim password"
                            required
                            name="conforimpassword"
                        />
                        <button
                            onClick={RegisterUser}
                            type="submit"
                            className="submit-btn btn-read btn"
                        >
                            Create acount
                        </button>
                        <div className="tc"><p>OR</p></div>
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
                   
                </section>
            </div>
        </div>
    );
};
export default Signup;




