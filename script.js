//Global constants
const clueHoldTime = 1000;
const cluePauseTime = 333;
const nextClueWaitTime = 1000;

//Global variables
var pattern = [3, 2, 1, 2, 3, 3, 3,];

var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5; //must be between 0.0 and 1.0
var guessCounter = 0;
var guessesRemaining=3;
function startGame() {
  progress = 0;
  gamePlaying = true;
  guessesRemaining=3;
  updateGuessCount();
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("endBtn").classList.remove("hidden");
  document.getElementById("guessCounter").classList.remove("hidden");
  playClueSequence();
}
function stopGame() {
  gamePlaying = false;
  newPattern();
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("endBtn").classList.add("hidden");
  document.getElementById("guessCounter").classList.add("hidden");
}
function winGame() {
  stopGame();
  alert("Game Over. You won!");
}
function loseGame() {
  stopGame();
  alert("Game Over. You lose!");
}
function newPattern(){
  for(let i=0;i<pattern.length;i++){
    pattern[i]=generateIndex();
  }
}
function generateIndex(){
  return Math.floor(Math.random()*4)+1;
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}
//Clue functions
function playClueSequence() {
  
  context.resume();
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}
//Guess function
function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here

  //Is the guess correct
  if (btn != pattern[guessCounter]) {
    //You made an incorrect guess
    wrongGuess();
  } else {
    //You made a correct guess
    if (guessCounter != progress) {
      //The turn is not over
      guessCounter++;
    } else {
      //The turn is over
      if (progress == pattern.length - 1) {
        //You won the game
        winGame();
      }else {
        //You didn't win the game, start the next turn
        progress++;
        playClueSequence();
      }
    }
  }
}
function wrongGuess(){
  guessesRemaining--;
  updateGuessCount();
  if(guessesRemaining<1){
    loseGame();
  }else {
    playClueSequence();
  }
}
function updateGuessCount(){
  document.getElementById("guessCounter").innerHTML="Remaining Attempts:"+guessesRemaining;
}

// Sound Synthesis Functions
const freqMap = {
  1: 293.665,//D
  2: 329.628,//E
  3: 369.994,//F#
  4: 391.995,//G
  5: 440//A
}
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  context.resume();
  tonePlaying = true;
  setTimeout(function () {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    context.resume();
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    context.resume();
    tonePlaying = true;
  }
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
