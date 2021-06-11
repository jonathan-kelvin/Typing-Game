import { useState } from "react";
import { WordGenerator } from "./WordGenerator";
import useKeyPress from "./useKeyPress";

const Words = WordGenerator();

function WordCheck() {
    //hooks
    const [leftPadding, setLeftPadding] = useState(new Array(20).fill(' ').join(''));
    const [finishedChars, setFinishedChars] = useState('');
    const [currentChar, setCurrentChar] = useState(Words.charAt(0));
    const [otherChars, setOtherChars] = useState(Words.substr(1));

    useKeyPress((key) => {
        let updatedFinishedChars = finishedChars;
        let updatedOtherChars = otherChars;

        if (key === currentChar) {
            if (leftPadding.length) {
                setLeftPadding(leftPadding.substr(1));
            }
            updatedFinishedChars += currentChar;
            setFinishedChars(updatedFinishedChars);
            setCurrentChar(otherChars.charAt(0));
            updatedOtherChars = otherChars.substr(1);
            if (updatedOtherChars.split(' ').length < 10) {
                updatedOtherChars += ' '+WordGenerator();
            }
            setOtherChars(updatedOtherChars);

        }
    });

    //return function
    return (
        <div>
            Words: {Words}
            <br/>
            Left + Finished: {leftPadding + finishedChars}
            <br/>
            Current: {currentChar}
            <br/>
            Other: {otherChars}
        </div>
    )
}

export default WordCheck;