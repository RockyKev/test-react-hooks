import React, { useState } from "react";
import ReactDOM from "react-dom";

function HookExample() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p> You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Hook in Action</button>
    </div>
  );
}

//On Component Update -- scroll and listen sockets
//When it's out of the browser dom,

export default HookExample;
