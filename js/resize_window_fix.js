function mobile_navbar_window_resize() {
    var body_tag = document.getElementsByTagName("body")[0];
    body_tag.classList.remove("scroll-fix");

    var html_tag = document.getElementsByTagName("html")[0];
    html_tag.classList.remove("scroll-fix");

    var navigation_menu = document.getElementsByClassName("navbar");
    for (var i = 0; i < navigation_menu.length; i++) {
        navigation_menu[i].classList.remove("navbar--mobile-transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__list");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__list--mobile-transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__item");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__item--mobile-transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__logo");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__logo--mobile-transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__burger-top");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__burger-top--transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__burger-middle");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__burger-middle--transform");
      
    }

    var navigation_menu = document.getElementsByClassName("navbar__burger-bottom");
    for (var i = 0; i < navigation_menu.length; i++) {
      navigation_menu[i].classList.remove("navbar__burger-bottom--transform");
      
    }
  }
  
window.onresize = mobile_navbar_window_resize;