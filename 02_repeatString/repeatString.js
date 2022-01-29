
const repeatString = function hey(input, n) {
  if (n == "") {
    return "";
    }
    else if (n < 1) {
      return "ERROR";
    }

  let x = input
    for (let i=1; i < n; i++) {
      x += input
    }
    return x;
  }
// Do not edit below this line
module.exports = repeatString;
//for (let i = 0; i < hey.length, i++); {
//}