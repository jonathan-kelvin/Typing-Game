import React from "react";

export const WPM = (props) => {
    const wpm_shown = (props.charCount.c / 5 / (props.timeElapsed / 60)).toFixed(2);
    const accuracy = (props.charCount.c * 100 / (props.charCount.c + props.charCount.i)).toFixed(0);

    return (
        <div>
            <h2>WPM</h2>
            <div>
                Char Count: {props.charCount.c}
            </div>
            <div>
                Incorrect Char: {props.charCount.i}
            </div>
            <div>
                Time: {props.timeElapsed}
            </div>
            <div>
                Accuracy: {accuracy}%
            </div>
            <div>
                WPM: {wpm_shown}!
            </div>
        </div>
    );
};