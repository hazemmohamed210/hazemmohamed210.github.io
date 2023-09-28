import React from "react";
import "./intro.css";

function intro() {
  return (
    <div className="intro">
      <div className="orbitball b1"></div>
      <div className="orbitball b2"></div>
      <div className="orbitball b3"></div>
      <div className="orbitball b4"></div>
      <div className="orbitball b5"></div>
      <div className="orbitball b6"></div>
      <div className="orbitball b7"></div>
      <div className="orbitball b8"></div>
      <div className="name">
        <span>Hello, I am </span>
        <span>Hazem Anwar</span>
        <span>.</span>
      </div>
      <div className="summary">
        <span>I am a </span>
        <span>full-stack </span>
        <span>web developer.</span>
      </div>
      <button className="main-btn intro-btn">View my work</button>
    </div>
  );
}

export default intro;
