import './App.css';
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import { WordGenerator } from "./WordGenerator";
import useKeyPress from "./useKeyPress";
import WordCheck from "./WordCheck";

function App() {

  return (
    <div>
      {/* <Timer /> */}
      {/* {< WordGenerator />} */}
      <WordCheck />
      
    </div>
  );
}

export default App;
