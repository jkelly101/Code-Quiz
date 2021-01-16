// # PseudoCode

// ```

var startBtn = document.querySelector("#start");
var startScreen = document.querySelector("#start-screen");
var qScreen = document.querySelector("#question-screen");
var qBtns = document.querySelectorAll(".btn");
var questionEl = document.querySelector("#question");
var rightAns = document.querySelector("#rightOrWrong");
var ansIndex = document.querySelector("#answers");

var qIndex = [
  //question 1 / index 0
  {
    q: "1. An array is enclosed within which type of brackets?",
    a: "[ ]",
    o: ["{ }", "[ ]", "( )", "< >"],
  },
  //question 2 / index 1
  {
    q: "2. In a for loop, how do you increment i by 1?",
    a: "i++",
    o: ["i = 0", "i++", "i + 1", "i < 0"],
  },
  //question 3 / index 2
  {
    q: "3. How do you call a function named myFunction?",
    a: "myFunction()",
    o: [
      "myFunction()",
      "function myFunction",
      "function = myFunction()",
      "call myFunction",
    ],
  },
  //question 4 / index 3
  {
    q: "4. Where is the correct place to insert a Javascript?",
    a: "The <head> or the <body>",
    o: [
      "The <head>",
      "The <body>",
      "The <head> or the <body>",
      "The <document>",
    ],
  },
  //question 5 / index 4
  {
    q: "5. Which of these options will return a random integer?",
    a: "Math.floor(Math.Random)",
    o: ["Math.floor", "Math.float", "Math.random", "Math.floor(Math.random)"],
  },
  //question 6 / index 5
  {
    q: "Which of the following wouls you use to say i is not equal to 5?",
    a: "i != 5",
    o: ["i == 5", "i != 5", "i =! 5", "i >= 5"],
  },
];

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// click handler is triggered on the start button
// timer starts

function startQuiz() {
  // hide the start page
  startScreen.style.display = "none";
  // call display question function
  displayQuestion();
  // start timer
}

startBtn.addEventListener("click", startQuiz);

// question shows up on the page
// show the multiple choice answers
function displayQuestion() {
  qScreen.style.display = "block";

  for (var i = 0; i < qIndex.length; i++) {
    qBtns[i].textContent = qIndex[0].o[i];
    questionEl.textContent = qIndex[0].q;
  }
}

// click handler is triggered on what the user clicked on
// shows if the answer is correct or not correct

ansIndex.addEventListener("click", function (event) {
  var element = event.target;

  if (element === qIndex[i].a) {
    rightAns.innerHTML = "Correct!";
  }
});

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
