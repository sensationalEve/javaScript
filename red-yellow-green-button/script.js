const squares = document.querySelectorAll(".colorSquare");

const timesClicked = { red: 0, yellow: 0, green: 0 };

squares.forEach((square) => {
  square.onclick = () => {
    //console.log(square.value);
    timesClicked[square.value] += 1;
    square.innerText = timesClicked[square.value];
  };
});

const clearGameBtn = document.querySelector("#clear-game");
clearGameBtn.onclick = () => clearScores();

const clearScores = () => {
  timesClicked.red = 0;
  timesClicked.yellow = 0;
  timesClicked.green = 0;
  squares.forEach((square) => (square.innerText = ""));
};
