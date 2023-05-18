import * as React from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  EI: number;
  NS: number;
  TF: number;
  JP: number;
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setNS: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
  MBTI: string;
  setMBTI: React.Dispatch<React.SetStateAction<string>>;
};

function LoadingPage(props: Props) {
  let navigate = useNavigate();
  let calculate = "";
  if (props.EI > 0) {
    calculate += "E";
  } else {
    calculate += "I";
  }
  if (props.NS > 0) {
    calculate += "N";
  } else {
    calculate += "S";
  }
  if (props.TF > 0) {
    calculate += "T";
  } else {
    calculate += "F";
  }
  if (props.JP > 0) {
    calculate += "J";
  } else {
    calculate += "P";
  }
  let imgLink = require("../../images/gogo.gif");
  setTimeout(() => {
    props.setMBTI(calculate);
    navigate("/result");
  }, 4000);

  return (
    <Box>
      <div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ResultTitle>
            검사가 완료되었습니다. 잠시 후 결과 페이지로 이동합니다.
          </ResultTitle>
          <Image src={imgLink}></Image>
        </div>
        {/* <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "auto",
            marginRight: 27,
          }}
          onClick={() => {

          }}
        >
          결과 확인하기
        </button> */}
      </div>
    </Box>
  );
}

export default LoadingPage;

const Box = styled.div`
  margin: 10px 10px;
  padding: 10px 15px;
  width: 510px;
  height: fit-content;
  border: 1px solid;
  border-radius: 10px;
  // display: flex;
  background-color: beige;

  font-family: "Poppins", sans-serif;
  // align-items: center;
  // justify-content: center;
  background-color: white;
`;

const ResultTitle = styled.div`
  float: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  font-size: 15px;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
  margin-top: 20px;

  animation: slideLeft 4s ease-in-out none;
  @keyframes slideLeft {
    0% {
      transform: translateX(400px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;
