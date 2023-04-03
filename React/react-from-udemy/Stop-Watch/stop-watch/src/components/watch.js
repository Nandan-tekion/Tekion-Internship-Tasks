import React, { useState } from "react";

const Watch = () => {
  const [timerID, setTimerID] = useState(null);
  const [time, setTime] = useState(0);

  const stopHandler = () => {
    clearInterval(timerID);
    setTimerID(null);
  };

  const resetHandler = () => {
    clearInterval(timerID);
    setTimerID(null);
    setTime(0);
  };

  const startHandler = () => {
    setTimerID(
      setInterval(() => {
        setTime((time) => time + 1);
      }, 1000)
    );
  };

  const sec = (time%60).toLocaleString('en-US',{minimumIntegerDigits : 2});
  const min = (Math.floor(time / 60)).toLocaleString('en-US',{minimumIntegerDigits : 2});
  
  return (
    <div>
      {min + ':' + sec}
      <br />
      { timerID && <button onClick={stopHandler}>Stop</button>}
      { !timerID && <button onClick={startHandler}>Start</button>}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default Watch;
