import React from "react";
import starburst from "/starburst.png";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard.jsx";
const Hero = () => {
  return (
    <div className="flex align-center justify-evenly p-12">
      {" "}
      {/* Main div that accounts for landing text and image */}
      <div className="flex flex-col items-start justify-center mt-5">
        <span className="text-xs text-gray-500 font-semibold">
          {" "}
          {/* Tagline */}
          EASY &nbsp; SOUTH &nbsp; ASIAN &nbsp; RECIPES{" "}
        </span>
        <p className="text-6xl font-bold mt-3">
          Find the perfect
          <br />{" "}
          <span className="text-6xl text-center font-bold text-accent">
            Nuस्खा
          </span>{" "}
          for you.
        </p>
        <br />
        <p className=" text-gray-500 text-lg font-normal">
          Discover a world of flavors with our easy-to-follow recipes, <br />bringing
          the taste of South Asia to your kitchen.
        </p>
        <Link to="/recipes">
          <button
            type="button"
            className="mt-6 bg-secondary text-primary px-6 py-3 rounded-full hover:bg-accent transition duration-400 cursor-pointer"
          >
            Start Exploring →
          </button>
        </Link>
      </div>
    <div>
      <RecipeCard />
    </div>
  </div>
  );
};

export default Hero;
