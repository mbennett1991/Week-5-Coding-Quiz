var startBox = document.getElementById("startScreen")
var startBtn = document.querySelector(".startBtn button");
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
  var questionHeader = document.createElement("h3");
  var choiceA = document.createElement("button");
  var choiceB = document.createElement("button");
  var choiceC = document.createElement("button");
  var choiceD = document.createElement("button"); 
  //populate the first question into the questions and answers sections
  
  questionHeader.setValue = questions
  choiceA.setValue = choices[0];
  choiceB.setValue = choices[1];
  choiceC.setValue = choices[2];
  choiceD.setValue = choices[3];

  //for (var i = 0; i=quizQuestions.length; i++);
  for (var i = 0; i = choices.length; i++);
  choiceA.addEventListener("click", quizQuestions++);
  choiceB.addEventListener("click", quizQuesions++);
  choiceC.addEventListener("click", quizQuestions++);
  choiceD.addEventListener("click", quizQuestions++)

  //worth noting that you will need to use a forEach on the choices array in the questions object your are displaying
  //you will also need to create an onclick on each of these buttons which wll call another function

};
displayQuestions();


function checkAnswer(){
// check if the answer is correct or not...
if (choiceA || choiceB || choiceC || choiceD === correctAnswer){
  userScore ++
  correctAnswerPoints ++
}else {
  return;
}
// increment the current index 
//check if we are out of questions and if so.... call the end of quiz function... if notcall displatQuestions 

}

function endQuiz(){
  //display endquiz section
  //populate with score
}

startBtn.onclick = startQuiz; 