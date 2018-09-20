game = {
    win: 0,
    lose: 0,
    lives: 9,
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    computerGuess: undefined,
    guesses: [],

    randomLetter: function (array) {
        var i = Math.floor((Math.random() * array.length));
        game.computerGuess = game.alphabet[i];
    },

    start: function () {
        game.lives = 9;
        game.randomLetter(game.alphabet);
        game.innerHTML('lives', game.lives);
        console.log(game.computerGuess);
    },

    checkLose: function () {
        game.lives--;
        game.innerHTML('lives', game.lives);
        if (game.lives === 0) {
            game.lose++;
            game.lives = 9;
            game.guesses = [];
            game.innerHTML('lives', game.lives);
            game.innerHTML('losses', game.lose);
        }
    },

    checkWin: function () {
        game.win++;
        game.guesses = [];
        game.start();
        game.innerHTML('wins', game.win);
    },

    innerHTML: function (id, text, array) {
        if (array) {
            return document.getElementById(id).innerHTML = array.join('');;
        }
        return document.getElementById(id).innerHTML = text;
    },

}



document.onkeyup = function (event) {
    var keyPress = event.key;

    if (game.computerGuess === undefined) game.start();

    game.guesses.push(keyPress);
    game.innerHTML('guesses', null, game.guesses);
    console.log(keyPress);
    if (keyPress !== game.computerGuess) {
        game.checkLose();
    } else {
        game.checkWin();
    }

}
