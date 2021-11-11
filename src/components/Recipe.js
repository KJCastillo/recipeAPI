import React from "react";
import "../App.css";

const Recipe = ({title, cuisineType, image}) => {
  //call props from App.js to use below
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <p>{cuisineType}</p>
      <img src={image} alt="" />
      {/* pass props to corresponding tag in order to display */}
    </div>
  );
};

export default Recipe;
