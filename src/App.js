import React, { useState } from "react";
import "./App.css";

const MONTH_NAMES = {
  January: "Mary Grace",
  February: "Kokoy",
  March: "Jay",
  April: "Miggy",
  May: "Dodong",
  June: "Xiaome",
  July: "Nico",
  August: "Vicky",
  September: "Abner",
  October: "Joy",
  November: "Greg",
  December: "Jason",
};

const DAY_NAMES = {
  1: "Piattos",
  2: "Chippy",
  3: "Nova",
  4: "Mango",
  5: "Durian",
  6: "Kamote",
  7: "Patatas",
  8: "Otso",
  9: "Clover",
  10: "Villamin",
  11: "Bina",
  12: "Alcala",
  13: "Barok",
  14: "Tempura",
  15: "Sinigang",
  16: "Dinuguan",
  17: "Lays",
  18: "Ruffles",
  19: "Turon",
  20: "Lumpia",
  21: "Adobo",
  22: "Orange",
  23: "Milo",
  24: "Juice",
  25: "C2",
  26: "Coke",
  27: "Igado",
  28: "Coffee",
  29: "Bagoong",
  30: "Talong",
  31: "Barquillos",
};

function App() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      MONTH_NAMES.hasOwnProperty(month) &&
      DAY_NAMES.hasOwnProperty(Number(day))
    ) {
      const name = `${MONTH_NAMES[month]} ${DAY_NAMES[Number(day)]}`;
      setResult(name);
    } else {
      setResult("Invalid input. Please enter a valid month and day.");
    }
  };

  return (
    <div className="App">
      <h1>Confidential Fund Name Generator</h1>
      <h2>From the meme:</h2>
      <img
        src="meme.jpg"
        alt="Meme"
        style={{ maxWidth: "100%", height: "auto" }}
      />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="month">Select Birth Month: </label>
          <select
            id="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">--Select a month--</option>
            {Object.keys(MONTH_NAMES).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="day">Select Birth Day: </label>
          <select id="day" value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">--Select a day--</option>
            {Object.keys(DAY_NAMES).map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Generate Name</button>
      </form>
      {result && <h2>Your Confidential Fund Name is: {result}</h2>}
    </div>
  );
}

export default App;
