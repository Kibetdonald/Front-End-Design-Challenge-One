import React from "react";
import "../assets/styles/firstsection.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../assets/images/intro.svg';

export default function FirstSection() {
  return (
    <div className="FirstSection">
      <div className="row">
        {/* First Column */}
        <div className="col-5" style={{paddingLeft: '2%'}}>
          <h2 className="bigtext">Bring everyone together to build better products.</h2>
          <p className="smalltext">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <br/>
          <a href="#" className="btn-letsgetstarted">
            Get Started
          </a>
        </div>
        {/* Second Column */}
        <div className="col-7">
            <img className="bannerImg" src={banner} alt="banner"/>
        </div>
      </div>
    </div>
  );
}
