(function () {
  "use strict";

  let detailsForm = document.querySelector("#destination_details_form");

  detailsForm.addEventListener("submit", handleFormSubmit);

  function handleFormSubmit(event) {
    event.preventDefault();

    // 1. extract the value from each form field
    let destName = event.target.elements["name"].value;
    let destlocation = event.target.elements["location"].value;
    let destphoto = event.target.elements["photo"].value;
    let destDesc = event.target.elements["description"].value;
    //this could be done more efficiently with a loop and pushing the values into an array.
    //the event.target is the form, and form.elements will get specific types of elements from the form

    // 2. clear out the form fields
    for (let i = 0; i < detailsForm.length; i++) {
      detailsForm.elements[i].value = "";
    }
    // 3. run a function that creates the new card
    function createDestinationCard(name, location, photoUrl, description) {
      let card = document.createElement("div");
      card.className = "card";

      let img = document.createElement("img");
      img.setAttribute("alt", name);

      let constantPhotoUrl = "images/signpost.jpg";
      if (photoUrl.length === 0) {
        img.setAttribute("src", constantPhotoUrl);
        // img.src = constantPhotoUrl;
      } else {
        img.setAttribute("src", photoUrl);
      }

      card.appendChild(img);

      let cardBody = document.createElement("div");
      cardBody.className = "card-body";

      let cardTitle = document.createElement("h3");
      cardTitle.innerText = name;
      cardBody.appendChild(cardTitle);

      let cardSubtitle = document.createElement("h4");
      cardSubtitle.innerText = location;
      cardBody.appendChild(cardSubtitle);

      if (description.length !== 0) {
        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = description;
        cardBody.appendChild(cardText);
      }

      let cardDeleteBtn = document.createElement("button");
      cardDeleteBtn.innerText = "remove";

      cardDeleteBtn.addEventListener("click", removeDestination);
      cardBody.appendChild(cardDeleteBtn);

      card.appendChild(cardBody);
      return card;
    }

    function removeDestination(event) {
      let card = event.target.parentElement.parentElement;
      card.remove();
    }

    // 4. if needed, change the header at the top of the destination list
    let wishListContainer = document.querySelector("#destinations_container");

    if (wishListContainer.children.length === 0) {
      document.querySelector("#title").innerHTML = "my wish list";
    }

    // 5. add the card
    let destCard = createDestinationCard(
      destName,
      destlocation,
      destphoto,
      destDesc
    );

    document.querySelector("#destinations_container").appendChild(destCard);
  }
})();

