import "./index.css";
import { displayScore, addScore } from "./modules/leaderboardApi.js";

const scores = document.getElementById("scores");
const refresh = document.getElementById("refresh");
// const submitForm = document.getElementById("score-form");

refresh.addEventListener("click", () => {
  scores.innerHTML = "";
  displayScore();
});

addScore();
displayScore();
