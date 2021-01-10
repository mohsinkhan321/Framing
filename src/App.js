import React from "react";
// import { Switch, Redirect, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./Component/Navbar";
import INDEX from "./Component/INDEX";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import { BrowserRouter } from "react-router-dom";


const App = () => {
  return (
    <>
      
      <BrowserRouter>
      <Navbar />
      <INDEX/>
      </BrowserRouter>
      
        
    </>
  );
};

export default App;
