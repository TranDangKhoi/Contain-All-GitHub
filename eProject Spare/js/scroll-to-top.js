$(window).scroll(function () {
  if ($(this).scrollTop() > 1200) {
    $(".scrolltop:hidden").fadeIn("500");
  } else {
    $(".scrolltop").fadeOut("500");
  }
});
$(function () {
  $(".scroll").click(function () {
    $("html,body").animate({
        scrollTop: $(".header-logo").offset().top
      },
      "600"
    );
    return false;
  });
});