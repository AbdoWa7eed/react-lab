import React, { useState } from "react";
import './App.css';

function App() {
  // State for counter
  const [counter, setCounter] = useState(0);
  // State for theme (light/dark)
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to increment counter
  const increment = () => {
    setCounter(counter + 1);
  };

  // Function to decrement counter
  const decrement = () => {
    setCounter(counter - 1);
  };

  // Function to reset counter
  const reset = () => {
    setCounter(0);
  };

  // Function to toggle theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? "dark" : "light"}`}>
      <div className="counter-container">
        <h1>Counter: {counter}</h1>
        <div className="button-container">
          <button onClick={increment} className="btn increment">Increment</button>
          <button onClick={decrement} className="btn decrement">Decrement</button>
          <button onClick={reset} className="btn reset">Reset</button>
          <button onClick={toggleTheme} className="btn theme-toggle">
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
