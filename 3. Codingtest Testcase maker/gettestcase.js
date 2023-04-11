const btn = document.getElementById("finalbtn");
const answer = document.getElementById("answer");
const input = document.getElementsByClassName("input");
const mycode = document.getElementById("mycode_body");

const getTestcase = () => {
  // let x = input[0].value;
  // let y = parseInt(input[1].value);
  let inputelement = Array.from(input);
  let [x, ...c] = inputelement;
  x = parseInt(x.value);

  return new Promise((resolve, reject) => {
    if (isNaN(x)) {
      reject();
    }
    if (c) {
      for (let i = 0; i < c.length; i++) {
        if (isNaN(c[i].value)) {
          reject();
        }
      }
    }

    resolve(solution(x, c));
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
      mycode.innerText = `var solution = function (a, arr) {
        if (arr) {
          for (let i = 0; i < arr.length; i++) {
            a += parseInt(arr[i].value);
          }
        }
        return a;
      };`;
    });
});
