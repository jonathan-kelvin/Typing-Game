import { useEffect, useState } from "react";

function TimerSet(props) {
    //hooks
    const [time, setTime] = useState(null)
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
            />
            <button onClick={() => setTime(inputValue)}>Set Time</button>
            <button onClick={FifteenButton}>15</button>
            <button onClick={ThirtyButton}>30</button>
            <button onClick={SixtyButton}>60</button>
            Time in timerset: {time}
        </div>
    )
}

export default TimerSet;