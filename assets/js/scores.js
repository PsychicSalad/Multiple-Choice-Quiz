//create function to print the high scores
function printHighScores() {
  let highScores = JSON.parse(localStorage.getItem("highscores")) || [];
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  highScores.forEach(function (score) {
    let li = document.createElement("li");
    li.textContent = `${score.initials} - ${score.score}`;

    let ol = document.getElementById("highscores");
    ol.appendChild(li);
  });
}

//create function to clear the high score values so user can start fresh
function clearHighScores() {
  localStorage.removeItem("highscores");
  window.location.reload();
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clearHighScores);

printHighScores();
