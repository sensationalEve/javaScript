(function () {
  "use strict";
  let startGame = document.getElementById("startgame");
  let gameControl = document.getElementById("gamecontrol");
  let game = document.getElementById("game");
  let score = document.getElementById("score");
  let actionArea = document.getElementById("actions");

  let gameData = {
    dice: [
      "1die.jpg",
      "2die.jpg",
      "3die.jpg",
      "4die.jpg",
      "5die.jpg",
      "6die.jpg",
    ],
    players: ["player1", "player2"],
    score: [0, 0],
    roll1: 0,
    roll2: 0,
    rollSum: 0,
    index: 0,
    gameEnd: 29,
  };

  startGame.addEventListener("click", function () {
    gameData.index = Math.round(Math.random());
    gameControl.innerHTML = "<h2>The Game Has Started </h2>";
    gameControl.innerHTML += '<button id = "quit">Wanna Quit?</button>';

    document.getElementById("quit").addEventListener("click", function () {
      location.reload();
    });
    setUpTurn();
    // console.log(gameData.index);
  });

  function setUpTurn() {
    game.innerHTML = `<p> Roll the dice for the ${
      gameData.players[gameData.index]
    }</p>`;
    actionArea.innerHTML = `<button id = 'roll'> Roll the Dice </button>`;
    document.getElementById("roll").addEventListener("click", function () {
      throwDice();
    });
  }

  function throwDice() {
    actionArea.innerHTML = "";
    gameData.roll1 = Math.floor(Math.random() * 6) + 1;
    gameData.roll2 = Math.floor(Math.random() * 6) + 1;
    game.innerHTML = `<p> Roll the dice for the ${
      gameData.players[gameData.index]
    }</p>
        <img src = ${gameData.dice[gameData.roll1 - 1]} alt = 'die'>
        <img src = ${gameData.dice[gameData.roll2 - 1]} alt = 'die'>`;
    gameData.rollSum = gameData.roll1 + gameData.roll2;

    //if two 1's are rolled...
    if (gameData.rollSum === 2) {
      game.innerHTML += "<p> Oh snap! Snake eyes!</p>";
      gameData.score[gameData.index] = 0;
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      showCurrentScore();
      //show the current score
      setTimeout(setUpTurn, 2000);

      //if either die is a 1...
    } else if (gameData.roll1 === 1 || gameData.roll2 === 1) {
      gameData.index ? (gameData.index = 0) : (gameData.index = 1);
      game.innerHTML += `<p> Sorry, one of your rolls was a one, switching to ${
        gameData.players[gameData.index]
      }</p>`;
      setTimeout(setUpTurn, 2000);
      //if neither die is a 1...
    } else {
      gameData.score[gameData.index] =
        gameData.score[gameData.index] + gameData.rollSum;
      actionArea.innerHTML =
        '<button id = "rollagain"> Roll again</button> or <button id = "pass"> Pass</button>';

      document
        .getElementById("rollagain")
        .addEventListener("click", function () {
          throwDice();
        });

      document.getElementById("pass").addEventListener("click", function () {
        gameData.index ? (gameData.index = 0) : (gameData.index = 1);
        setUpTurn();
      });

      //check the winning condition...
      checkWinningCondition();
    }
  }

  function checkWinningCondition() {
    if (gameData.score[gameData.index] > gameData.gameEnd) {
      score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${
        gameData.score[gameData.index]
      } points!</h2>`;

      actionArea.innerHTML = "";
      document.getElementById("quit").innerHTML = "Start a New Game?";
    } else {
      // show current score
      showCurrentScore();
    }
  }

  function showCurrentScore() {
    score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]}
            ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}
            ${gameData.score[1]}</strong></P>`;
  }
})();
