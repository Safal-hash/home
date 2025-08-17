import { useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import starburst from "/starburst.png";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
function App() {
  return (
      <div className="min-h-screen bg-primary font-inter">
        <Navbar />
        <Hero />
      </div>
     



  );
  

}

export default App;
