$('#toggle_burger').click(function() {
  $('.navbar').toggleClass('navbar--mobile-transform');
  $('.navbar__logo').toggleClass('navbar__logo--mobile-transform');
  $('.navbar__list').toggleClass('navbar__list--mobile-transform');
  $('.navbar__item').toggleClass('navbar__item--mobile-transform');
  $('.navbar__burger-top').toggleClass('navbar__burger-top--transform');
  $('.navbar__burger-middle').toggleClass('navbar__burger-middle--transform');
  $('.navbar__burger-bottom').toggleClass('navbar__burger-bottom--transform');
  $('body').toggleClass('scroll-fix');
  $('html').toggleClass('scroll-fix');
});
  
$('.navbar__item').click(function() {
  $('.navbar').toggleClass('navbar--mobile-transform');
  $('.navbar__logo').toggleClass('navbar__logo--mobile-transform');
  $('.navbar__list').toggleClass('navbar__list--mobile-transform');
  $('.navbar__item').toggleClass('navbar__item--mobile-transform');
  $('.navbar__burger-top').toggleClass('navbar__burger-top--transform');
  $('.navbar__burger-middle').toggleClass('navbar__burger-middle--transform');
  $('.navbar__burger-bottom').toggleClass('navbar__burger-bottom--transform');
});