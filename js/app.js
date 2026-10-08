// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100; // Poäng som krävs för att vinna

let scores = [0, 0];       // Totalpoäng: scores[0] = Spelare 1, scores[1] = Spelare 2
let roundScore = 0;        // Omgångspoäng för den aktiva spelaren
let activePlayer = 0;      // 0 = Spelare 1, 1 = Spelare 2
let isPlaying = true;      // Blir false när någon har vunnit


// ---------- 2. Element i DOM:en ----------
// ---------- 2. Element i DOM:en ----------

const player0Panel = document.querySelector(".player-0-panel");
const player1Panel = document.querySelector(".player-1-panel");

const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");

const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");
const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");
const dice = document.querySelector("#dice-1");
// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}

// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {

}

// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}

// SPEL-2: Byter till den andra spelaren
function switchPlayer() {

}


// ---------- 4. Händelser ----------

init();
