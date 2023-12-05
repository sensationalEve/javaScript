window.addEventListener("load", function () {
  //how many slides?
  const slideCount = document.querySelectorAll("#slider-wrapper ul li").length;
  //how wide is each slide?
  const slideWidth = document.querySelector("#slider-wrapper").offsetWidth;
  //total slider width
  const totalWidth = slideCount * slideWidth * "px";
  //DOM elements
  const slider = document.querySelector("#slider-wrapper ul");
  const next = document.querySelector("#next");
  const previous = document.querySelector("#prev");

  let leftPosition = 0;
  let counter = 0;
  slider.style.width = totalWidth;

  next.addEventListener("click", function (evt) {
    evt.preventDefault();
    counter++;
    if (counter == slideCount) {
      //set the counter to 0
      counter = 0;
      //set the left position to 0
      //leftPosition = 0;
      //move the slider into position
      //slider.style.left = leftPosition;
    }
    //move the slider to the next slide
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  });

  previous.addEventListener('click', function(evt){
    evt.preventDefault()
    counter--;
    if (counter < 0) {
      counter = slideCount - 1;
    }
    leftPosition = `-${counter * slideWidth}px`;
    slider.style.left = leftPosition;
  })
});
