import React, { useState } from "react";
import ReactDOM from "react-dom";

// 2 counter button
// 1 , 5

// Custom hooks..
function useCounter({ initialState }) {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [
    count,
    {
      increment,
      decrement,
      setCount
    }
  ];
}

// different styles
function UseState() {
  const [count, { increment, decrement }] = useCounter({ initialState: 0 });

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dec</button>
    </div>
  );
}

export default UseState;
