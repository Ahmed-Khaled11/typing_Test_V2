const words = [
    "Programing",
    "Space",
    "School",
    "Teacher",
    "Football",
    "Skills",
    "Slice",
    "Mark",
    "Library",
    "Circel",
    "Arrow",
    "Short",
    "Smoking",
    "Hospital",
    "Example",
    "like",
    "Facebook",
    "Twitter",
    "Cairo",
    "Tiktok",
    "Brother",
    "Testing",
    "Family",
    "Secound",
    "Browser",
    "Developer",
    "Reloading",
    "Cheese",
    "Loading",
    "Problem"
];
// const words = []
// const wordsEz = [
//   "Tiktok",
//   "Brother",
//   "Testing",
//   "Family",
//   "Secound",
//   "Browser",
//   "Developer",
//   "Reloading",
//   "Cheese",
//   "Loading",
//   "Problem",
// ];
// const wordsNrm = [
//   "Circel",
//   "Arrow",
//   "Short",
//   "Smoking",
//   "Hospital",
//   "Example",
//   "like",
//   "Facebook",
//   "Twitter",
//   "Cairo",
// ];
// const wordsHd = [
//   "Programing",
//   "Space",
//   "School",
//   "Teacher",
//   "Football",
//   "Skills",
//   "Slice",
//   "Mark",
//   "Library",
// ];
// Default Level 

// Catch Selectors 
let startBtn = document.querySelector(".start");
let lvlName = document.querySelector(".lvl");
let lvlSec = document.querySelector(".sec");
let selectLvl = document.querySelector(".selectLvl") 
let randomWord = document.querySelector(".random-word");
let input = document.querySelector("input");
let upComingWords = document.querySelector(".upcoming-words");
let controlTime = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finshWord = document.querySelector(".finalResult");

const lvls = {
  "Easy": 5,
  "Normal": 3,
  "Hard": 2,
};

let levels = document.querySelector("select");

    
// if (levels.value === "Easy") {
// wordsEz.forEach((e) => {
//         words.splice(0,0,e)
//     })
// } else if (levels.value === "Normal") {
//         wordsNrm.forEach((e) => {
//         words.splice(0, 0,e);
//         });
// } else {
//     wordsHd.forEach((e) => {
//         words.splice(0, 0,e);
//     });
// };
levels.addEventListener("change", function () {
  changeLvl();
});
    scoreTotal.innerHTML = words.length;
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
input.onpaste = (() => {
    return false
})
// Start Geme... 
startBtn.onclick = function () {
    this.remove()
    selectLvl.remove();
    input.focus()
    randomWords()
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
};
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
            controlTime.innerHTML--
            if (controlTime.innerHTML === "0") {
            clearInterval(start);
              // compare word
            if (randomWord.innerHTML.toLowerCase() === input.value.toLowerCase()) {
                input.value = "";
                scoreGot.innerHTML++
                // Recall function 
                if (words.length > 0) {
                    randomWords();
                } else {
                    finalResult("span", "You'r Greate !", "Successful");
                }
                } 
            else {
                finalResult("span", "Game Over !", "unSuccessful");
            }
            }
        }, 1000);
    };
    
// randomWords()