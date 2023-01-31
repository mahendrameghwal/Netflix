import React from "react";

const Footer = () => {
  return (
    <main className="main-footer">
      <div className="footer">
        <div className="footer-row">
          <div className="footer-col">
            <p>FAQ</p>
            <p>Media Center</p>
            <p>Way to Watch</p>
            <p>Cokkie Perferrences</p>
          </div>
          <div className="footer-col">
            <p>Help Center</p>
            <p>Investor Relations</p>
            <p>Terms of Use</p>
            <p>Corporate Information</p>
          </div>
          <div className="footer-col">
            <p>Acount</p>
            <p>Jobs</p>
            <p>Privacy</p>
            <p>Contact Us</p>
          </div>

          <div className="footer-col">
            <p>Speed Test</p>
            <p>Legal Notices</p>
            <p>Only on Netflix</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <p
        style={{
          color: "#737373",
          textAlign: "center",
          width: "90%",
          margin: "auto",
        }}
      >
        Netflix India
      </p>
    </main>
  );
};

export default Footer;
