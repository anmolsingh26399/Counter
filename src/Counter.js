import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);

  const handleIncrement = () => {
    setCounterValue(counterValue + 1);
  };

  const handleDecrement = () => {
    if (counterValue > 0) {
      setCounterValue(counterValue - 1);
    }
  };

  const handleReset = () => {
    if (counterValue > 0) {
      setCounterValue(0);
    }
  };

  return (
    <>
      <div>
        <h1>Counter Value:{counterValue}</h1>
        <button onClick={handleIncrement}>Increment By 1</button>
        <button onClick={handleDecrement}>Decrement By 1</button>
        <button onClick={handleReset}>Reset To 0</button>
      </div>
    </>
  );
};

export default Counter;
