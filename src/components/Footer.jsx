import React from "react";

const Footer = () => {
  return (
    <div>
        <footer id="footer" className="footer ">
  <div className="container footer-top">
    <div className="row gy-4">
      <div className="col-lg-5 col-md-12 footer-about">
        <a href="index.html" className="logo d-flex align-items-center">
          <span className="sitename">Got a Project?</span>
        </a>
        <h5>Let's Talk</h5>
        <p>Tell us everything</p>
       
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Terms of service</a>
          </li>
          <li>
            <a href="#">Privacy policy</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-6 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <a href="#">Web Design</a>
          </li>
          <li>
            <a href="#">Web Development</a>
          </li>
          <li>
            <a href="#">Product Management</a>
          </li>
          <li>
            <a href="#">Marketing</a>
          </li>
          <li>
            <a href="#">Graphic Design</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
        <h4>Contact Us</h4>
        <p>A108 Adam Street</p>
        <p>New York, NY 535022</p>
        <p>United States</p>
        <p className="mt-4">
          <strong>Phone:</strong> <span>+1 5589 55488 55</span>
        </p>
        <p>
          <strong>Email:</strong> <span>info@example.com</span>
        </p>
      </div>
    </div>
  </div>
  <hr />
  <div className="container copyright text-center mt-4">
    <div className="logo">
    Appnotrics
    </div>
    <p>
      © <span> 2024 Cubix .All Rights Reserved</span>
      <span>All Rights Reserved</span>
    </p>
    
    <div className="credits">

      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
    <div className="social-links d-flex mt-4">
          <a href="">
            <i className="bi bi-twitter-x" />
          </a>
          <a href="">
            <i className="bi bi-facebook" />
          </a>
          <a href="">
            <i className="bi bi-instagram" />
          </a>
          <a href="">
            <i className="bi bi-linkedin" />
          </a>
        </div>
  </div>
</footer>

      
    </div>
  )
}

export default Footer
