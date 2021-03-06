import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4 offset-1 col-sm-2">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/aboutus">About Us</Link>
              </li>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-7 col-sm-5">
            <h5>Our Address</h5>
            <address>
              B/2M Kesar Bagh Colony
              <br />
              Scheme no 103, Behind Chameli Devi School
              <br />
              Indore,M.P India
              <br />
              <i className="fa fa-phone fa-lg"></i>: +91 7507169121
              <br />
              <i className="fa fa-fax fa-lg"></i>: +91 7507169121
              <br />
              <i className="fa fa-envelope fa-lg"></i>:{" "}
              <a href="mailto:confusion@food.net"> confusion@food.net</a>
            </address>
          </div>
          <div className="col-12 col-sm-4 align-self-center">
            <div classname="text-center">
              <a
                className="btn btn-social-icon btn-github"
                href="https://github.com/jackshubh"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="https://www.facebook.com/sassy.sakht"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/shubham-saraswat-8191b1113/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-google"
                href="http://youtube.com/"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                className="btn btn-social-icon"
                href="mailto:shubham.sara@gmail.com"
              >
                <i className="fa fa-envelope-o"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2020 shubham saraswat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
