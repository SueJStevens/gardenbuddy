import React from "react";
import "./style.css";

function Navbar(props) {
    return(
      <nav className="nav-extended nav-fixed teal">
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Gardenbuddy!</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="about" href="sass.html">About Us</a></li>
            <li><a className="contact" href="badges.html">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar;