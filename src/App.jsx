import { useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import starburst from "/starburst.png";
import Footer from "./components/footer.jsx";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-2 text-secondary">
      <div className="logo flex flex-1 flex-col items-center">
        <img src={starburst} alt="Starburst Logo" className="w-64 h-64" />
      </div>
     
    </div>


  );
  

}

export default App;
