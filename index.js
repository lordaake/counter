
const homeScoreContainer = document.getElementById("home-score")
const guestScoreContainer = document.getElementById("guest-score")
const resetScore = document.querySelector(".reset-score")

let homeScore = 0;
let guestScore = 0;

function addScores(score, num) {
    return score + num
};

document.addEventListener("click", function (e) {
    let numAdded = parseInt(e.target.innerText);

    if (e.target.classList.contains("add-home")) {
        homeScore = addScores(homeScore, numAdded);
        homeScoreContainer.innerText = `${homeScore}`;
    } else if (e.target.classList.contains("add-guest")) {
        guestScore = addScores(guestScore, numAdded);
        guestScoreContainer.innerText = `${guestScore}`
    }

})

resetScore.addEventListener("click", function () {
    homeScore = 0;
    guestScore = 0;
    homeScoreContainer.innerText = `${homeScore}`;
    guestScoreContainer.innerText = `${guestScore}`;
})