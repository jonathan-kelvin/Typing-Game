import './App.css';
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import WordCheck from "./WordCheck";

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [showWords, setShowWords] = useState(true);

  const ValidKeys = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
    's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
  ];  

  useEffect(() => {
    window.addEventListener("keydown", StartTheTimer);
    return () => window.removeEventListener("keydown", StartTheTimer);
  }, []);

  const StartTheTimer = (e) => {
    if (ValidKeys.includes(e.key)) {
      setStartTimer(s => !s);
      window.removeEventListener("keydown", StartTheTimer);
    }
  }

  const StopTheTimer = (params) => {
    setShowWords(params);
  }

  return (
    <div>
      <h2>TIMER</h2>
      <Timer start={startTimer} stop={StopTheTimer}/>
      <h2>WORDCHECK</h2>
      {showWords && <WordCheck />}
      <h2>START TIMER</h2>
      {startTimer ? "TRUE" : "FALSE"}
    </div>
  );
}

export default App;
