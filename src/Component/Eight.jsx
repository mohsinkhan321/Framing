import React from "react";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import { Link } from "react-router-dom";

const Eight = () => {
  return (
    <>
      <div className="container mt-3 mb-5 text-center">
        <h3  className="same-h3 mt-5">That's Why Our Client Love Us</h3>
        <hr className="horz" />
        <p className="paragra">Read What Our Clients Have To Say About Our Frames</p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <img
              className="img-fluid"
              src="https://i.pinimg.com/564x/19/40/05/19400565d1b98d6daea7a22bf2118b8a.jpg"
              alt="withhand"
              style={{ width: "27rem" }}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-5" style={{textAlign:"justify"}}>
            <h5 className="mb-4" style={{fontSize:"1.6rem",fontWeight:"700"}}>JEREMY CROUSE</h5>
            <div style={{color:"#7f7272",fontSize:"1.2rem",marginBottom:"1.2rem"}}>(Graphic Designer)</div>
            <p style={{color:"#7f7272",fontSize:"1rem",marginBottom:"1.6rem"}}>
              I must say that Frame Boss is the best framing service online.They
              are not only affordable but deliver the finest frames within a
              quick time frame.I ordered an oversized frame of an artwork that
              they delivered with professionalism and perfection.Highly
              recommended!
            </p>
            <Link to="/">
              <KeyboardArrowLeftIcon />
            </Link>
            <Link to="/">
              <KeyboardArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eight;
