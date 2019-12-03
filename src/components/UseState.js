import React, { useState } from "react";
import ReactDOM from "react-dom";

//2 counter buttons

//Button = incrementing by 1
//button = incrementing by 5

function useCounter({ initialState }) {
  const [count, setCount] = useState(initialState);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return [count, { increment, decrement, setCount }];
}

function UseState() {
  const [count, { increment, decrement }] = useCounter({ initialState: 0 });

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}> Inc + </button>
      <button onClick={decrement}> Dec - </button>
    </div>
  );
}

function UseState2() {
  const [count, { increment, decrement }] = useCounter({ initialState: 10 });
}

export default UseState;
