import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Recipe from "./components/Recipe";
import Footer from "./components/Footer";

export const App = () => {
  const appID = "b987e4bd";
  const apiKey = "cdf7a13223282b8719e9fe4b8216e19e";

  const [recipes, setRecipes] = useState([]);
  //empty array because we are expecting arrays of recipes back

  useEffect(() => {
    getRecipes();
  }, []);
  //comma and array makes useEffect run just once on mount and not on every re rrender
  //if you place a value in the array, useEffect will run when the value changes i.e. counter

  const getRecipes = async () => {
    // use async before arrow function for api call
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${apiKey}`
    );
    //used backticks to insert appID and apiKey
    const data = await response.json();
    //await before promise since fetch is from an external request, call use .then()
    setRecipes(data.hits)
  };

  return (
    <div className="App ">
      <Navbar />
      <Header />
      <Body recipes={recipes} setRecipes={setRecipes} />
      {/* pass props to body to use in body component */}
      {recipes.map(recipe => (
        <Recipe />
      ))}
      <Footer />
    </div>
  );
};

export default App;
