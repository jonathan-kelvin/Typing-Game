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
      <Timer
        start={startTimer}
        stop={StopTheTimer}
        timeElapsed={(params) => setTime(params)}
      />
      <div className="text-box">
        {showWords && (
          <WordCheck returnWords={(params) => setTotalWords(params)} />
        )}
      </div>
      <WPM wordCount={totalWords} timeElapsed={time} />
      {time}
    </div>
  );
}

export default App;
