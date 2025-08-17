import { useState } from "react";
import Typewriter from "typewriter-effect/dist/core";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import starburst from "/starburst.png";
function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary p-2 text-secondary">
      <div className="logo flex flex-2 flex-col items-center">
        <img src={starburst} alt="Starburst Logo" className="w-16 h-16" />
      </div>
      <div className="text-center flex-3 flex flex-col">
        <h2 className="text-2xl font-bold">SAFAL</h2>
        <span className="font-bold text-[.25rem]">I make cool sh<span className="text-red-500">*</span>t</span>
      </div>
    </div>
  );
}

export default App;
