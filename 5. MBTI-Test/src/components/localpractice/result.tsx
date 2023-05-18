import * as React from "react";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

type Props = {
  MBTI: string;
  setMBTI: React.Dispatch<React.SetStateAction<string>>;
};
interface ResultData {
  [key: string]: {
    per: string;
    rank: string;
    talk: string[];
    text: string;
  };
}

function ResultPage(props: Props) {
  let navigate = useNavigate();
  let resultData: ResultData = {
    ENTJ: {
      per: "2.73%",
      rank: "16",
      talk: [
        "답답해서 내가 뛴다.",
        "공감과 이해 보다는 논리와 명분, 과정보다는 결과가 중요하지",
        "뭐 큰일이 터졌다고? 어디 보자. 좋아. 이것부터 하면 되겠군!",
        "이건 못참아. 내가 저 녀석에게 똑같이, 아니 2배로 돌려줄테야.",
      ],
      text: "ENTJ는 문제 해결에 진심이고, 사람 분석과 설득에 능한 천부적인 리더이다. 뛰어난 리더십으로 그룹을 성공으로 이끄는 경우가 많다. 감정적 공감보다는 이성적 논리와 명분이 중요하고, 과정보다는 결과를 압도적으로 중시한다. '난 공감을 할 줄 모르는 게 아니라 이해가 안 가서 공감을 안 하는거다' 라는 말을 자주 한다. 효율성에 지나치게 집착하는 경향이 있고, 때문에 친한 친구가 연락오면 '왜?'라고 답하며 전화를 받는다. 그가 가장 궁금한 것은 누가 전화했는지가 아니라 전화를 한 이유이기 때문에.",
    },
    ESTJ: {
      per: "4.56%",
      rank: "11",
      talk: [
        "그렇게 불평하고 고민할 시간에 그냥 하나라도 더 하는 게 어때?",
        "왜 싸울 일을 만드는 거지? 자기 일에 최선을 다하면 그럴 일이 없잖아.",
        "어디 한 번 털어보던가. 난 하늘을 우러러 한 점 부끄러울 게 없지.",
        "SNS는 인생의 낭비이다.",
      ],
      text: "ESTJ는 지켜야 할 것은 지켜야 하는 원리 원칙 주의자이다. 옳고 그름에 대한 구분이 명확하고 이는 자기 자신에게도 엄격하게 적용된다. 이 모든게 자신에게는 당연하기 때문에, 그렇지 않은 타인을 잘 이해하지 못하는 경우가 있다. ESTJ에게 딴 생각은 사치고 시간낭비이다. 이 때문에, SNS 혹은 온라인 커뮤니티에서 가장 보기 힘든 유형이다.",
    },
    ENTP: {
      per: "5.04%",
      rank: "10",
      talk: [
        "Why So Serious? 그래서 어쩌라고 ㅋㅋ?",
        "너희들 이런 거 생각 해봤어? 이런 생각은 나밖에 못 할걸?",
        "그걸 당연히 해야 한다고? 요즘 세상에 그런 게 어디있어?",
      ],
      text: "ENTP는 센스와 순발력 그리고 재치있는 아이디어로 똘똘 뭉친 달변가이다. '당연히 해야 하는 일이라는 것'을 결코 받아들이지 않고, 각지에서 새로운 아이디어를 항상 고민하고 있다. 자신이 아이디어가 좋다는 것을 스스로 알고 있는 경우가 많고, 이것을 숨기려 하지 않는다.",
    },
    ESTP: {
      per: "2.94%",
      rank: "15",
      talk: [
        "한번 뿐인 인생. 평범하게 살다 가기엔 너무 인생이 아까워",
        "60:40? 이걸 안 간다고? 내가 성공하나 못하나 내기할래?",
        "그거 완전히 정신나간 생각이군. 당장 하자!",
      ],
      text: "ESTP는 강한 모험심과 도전정신을 가지고, 때로는 무모하지만 누구보다 과감하게 도전하는 모험가이다. 압도적인 도전정신과 행동력으로 문제 해결에 탁월한 능력을 보이지만, 그 무모함에 문제 발생에도 탁월한 능력을 보인다. 또한, 이길 확률이 55%만 넘어도 바로 배팅을 거는 내기의 화신이다.",
    },
    ENFJ: {
      per: "6.09%",
      rank: "9",
      talk: [
        "무엇을 도와드릴까요?",
        "우리 다같이 힘내봐요",
        "너는 진짜 안 되겠다.",
      ],
      text: "ENFJ는 인류애가 강하고 타인의 감정에 잘 공감하며, 행동력이 뛰어나 사람들을 이끄는 경우가 많다. 힘들어하는 주변 사람을 잘 외면하지 못하고, 사람에 관심이 많아 주변에 모르는 소식이 없는 경우가 많다. 사람을 너무 좋아하기 때문에, 반대로 실망하게 되면 그만큼 크게 실망하여 겉잡을 수 없이 멀어지는 경우가 있다.",
    },
    ESFJ: {
      per: "8.35%",
      rank: "3",
      talk: ["그건 옳지 못한거야.", "친구들끼리 다같이 잘 지내야지."],
      text: "ESFJ는 타인에 관심이 많고, 개인보다는 집단의 이익을 추구하며 위계질서에 잘 따르고 적응하는 유형이다. 기분과 감정을 중요시(F)하긴 하지만 현실주의적이고 체계적인 면모를 보여서 감정형(F) 유형중에 가장 사고형(T)에 가깝게 보인다.",
    },
    ENFP: {
      per: "12.60%",
      rank: "2",
      talk: [
        "어!! 나도! 나도! 나도 할래!! 나도 데려가!!!",
        "이건 어때? 저건 어때? 이것도 좋은데. 저것도 좋은데.",
      ],
      text: "ENFP는 두 단어로 요약할 수 있다. 재기발랄, 천방지축. ENFP는 전체 유형 중 최상위의 행동력을 가졌지만, 너무 행동력만 강한 나머지 동시에 너무 많은 일을 벌여놓고 아무것도 하지 못 할때가 많은 엉뚱함 그 자체의 유형이다. 톡톡튀는 성격으로 어떤 모임에서도 분위기 메이커 역할을 충실히 해내기에, 두루두루 잘 지내는 경우가 많다.",
    },
    ESFP: {
      per: "6.36%",
      rank: "6",
      talk: ["대박!! 진짜??", "아무렴 어때 아무튼 가자!!!"],
      text: "ESFP는 감정적이고, 즉흥적이고, 현실적이고, 활동적이며 그 모든 특성이 ESFP를 핵인싸, 슈퍼스타의 길로 이끈다. 집에 잔류하는 시간이 가장 긴 유형이 ISFP라면, 집에 좀처럼 들어가지 않는 유형의 대표적인 케이스가 ESFP이다. ESFP에게 약속이 파토났다? 그자리에서 새로운 약속을 잡으면 그만이다.",
    },
    INTJ: {
      per: "3.75%",
      rank: "13",
      talk: [
        "저거 아닌데.. 아무리 생각해도 저거 틀렸는데..",
        "역시 내 예상대로야. 저럴 줄 알았어.",
        "알고싶은 게 너무 많아",
      ],
      text: "INTJ는 모든 것에 의문을 제기하고, 끊임없이 새로운 지식을 갈망하는 천부적인 연구자이다. 당연하게도 대학원 혹은 연구실에 가장 많이 모여있다. 기본적으로 자신의 지식을 표출하기보다는 스스로 다듬는 것을 좋아하지만, 잘못된 지식을 INTJ에게 전달할 경우 '당신이 왜 틀렸는지'에 대해서 논문 한 편을 집필하게 될 수 있으니 주의해야 한다.",
    },
    ISTJ: {
      per: "4.28%",
      rank: "12",
      talk: [
        "누군가 알아주지 않아도 상관 없어. 난 언제나 내 일에 책임을 다할 뿐이니까.",
        "내가 하기로 한 거니까 내가 해야지.",
        "내가 잘못한 거니까 내가 책임져야지.",
      ],
      text: "ISTJ는 어떤 일을 하더라도 묵묵하게 자기 책임을 다하는 현실주의자이다. 화려함보다는 안정감을 추구하며, 진실함과 성실함을 가장 중요한 가치로 여기는 경우가 많다. 누구보다 성실하게 일하지만 잘 표현을 하지 않아서 주변에서는 잘 모르는 경우가 많다.",
    },
    INTP: {
      per: "6.28%",
      rank: "7",
      talk: [
        "(관심 없는 주제) ...",
        "(관심 많은 주제) 어 그거? 그거 맞아 ㅋㅋ 그거 있잖아~",
        "음. 그런가? 그럼 이건? 그렇군... 그럼 이건? 아니군.... 아닌가?",
      ],
      text: "INTP는 세상에서 가장 궁금한 것이 많은, 호기심 많은 몽상가이다. 관심 없는 주제에는 일말의 반응도 기대하기 어렵지만, 관심 있는 주제를 꺼내든다면 INTP가 매일 고민하고 조사하며 쌓아둔 방대한 지식을 들을 수 있다. INTJ와 함께 대학원 혹은 연구실에 가장 많이 모여있는 유형이고, INFP와 함께 온라인 커뮤니티에서 가장 많이 활동하는 유형이다.",
    },
    ISTP: {
      per: "3.11%",
      rank: "14",
      talk: [
        "그거 이리 줘봐. 내가 고쳐줄게.",
        "사람들은 참 쓸데 없는 것에 관심이 많아.",
        "아 정말 귀찮네. 어떻게 하면 편하게 할 수 있을까?",
      ],
      text: "ISTP는 귀차니즘에 사로잡힌 손재주 만렙이다. 기존 방식을 그대로 따르는 것을 좋아하지 않고, 더 효율적인 방법을 계속 고민한다. ISTP의 손재주가 좋은 이유는 '고치러 나가기 귀찮아서' 혹은 '내가 앞으로 귀찮지 않으려고' 발달한 것이 아닐까?",
    },
    INFJ: {
      per: "6.25%",
      rank: "8",
      talk: ["세상이 아름다웠으면 좋겠어.", "분쟁 없는 세상을 만들고 싶어."],
      text: "INFJ는 타고난 이해력과 분석력을 바탕으로 사람을 달래는 데 일가견이 있는 중재자이다. 감정형임에도 관찰력과 통찰력이 뛰어나, 감정적 동조보다는 대국적인 명분을 앞세워 싸움을 중재한다. 이 때문에, 논리와 명분 빼면 시체인 말싸움 대장 4인방(ExTx)을 가장 잘 진정시키는 능력이 있다.",
    },
    ISFJ: {
      per: "7.66%",
      rank: "4",
      talk: ["얘들아 싸우지 마..", "내가 도와줄게."],
      text: "ISFJ는 분쟁을 싫어하고, 분쟁을 막기 위해서라면 기꺼이 나서서 희생하는 평화의 수호자이다. 기존의 시스템에 적응하는 능력이 뛰어나고, 변화보다는 익숙함을 추구한다.",
    },
    INFP: {
      per: "13.39%",
      rank: "1",
      talk: [
        "너무 안됐다.. 내가 더 슬프다..",
        "관심이라는 것은 부담스럽지만, 무관심은 더 무서워.",
        "이 세상.. 아직은 아름다울지도",
      ],
      text: "INFP는 타인의 고민이나 아픔을 깊게 공감하고 자신이 더 아파하기도 하는 공감능력 만렙이다. 한국에 가장 많은 유형으로, 모나거나 튀는 것 보다는 둥글고 두루두루 좋게 지내는 것을 좋아한다. 주변의 시선, 특히 자신의 이미지가 상하는 것에 매우 민감하고, INTP와 함께 온라인 커뮤니티에서 가장 많은 유형 중 하나로 알려져 있다.",
    },
    ISFP: {
      per: "6.61%",
      rank: "5",
      talk: [
        "난 침대가 너무 좋은걸. 쿨쿨쿨",
        "싸움은 싫어. 평화로운 게 좋아.",
        "(내면의 자아가 깨어나면) 나도!! 나도!! 가자!!!!",
      ],
      text: "ISFP는 어디서든 잘 적응하고 잘 맞춰주는 평화주의자이다. 보통 조용하고 집에(침대에) 잔류하는 시간이 가장 긴 유형이나, 마음을 연 사람들 사이에서는 '너가 그런 사람인 지 정말 몰랐다' 라는 평가를 듣거나, 친한 친구들 사이에서는 '너는 절대 I가 아니야'라는 말을 듣기도 하는 은은한 광기의 결정체이다.",
    },
  };
  let imgLink = require("../../images/iknow.gif");
  return (
    <Box>
      <ResultTitle>검사 결과</ResultTitle>
      <ResultTitleText>
        당신의 성격 유형 : {props.MBTI} ▶ 국내 비율 {resultData[props.MBTI].per}{" "}
        ({resultData[props.MBTI].rank}위)
      </ResultTitleText>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={imgLink}></Image>
        <div></div>
      </div>
      <ResultList>
        <ul>
          {resultData[props.MBTI].talk.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </ResultList>
      <ResultBody>{resultData[props.MBTI].text}</ResultBody>
      <div>
        <button
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginLeft: "auto",
          }}
          onClick={() => {
            props.setMBTI("");
            navigate("/");
          }}
        >
          다시 시작하기
        </button>
      </div>
    </Box>
  );
}

export default ResultPage;

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
