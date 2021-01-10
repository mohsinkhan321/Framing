import React from "react";
import LoopIcon from "@material-ui/icons/Loop";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import TouchAppIcon from "@material-ui/icons/TouchApp";

const Seven = () => {
  return (
    <>
      <div className="container mt-3 text-center">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="mt-5 same-h3">Why Choose Frame Boss</h3>
            <hr className="horz" />
            <p className="paragra">
              At Frame Boss,We Promise To You With Simplest And Most Affordable
              Way to Design Custom Frames With Care!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-lg-6">
            <img
              className="img-fluid"
              src="https://image.freepik.com/free-vector/watercolor-spring-floral-frame-style_52683-33272.jpg"
              alt="withhand"
              style={{ width: "27rem" }}
            />
          </div>

          <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
            <div className="service-icon-text">
              <div className="service-icon">
                <AirportShuttleIcon />
              </div>
              <div className="service-text">
                <h5>Ready To use</h5>
                <p>
                  We deliver ready to use frames build by hand shipped for free
                  at your doorstep
                </p>
              </div>
            </div>

            <div className="service-icon-text">
              <div className="service-icon">
                <TouchAppIcon />
              </div>
              <div className="service-text">
                <h5>Lowest Price Guarante</h5>
                <p>
                  We Guarante to give you the lowest price for high-quality,
                  unique
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 mt-5">
            <div className="service-icon-text">
              <div className="service-icon">
                <PersonOutlineIcon />
              </div>
              <div className="service-text">
                <h5>Enjoy Free Advice</h5>
                <p>
                  Enjoy free online design advice from our creative team for
                  custom framing framing
                </p>
              </div>
            </div>
            <div className="service-icon-text">
              <div className="service-icon">
                <LoopIcon />
              </div>
              <div className="service-text">
                <h5>Free Returns</h5>
                <p>
                  Donot like your custom frame? We offer free make
                  frame that satisfies you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seven;
