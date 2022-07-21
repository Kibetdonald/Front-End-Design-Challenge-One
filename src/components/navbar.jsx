import React, { useState } from "react";
import "../assets/styles/navbar.scss";
import Logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <span className="nav-logo">
        <img src={Logo} alt="logo" />
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#">Pricing</a>
        <a href="#">Product</a>
        <a href="#">About Us</a>
        <a href="#">Careers</a>
        <a href="#">Community</a>
      </div>
      <br/>
      <a href="#" className="btn-letsgetstarted">
        Get Started
      </a>
      <div className="rectangle"></div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
