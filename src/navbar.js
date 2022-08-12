import React from "react";
import './navbar.css'
const Navbar = () => {
return (
<nav className="main-nav">
        <div className="logo">
          <h1>React</h1>
        </div>
        <div className="menu-link">
          <ul>
            <li>
              <a href="#"> docs</a>
            </li>
            <li>
              <a href="#"> tutorial</a>
            </li><li>
              <a href="#"> blog</a>
            </li><li>
              <a href="#"> community</a>
            </li>
          </ul>
        </div>

      </nav>

)
}
export default Navbar





