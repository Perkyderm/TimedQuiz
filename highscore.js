var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");
var goBack = document.querySelector("#goBack");


clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();

    var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);
