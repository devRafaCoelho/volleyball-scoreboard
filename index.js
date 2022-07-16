const nameTeamA = prompt("Enter the name of Team A.");
const nameTeamB = prompt("Enter the name of Team B.");
let scoreA = 0;
let scoreB = 0;
let setA = 0;
let setB = 0;

const nameTeamA_HTML = document.getElementById("nameTeamA");
const nameTeamB_HTML = document.getElementById("nameTeamB");
const scoreTeamA_HTML = document.getElementById("scoreTeamA");
const scoreTeamB_HTML = document.getElementById("scoreTeamB");
const setScoreTeamA_HTML = document.getElementById("setScoreTeamA");
const setScoreTeamB_HTML = document.getElementById("setScoreTeamB");

nameTeamA_HTML.innerText = nameTeamA;
nameTeamB_HTML.innerText = nameTeamB;

function zeroScore() {
    scoreA = 0;
    scoreB = 0;
    scoreTeamA_HTML.innerText = 0;
    scoreTeamB_HTML.innerText = 0;
}

function winGame() {
    if (setA > 2) {
        alert("The " + nameTeamA + " won the game!");
    } else if (setB > 2) {
        alert("The " + nameTeamB + " won the game!");
    }
}

function changeSetA() {
    setA++;
    setScoreTeamA_HTML.innerText = setA;
    zeroScore()
    alert("The " + nameTeamA + " won the set!");
}

function changeSetB() {
    setB++;
    setScoreTeamB_HTML.innerText = setB;
    zeroScore()
    alert("The " + nameTeamB + " won the set!");
}

function normalSet() {
    if (scoreA >= 25 && (scoreA - scoreB) >= 2) {
        changeSetA();
    } else if (scoreB >= 25 && (scoreB - scoreA) >= 2) {
        changeSetB();
    }
}

function tieBreak() {
    if (scoreA >= 15 && (scoreA - scoreB) >= 2) {
        changeSetA();
    } else if (scoreB >= 15 && (scoreB - scoreA) >= 2) {
        changeSetB();
    }
}

function clickScoreA() {
    if (setA < 3) {
        scoreA++;
        scoreTeamA_HTML.innerText = scoreA;

        if (setA < 2) {
            normalSet();
        } else if (setA == 2 && setA == setB) {
            tieBreak();
            winGame();
        } else if (setA == 2 && setA != setB) {
            normalSet();
            winGame();
        }
    }
}

function clickScoreB() {
    if (setB < 3) {
        scoreB++;
        scoreTeamB_HTML.innerText = scoreB;

        if (setB < 2) {
            normalSet();
        } else if (setB == 2 && setB == setA) {
            tieBreak();
            winGame();
        } else if (setB == 2 && setB != setA) {
            normalSet();
            winGame();
        }
    }
}

scoreTeamA_HTML.addEventListener("click", clickScoreA);
scoreTeamB_HTML.addEventListener("click", clickScoreB);