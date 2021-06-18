import "./App.css";
import { useState, useEffect, useRef } from "react";
import Timer from "./Timer";
import WordCheck from "./WordCheck";
import ResetButton from "./ResetButton";
import { WPM } from "./WPM";
import { WordGenerator } from "./WordGenerator";

function App() {
  //hooks
  const [startTimer, setStartTimer] = useState(false);
  const [showWords, setShowWords] = useState(true);
  const [corrChars, setCorrChars] = useState(0);
  const [incorChars, setIncorChars] = useState(0);
  const [time, setTime] = useState(0);
  const [showTime, setShowTime] = useState(0);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    setShowTime(time);
  }, [showWords]);

  useEffect(() => {
    if (!startTimer) {
      window.addEventListener("keydown", StartTheTimer);
      return () => window.removeEventListener("keydown", StartTheTimer);
    }
  }, [startTimer]);

  const inputRef = useRef();
  const enterRef = useRef();
  const fifteenRef = useRef();
  const thirtyRef = useRef();
  const sixtyRef = useRef();
  const darkRef = useRef();

  //variables
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

  const Words = WordGenerator();

  //functions
  const StartTheTimer = (e) => {
    if (ValidKeys.includes(e.key)) {
      inputRef.current.blur();
      enterRef.current.blur();
      fifteenRef.current.blur();
      thirtyRef.current.blur();
      sixtyRef.current.blur();
      setStartTimer(true);
      window.removeEventListener("keydown", StartTheTimer);
    }
  };

  const StopTheTimer = (params) => {
    setShowWords(params);
  };

  //return function
  return (
    <div className={darkMode ? "app-background-dark" : "app-background"}>
      <a href="/" className="logo">
        <img src="logo1.svg" alt="logo" />
        <div className={darkMode ? "logo-name-dark" : "logo-name"}>TYPEACE</div>
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
        inputReference={{
          i: inputRef,
          e: enterRef,
          f: fifteenRef,
          t: thirtyRef,
          s: sixtyRef,
        }}
        darkMode={darkMode}
      />

      <div>
        {showWords && (
          <div className="text-box">
            <WordCheck
              returnWords={(correct_params, wrong_params) => {
                setCorrChars(correct_params);
                setIncorChars(wrong_params);
              }}
              words={Words}
              darkMode={darkMode}
            />
          </div>
        )}
      </div>

      <div>
        {!showWords && (
          <WPM
            charCount={{ c: corrChars, i: incorChars }}
            timeElapsed={showTime}
            darkMode={darkMode}
          />
        )}
      </div>

      <div className="reset-button-preset">
        {!showWords && (
          <ResetButton
            clicked={() => {
              setShowWords(true);
              setStartTimer(false);
            }}
          />
        )}
      </div>
      <div className="mode-button-preset">
        {darkMode ? (
          <button
            className="mode-button"
            onClick={() => {
              setDarkMode((d) => !d);
              darkRef.current.blur();
            }}
            ref={darkRef}
          >
            Light Mode
          </button>
        ) : (
          <button
            className="mode-button"
            onClick={() => {
              setDarkMode((d) => !d);
              darkRef.current.blur();
            }}
            ref={darkRef}
          >
            Dark Mode
          </button>
        )}
      </div>
      {/* <button onClick={() => setDarkMode((d) => !d)} ref={darkRef}>
        Dark Mode
      </button> */}
    </div>
  );
}

export default App;
