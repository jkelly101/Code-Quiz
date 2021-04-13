function printScores() {
  var storedScores = JSON.parse(localStorage.getItem("high-scores"));
  storedScores.sort(function (a, b) {
    return b.score - a.score;
  });
  var winnersList = document.querySelector("#winners");
  for (var i = 0; i < 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent =
      storedScores[i].initials + ": " + storedScores[i].score;
    winnersList.appendChild(listItem);
  }
  // print it to div on scores.html
  // get scores from localStorage (JSON.parse)
  // loop thu array and print each element of object (li) scores[i].initials & scores[i].score
}

printScores();

var playAgain = document.querySelector("#play-again");

playAgain.addEventListener("click", function () {
  location.replace("index.html");
});
