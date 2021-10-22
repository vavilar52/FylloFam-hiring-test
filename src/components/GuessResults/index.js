import React from "react";
import { useSelector } from "react-redux";



const GuessResults = () => {
  const results = useSelector(({ weather }) => weather.guessing);

  return (
    <div className="results-list">
      {Object.entries(results).map(([city, results]) => (
        <div className="item" key={city}>
          <p>{city}</p>
          <p>your guess : {results.guessTemp}</p>
          <p>real temp : {results.realTemp}</p>
        </div>
      ))}
    </div>
  );
};

export default GuessResults;
