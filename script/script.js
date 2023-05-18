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

// toggle quick facts and table of content
const toggleQuickContent = $(".quick-content__tabs .button");
const quickContent = $(".quick-content__info .quick-content");
toggleQuickContent.each(function () {
  $(this).click(function () {
    const target = $(this).data("target");
    toggleQuickContent.removeClass("active");
    $(this).addClass("active");
    quickContent.removeClass("show");
    $(`#${target}`).addClass("show");
  });
});

// slick slider

$(".article-card---must-read").slick({
  dots: false,
  infinite: false,
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "24px",
});

//toggle table of content in mob

$("#toggle__table-of-content").change(function () {
  if (this.checked) {
    $("#privacy__table-of-content").slideDown();
  } else {
    $("#privacy__table-of-content").slideUp();
  }
});

// media query in js
function checkMobileScreen() {
  if ($(window).width() <= 768) {
    $(".mob-slider-with-dots--single").slick({
      dots: true,
      infinite: false,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      centerPadding: "24px",
    });
    $(".mob-slider-with-arrow--single").slick({
      dots: false,
      infinite: false,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      arrows: true,
      centerPadding: "24px",
    });
    $(".mob-slider--single").slick({
      dots: false,
      infinite: false,
      slidesToShow: 1.5,
      slidesToScroll: 1,
      centerPadding: "24px",
    });
    $(".mob-slider").addClass("mob-slider--gap");
    $(".modal-mob-responsive").addClass("modal-fullscreen");
  } else {
    $(".mob-slider").removeClass("mob-slider--gap");
    $(".modal-mob-responsive").removeClass("modal-fullscreen");
  }
}

// Call the function when the page loads and on window resize
$(window).on("load", checkMobileScreen);
$(window).on("resize", checkMobileScreen);
