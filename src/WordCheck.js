import { useState, useEffect } from "react";
import { WordGenerator } from "./WordGenerator";
import useKeyPress from "./useKeyPress";
import "./WordCheck.css";

function WordCheck(props) {
  //variables
  const Words = props.words;

  //hooks
  const [leftPadding, setLeftPadding] = useState(
    new Array(40).fill(" ").join("")
  );
  const [finishedChars, setFinishedChars] = useState("");
  const [currentChar, setCurrentChar] = useState(Words.charAt(0));
  const [otherChars, setOtherChars] = useState(Words.substr(1));
  const [corrChars, setCorrChars] = useState(0);
  const [incorChars, setIncorChars] = useState(0);

  useEffect(() => {
    return () => props.returnWords(corrChars, incorChars);
  });

  useKeyPress((key) => {
    let updatedFinishedChars = finishedChars;
    let updatedOtherChars = otherChars;

    if (key === currentChar) {
      setCorrChars((c) => c + 1);

      if (leftPadding.length) {
        setLeftPadding(leftPadding.substr(1));
      }
      updatedFinishedChars += currentChar;
      setFinishedChars(updatedFinishedChars);
      setCurrentChar(otherChars.charAt(0));
      updatedOtherChars = otherChars.substr(1);
      if (updatedOtherChars.split(" ").length < 10) {
        updatedOtherChars += " " + WordGenerator();
      }
      setOtherChars(updatedOtherChars);
    } else {
      setIncorChars((i) => i + 1);
    }
  });

  //return function
  return (
    <div clasName="Text">
      {/* <h2>WORDCHECK</h2> */}
      <p className="Character">
        <span className={props.darkMode ? "Character-out-dark" : "Character-out"}>
          {(leftPadding + finishedChars).slice(-30)}
        </span>
        <span className={props.darkMode ? "Character-current-dark" : "Character-current"}>{currentChar}</span>
        <span className={props.darkMode ? "Character-in-dark" : "Character-in"}>{otherChars.substr(0, 30)}</span>
      </p>
    </div>
  );
}

export default WordCheck;
