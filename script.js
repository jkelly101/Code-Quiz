// # PseudoCode

// ```

var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var qScreen = document.querySelector("#question-screen");
var answers = document.querySelectorAll(".btn");
var questions = document.querySelector("#question");

var qIndex = [
  //question 1 / index 0
  {
    q: "An array is enclosed within which type of brackets?",
    a: "[]",
    o: ["{}", "[]", "()", "//"],
  },
  //question 2 / index 1
  {
    q: "In a for loop, how do you increment i by 1?",
    a: "i++",
    o: ["i = 0", "i++", "i + 1", "i < 0"],
  },
  //question 3 / index 2
  { q: "", a: "", o: ["1", "2", "3", "4"] },
  //question 4 / index 3
  { q: "", a: "", o: ["1", "2", "3", "4"] },
  //question 5 / index 4
  { q: "", a: "", o: ["1", "2", "3", "4"] },
  //question 6 / index 5
  { q: "", a: "", o: ["1", "2", "3", "4"] },
];

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// click handler is triggered on the start button
// timer starts
// question shows up on the page
// show the multiple choice answers

function startQuiz() {
  startScreen.style.display = "none";
  displayQuestion();

  // hide the start page
  // call display question function
  // start timer
}

function displayQuestion() {
  qScreen.style.display = "block";

  // remove display: none to show first question
}

startBtn.addEventListener("click", startQuiz);

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
