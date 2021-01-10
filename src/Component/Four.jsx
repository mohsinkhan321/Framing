import React from "react";
import Five from "./Five";

const Four = () => {
  return (
    <>
      <div style={{ clear: "both" }}>
        <div className="container pt-3 text-center">
          <h3 className="pt-5 same-h3">Our featured Products</h3>

          <hr className="horz" />
          <p className="paragra">Browse Through Our Of featured Products</p>

          <div className="row">
            <div className="column" style={{ flex: "50%", maxWidth: "100%" }}>
              <img
                src="https://blog.matcharesident.com/wp-content/uploads/2019/07/iStock-944453634.jpg"
                style={{ height: "47.5vw", width: "100%" }}
                alt="img0"
              />
            </div>
            <Five />
            <Five />
          </div>
        </div>
      </div>
    </>
  );
};

export default Four;
