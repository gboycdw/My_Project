import * as React from "react";
import "./timeStop.css";

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
  const [startButton, setStartButton] = React.useState(true);
  const [endButton, setEndButton] = React.useState(false);
  const [restartButton, setRestartButton] = React.useState(false);
  const [elapsedTime, setElapsedTime] = React.useState<number | null>(null);
  const [showScore, setShowScore] = React.useState(false);
  const [showTime, setShowTime] = React.useState(true);
  const [scores, setScores] = React.useState<number[]>([]);
  const [printScore, setPrintScore] = React.useState("");
  // 게임 시작 버튼
  function gameStart() {
    const start = new Date();
    setInitTime([Now(start), start]);
    setStartButton(false);
    setEndButton(true);
    setShowScore(true);
  }
  // 게임 종료 버튼
  function gameFinish() {
    const end = new Date();
    setEndTime([Now(end), end]);
    setEndButton(false);
    setShowScore(true);
    setRestartButton(true);
    if (initTime && end) {
      const elapsedTime = (end.getTime() - initTime[1].getTime()) / 1000;
      setElapsedTime(elapsedTime);
      setScores([...scores, elapsedTime]);
      // localStorage.setItem("score", JSON.stringify([...scores, elapsedTime])); // 로컬스토리지 사용 보류
    }
    // ----------------로컬스토리지를 활용하는 방법 - 사용 보류 ----------------------
    // const scoreData = localStorage.getItem("score");
    // if (scoreData && scoreData.length > 0) {
    //   const newScoreData = JSON.parse(scoreData);
    //   newScoreData.push(elapsedTime);
    //   localStorage.setItem("score", JSON.stringify(newScoreData));
    // } else {
    //   const newScoreData = [elapsedTime];
    //   localStorage.setItem("score", JSON.stringify(newScoreData));
    // }
    // ----------------------------------------------------------------------------
  }
  function scoreSubmit() {
    alert("기록 제출은 도전모드에서만 가능합니다. 모드를 변경해 주세요.");
  }
  // 게임 리셋 기능 : 버튼 및 기록 초기화
  function resetGame() {
    setInitTime(null);
    setEndTime(null);
    setStartButton(true);
    setShowScore(false);
    setRestartButton(false);
  }
  // 경과시간을 볼지 말지 결정하는 기능
  function visibleTime() {
    setShowTime(!showTime);
  }
  // 경과시간을 출력하는 부분

  function grade(num: number): string {
    const timeGap = Math.abs(num - 10);
    if (timeGap === 0) {
      return "👑Perfect";
    } else if (timeGap < 0.03) {
      return "😎Excellent";
    } else if (timeGap < 0.07) {
      return "😄Great";
    } else if (timeGap < 0.1) {
      return "😃So So";
    } else if (timeGap < 0.15) {
      return "😠Bad";
    }
    return "🤔What are you doing?";
  }

  React.useEffect(() => {
    if (initTime && !endTime) {
      const nowTime = initTime[1].getTime();
      const intervalId = setInterval(() => {
        setElapsedTime((new Date().getTime() - nowTime) / 1000);
      }, 50);

      return () => clearInterval(intervalId);
    }
  }, [initTime, endTime]);

  // ----------------로컬스토리지를 활용하는 방법 - 사용 보류 ----------------------
  // React.useEffect(() => {
  //   const scoreData = localStorage.getItem("score");
  //   if (scoreData && scoreData.length > 0) {
  //     const parsedScoreData = JSON.parse(scoreData);
  //     if (JSON.stringify(parsedScoreData) !== JSON.stringify(scoreData)) {
  //       setScores(parsedScoreData);
  //       console.log("무한루프체크5");
  //     }
  //   } else {
  //     console.log("무한루프체크6");
  //     setScores([]);
  //   }
  // }, []);
  // ----------------------------------------------------------------------------

  // 기록된 누적 데이터의 분석을 보여주는 부분.
  React.useEffect(() => {
    if (scores && scores.length > 0) {
      const bestScore = scores.reduce((prev, curr) => {
        return Math.abs(curr - 10) < Math.abs(prev - 10) ? curr : prev;
      });
      const worstScore = scores.reduce((prev, curr) => {
        return Math.abs(curr - 10) > Math.abs(prev - 10) ? curr : prev;
      });
      const averageScore =
        scores.reduce((acc, cur) => acc + cur, 0) / scores.length;
      const finalMessage = `Best : ${bestScore}, Worst : ${worstScore}, AVR : ${averageScore.toFixed(
        3
      )}`;
      setPrintScore(finalMessage);
    } else {
      setPrintScore("");
    }
  }, [scores, setPrintScore]);

  //---------------------------------------------------------------------------------------//
  return (
    <>
      <div className="game">
        <a
          style={{
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            backgroundColor: "white",
            border: "1px solid",
            width: "350px",
          }}
        >
          mini-mini game project
        </a>
        <div className="gamebox">
          <div>
            <span>
              게임 모드 <button>연습</button>
            </span>
            <br />
            <span id="game-title">10초를 정확히 맞춰라!!</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
            }}
          >
            Game Mode
            {true && (
              <button id="option-button" onClick={visibleTime}>
                {showTime ? "시간 공개" : "시간 미공개"}
              </button>
            )}
          </div>
          <div>
            {startButton && (
              <button id="game-button" onClick={gameStart}>
                Start!!
              </button>
            )}
            {endButton && (
              <>
                <button id="game-button" onClick={gameFinish}>
                  Finish
                </button>
                {showTime && (
                  <span> 경과 시간... {elapsedTime?.toFixed(3)}</span>
                )}
              </>
            )}
            {restartButton && (
              <button id="game-button" onClick={resetGame}>
                Restart
              </button>
            )}
          </div>

          <div>게임 시작 시간 : {initTime && initTime[0]}</div>
          <div>게임 종료 시간 : {endTime && endTime[0]}</div>
          {showScore && endTime && <div>당신의 기록 : {elapsedTime}초</div>}
        </div>
        {/* 기록실 부분 */}
        <div className="record-board">
          <div id="record-title">
            <button
              id="reset-button"
              onClick={() => {
                setScores([]);
                // localStorage.clear(); // 로컬스토리지 사용 보류
              }}
            >
              Reset
            </button>
            기록실{" "}
            <button id="submit-button" onClick={scoreSubmit}>
              Submit
            </button>
          </div>
          <ul>
            {scores.map((score, index) => (
              <li key={index}>
                {index + 1}회차 : {score}초 {grade(score)}
              </li>
            ))}
          </ul>
        </div>
        <span style={{ display: "flex", justifyContent: "center" }}>
          {printScore}
        </span>
      </div>
    </>
  );
}

export default TimeStopGame;
