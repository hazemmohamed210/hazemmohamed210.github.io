/* eslint-disable */
import React from "react";
import "./navbar.css";

function navbar() {
  return (
    <div className="nbar">
      <div className="nbar-left">
        <span>Hazem</span>
        <span>dark mode</span>
      </div>
      <div className="nbar-right">
        <div className="nbar-list">
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Experience</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
          </ul>
        </div>
        <div className="nbar-contact">
          <button className="main-btn">Contact</button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
