const emojes = document.querySelectorAll("[data-emojes]");
const scoreWraper = document.querySelector(".scores");
const myScore = document.querySelector(".my-score");
const compScore = document.querySelector(".comp-score");

const gameData = [
  {
    emoje: "✊",
    title: "rock",
    beat: "scissors",
  },
  {
    emoje: "🤚",
    title: "papper",
    beat: "rock",
  },
  {
    emoje: "✌️",
    title: "scissors",
    beat: "papper",
  },
];

emojes.forEach((emoje) => {
  emoje.addEventListener("click", () => {
    selection(emoje.dataset.emojes);
  });
});

function selection(emoje) {
  const mySelection = gameData.find((i) => i.title == emoje);
  const compSelection = randomSelection();
  const iamWinner = mySelection.title != compSelection.beat;
  const compWinner = compSelection.title != mySelection.beat;
  if (iamWinner && compWinner) {
    insertData(mySelection, false);
    insertData(compSelection, false);
  } else {
    insertData(mySelection, iamWinner);
    insertData(compSelection, compWinner);
  }
  if (iamWinner) increaseScore(myScore);
  if (compWinner) increaseScore(compScore);
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * gameData.length);
  return gameData[randomIndex];
}

function increaseScore(span) {
  span.innerHTML = parseInt(span.innerHTML) + 1;
}

function insertData(selection, winner) {
  const scoreDiv = document.createElement("div");
  scoreDiv.classList.add("score-count");
  scoreDiv.innerHTML = selection.emoje;

  if (winner) {
    scoreDiv.classList.add("winner");
  }
  scoreWraper.appendChild(scoreDiv);
}
