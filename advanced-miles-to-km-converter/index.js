(function () {
  "use strict";

  let convertType = "miles";
  let heading = document.querySelector("h1");
  let intro = document.querySelector("p");
  let answerDiv = document.getElementById("answer");
  let form = document.getElementById("convert");

  document.addEventListener("keydown", function (event) {
    let key = event.code;

    if (key == "keyK") {
      //change the heading
      convertType = "kilometers";
      heading.innerHTML = "kilometers to miles converter";
      //change the intro paragraph
      intro.innerHTML =
        "type in a number of kilometers and click the button to convert the distance to miles.";
      //change the value of the convertType variable
    } else if (key == "keyM") {
      convertType = "miles";
      heading.innerHTML = "miles to kilometers converter";
      intro.innerHTML =
        "type in a number of miles and click the button to convert the distance to kilometers.";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let distance = parseFloat(document.getElementById("distance").value);

    if (distance) {
      //convert M to K 1.609344
      //convert K to M 0.621371192
      if (convertType === "miles") {
        let conversion = (distance * 1.609344).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;
      } else {
        let conversion = (distance * 0.621371192).toFixed(3);
        answerDiv.innerHTML = `<h2>${distance} kilometers converts to ${conversion} miles</h2>`;
      }
    } else {
      answerDiv.innerHTML = "<h2>please provide a number!</h2>";
    }
  });
})();
