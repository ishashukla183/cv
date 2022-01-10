//typing animation JavaScript


var typed = new Typed(".typing", {
  strings : ["a programmer" , "a developer", "an ML enthusiast"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
$(window).resize(function() {
    if ($(window).width() < 800) {
      $('.first-skill').removeClass('offset-lg-1');

    } else {
        $('.first-skill').addClass('offset-lg-1');
    }
}).resize();
