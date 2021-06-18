import { useEffect, useState } from "react";
import TimerSet from "./TimerSet";
import TimerShow from "./TimerShow";

function Timer(props) {
    //hooks
    const [time, setTime] = useState(30);

    useEffect(() => {
        props.timeElapsed(time);
    }, [time]);
    //return function
    return (
        <div>
        <TimerSet 
            updateTime={(params) => setTime(params)} 
            inputReference={props.inputReference} 
            darkMode={props.darkMode} 
        />
        {/* Time in Timer: {time} */}
        <TimerShow
            start={props.start}
            seconds={time}
            stop={(params) => props.stop(params)}
            darkMode={props.darkMode}
        />
        </div>
    );
}

export default Timer;
