import { useEffect, useState } from "react";

function TimerSet(props) {
    //hooks
    const [time, setTime] = useState(30)
    const [inputValue, setInputValue] = useState(null)

    useEffect(() => {
        props.updateTime(time);
    }, [time]);

    //functions
    const FifteenButton = () => {
        setTime(15);
    }

    const ThirtyButton = () => {
        setTime(30);
    }

    const SixtyButton = () => {
        setTime(60);
    }

    const EnterCheck = (e) => {
        if (e.key === "Enter") {
            setTime(inputValue);
        }
    }

    //return functions
    return (
        <div>
            <input 
                onKeyDown={EnterCheck}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Time in seconds"
                type="number" 
                ref={props.inputReference.i}
            />
            <button onClick={() => setTime(inputValue)} ref={props.inputReference.e}>Set Time</button>
            <button onClick={FifteenButton} ref={props.inputReference.f}>15</button>
            <button onClick={ThirtyButton} ref={props.inputReference.t}>30</button>
            <button onClick={SixtyButton} ref={props.inputReference.s}>60</button>
            {/* Time in timerset: {time} */}
        </div>
    )
}

export default TimerSet;