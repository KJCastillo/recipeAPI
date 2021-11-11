import React from "react";
import "../App.css";

const Recipe = ({ title, cuisineType, image, ingredients }) => {
  //call props from App.js to use below
  return (
    <div className="recipe border border-dark bg-light rounded m-2">
    <div className="p-2 ">
      <h2>{title}</h2>
      <h4>{cuisineType}</h4>
      <img className="pb-3" src={image} alt="" />
      {/* pass props to corresponding tag in order to display */}
      <ul>
        {ingredients.map((ingredient) => (
          <li className="text-left list-unstyled">
            {ingredient.text}
          </li>
        ))}
      </ul>
      {/* create ul and map prop to display ingredients in li, since they are in an array */}
    </div>
    </div>
  );
};

export default Recipe;
