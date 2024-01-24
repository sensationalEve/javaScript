const mainElement = document.querySelector("main");
let filmData;

async function getFilms() {
  const filmsPromise = await fetch("https://ghibliapi.herokuapp.com/films");
  const films = await filmsPromise.json();
  //console.log(films);

  setSort(films);

  addCards(films);

  filmData = films;
  document.getElementById("sortorder").removeAttribute("disabled");
}

getFilms();

document.getElementById("sortorder").addEventListener("change", () => {
  mainElement.innerHTML = "";
  setSort(filmData);
  addCards(filmData);
});

function setSort(array) {
  const sortOrder = document.getElementById("sortorder").value;

  switch (sortOrder) {
    case "title":
      array.sort((a, b) => (a.title > b.title ? 1 : -1));
      break;

    case "release_date":
      array.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
      break;

    default:
      array.sort((a, b) =>
        parseInt(a.rt_score) > parseInt(b.rt_score) ? -1 : 1
      );
      break;
  }
}

function addCards(array) {
  array.forEach((eachItem) => {
    createCard(eachItem);
  });
}

function createCard(data) {
  const card = document.createElement("article");
  card.innerHTML = filmCardContents(data);
  mainElement.appendChild(card);
}

function filmCardContents(data) {
  let html = `<h2>${data.title}</h2>
  <p><strong>Director:</strong>${data.director}</p>
  <p><strong>Released:</strong>${data.released}</p>
  <p>${data.description}</p>
  <p><strong>Rotten Tomatoes Score:</strong>${data.rt_score}</p>`;
  return html;
}

async function indivItem(url, item) {
  const itemPromise = await fetch(url);
  const data = await itemPromise.json();
  return data[item];
}
