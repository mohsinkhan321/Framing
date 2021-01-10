import React from "react";
import Third from "./Third";

import IMGSTORE from "./IMG-store";

const Second = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="text-center col-sm-12">
            <h3 className="mt-5 same-h3">What You Wish To Frame?</h3>
            <hr className="horz" />
            <p className="paragra">Customize Your Frame To Fit Artworks,Photos And Many More!</p>
          </div>
        </div>
        {IMGSTORE.map((val) => {
        return <Third key={val.id} imgsrc={val.imgsrc} title={val.title} />;
      })}
      </div>
    </>
  );
};

export default Second;
