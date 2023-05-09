import * as React from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import "./App.css";
import TimeStopGame from "./components/StopWatch/timeStop";
import GameStarter from "./components/gameStart";

function App() {
  return (
    <div>
      <GameStarter></GameStarter>
      <TimeStopGame />
    </div>
  );
}

export default App;
