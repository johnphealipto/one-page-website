// // *** GENERAL FUNCTION
window.onscroll = function() {scrollFunction() };

// // *** SCROLL TOP BUTTON
// When the user scrolls down 20px from the top of the document, show the button
var mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var offset = 300, // browser window scroll (in pixels) after which the "back to top" link is shown
	offsetOpacity = 1200, //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
	scrollDuration = 700;
// // *** END OF GET THE SCROLL TOP BUTTON



// // ==== CAROUSEL SETTING
$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
    
  for (var i=0;i<minPerSlide;i++) {
    next=next.next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
        
    next.children(':first-child').clone().appendTo($(this));
  }
});
// // ==== END CAROUSEL SETTINGS
