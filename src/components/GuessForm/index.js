import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { guessTemparature } from "../../store/weather";

const GuessForm = ({ currentCity }) => {
  const [temp, setTemp] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setTemp(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!temp) return;
    dispatch(guessTemparature({ city: currentCity.name, temp }));
    setTemp("");
  };

  return (
    <form className="guess-form" onSubmit={onSubmit}>
      <p>{currentCity.name}</p>
      <input
        type="number"
        placeholder="your guess text box"
        onChange={handleChange}
        value={temp}
      />
      <button>Check</button>
    </form>
  );
};

export default GuessForm;
