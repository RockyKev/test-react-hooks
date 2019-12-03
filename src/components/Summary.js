import React from "react";

import "./Summary.css";

const Summary = props => {
  return (
    <div className="summary">
      <h1> {props.name} </h1>
      <p>
        Gender: <span className="summary_output">{props.gender} </span>
      </p>
      <p>
        Height: <span className="summary_output">{props.height} </span>{" "}
      </p>
      <p>
        Hair Color/Skin color:{" "}
        <span className="summary_output">{props.hairColor} </span> /
        <span className="summary_output">{props.skinColor} </span>
      </p>
      <p>
        Appears in <span className="summary_output">{props.movieCount} </span>{" "}
        Movies.
      </p>
    </div>
  );
};

export default Summary;
