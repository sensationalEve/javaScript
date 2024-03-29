/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div

const billInput = document.querySelector("#billTotalInput");
const tipInput = document.querySelector("#tipInput");
const numberOfPeopleDiv = document.querySelector("#numberOfPeople");
const perPersonTotalDiv = document.querySelector("#perPersonTotal");

// Get number of people from number of people div
let numberOfPeople = +numberOfPeopleDiv.innerText;

// ** Calculate the total bill per person **
const calculateBill = () => {
  let bill = +billInput.value;
  let tipPercentage = +tipInput.value / 100;
  let tipAmount = bill * tipPercentage;
  let total = bill + tipAmount;
  let PersonTotal = total / numberOfPeople;

  perPersonTotalDiv.innerText = `$${PersonTotal.toFixed(2)}`;
  //perPersonTotalDiv.innerText = `$${PersonTotal.toLocaleString("en-US")}`;

  // get bill from user input & convert it into a number
  // get the tip from user & convert it into a percentage (divide by 100)
  // get the total tip amount
  // calculate the total (tip amount + bill)
  // calculate the per person total (total divided by number of people)
  // update the perPersonTotal on DOM & show it to user
};

// ** Splits the bill between more people **
const increasePeople = () => {
  // increment the amount of people
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  // guard clause
  if (numberOfPeople <= 1) return;
  numberOfPeople--;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  // decrement the amount of people
  // update the DOM with the new number of people
  // calculate the bill based on the new number of people
};
