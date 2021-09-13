
var slideposisi = 0;
showSlides();

function showSlides() {
  var i;
  var slide = document.getElementsByClassName("slider");
  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  slideposisi++;
  if (slideposisi > slide.length) {slideposisi = 1}
  slide[slideposisi-1].style.display = "block";
  setTimeout(showSlides, 10000);

}