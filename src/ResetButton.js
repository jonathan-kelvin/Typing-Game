import { useEffect, useRef } from "react";

function ResetButton(props) {
    //hooks
    const resetRef = useRef();

    const ResetGame = () => {
        props.clicked();
        resetRef.current.blur();
    }

    useEffect(() => {
        window.addEventListener("keydown", PressButton);
        return () => window.removeEventListener("keydown", PressButton);
    }, []);

    //functions
    const PressButton = (e) => {
        if (e.key === "Enter") {
            props.clicked();
        }
    }

    //return function
    return (
        <div>
            <button ref={resetRef} onClick={ResetGame} > 
                Restart
            </button>
        </div>
    )
}

export default ResetButton;