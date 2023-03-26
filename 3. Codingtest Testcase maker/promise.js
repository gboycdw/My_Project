const btn = document.getElementById("btn");
const answer = document.getElementById("answer");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const mycode = document.getElementById("mycode_body");

const getTestcase = () => {
  let x = input1.value;
  let y = parseInt(input2.value);
  return new Promise((resolve, reject) => {
    if (y === 0) {
      reject();
    } else {
      resolve(solution(x, y));
    }
  });
};

btn.addEventListener("click", () => {
  getTestcase()
    .then((param) => {
      answer.innerText = `테스트 케이스 정답은 ${param} 입니다.`;
    })
    .catch((_param) => {
      for (let i = 3; i >= 0; i--) {
        setTimeout(() => {
          if (i === 0) {
            answer.innerText = "실행 대기중...";
            mycode.innerText = "아직 실행된 코드가 없습니다.";
          } else {
            answer.innerText = `실행 오류. 입력 조건을 확인하세요. \n ${i}초 후 리셋됩니다.`;
          }
        }, 1000 * (4 - i));
      }
      answer.innerText = `실행 오류. 입력 조건을 확인하세요.`;
    })
    .finally(() => {
      mycode.innerText = `function solution(a, b) {
            if (b !== 0) {
              return Math.floor(a / b);
            }
            return new Error("0으로 나눌 수 없습니다.");
          }`;
    });
});

function solution(a, b) {
  if (b !== 0) {
    return Math.floor(a / b);
  }
  return new Error("0으로 나눌 수 없습니다.");
}
