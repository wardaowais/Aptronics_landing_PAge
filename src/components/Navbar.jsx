import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <div className="logo">Aptronics</div>
        </div>

        <div className={showMediaIcons ? "mobile-menu active" : "right"}>
          <ul className="menu">
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <button className="projectbutton">Estimated Project</button>
        </div>

        <div className="hamburger">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <img src="hamburger.svg" alt="Hamburger Menu" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
