import React, { useState } from 'react';

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
            <li>Service</li>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="projectbutton">Estimated Project</div>
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