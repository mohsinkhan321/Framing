import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" href="#">
            INDEX.
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav mb-2 mb-lg-0"
              style={{ marginLeft: "auto" }}
            >
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  SERVICES
                </Link>
                <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Sccial Media Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Diploma Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Jersey Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Canvas Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Wedding Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Gallery Wall Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Business Framing
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Artist And Vendor Framing
                    </Link>
                  </li>
                  
                  <li>
                    <hr className="dropdown-divider" style={{borderTop:"1px solid #f8f9fa"}} />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      Something else here
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  FRAMES
                </Link>
                <ul className="dropdown-menu bg-light" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" href="#">
                      Our Frames
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" style={{borderTop:"1px solid #f8f9fa"}} />
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      What We Frames
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  BLOG
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  CONTACT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  GIFTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                <PersonIcon/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <ShoppingBasketIcon/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </>
  );
};
export default Navbar;