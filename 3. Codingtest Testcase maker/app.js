var solution = function (a, arr) {
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      a += parseInt(arr[i].value);
    }
  }
  return a;
};
// export default solution;
// console.log(solution(1, 2));
//
