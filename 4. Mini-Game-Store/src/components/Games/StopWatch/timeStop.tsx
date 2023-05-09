import * as React from "react";
import "./timeStop.css";
import Recorder from "./recorder/recorder";
import Controller from "./controller/controller";

function TimeStopGame() {
  const [scores, setScores] = React.useState<number[]>([]);
  const [printScore, setPrintScore] = React.useState<any[]>([]);
  return (
    <>
      <div className="game">
        <a id="title-text">미니미니게임 프로젝트</a>

        <Controller
          scores={scores}
          setScores={setScores}
          printScore={printScore}
          setPrintScore={setPrintScore}
        />
        <Recorder
          scores={scores}
          printScore={printScore}
          setScores={setScores}
        />
      </div>
    </>
  );
}

export default TimeStopGame;
