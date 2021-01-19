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
    correctAnswer: "3"
  },
  {
    question: "What is Bootstrap?",
    choices: ["A design program language", "A part of a shoe", "A popular CSS framework", "A phone app"],
    correctAnswer: "2"
  },
  {
    question: "What is the data-type for the following '1'?",
    choices: ["Array", "Boolean", "Integer", "String"],
    correctAnswer: "3"
  }
];


var startBox = document.getElementById("startScreen")
var startBtn = document.getElementById("startBtn");
var quizBox = document.getElementById("quizBox");
var timer = document.querySelector(".timeLeft");
var resultsPage = document.getElementById("resultsPage");

var quiz;
var timer;
var quizStatus;
var userScore = 0;
var totalPossibleScore = 100;
var correctAnswerPoints = 20;
var userInitials;
var currentQuestionIndex = 0;


function startQuiz() {

  startBox.style.display = "none";
  quizBox.style.display = "block";
  displayQuestions();
  console.log("quiz start triggered")
};
//nextset in functionality for startquiz is to start the timer
//you would display the timer on the page
//timer is going to check every second if its time to end the quiz
//***timer functionality can be considered at the end */

//final step is to call another function which starts displaying questions

function displayQuestions() {
  //Getting h3 element to display the current question
  var questionArea = document.getElementById("question");
  questionArea.textContent = quizQuestions[currentQuestionIndex].question;
  var choicesArea = document.getElementById("choicesSection");
  choicesArea.innerHTML = "";
  var choicesArray = quizQuestions[currentQuestionIndex].choices;

  for (var i = 0; i < choicesArray.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choicesArray[i];
    choiceButton.setAttribute("value", choicesArray[i])
    choiceButton.onclick = checkAnswer;
    choicesArea.appendChild(choiceButton)
  }
}

function checkAnswer() {
  console.log(this)
  console.log("check answer triggered", this.value)
  if (this.value === quizQuestions[currentQuestionIndex].correctAnswer) {
    console.log("correct")
  } else {
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
  //display endquiz section
  //populate with score
  quizBox.style.display = "none"
  console.log("The end")
}

startBtn.onclick = startQuiz; 
