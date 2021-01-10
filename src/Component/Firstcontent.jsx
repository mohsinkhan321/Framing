import React from "react";

import spring1 from "../img/hexagonal-floral-frame_23-2147674848.jpg";
import spring2 from "../img/spring-floral-frame-watercolor-style_23-2147773883.jpg";
import spring3 from "../img/watercolor-spring-floral-frame-style_52683-33272.jpg";

const First = () => {
  return (
    <>
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <div className="row">
          <div className="col-sm-6">
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={spring1}
                    className="img-fluid img-thumbnail"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={spring2}
                    className="img-fluid img-thumbnail"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={spring3}
                    className="img-fluid img-thumbnail"
                    alt="..."
                  />
                </div>
              </div>
              <a
                className="carousel-control-prev"
                href="#carouselExampleControls"
                role="button"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                href="#carouselExampleControls"
                role="button"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </div>
          <div className="col-sm-6">
            <div style={{ marginTop: "5rem", marginLeft: "2rem" }}>
              <h3 className="same-h3">
                CUSTOM FRAMES TO TELL YOUR UNIQUE STORY
              </h3>
              <p className="smallpara">
                We Make It Simple, Hassle-Free And Affordable For You To Share
                With Custom Frames!
              </p>
              <button className="btn btn-outline-dark px-5">
                START FRAMING
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default First;
