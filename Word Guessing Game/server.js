"use strict";
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 3000;

const words = require('./words');
const game = require('./game');
const gameWeb = require('./gameWeb');

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.send(gameWeb.gamePage(game, words));
});

app.post('/sendGame', (req, res) => {
    const { text } = req.body;
    game.addguess(text);
    game.takeTurn(game.game,text);
    res.redirect('/');
  });
app.post('/playAgain', (req, res) => {
    game.playAgainGame();
    res.redirect('/');
  });

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));