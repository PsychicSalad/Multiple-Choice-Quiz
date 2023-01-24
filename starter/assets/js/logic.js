// Variables for tracking state of quiz including timer and current question
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerID;

//Declare variables and select the elements based on their id

var questionsTag = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var questionChoices = document.getElementById("choices");
var startScreen = document.getElementById("start-screen");
var timer = document.getElementById("time");
var startButton = document.getElementById("start");
var submitButton = document.getElementById("submit");
var initialElement = document.getElementById("initials");
var feedBackElement = document.getElementById("feedback");

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 15;

    if (time < 0) {
      time = 0;
    }
    timer.textContent = time;

    feedBackElement.textContent = "Incorrect!";
  } else {
    feedBackElement.textContent = "Correct!";
  }

  feedBackElement.setAttribute("class", "feedback");

  setTimeout(function () {
    feedBackElement.setAttribute("class", "feedback hide");
  }, 1000);

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length) {
    quizFinish();
  } else {
    getQuestion();
  }
}

// Add function to bring up question

function getQuestion() {
  let currentQuestion = questions[currentQuestionIndex];

  let titleElement = document.getElementById("question-title");

  titleElement.textContent = currentQuestion.title;

  questionChoices.innerHTML = "";

  currentQuestion.choices.forEach(function (choice, index) {
    let choiceButton = document.createElement("button");

    choiceButton.setAttribute("class", "choice");
    choiceButton.setAttribute("value", choice);

    choiceButton.textContent = `${index + 1}. ${choice}`;

    choiceButton.addEventListener("click", questionClick);

    questionChoices.append(choiceButton);
  });
}

// Function to clear timer as quiz has finished and bring up finish screen as quiz is over with final score
function quizFinish() {
  clearInterval(timerID);

  let finishScreenElement = document.getElementById("end-screen");
  finishScreenElement.removeAttribute("class");

  let finalScore = document.getElementById("final-score");
  finalScore.textContent = time;

  questionsTag.setAttribute("class", "hide");
}

// Creates function which sets text content of time element to be the timer and then if the timer runs out, it calls the function to end the quiz as user has run out of time to complete it!

function clockTick() {
  time--;
  timer.textContent = time;

  if (time <= 0) {
    quizFinish();
  }
}

// Add function to begin the quiz - also need to make quiz start when user clicks the start button

//Function to hide start screen element so that questions can be viewed instead of the start screen

function quizBegin() {
  let startScreenElement = document.getElementById("start-screen");
  startScreenElement.setAttribute("class", "hide");

  questionsTag.removeAttribute("class");

  timerID = setInterval(clockTick, 1000);

  timer.textContent = time;

  getQuestion();
}

function saveHighScore() {}

function checkForEnter(event) {}

// adding event listener for clicking the start button
startButton.addEventListener("click", quizBegin);

submitButton.addEventListener("click", saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);
