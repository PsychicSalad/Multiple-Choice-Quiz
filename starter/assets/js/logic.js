//Declare variables and select the elements based on their id

var questionsTag = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var startScreen = document.getElementById("start-screen");
var timer = document.getElementById("time");
var startButton = document.getElementById("start");

// adding event listener for clicking the start button
startButton.addEventListener("click", function (event) {
  event.preventDefault();

  startScreen.setAttribute("class", "hide");
});
