document.getElementById("convert").addEventListener("submit", function (e) {
  e.preventDefault();

  const distance = parseFloat(document.getElementById("distance").value);

  const answer = document.getElementById("answer");

  if (distance) {
    //convert
    //let conversion = distance * 1.609344;
    // let roundedConversion = Math.round(conversion * 1000) / 1000;  //same as below
    //let roundedConversion = conversion.toFixed(3);
    //easier way of writing the above
    const conversion = (distance * 1.609344).toFixed(3);
    
    //display
    answer.innerHTML = `<h2>${distance} miles converts to ${conversion} kilometers</h2>`;

  } else {
    //display error
    answer.innerHTML = "<h2>please provide a number!</h2>";
  }
});
