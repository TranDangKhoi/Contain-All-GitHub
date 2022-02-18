$(window).scroll(function () {
    if ($(this).scrollTop() > 940) {
        $(".fixed-booking:hidden").fadeIn();
    } else {
        $(".fixed-booking").fadeOut("500");
    }
});