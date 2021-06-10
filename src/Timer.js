import { useState } from "react";
import TimerSet from "./TimerSet";
import TimerShow from "./TimerShow";

function Timer() {
    //hooks
    const [time, setTime] = useState(null)

    //return function
    return (
        <div>
            <TimerSet updateTime={(params) => setTime(params)}/>
            Time in Timer: {time}
            <TimerShow seconds={time} />
        </div>
    )
}

export default Timer;