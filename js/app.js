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

const player0Panel = document.querySelector(".player-0-panel");
const player1Panel = document.querySelector(".player-1-panel");

const name0 = document.querySelector("#name-0");
const name1 = document.querySelector("#name-1");

const score0 = document.querySelector("#score-0");
const score1 = document.querySelector("#score-1");

const current0 = document.querySelector("#current-0");
const current1 = document.querySelector("#current-1");

const dice = document.querySelector("#dice-1");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");    

// ---------- 3. Funktioner ----------

// SPEL-1: Startar ett nytt spel
function init() {

}


// SPEL-2: Körs när man klickar på "Slå tärning"
function rollDice() {
    const diceNumber = Math.floor(Math.random() * 6) + 1;

    dice.src = `img/dice-${diceNumber}.png`;

    if (diceNumber !== 1) {
        roundScore += diceNumber;

        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

    } else {
        roundScore = 0;

        document.querySelector(`#current-${activePlayer}`).textContent = roundScore;

        switchPlayer();
    }
}


// SPEL-3 och SPEL-4: Körs när man klickar på "Håll poäng"
function holdScore() {

}


// SPEL-2: Byter till den andra spelaren
function switchPlayer() {

    // Nollställ omgångspoängen
    roundScore = 0;

    // Uppdatera omgångspoängen på skärmen
    document.querySelector(`#current-${activePlayer}`).textContent = 0;

    // Byt spelare
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Ändra vilken spelare som är markerad
    player0Panel.classList.toggle("active", activePlayer === 0);
    player1Panel.classList.toggle("active", activePlayer === 1);
}


// ---------- 4. Händelser ----------

init();
btnRoll.addEventListener("click", rollDice);
btnHold.addEventListener("click", holdScore);