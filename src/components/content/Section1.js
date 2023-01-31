import React, { useState } from "react";
import {MdArrowForwardIos} from "react-icons/md"

const Section = () => {
  const [content , setcontent]= useState(true)
  return (
    <div className="section sections h-100">
      <div className="section-content tc">
        <div>
          <h1 className="h1">Unlimited movies, TV shows and more.</h1>
          <p >Watch anywhere. Cancel anytime.</p>
          <p className="medium">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
        <div className="div-input ">
        <input  placeholder="Email address" className="input-main" type={"text"}/>
        <button className="  btn started btn-read ">Get Started <MdArrowForwardIos/></button>
        </div>
      </div>
    </div>
  );
};

export default Section;
