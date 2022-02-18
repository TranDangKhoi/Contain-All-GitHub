$(document).scroll(function () {
    if ($(window).scrollTop() > 300 && $(window).scrollTop() < 2000) {
        $(".adjust").addClass("fixed-on-scroll");
        $(".tour-details").css("margin-top", 500);
    } else if ($(window).scrollTop() < 300) {
        $(".adjust").removeClass("fixed-on-scroll");
        $(".tour-details").css("margin-top", 0);
    }
});