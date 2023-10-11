(function () {
  'use strict';
  function hideSubmenus() {
    let submenus = document.querySelectorAll("ul li ul");

    for (let i = 0; i < submenus.length; i++) {
      submenus[i].className = "hide-menu";
    }
  }
  hideSubmenus();

  let menulinks = document.querySelectorAll(".menulink");
  // let ul = document.querySelectorAll('.menulink ul');

  for (let menulink of menulinks) {
    menulink.addEventListener("click", function (e) {
      e.preventDefault();

      let thisMenu = this.parentNode.querySelector("ul");
      // thisMenu.className = 'show-menu'

      if (thisMenu.classList.contains("hide-menu")) {
        hideSubmenus();
        thisMenu.className = "show-menu";
      } else {
        thisMenu.className = "hide-menu";
      }
    });
  }
})();
