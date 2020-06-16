"use strict";
const wordList = require('./words');
const guesses = [];
const outputResponse = [];
let matches = 0;
let secretWord = "";

const game = {
    word: selectRandomWord(wordList),
    turns: 0,
    matchingLetters: 0,
    win: false,
};

function addguess(text){
    if(text.length != game.word.length || game.word.toUpperCase() == text.toUpperCase() || !wordList.includes(text.toUpperCase())){
              text ='';
    }
    guesses.push(text);
};

function compareWords(word,guess) {
    const letterCount = {};
    for (let letter of word.toLowerCase()) {
            letterCount[letter] = letterCount + 1 || 1;
    }
    for (let letter of guess.toLowerCase()) {
        if (letterCount[letter]) {
            letterCount[letter] -= 1;
            matches += 1;
        }
    }
    return matches;
};

function takeTurn(game,guess) {
  
  if( !wordList.includes(guess.toUpperCase())){
          outputResponse.push('Invalid Word! Choose a word only from the given list');
  }
  else{
          matches = 0;
          matches = compareWords(game.word, guess);
          game.turns++;
          outputResponse.push(guess +' -> ' +'You have matched ' + matches + ' letters out of ' +game.word.length +' words');
  }
  if (exactMatch(game.word, guess)) {
          game.win = true;
          outputResponse.push(`CONGRATULATIONS!  You won in ${game.turns} turns!`);
          return;
  }  
};

function playAgainGame(){

          guesses.length= 0;
          matches = 0;
          outputResponse.length = 0;
          game.turns = 0;
          game.word="";
          game.win = false;
          game.word = selectRandomWord(wordList);
         
}

function exactMatch(word, guess) {
         return word.toUpperCase() === guess.toUpperCase(); 
};

function selectRandomWord(wordList) {
          secretWord = wordList[Math.floor(Math.random() * wordList.length)];
          console.log(`Secret word is: ${secretWord} `);
          return secretWord;
};

const sample = {
          guesses,
          game,
          compareWords,
          outputResponse,
          addguess,
          takeTurn,
          exactMatch,
          selectRandomWord,
          playAgainGame,
}
module.exports = sample;