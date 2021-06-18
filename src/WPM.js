import React from "react";
import "./wpm.css";
export const WPM = (props) => {
  const wpm_shown = (props.charCount.c / 5 / (props.timeElapsed / 60)).toFixed(
    2
  );

  const wpm_raw = (
    (props.charCount.c + props.charCount.i) /
    5 /
    (props.timeElapsed / 60)
  ).toFixed(2);

  const accuracy = (
    (props.charCount.c * 100) /
    (props.charCount.c + props.charCount.i)
  ).toFixed(0);

  return (
    <div className={props.darkMode ? "show-results-dark" : "show-results"}>
      {/* <h2>WPM</h2> */}
      <div className="show-WPM">WPM: {wpm_shown}</div>
      <div className="show-other-results">
        <div>Raw WPM: {wpm_raw}</div>
        <div>Accuracy: {accuracy}%</div>
        <div>Char Count: {props.charCount.c}</div>
        <div>Incorrect Char: {props.charCount.i}</div>
        {/* <div>Time: {props.timeElapsed}</div> */}
      </div>
    </div>
  );
};
