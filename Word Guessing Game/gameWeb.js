
"use strict";
const wordList = require('./words');

const gameWeb = {
  gamePage: function (game, words) {
    return `<!DOCTYPE html>
            <html>
            <head>
               <link rel="stylesheet" href="game.css"/>
               <title>GuessGame</title>
            </head>
            <h1 class ="heading" >Word Guessing Game </h1>
            <body>
            <div id="game-page">
                <p class="wordlist-information">Guess a word from the ${wordList[0].length} letter words </p>
                <div class="display-panel">
                   <div class = "guessed-list">
                          ${gameWeb.userGuessedList(game.guesses)}
                    </div>
                    <div class = "word-list">
                          ${gameWeb.getWordList(words)}
                    </div>
                    <div class="matchinglist-panel">
                          ${gameWeb.getMatchedList(game.outputResponse)}
                    </div>
                </div>
            </div>
            <div class="form-panel">
                <form action = "/sendGame" method="POST">
                    <div>
                        <input class="guess-textfield" name="text" placeholder="Type here.."></input>
                    </div>
                    <div>   
                        <button class="guess-submitbutton" type="submit">Submit</button>
                    </div>
                </form>
                <form action = "/playAgain" method="POST">
                    <div>
                        <button class="playagain-button" type="submit" ${game.game.win ? '':'disabled'}>Play Again</button> 
                    </div>
                </form>
            </div>
            <div class= "turns">
                 Turns: ${game.game.turns}
            </div>
            </body>
            </html>`;
  },

  userGuessedList: function (guessedWord) {

    return ` <ul class= "guesses" style="list-style-type:none"> ` +
      guessedWord.map(guess => {
        return `
            <li>
                ${guess}
            </li>`
      }).join('\n') +
      ` </ul> `;

  },

  getWordList: function (words) {

    return `<ul class="words-list" style="list-style-type:none">` +
      words.map(word => `
            <li>
               <div class="word-list">
                <span>${word}</span>
               </div>
             </li>
           `).join('') +
      `</ul>`;
  },

  getMatchedList: function (matched) {
    return ` <ul class= "matched" style="list-style-type:none" ` +
      matched.map(match => {
        return `
         <li>
            ${match}
         </li>`
      }).join('\n') +
      ` </ul> `;
  },

  getPlayAgain: function () {
   return `
  `;
  },
}
module.exports = gameWeb;
