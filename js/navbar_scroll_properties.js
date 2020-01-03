function navScroll(){
    var $nav = $(".navbar--fixed");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  }

  $(window).scroll(function() {
    navScroll();
  });

  $(document).ready(function() {
    navScroll();
  });