import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";
import kitchen from "./img/kitchen.png";

export const App = () => {
  const appID = "b987e4bd";
  const apiKey = "cdf7a13223282b8719e9fe4b8216e19e";

  const [recipes, setRecipes] = useState([]);
  //empty array because we are expecting arrays of recipes back

  const [search, setSearch] = useState("");
  //empty string because we are expecting a string in the input below

  const [query, setQuery] = useState("steak");
  //useState made to prevent getting every character while typing input
  //bad practice as it would call API on every character

  useEffect(() => {
    getRecipes();
  }, [query]);
  //comma and array makes useEffect run just once on mount and not on every re rrender
  //if you place a value in the array, useEffect will run when the value changes

  const getRecipes = async () => {
    // use async before arrow function for api call
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}`
    );
    //used backticks to insert appID and apiKey
    const data = await response.json();
    //await before promise since fetch is from an external request, call use .then()
    setRecipes(data.hits);
  };
  //function used to call API

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  //function allows you get finished search input and not every character as you type

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };
  //function allows you to update search input

  return (
    <div className="App ">
      <Navbar />
      <div
        className="body container-fluid"
        style={{ backgroundImage: `url(${kitchen})` }}
      >
        <div className="row justify-content-center">
          <form
            onSubmit={getSearch}
            className="search-form col-5"
          >
            {/* onSubmit function is called after input is done and submitted */}
            <label className="label d-inline-block">FIND A RECIPE</label>
            <input
              className="search-bar form-control d-inline"
              type="text"
              value={search}
              onChange={updateSearch}
            />
            {/* pass search prop to input in order to use */}
            {/* pass updateSearch function to update input and use state */}
            <button className="search-button btn btn-info mt-3" type="button">
              yum!
            </button>
          </form>
        </div>
      </div>
      <div className="recipe-output">
        {recipes.map((recipe) => (
          <Recipe
            className="col-4"
            title={recipe.recipe.label}
            cuisineType={recipe.recipe.cuisineType}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            key={Math.random() * 1000}
          />
          //correctly call what you want to display from api
          //recipe(map param).recipe(name of array).label(name of what holds title of recipe)
          //have key in order to stop error in console
        ))}
        {/* map through in order to display all recipes thru Recipe component */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
