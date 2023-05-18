import * as React from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/localpractice/main";
import TestPage from "./components/localpractice/testpage";
import ResultPage from "./components/localpractice/result";
import LoadingPage from "./components/localpractice/loadingpage";

// import

function App() {
  const [EI, setEI] = React.useState<number>(0);
  const [NS, setNS] = React.useState<number>(0);
  const [TF, setTF] = React.useState<number>(0);
  const [JP, setJP] = React.useState<number>(0);
  const [MBTI, setMBTI] = React.useState<string>("");
  // 시작 버튼을 누르면 성향을 0으로 초기화함.

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <MainPage setEI={setEI} setNS={setNS} setTF={setTF} setJP={setJP} />
          }
        />
        <Route
          path="/test"
          element={
            <TestPage
              setEI={setEI}
              setNS={setNS}
              setTF={setTF}
              setJP={setJP}
              EI={EI}
              NS={NS}
              TF={TF}
              JP={JP}
              MBTI={MBTI}
              setMBTI={setMBTI}
            />
          }
        />
        <Route
          path="/loading"
          element={
            <LoadingPage
              setEI={setEI}
              setNS={setNS}
              setTF={setTF}
              setJP={setJP}
              EI={EI}
              NS={NS}
              TF={TF}
              JP={JP}
              MBTI={MBTI}
              setMBTI={setMBTI}
            />
          }
        ></Route>
        <Route
          path="/result"
          element={<ResultPage MBTI={MBTI} setMBTI={setMBTI} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
