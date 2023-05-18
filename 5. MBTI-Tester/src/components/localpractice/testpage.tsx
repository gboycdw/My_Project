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
  MBTI: string;
  setEI: React.Dispatch<React.SetStateAction<number>>;
  setNS: React.Dispatch<React.SetStateAction<number>>;
  setTF: React.Dispatch<React.SetStateAction<number>>;
  setJP: React.Dispatch<React.SetStateAction<number>>;
  setMBTI: React.Dispatch<React.SetStateAction<string>>;
};

function shuffleArray(array: any[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function TestPage(props: Props) {
  let navigate = useNavigate();
  const [data, setData] = React.useState([
    {
      idx: "EI",
      question:
        "당신은 원래 3명정도의 소규모 자리인 것으로 알고 저녁 약속을 잡았다. 그런데 알고 보니 15명이 넘는 큰 식사자리인 것을 알게 되었다. 게다가 10명 정도는 처음 보는 사람이라고 한다. 이 때 당신은 다음 중 어떤 생각이 먼저 드는가? (단, 당신이 식사약속에 빠지는 것이 사회적으로 전혀 문제가 되지 않음.)",
      answer1: "뭐 상관없지 새로 알아가면 좋지 뭐",
      answer2: "어.. 모르는 사람이 너무 많은데 그냥 다음에 먹을까..",
    },
    {
      idx: "EI",
      question:
        "당신은 굉장히 시끌시끌한 고기집에 갔다. 직원들이 많이 바쁜지 추가 주문을 하기 위해 벨을 눌렀으나 아무도 오지 않고 있다. 이때 당신의 선택은?",
      answer1: "저기요!! 여기요!! 여기 고기 1인분 더주세요!!",
      answer2: "벨을 한번 더 눌러보고, 근처로 직원이 지나가기를 기다린다.",
    },
    {
      idx: "EI",
      question:
        "100명이 넘게 모여있는 강당에서 특강을 듣고 있는 당신, 강사가 마침 당신이 좋아하는 주제에 관한 질문을 던지며 '혹시 이 내용에 대해 아시는 분, 간단히 설명 가능하신 분 계실까요?'라고 질문했다.",
      answer1: "틀리면 어때! 번쩍 손을 들고 대답한다.",
      answer2:
        "좋아하는 주제이긴 하지만, 틀릴 수도 있고.. 내가 굳이 나설 필요는 없지 않을까?",
    },
    {
      idx: "NS",
      question:
        "나는 살면서 오직 내 상상 속에만 존재하는 아주 구체적인 세계관을 상상해본 적이 있다. (ex. 나는 엄청난 부자거나, 마법같이 엄청나게 특별한 능력을 지닌 존재임.)",
      answer1: "있다",
      answer2: "없다",
    },
    {
      idx: "NS",
      question:
        "직장 상사에게 불합리한 지시나 꾸중을 들었다. 그리고 이번이 처음이 아니다. 이때 당신이 속으로 하는 생각으로 가까운 것은?",
      answer1: "아 진짜 두고봐.. 언젠가 내 도움이 진짜 필요할때 두고봐..",
      answer2: "아.. 또 시작이네.. 오늘 저녁 뭐먹지..",
    },
    {
      idx: "NS",
      question: "영화를 보는 당신, 어떤 생각을 하면서 보는가?",
      answer1:
        "저거 좀 이상한데? 저게 말이 되나? 어 저 사람 왠지 저렇게 될 것 같은데? 에이 뻔하지 내가 그럴 줄 알았다.",
      answer2: "영화를 보는데 무슨 생각? 그냥 보는거지.",
    },
    {
      idx: "TF",
      question:
        "당신은 한 다리 건너서 아는 친구가 다쳤다는 소식을 전해 들었다. 친구들과 함께 병문안을 간 당신, 친구는 다리에 깁스를 하고 누워 있는 모습을 보았다. 이때 당신은 첫 마디로 어떤 말을 할까?",
      answer1: "야 괜찮야? 어쩌다가 다친거야?",
      answer2: "야 괜찮아? 많이 아파?",
    },
    {
      idx: "TF",
      question:
        "심각한 고민 걱정에 빠져 있는 친한 친구가 상담을 요청해 왔다. 이때 당신이 해줄 조언은 다음 중 어떤 쪽인가?",
      answer1:
        "음. 그러니까 지금 문제가 되는게 이거지? 그럼 이런 방법을 시도해보는 건 어때? 아니면 이건 어때? 따로 알아본 건 있어?",
      answer2: "많이 힘들겠다. 힘든 일 있으면 언제든 연락해도 괜찮아.",
    },
    {
      idx: "TF",
      question:
        "친구들과 여행을 갔는데, 오늘 조리 당번이 걸린 친구가 정말 형편없는 요리를 내놓았다. 당신이라면 어떻게 말 할 것인가?",
      answer1:
        "솔직히 맛 없어. 너무 짜다 다음부터는 소스를 좀 덜 넣어야 할 것 같은데?",
      answer2: "그래도 만드느라 고생했어!",
    },
    {
      idx: "JP",
      question:
        "당신은 내일 친구들과 점심 약속을 잡았다. 당신이 좋아하는 메뉴인 피자를 먹기로 결정했고, 내일 먹을 피자가 기대가 된다. 다음 날, 갑자기 피자 말고 고기를 먹자고 한다. 이때 당신에게 먼저 드는 생각은?",
      answer1:
        "피자를 먹기로 했는데 대체 왜? 피자 먹을 생각에 피자에 맞게 위장까지 세팅 해뒀는데..? 내가 고기를 싫어하는 건 아니지만 그래도 피자를 먹기로 했는데?",
      answer2: "음.. 뭐 고기도 나쁘지는 않지?",
    },
    {
      idx: "JP",
      question:
        "고단한 한 주를 보낸 당신, 이번 주말에는 집에서 빈둥빈둥 놀기로 결심하였다. 집에서 빈둥거리고 있는 것을 지켜보던 친구가 '야 여기 재밌어 보인다. 지금 갈래? 어차피 지금 아무것도 안 하고 쉬고 있잖아. 어때?' 일단 재미있어 보이긴 한다. 이때 당신에게 드는 생각은?",
      answer1:
        "음.. 지금 출발해서 저길 가면 XX시쯤 도착하겠지? 그리고 이런저런 거 하고 집에 돌아오면 YY시쯤 되겠군.. 그러면 돌아와서 몇시정도에 자면 되려나?",
      answer2: "좋지. 바로 출발하자.",
    },
    {
      idx: "JP",
      question:
        "당신은 내일 친구와 약속이 있다. 약속 시간은 1시이다. 이때, 당신이 할 생각으로 가까운 것은?",
      answer1:
        "1시에 도착해서 밥 먹으려면 적어도 여기서 12시에는 나가야 하는군. 그러면 적어도 11시에는 준비를 마치는 게 좋을 것 같고, 또 배부를 수 있으니 아침은 조금 일찍 먹거나 안 먹는 게 좋겠어.",
      answer2: "1시면 뭐.. 대충 12시쯤 나가면 되지 않으려나?",
    },
  ]);
  React.useEffect(() => {
    // data 배열을 섞음
    const shuffledData = shuffleArray(data);
    setData(shuffledData);
  }, []);

  const [num, setNum] = React.useState<number>(0);

  return (
    <div style={{ margin: "30px 30px", padding: "10px 10px" }}>
      <QuestionBox>
        Question {num + 1}. {data[num].question}
      </QuestionBox>
      <div
        style={{
          display: "flex",
          margin: 9,
        }}
      >
        <AnswerButton
          onClick={() => {
            if (data[num].idx === "EI") {
              props.setEI(props.EI + 1);
            } else if (data[num].idx === "NS") {
              props.setNS(props.NS + 1);
            } else if (data[num].idx === "TF") {
              props.setTF(props.TF + 1);
            } else if (data[num].idx === "JP") {
              props.setJP(props.JP + 1);
            }

            setNum(num + 1);
            if (num === 11) {
              navigate("/loading");
            }
          }}
        >
          {data[num].answer1}
        </AnswerButton>
        <AnswerButton
          onClick={() => {
            if (data[num].idx === "EI") {
              props.setEI(props.EI - 1);
            } else if (data[num].idx === "NS") {
              props.setNS(props.NS - 1);
            } else if (data[num].idx === "TF") {
              props.setTF(props.TF - 1);
            } else if (data[num].idx === "JP") {
              props.setJP(props.JP - 1);
            }

            setNum(num + 1);
            if (num === 11) {
              navigate("/loading");
            }
          }}
        >
          {data[num].answer2}
        </AnswerButton>
      </div>
    </div>
  );
}

export default TestPage;

const QuestionBox = styled.div`
  margin: 10px 10px;
  padding: 10px 15px;
  width: 510px;
  height: 250px;
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  background-color: beige;
  font-size: 20px;
  font-family: "Poppins", sans-serif;
  align-items: center;
  justify-content: center;
`;
// const clickEffect = keyframes`
//   0% {
//     transform: scale(1);
//     opacity: 1;
//   }
//   100% {
//     transform: scale(2);
//     opacity: 0;
//   }
// `;

const AnswerButton = styled.button`
  display: flex;
  margin: 5px;
  background-color: lightblue;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-family: "Poppins", sans-serif;
  width: 260px;
  height: 120px;
  &:hover {
    background-color: skyblue;
    cursor: pointer;
  }
  &:active {
    background-color: rgb(0, 162, 232);
  }
`;
