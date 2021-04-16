function printScores() {
  var storedScores = JSON.parse(localStorage.getItem("high-scores"));
  storedScores.sort(function (a, b) {
    return b.score - a.score;
  });
  var winnersList = document.querySelector("#winners");
  for (var i = 0; i < storedScores.length && i < 10; i++) {
    var listItem = document.createElement("li");
    listItem.textContent =
      storedScores[i].initials + ": " + storedScores[i].score;
    console.log(listItem);
    winnersList.appendChild(listItem);
  }
}

printScores();

var playAgain = document.querySelector("#play-again");

playAgain.addEventListener("click", function () {
  location.replace("index.html");
});
