import React, { Component } from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar p-0">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="navbar-brand ml-auto"
          href="https://github.com/KJCastillo/recipeAPI"
        >
          <img
            className="github-footer"
            height="28"
            alt="github"
            src="https://img.icons8.com/nolan/64/github.png"
          />
        </a>
        <p className="mb-0 pt-1 pr-2">Made by Kevin Castillo</p>
      </nav>
    </div>
  );
};

export default Footer;
