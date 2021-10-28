import React, { Component } from "react";
import ycth from "../img/ycth.png";
import "../App.css";

const Body = () => {
  return (
    <div className="body">
      <p className="App-intro pt-5">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <img src={ycth} className="ycth" alt="ycth img" />
    </div>
  );
};

export default Body;
