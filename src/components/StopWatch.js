import React, { useState, useRef } from "react";

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor((ms % 1000) / 10);
    return `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}:${milliseconds < 10 ? "0" : ""}${milliseconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <div className="time">{formatTime(time)}</div>
      <div className="buttons">
        {!isRunning ? (
          <button onClick={() => start()}>Start</button>
        ) : (
          <button onClick={() => stop()}>Stop</button>
        )}
        <button onClick={() => reset()}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
