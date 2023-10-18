(function () {
  "use strict";
  let tabs = document.querySelectorAll("#tabs > ul > li > a");

  // for (let tab of tabs) {
  //   tab.addEventListener("click", selectTab);
  // }

  tabs.forEach((tab) => {
    tab.addEventListener("click", selectTab);
  });

  function selectTab(event) {
    event.preventDefault();

    tabs.forEach((tab) => {
      tab.removeAttribute("class");
    });

    event.target.className = "active";

    let thisTab = event.target.getAttribute("href");
    let thisContent = document.querySelector(thisTab);
    let oldContent = document.querySelector(".visible");

    oldContent.className = "visuallyhidden";
    oldContent.addEventListener(
      "transitionend",
      function () {
        oldContent.className = "hidden";

        //the new content (thisTab) is set to visible, but with the opacity at 0
        thisContent.className = "visible visuallyhidden";

        setTimeout(function () {
          thisContent.classList.remove("visuallyhidden");
        }, 20);

        //then after a short setTimeout, change the opacity to 1, so it fades in
      },
      { capture: false, once: true, passive: false }
    );
  }
})();
