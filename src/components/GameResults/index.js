import React from "react";
import { useSelector } from "react-redux";

const DEVIATION = 5
const TOTAL_TO_WIN = 3

const calculateResult = (gameData) => {
  return Object.values(gameData).reduce((acc, { guessTemp, realTemp }) => {
    if (realTemp >= guessTemp - DEVIATION && realTemp <= guessTemp + DEVIATION) {
      return acc + 1;
    }
    return acc;
  }, 0);
};

const GameResults = () => {
  const guessing = useSelector(({ weather }) => weather.guessing);

  const total = calculateResult(guessing);

  return <div>{total >= TOTAL_TO_WIN ? "YOU WIN" : "YOU LOSE"}</div>;
};

export default GameResults;
