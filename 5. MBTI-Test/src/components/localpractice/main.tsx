import * as React from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type Props = {
  // EI: number;
  // NS: number;
  // TF: number;
  // JP: number;
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setNS: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
};

function MainPage(props: Props) {
  let imgLink = require("../../images/nun.png");
  let navigate = useNavigate();
  return (
    <Box>
      <Title> MBTI 검사 by GOMAO (2023. 5. 18.)</Title>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={imgLink}></Image>
      </div>
      <TitleText>
        이 검사는 총 12개의 질문으로 구성되어 있습니다. 질문을 잘 읽고, 자신이
        해당한다고 생각하는 문항에 답변해주시기 바랍니다.
      </TitleText>
      <button
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginRight: "auto",
        }}
        onClick={() => {
          navigate("/test");
          props.setEI(0);
          props.setNS(0);
          props.setTF(0);
          props.setJP(0);
        }}
      >
        테스트 시작!
      </button>
    </Box>
  );
}

export default MainPage;

const Box = styled.div`
  margin: 10px 10px;
  padding: 10px 15px;
  width: 510px;
  height: fit-content;
  border: 1px solid;
  border-radius: 10px;
  // display: flex-box;
  background-color: beige;

  font-family: "Poppins", sans-serif;
  // align-items: center;
  // justify-content: center;
  background-color: beige;
`;

const Title = styled.div`
  float: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
  font-size: 25px;
`;
const TitleText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
`;

const Image = styled.img`
  width: 250px;
  height: auto;
`;
