import React, { Component } from "react";
import "./App.css";
import GuessForm from "./components/GuessForm";
import GuessResults from "./components/GuessResults";
import GameResults from "./components/GameResults";
import { useSelector } from "react-redux";

const App = () => {
  const currentCity = useSelector(({ weather: { cities, currentCity } }) => {
    return cities[currentCity];
  });

  return (
    <div className="app-wrapper">
      {currentCity ? <GuessForm currentCity={currentCity} /> : <GameResults />}
      <GuessResults />
    </div>
  );
};

export default App;
