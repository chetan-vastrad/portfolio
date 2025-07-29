import { useState, useEffect, useRef } from "react";
import logo from "../assets/flogo.png"
import "./Navbar.css"
const Navbar = () =>{

    return (
       <div className="mainanav">
          <div className="innermainnav">
            <ul className="navbar-links">
              <li><img src={logo} alt="" srcset="" /></li>
              <li><a>Home</a></li>
              <li><a>About</a></li>
              <li><a>Projects</a></li>
              <li><a>Contacts</a></li>
              <li><a href="tel: 7218798712">+91 72187 98712</a></li>
            </ul>
          </div>
        </div>
    );
}
export default Navbar;