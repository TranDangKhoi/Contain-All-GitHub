$(window).scroll(function () {
  if ($(this).scrollTop() > 1200) {
    $(".scrolltop:hidden").stop(true, true).fadeIn();
  } else {
    $(".scrolltop").stop(true, true).fadeOut();
  }
});
$(function () {
  $(".scroll").click(function () {
    $(".scrolltop").hide();
    $("html,body").animate({
        scrollTop: $(".header-logo").offset().top
      },
      "600"
    );
    return false;
  });
});