import React from "react";

type RecorderProps = {
  scores: number[];
  setScores: React.Dispatch<React.SetStateAction<number[]>>;
  printScore: any[];
};

function Recorder(props: RecorderProps) {
  const scores = props.scores;
  const setScores = props.setScores;
  const printScore = props.printScore;

  function scoreSubmit() {
    alert("기록 제출은 도전모드에서만 가능합니다. 모드를 변경해 주세요.");
  }

  function grade(num: number): string {
    const timeGap = Math.abs(num - 10);
    if (timeGap === 0) {
      return "👑Perfect";
    } else if (timeGap < 0.01) {
      return "😎Excellent";
    } else if (timeGap < 0.05) {
      return "😄Great";
    } else if (timeGap < 0.1) {
      return "😃So So";
    } else if (timeGap < 0.15) {
      return "😠Bad";
    }
    return "🤔What are you doing?";
  }

  return (
    <>
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
      {scores.length > 0 && (
        <>
          <div id="best-record-text">Best Record : {printScore[0]}sec</div>
          <div id="worst-record-text">Worst Record : {printScore[1]}sec</div>
          <div id="average-gap-text">Average Gap : {printScore[2]}sec</div>
          <div id="average-gap-text">
            your grade is ...... {grade(10 - printScore[2])}
          </div>
          <div id="gap-box"></div>
        </>
      )}
    </>
  );
}

export default Recorder;
