import { useEffect, useState } from "react";

function TimerShow(props) {
    //hooks
    const [time, setTime] = useState(null);
    const [startCountdown, setStartCountdown] = useState(false);
    
    useEffect(() => {
        setStartCountdown(false);
        if (props.seconds !== 0) {
            setTime(props.seconds)
        }
    }, [props.seconds]);

    useEffect(() => {
        if (startCountdown) {
            const interval = setInterval(() => {
                setTime(t => t!==0 ? t-1 : StopTimer(interval));
            }, 1000);
        }
    }, [startCountdown]);

    //functions
    const StopTimer = (interval) => {
        //what to do when 0
        console.log("stop");
        clearInterval(interval);
        setTime(props.seconds);
        setStartCountdown(false);
    };

    const StartButtonClicked = () => {
        if (time) {
            setStartCountdown(true);
        } else {
            //Tell to put number
            console.log("number")
        }
    };

    //return function
    return (
        <div>
            timershow <br/>
            <button onClick={StartButtonClicked}>Start Countdown</button>
            Time in timershow: {time}
        </div>
    )
};

export default TimerShow;