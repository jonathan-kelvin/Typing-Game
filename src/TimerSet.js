import { useEffect, useState } from "react";
import "./Timer.css";
function TimerSet(props) {
  //hooks
  const [time, setTime] = useState(30);
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    props.updateTime(time);
  }, [time]);

  //functions
  const FifteenButton = () => {
    setTime(15);
    setInputValue(15);
  };

  const ThirtyButton = () => {
    setTime(30);
    setInputValue(30);
  };

  const SixtyButton = () => {
    setTime(60);
    setInputValue(60);
  };

  const EnterCheck = (e) => {
    if (e.key === "Enter") {
      setTime(inputValue);
    }
  };

  //return functions
  return (
    <div className="top-time-buttons">
      <input
        className="time-input-box"
        onKeyDown={EnterCheck}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Time in seconds"
        type="number"
      />
      <button
        className="set-time-button-preset"
        onClick={() => setTime(inputValue)}
      >
        Set Time
      </button>
      <button className="time-button-preset" onClick={FifteenButton}>
        15
      </button>
      <button className="time-button-preset" onClick={ThirtyButton}>
        30
      </button>
      <button className="time-button-preset" onClick={SixtyButton}>
        60
      </button>
      {/* Time in timerset: {time} */}
    </div>
  );
}

export default TimerSet;
