const btn = document.getElementById("genPass");
const newPass = document.getElementById("newPass");
const slider = document.getElementById("range");
const rangeVal = document.getElementById("rangeVal");
const upperCase = document.getElementById("capLet");
const lowerCase = document.getElementById("samLet");
const number = document.getElementById("number");
const symbol = document.getElementById("symbol");
const copyBtn = document.getElementById("copyBtn");

rangeVal.innerText = slider.value;

slider.addEventListener("input", () => {
  rangeVal.innerText = slider.value;
  // console.log(rangeVal);
});

btn.addEventListener("click", () => {
  let capitalLetter = "ABCDEFGHIJKLMNOPQRSTUVWXWZ";
  let smallLetters = "abcdefghijklmnoprstuvwxyz";
  let numberStr = "0123456789";
  let symbolstr = "`~!@#$%^&*()_+";

  let finalstr = "";
  if (upperCase.checked) {
    finalstr += capitalLetter;
  }
  if (lowerCase.checked) {
    finalstr += smallLetters;
  }
  if (number.checked) {
    finalstr += numberStr;
  }
  if (symbol.checked) {
    finalstr += symbolstr;
  }
  if (finalstr === "") {
    alert("Please check atleast one checkBox");
  }
  console.log(finalstr);

  let latestPass = ""; // intializing the latest password as empty string

  for (let i = 0; i < slider.value; i++) {
    let randomNum = Math.floor(Math.random() * finalstr.length);
    latestPass += finalstr[randomNum]
  }
  newPass.innerText=latestPass
});
