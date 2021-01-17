var startBox = document.getElementById("startScreen")
var startBtn = document.querySelector(".startBtn button");
var quizBox = document.getElementById("quizBox");
var timer = document.querySelector(".timeLeft");

var quiz;
var timer;
var quizStatus;
var choices;
var choiceA;
var choiceB;
var choiceC;
var userScore = 0;
var totalPossibleScore = 100;
var correctAnswer = 20;
var userInitials; 
var currentIndex = 0; 

//startBtn.onClick = ()=> {
  //  quizBox.classList.add("active");
//} 

function startQuiz(){
  startBox.setAttribute("class", "hide");
  quizBox.removeAttribute("class");

  //nextset in functionality for startquiz is to start the timer
  //you would display the timer on the page
  //timer is going to check every second if its time to end the quiz
  //***timer functionality can be considered at the end */

//final step is to call another function which starts displaying questions
}

function displayQuestions(){
  //populate the first question into the questions and answers sections
  document........
  .setValue = questions[currentindex].questionTitle
  //worth noting that you will need to use a forEach on the choices array in the questions object your are displaying
  //you will also need to create an onclick on each of these buttons which wll call another function

}

function checkAnswer(){
// check if the answer is correct or not...

// increment the current index 
//check if we are out of questions and if so.... call the end of quiz function... if notcall displatQuestions 

}

function endQuiz(){
  //display endquiz section
  //populate with score
}

startBtn.onclick = startQuiz; 