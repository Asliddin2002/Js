const btnPlay = document.querySelector(".btn-play");
const btnPause = document.getElementByClassName("btn-pause");
const btnStop = document.getElementByClassName("btn-stop");
const text = document.getElementById("text");
const speed = document.getElementById("speed");

btnPlay.addEventListener("click", () => {
  playText(text);
});

function playText(text) {
  alert("Hello");
  console.log("hello");
}
