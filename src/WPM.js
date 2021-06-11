import React from "react";

export const WPM = (props) => {
  const wpm_shown = props.wordCount / 5 / (props.timeElapsed / 60);

  return (
    <div>
      <div>Word Count: {props.wordCount}</div>
      <div>Time: {props.timeElapsed}</div>
      <div>WPM: {wpm_shown.toFixed(2)}!</div>
    </div>
  );
};
