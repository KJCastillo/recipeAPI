import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export const App = () => {

  const appID = "b987e4bd"
  const apiKey = "cdf7a13223282b8719e9fe4b8216e19e"
  const apiRequest = 
  `https://api.edamam.com/search?q=chicken&app_id=${appID}&app_key=${apiKey}`
  //used backticks to insert appID and apiKey
  
  return (
    <div className="App ">
      <Navbar />
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default App;
