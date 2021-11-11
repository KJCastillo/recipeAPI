import React from "react";
import "../App.css";

const Recipe = ({title, cuisineType, image, ingredients}) => {
  //call props from App.js to use below
  return (
    <div className="recipe">
      <h1>{title}</h1>
      <h4>{cuisineType}</h4>
      <img className="pb-3" src={image} alt="" />
      {/* pass props to corresponding tag in order to display */}
      <ul>
        {ingredients.map(ingredient => (
          <li className=" list-unstyled">{ingredient.text}</li>
        ))}
      </ul>
      {/* create ul and map prop to display ingredients in li, since they are in an array */}
    </div>
  );
};

export default Recipe;
