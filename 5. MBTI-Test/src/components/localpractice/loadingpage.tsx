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
  return (
    <Box>
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ fontSize: 13, marginRight: 3, paddingRight: 22 }}>
            검사가 완료되었습니다. 버튼을 놀러 결과를 확인하세요.
          </div>
          <Image src={imgLink}></Image>
        </div>
        <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "auto",
            marginRight: 27,
          }}
          onClick={() => {
            props.setMBTI(calculate);
            navigate("/result");
            console.log(props.MBTI);
          }}
        >
          결과 확인하기
        </button>
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
  background-color: beige;
`;

const ResultTitle = styled.div`
  float: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  font-size: 25px;
`;
const ResultTitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
`;

const ResultList = styled.li`
  display: flex;
  align-items: center;
  font-size: 15px;
`;

const ResultBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 5px;
  padding: 7px 7px;
  font-size: 13px;
  margin: 5px 5px;
`;

const Image = styled.img`
  width: 120px;
  height: auto;
`;
