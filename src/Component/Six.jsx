import React from "react";

const Six = () => {
  return (
    <>
      <div className="container mt-3 text-center">
        <h3 className="same-h3 mt-5">Custom Framing Steps</h3>
        <hr className="horz" />
        <p className="paragra">True Custom Framing Made Truly Simple.</p>
        <div className="row mt-5">
          <div className="col-lg-4 col-sm-12">
            <div style={{ width: "300px" }}>
              <img
                className="img-fluid"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZhd1-37-O4-VsAy6nx1jzAxWzI4rVuCRYOw&usqp=CAU"
                alt="step1"
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div style={{ width: "300px" }}>
              <img
                className="img-fluid"
                src="https://c2.staticsfly.com/asset/fetch/cs/PZN_FRAME-336076-1653-MERCHLARGE_FRONT/thumbnail.preview/v2"
                alt="stpe2"
              />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div style={{ width: "300px" }}>
              <img
                className="img-fluid"
                src="https://artevenue.com/static/img/custom_framing/upload_icon.png"
                alt="step3"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-dark text-center">
            <button className="btn btn-outline-dark px-5">START FRAMING</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Six;
