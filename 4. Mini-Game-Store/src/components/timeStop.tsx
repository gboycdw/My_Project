import * as React from "react";
import "./index.css";

function Now(now: Date) {
  //   const now = new Date(); // 현재 날짜와 시간 정보를 가진 Date 객체 생성
  const year = now.getFullYear(); // 년도
  const month = now.getMonth() + 1; // 월 (0부터 시작하므로 1을 더해줌)
  const date = now.getDate(); // 일
  const hours = now.getHours(); // 시
  const minutes = now.getMinutes(); // 분
  const seconds = now.getSeconds(); // 초
  const milliseconds = now.getMilliseconds(); // 밀리초

  const dateString = `${year}-${month < 10 ? "0" : ""}${month}-${
    date < 10 ? "0" : ""
  }${date}`;
  const timeString = `${hours < 10 ? "0" : ""}${hours}:${
    minutes < 10 ? "0" : ""
  }${minutes}:${seconds < 10 ? "0" : ""}${seconds}:${milliseconds}`;

  return `${dateString} ${timeString}`;
}

function TimeStopGame() {
  const [initTime, setInitTime] = React.useState<[string, Date] | null>(null);
  const [endTime, setEndTime] = React.useState<[string, Date] | null>(null);
  const [startButton, setStartButton] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState<number | null>(null);
  const [endButton, setEndButton] = React.useState(true);
  const [showScore, setShowScore] = React.useState(true);
  // 게임 시작 버튼
  function gameStart() {
    const start = new Date();
    setInitTime([Now(start), start]);
    setStartButton(true);
    setEndButton(false);
    setShowScore(false);
  }
  // 게임 종료 버튼
  function gameFinish() {
    const end = new Date();
    setEndTime([Now(end), end]);
    setEndButton(true);
    setShowScore(false);
  }
  // 기록을 측정하는 부분
  function timeLaps() {
    if (endTime && initTime) {
      const elapsedTime = endTime[1].getTime() - initTime[1].getTime();
      const yourScore = `당신의 기록은 ${Math.floor(elapsedTime / 1000)}.${
        elapsedTime % 1000
      }초 입니다.`;
      return yourScore;
    } else {
      return "10초다 싶을 때 Finish클릭!";
    }
  }
  function scoreSubmit() {
    alert("아직 미구현 기능입니다.ㅎㅎ;");
  }
  // 게임 리셋 기능 : 버튼 및 기록 초기화
  function resetGame() {
    setInitTime(null);
    setEndTime(null);
    setStartButton(false);
    setShowScore(true);
  }
  // 경과시간을 출력하는 부분 : 효율성 개선 필요함. 현재 개쓰레기임. new Date를 계속 호출하고 있음.
  React.useEffect(() => {
    if (initTime && !endTime) {
      const intervalId = setInterval(() => {
        setElapsedTime((new Date().getTime() - initTime[1].getTime()) / 1000);
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [initTime, endTime]);
  //---------------------------------------------------------------------------------------//
  return (
    <>
      <div className="gamebox">
        <div>10초를 정확히 맞춰라!!</div>
        <div>
          {!startButton && (
            <button id="game-button" onClick={gameStart}>
              Start!!
            </button>
          )}
          {!endButton && (
            <>
              <button id="game-button" onClick={gameFinish}>
                Finish
              </button>
              <span> 경과 시간... {elapsedTime?.toFixed(3)}</span>
            </>
          )}
        </div>

        <div>게임 시작 시간 : {initTime && initTime[0]}</div>
        <div>게임 종료 시간 : {endTime && endTime[0]}</div>
        {!showScore && <div>당신의 기록 : {timeLaps()}</div>}
        <button id="end-button" onClick={resetGame}>
          Reset
        </button>
        <button id="end-button" onClick={scoreSubmit}>
          Submit
        </button>
      </div>
    </>
  );
}

export default TimeStopGame;
