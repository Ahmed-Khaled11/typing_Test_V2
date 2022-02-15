
var words = [];
var wordsEz = [
  "Brother",
  "Short",
  "Cairo",
  "Circel",
  "Like",
  "Family",
  "Arrow",
  "Space",
  "Slice",
  "Mark",
  "Cheese",
  "School",
  "Print",
  "Book",
  "Egypt",
  "Mouse",
  "Italy",
  "Number",
  "Data",
  "Apple",
  "Forget",
];
var wordsNrm = [
  "Problem",
  "Tiktok",
  "Testing",
  "Loading",
  "Secound",
  "Browser",
  "Smoking",
  "Example",
  "Facebook",
  "Twitter",
  "Laptop",
  "Tokyo",
  "Greece",
  "Nescafe",
  "Unknown",
  "Meating",
  "Teacher",
  "Google",
  "Weather",
  "Message",
];
var wordsHd = [
  "Developer",
  "Reloading",
  "Programing",
  "Library",
  "Document",
  "Barcelona",
  "Spiderman",
  "Youtube",
  "Surprise",
  "Successful",
  "Unsuccessful",
  "Subscribe",
  "Rewards",
  "Computer",
  "Downloads",
];
// Default Level
// Catch Selectors
let startBtn = document.querySelector(".start");
let lvlName = document.querySelector(".lvl");
let lvlSec = document.querySelector(".sec");
let selectLvl = document.querySelector(".selectLvl");
let randomWord = document.querySelector(".random-word");
let input = document.querySelector("input");
let upComingWords = document.querySelector(".upcoming-words");
let controlTime = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finshWord = document.querySelector(".finalResult");

// level of the game
const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

// catch select box
let levels = document.querySelector("select");

// function to change Array of [Words]
function wordsLvl() {
  if (levels.value === "Easy") {
    words = wordsEz;
  } else if (levels.value === "Normal") {
    words = wordsNrm;
  } else {
    words = wordsHd;
  }
  scoreTotal.innerHTML = words.length;
}
wordsLvl();

levels.addEventListener("change", function () {
  changeLvl();
  wordsLvl();
});
changeLvl();
// function to change levels [Easy, normal, Hard]
function changeLvl() {
  let defaultLvlName = levels.value;
  let defaultLvlSec = lvls[defaultLvlName];
  lvlName.innerHTML = defaultLvlName;
  lvlSec.innerHTML = defaultLvlSec;
  controlTime.innerHTML = defaultLvlSec;
}
// Disable Paste
input.onpaste = () => {
  return false;
};
// Start Geme...
startBtn.onclick = function () {
  this.remove();
  selectLvl.remove();
  input.focus();
  randomWords();
};
// Random Words
function randomWords() {
  let randomW = words[Math.floor(Math.random() * words.length)];
  // remove word
  let wordIndex = words.indexOf(randomW);
  words.splice(wordIndex, 1);
  // Ranomd Word
  randomWord.innerHTML = randomW;
  // empty upComingWords
  upComingWords.innerHTML = "";
  // upComingWords append
  for (i = 0; i < words.length; i++) {
    let span = document.createElement("span");
    let spanTxt = document.createTextNode(words[i]);
    span.appendChild(spanTxt);
    upComingWords.appendChild(span);
  }
  startGame();
}
// function to creat final Result
function finalResult(span, txt, cls) {
  let myspan = document.createElement(span);
  let spanTxt = document.createTextNode(txt);
  myspan.className = cls;
  myspan.appendChild(spanTxt);
  finshWord.appendChild(myspan);
  input.remove();
}
// function start The playGame
function startGame() {
  changeLvl();
  let start = setInterval(() => {
    controlTime.innerHTML--;
    if (controlTime.innerHTML === "0") {
      clearInterval(start);
      // compare word
      if (randomWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;
        // Recall function
        if (words.length > 0) {
          randomWords();
        } else {
          finalResult("span", "You'r Greate !", "Successful");
        }
      } else {
        finalResult("span", "Game Over !", "unSuccessful");
      }
    }
  }, 1000);
}

// randomWords()
