// Variables Here
var currentQuestion = 0;
var startBtn = document.querySelector("#start-btn");
var startScreen = document.querySelector("#start-screen");
var questionScreen = document.querySelector("#question-screen");
var questionText = document.querySelector("#question-text");
var optionA = document.querySelector("#A");
var optionB = document.querySelector("#B");
var optionC = document.querySelector("#C");
var optionD = document.querySelector("#D");
var answerBtns = document.querySelectorAll(".btn");
var resultCorrect = document.querySelector(".correct");
var resultIncorrect = document.querySelector(".incorrect");
var correctAnswer = 0;

startBtn.addEventListener("click", startQuiz);
// answerBtns.addEventListener("click", chooseAnswer);

function startQuiz() {
  startScreen.classList.add("hide");
  questionScreen.classList.remove("hide");
  displayQuestion();
}

function endGame() {
  questionScreen.classList.add("hide");
}

function displayQuestion() {
  // for (i = 0; i < qIndex.length; qIndex++) {
  questionText.innerText = qIndex[currentQuestion].q;
  optionA.innerText = qIndex[currentQuestion].a;
  optionB.innerText = qIndex[currentQuestion].b;
  optionC.innerText = qIndex[currentQuestion].c;
  optionD.innerText = qIndex[currentQuestion].d;
}

function checkAnswer(event) {
  var userGuess = event.target.innerText;
  console.log(userGuess);
  console.log(qIndex[currentQuestion].correct);
  if (userGuess === qIndex[currentQuestion].correct) {
    alert("Correct!");
    // resultCorrect.classList.remove("hide");
  } else {
    alert("Incorrect!");
    // resultIncorrect.classList.remove("hide");
  }

  if (currentQuestion != qIndex.length - 1) {
    currentQuestion++;
    displayQuestion();
  } else {
    endGame();
  }
}

var qIndex = [
  {
    q: "1. Which brackets enclose an array?",
    a: "{ }",
    b: "[ ]",
    c: "( )",
    d: "< >",
    correct: "[ ]",
  },
  {
    q: "2. What does API stand for?",
    a: "Auto Programming Integration",
    b: "Always Peter Inspires",
    c: "Application Programming Interface",
    d: "Awful Programming Interface",
    correct: "Application Programming Interface",
  },
  {
    q: "3. How would you call the function named myFunction?",
    a: "myFunction()",
    b: "What up, myFunction?",
    c: "function = myFunction()",
    d: "call myFunction()",
    correct: "myFunction()",
  },
  {
    q: "4. Which is the correct way to write a JavaScript tag?",
    a: "<script href= >",
    b: "<Dude, where's my JavaScript?>",
    c: "<put JavaScript here",
    d: "<script src=",
    correct: "<script src=",
  },
  {
    q: "5. Which of these options will return a random integer?",
    a: "Math.random(Math.floor)",
    b: "Math.float",
    c: "Math.random",
    d: "Math.floor(Math.random)",
    correct: "Math.floor(Math.random)",
  },
  {
    q: "6. Which of the following would you use to say i is not equal to 5?",
    a: "i == 5",
    b: "i != 5",
    c: "i =! 5",
    d: "i >= 5",
    correct: "i != 5",
  },
];
// console.log(answerBtns)
for (var i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", checkAnswer);
}

// (document.querySelectorAll(".btn")).addEventListener("click", chooseAnswer);
//
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// click handler is triggered on the start button
// timer starts

// hide the start page
// call display question function
// start timer

// question shows up on the page
// show the multiple choice answers

// add qIndex to qText and aBtns - need to increment

// click handler is triggered on what the user clicked on
// shows if the answer is correct or not correct

// WHEN I answer a question
// THEN I am presented with another question
// click handler is triggered on what the user clicked on
// shows if the answer is correct or not correct

// remove the last question
// remove the last answers
// after a short time,
// remove incorrect/correct,
// show the new question

// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// if the answer is incorrect,
// decrement the timer's time

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// stop the timer
// remove the question from display
// remove incorrect/correct
// show quiz results

// WHEN the game is over
// THEN I can save my initials and score
// show a text box for putting my name in
// take the current high score from storage
// modify the high score to include the user
// save the current high score into storage
// remove input form
// show the high score page

// ```

// ## Some of the things that I need are...

// * Array of questions
// * Timer
// * Click handlers (functions that do click events)
// * HTML templates for Right/Wrong, Questions, Answers, High scores
// * Stylesheets for each template
// * Array of objects for the high scores (Scoreboard and a way to save it)
