import "./App.css";
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import WordCheck from "./WordCheck";
import { WPM } from "./WPM";

function App() {
  const [startTimer, setStartTimer] = useState(false);
  const [showWords, setShowWords] = useState(true);
  const [totalWords, setTotalWords] = useState(0);
  const [time, setTime] = useState(0);

  const ValidKeys = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    " ",
  ];

  useEffect(() => {
    window.addEventListener("keydown", StartTheTimer);
    return () => window.removeEventListener("keydown", StartTheTimer);
  }, []);

  const StartTheTimer = (e) => {
    if (ValidKeys.includes(e.key)) {
      setStartTimer((s) => !s);
      window.removeEventListener("keydown", StartTheTimer);
    }
  };

  const StopTheTimer = (params) => {
    setShowWords(params);
  };

  return (
    <div className="app-background">
      <a href="/" className="logo">
        <img src="logo1.svg" alt="logo" />
        <div className="logo-name">TYPEACE</div>
      </a>
      <img className="keycap A-keycap" src="A-keycap.png" alt="A-keycap" />
      <img className="keycap F-keycap" src="F-keycap.png" alt="F-keycap" />
      <img className="keycap N-keycap" src="N-keycap.png" alt="N-keycap" />
      <img className="keycap p-keycap" src="p-keycap.png" alt="p-keycap" />
      <img className="keycap U-keycap" src="U-keycap.png" alt="U-keycap" />
      <Timer
        start={startTimer}
        stop={StopTheTimer}
        timeElapsed={(params) => setTime(params)}
      />
      <div>
        {showWords && (
          <div className="text-box">
            <WordCheck returnWords={(params) => setTotalWords(params)} />
          </div>
        )}
      </div>
      <WPM wordCount={totalWords} timeElapsed={time} />
    </div>
  );
}

export default App;
