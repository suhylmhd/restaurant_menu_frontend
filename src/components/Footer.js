import React from "react";
import Logo from "../assets/logo.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-box">
          <h4>CONNECT WITH US</h4>
          <p>📞 +91 9567843340</p>
          <p>📧 info@deepnetsoft.com</p>
        </div>
        <div className="footer-box">
          <img src={Logo}  alt="logo" className="footer-logo" />
          <p><b>DEEP</b> NET<br />SOFT</p>
        </div>
        <div className="footer-box">
          <h4>FIND US</h4>
          <p>📍 First floor, Geo infopark,<br /> Infopark EXPY, Kakkanad</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;
