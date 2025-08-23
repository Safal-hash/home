import { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Typewriter from "typewriter-effect/dist/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import starburst from "/starburst.png";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Recipes from "./components/recipes.jsx";
import Test from "./components/RecipeCard.jsx";



function App() {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
  );
}

export default App;

