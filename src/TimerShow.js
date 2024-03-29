import { useEffect, useState } from "react";
import useDidEffect from "./useDidEffect";
import "./Timer.css";
function TimerShow(props) {
  //hooks
  const [time, setTime] = useState(props.seconds);
  const [startCountdown, setStartCountdown] = useState(false);

  useDidEffect(() => {
    if (props.start) {
      if (time > 0) {
        setStartCountdown(true);
      } else {
        props.stop(false);
      }
    }
  }, [props.start]);

  useEffect(() => {
    if (props.seconds !== 0) {
      setTime(props.seconds);
    }
  }, [props.seconds]);

  useEffect(() => {
    if (startCountdown) {
      const interval = setInterval(() => {
        setTime((t) => (t > 0 ? t - 1 : StopTimer(interval)));
      }, 1000);
    }
  }, [startCountdown]);

  //functions
  const StopTimer = (interval) => {
    //what to do when 0
    props.stop(false);
    clearInterval(interval);
    setTime(props.seconds);
    setStartCountdown(false);
  };

  //can delete button
  const StartButtonClicked = () => {
    if (time > 0) {
      setStartCountdown(true);
    } else {
      //Tell to put number
      console.log("number");
    }
  };

  //return function
  return (
    <div className="timer-show-box">
      <div className={props.darkMode ? "time-show-dark" : "time-show"} > {time} </div>
      {/* <button onClick={StartButtonClicked}>Start Countdown</button> */}
    </div>
  );
}

export default TimerShow;
