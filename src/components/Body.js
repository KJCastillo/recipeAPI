import React from "react";
import Recipe from "./Recipe";
import "../App.css";

const Body = () => {
  //place props in order to use, make sure they are wrapped in curly brackets
  return (
    <div className="body">
      <form className="search-form pt-5">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="button">
          search
        </button>
      </form>
      {/* call prop and map through to put out recipes in Recipe component*/}
    </div>
  );
};

export default Body;
