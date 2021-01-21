var quizQuestions = [
  {
    question: "What does HTML stand for?",
    choices: ["HyperText Markup Link", "HyperText Markup Language", "HyperText Markup Lingo", "HyperText Master Language"],
    correctAnswer: "HyperText Markup Language"
  },
  {
    question: "What does CSS stand for?",
    choices: ["Cascading Style Sheet", "Cool Style Sheet", "Cascading Style Syntax", "Class Style Sheet"],
    correctAnswer: "Cascading Style Sheet"
  },
  {
    question: "What is JavaScript and what does it do?",
    choices: ["A Programming Language", "Change and Update both HTML and CSS", "Calculates, Manipulates and Validates data", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    question: "What is Bootstrap?",
    choices: ["A design program language", "A part of a shoe", "A popular CSS framework", "A phone app"],
    correctAnswer: "A popular CSS framework"
  },
  {
    question: "What is the data-type for the following '1'?",
    choices: ["Array", "Boolean", "Integer", "String"],
    correctAnswer: "String"
  }
];
var startBox = document.getElementById("startScreen")
var startBtn = document.getElementById("startBtn");
var quizBox = document.getElementById("quizBox");
var secondsLeft = (quizQuestions.length * 12 + 1);
var userScore = 0;
var userInitials;
var currentQuestionIndex = 0;
var userInput = document.getElementById("userInput");
var saveBtn = document.getElementById("saveBtn");
var maxHighScore = 5;

function startQuiz() {
  startBox.style.display = "none";
  quizBox.style.display = "block";
  displayQuestions();
  setTimer();
  console.log("quiz start triggered")
};

function setTimer() {
  var countDown = setInterval(function () {
    secondsLeft--;
    console.log(secondsLeft);
    var timer = document.getElementById("timeLeft");
    timer.textContent = "Time: " + secondsLeft;

    if (secondsLeft === 0 || currentQuestionIndex === quizQuestions.length) {
      clearInterval(countDown);
      setTimeout(endQuiz, 500)
    }
  }, 1000);
}

function displayQuestions() {
  var questionArea = document.getElementById("question");
  questionArea.textContent = quizQuestions[currentQuestionIndex].question;
  var choicesArea = document.getElementById("choicesSection");
  choicesArea.innerHTML = "";
  var choicesArray = quizQuestions[currentQuestionIndex].choices;

  for (var i = 0; i < choicesArray.length; i++) {
    var choiceList = document.createElement("li")
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choicesArray[i];
    choiceButton.setAttribute("value", choicesArray[i])
    choiceButton.onclick = checkAnswer;
    choiceList.appendChild(choiceButton);
    choicesArea.appendChild(choiceList);
  }
}

function checkAnswer() {
  console.log(this)
  console.log("check answer triggered", this.value)
  if (this.value === quizQuestions[currentQuestionIndex].correctAnswer) {
    console.log("Correct!")
    userScore += 20;
    console.log(userScore);
  } else {
    secondsLeft = secondsLeft - 5;
    console.log("Wrong")
  }
  currentQuestionIndex++;
  if (currentQuestionIndex === quizQuestions.length) {
    endQuiz();
  } else {
    displayQuestions();
  }
}

function endQuiz() {
  var resultPage = document.getElementById("resultsPage");
  quizBox.style.display = "none";
  resultPage.style.display = "block";

  var userFinalScore = document.getElementById("userFinalScore");
  userFinalScore.textContent = "Final Score: " + userScore;
  document.appendChild(userFinalScore);
}

function renderLastUser() {
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  var highScoresOutput = document.getElementById("highScoresOutput");

  for (var i = 0; i < highScores.length; i++) {
    var scoreList = document.createElement("li");
    scoreList.textContent ="User Initials: " + highScores[i].name + "     " + "score:  " + highScores[i].score;
    highScoresOutput.appendChild(scoreList);
  };
  console.log(scoreList);
  console.log(highScoresOutput);
};

saveBtn.addEventListener("click", function (event) {
  event.preventDefault();

  var score = {
    name: userInput.value,
    score: userScore
  };

  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));

  renderLastUser();
});

startBtn.onclick = startQuiz; 