import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-light">
        <div className="container pt-5 border-bottom">
          <div className="row">
            <div className="col-md-3 col-sm-12 mb-3">
              <ul className="list-group">
                <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2"
                  style={{ color: "#818494", fontWeight: "500" }}
                >
                  Get App
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <Link to="/">
                    <AppleIcon />
                  </Link>
                  <Link to="/">
                    <WhatsAppIcon />
                  </Link>
                </li>
                <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2"
                  style={{ color: "#818494", fontWeight: "500" }}
                >
                  Follow US
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <Link to="/">
                    <FacebookIcon />
                  </Link>
                  <Link to="/">
                    <TwitterIcon />
                  </Link>
                  <Link to="/">
                    <InstagramIcon />
                  </Link>
                </li>
                <li
                  className="list-group-item bg-transparent border-0 p-0 mb-2"
                  style={{ color: "#818494", fontWeight: "500" }}
                >
                  Get insprition
                </li>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                  <input className="input1" type="text" />
                  <input className="input2" type="button" value="SUBMIT" />
                </li>
              </ul>
            </div>
            <div className="col-md-9 col-sm-12">
              <div
                className="col-md-3 col-sm-6 col-6 p-0 mb-3"
                style={{ float: "left" }}
              >
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Framing Process</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Hanging Tips</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">For Business</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-3 col-sm-6 col-6 p-0 mb-3"
                style={{ float: "left" }}
              >
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">About Us</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Gallery Wall</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Careers</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Pricing</Link>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-3 col-sm-6 col-6 p-0 mb-3"
                style={{ float: "left" }}
              >
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Gift Card</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div
                className="col-md-3 col-sm-6 col-6 mb-3 p-0"
                style={{ float: "left" }}
              >
                <ul className="list-group">
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Team Of Service</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Privacy Policy</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Accessibility</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0 mb-2">
                    <Link to="/">Sitemap</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
