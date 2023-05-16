// offcanvas menu dropdwown toggle

const menuLink = $(".offcanvas--menu .nav-list .nav__link");
let toggleIcon = true;

menuLink.each(function () {
  $(this).click(function () {
    $(this).closest(".nav__item").find(".dropdown-list").slideToggle();
    menuLink.find("i").removeClass("fa-chevron-down");
    if (toggleIcon) {
      toggleIcon = false;
      $(this).closest(".nav__item").find("i").addClass("fa-chevron-up");
    } else {
      toggleIcon = true;
      $(this).closest(".nav__item").find("i").addClass("fa-chevron-down");
    }
  });
});
