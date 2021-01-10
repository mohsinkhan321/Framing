import React from "react";
import { Link } from "react-router-dom";

const Third = (props) => {
  return (
    <>

        <div className="gallery mt-4 mb-4">
          <div className="style-six-img">
            <Link href="#" className="six-imgs">
              <img
                style={{ marginBottom: "1.4rem" }}
                src={props.imgsrc}
                alt="img1"
                width={600}
                height={400}
              />
            </Link>
          </div>

          <Link className="mt-5 all-links" href="#">
            {props.title}
          </Link>
        </div>

    </>
  );
};

export default Third;