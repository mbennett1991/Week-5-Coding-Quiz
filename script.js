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
var timer = document.querySelector(".timeLeft");

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
//timer is going to check every second if its time to end the quiz
//***timer functionality can be considered at the end */

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
    // var rightOrWrongP = document.createElement("p");
    // rightOrWrongP.textContent = "Correct!";
    // document.appendChild(rightOrWrongP);
    console.log("Correct!")
    userScore += 20;
    console.log(userScore);
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
  var resultPage = document.getElementById("resultsPage");
  quizBox.style.display = "none";
  resultPage.style.display = "block";
  
  var userFinalScore = document.getElementById("userFinalScore");
  userFinalScore.textContent = "Final Score: " + userScore;
  document.appendChild(userFinalScore);
}

  var userInput = document.getElementById("userInput");
  var lsOutput = document.getElementById("lsOutput");
  var saveBtn = document.getElementById("saveBtn");

  
  function renderLastUser(){
    var retrieveUser = window.localStorage.getItem(lsKey, lsValue);
    console.log(retrieveUser);
  if (retrieveUser === null){
    return;
  }else {
    lsOutput.textContent = retrieveUser;
  }
  }
  
  saveBtn.addEventListener("click", function(event) {
    event.preventDefault();

    //try moving lsKay and lsValue outside of function and
    //then stringifying

    var lsKey = userInput.value;
    var lsValue = userScore;
    console.log(lsKey);
    console.log(lsValue);

    localStorage.setItem(lsKey, lsValue);

    renderLastUser();
  });

  //for (var i=0; i < localStorage.length; i++){
    



startBtn.onclick = startQuiz; 
