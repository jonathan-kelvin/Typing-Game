import { useState, useEffect } from "react";

function useKeyPress(CallBack) {
    const [keyPressed, setKeyPressed] = useState(null);
    const ValidKeys = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
        's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '
    ];

    useEffect(() => {
        
        const KeyDown = (e) => {
            setKeyPressed(e.key);
        }

        const KeyUp = () => {
            setKeyPressed(null);
        }

        window.addEventListener("keydown", KeyDown);
        window.addEventListener("keyup", KeyUp); 

        return () => {
            window.removeEventListener("keydown", KeyDown);
            window.removeEventListener("keyup", KeyUp);
        }
    });

    useEffect(() => {
        if (ValidKeys.includes(keyPressed)) {
            CallBack(keyPressed);
        }
    }, [keyPressed])
    return keyPressed;
};

export default useKeyPress;