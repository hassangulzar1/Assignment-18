let numberToWord = (n) => {
  let inputNum = n.split("");
  inputNum = inputNum.map((e) => parseInt(e));
  let toWord = [];
  let oneTo9 = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let tenTo20 = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let remaining = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
    "hundred",
  ];
  let cheaking = (a, b, val) => {
    return a === undefined || b === undefined
      ? a === undefined && b === undefined
        ? ""
        : a === undefined
        ? b + val
        : a + val
      : `${a} ${b} ${val}`;
  };

  let cheaking2 = (a, val) =>
    a === undefined ? "" : tenTo20[inputNum[1]] + val;

  let cheaking3 = (a, val) =>
    a === undefined ? "" : oneTo9[inputNum[0] - 1] + val;
  let i = 0;
  while (i < inputNum.length) {
    //! for single character
    if (inputNum.length === 1) {
      toWord.push(oneTo9[inputNum[0] - 1]);
      inputNum.splice(0, 1);

      //! for 2 character
    } else if (inputNum.length === 2) {
      if (inputNum[0] === 1) {
        toWord.push(
          tenTo20[inputNum[1]] === undefined ? "" : tenTo20[inputNum[1]]
        );
        inputNum.splice(0, 2);
      } else {
        toWord.push(
          `${
            remaining[inputNum[0] - 2] === undefined
              ? ""
              : remaining[inputNum[0] - 2]
          } ${
            oneTo9[inputNum[1] - 1] === undefined ? "" : oneTo9[inputNum[1] - 1]
          }`
        );
        inputNum.splice(0, 2);
      }
      //! for 3 character
    } else if (inputNum.length === 3) {
      toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " hundred"));
      inputNum.splice(0, 1);
      //! for 4 character
    } else if (inputNum.length === 4) {
      toWord.push(
        oneTo9[inputNum[0] - 1] === undefined
          ? ""
          : oneTo9[inputNum[0] - 1] + " thousand"
      );
      inputNum.splice(0, 1);
      //! for 5 character
    } else if (inputNum.length === 5) {
      if (inputNum[0] === 1) {
        toWord.push(cheaking2(tenTo20[inputNum[1]], " thousand"));
        inputNum.splice(0, 2);
      } else {
        toWord.push(
          cheaking(
            remaining[inputNum[0] - 2],
            oneTo9[inputNum[1] - 1],
            " thousand"
          )
        );
        inputNum.splice(0, 2);
      }
      //! for 6 character
    } else if (inputNum.length === 6) {
      toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " lac"));
      inputNum.splice(0, 1);
      //! for 7 character
    } else if (inputNum.length === 7) {
      if (inputNum[0] === 1) {
        toWord.push(cheaking2(tenTo20[inputNum[1]], " lac"));
        inputNum.splice(0, 2);
      } else {
        toWord.push(
          cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " lac")
        );
        inputNum.splice(0, 2);
      }
      //! for 8 character
    } else if (inputNum.length === 8) {
      toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " crore"));
      inputNum.splice(0, 1);
      //! for 9 character
    } else if (inputNum.length === 9) {
      if (inputNum[0] === 1) {
        toWord.push(cheaking2(tenTo20[inputNum[1]], " crore"));
        inputNum.splice(0, 2);
      } else {
        toWord.push(
          cheaking(
            remaining[inputNum[0] - 2],
            oneTo9[inputNum[1] - 1],
            " crore"
          )
        );
        inputNum.splice(0, 2);
      }
      //! for 10 character
    } else if (inputNum.length === 10) {
      toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " arab"));
      inputNum.splice(0, 1);
      //! for 11 character
    } else if (inputNum.length === 11) {
      if (inputNum[0] === 1) {
        toWord.push(cheaking2(tenTo20[inputNum[1]], " arab"));
        inputNum.splice(0, 2);
      } else {
        toWord.push(
          cheaking(remaining[inputNum[0] - 2], oneTo9[inputNum[1] - 1], " arab")
        );
        inputNum.splice(0, 2);
      }
      //! for 12 character
    } else if (inputNum.length === 12) {
      toWord.push(cheaking3(oneTo9[inputNum[0] - 1], " kharab"));
      inputNum.splice(0, 1);
    }
  }
  let mainArr = [];
  toWord.forEach((e) => (e !== "" ? mainArr.push(e) : mainArr.push()));
  return mainArr.join(" ");
};

// !EvenT Listner
convertBtn.addEventListener("click", function () {
  let n = document.getElementsByClassName("numInput")[0].value;
  if (n === undefined) return false;
  else {
    let value = numberToWord(n);
    output.innerText = value.toLowerCase();
  }
});
