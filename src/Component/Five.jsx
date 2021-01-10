import React from "react";
import { Link } from "react-router-dom";

const Five = () => {
  return (
    <>
      <div className="column">
        <Link className="six-imgsss" to="/">
          <img
            src="https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"
            style={{ width: "100%" }}
            alt="img1"
          />
          <div className="all-links">Dover</div>
        </Link>

        <Link className="six-imgsss" to="/">
          <img
            src="https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"
            style={{ width: "100%" }}
            alt="img2"
          />
          <div  className="all-links" >Marquette</div>
        </Link>
        <Link className="six-imgsss" to="/">
          <img
            src="https://assets.hongkiat.com/uploads/100-absolutely-beautiful-nature-wallpapers-for-your-desktop/blue-sea-sunset.jpg"
            style={{ width: "100%" }}
            alt="img3"
          />
          <div  className="all-links">Wren</div>
        </Link>
      </div>
    </>
  );
};

export default Five;
