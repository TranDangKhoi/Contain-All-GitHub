$(window).scroll(function () {
    if ($(this).scrollTop() > 1040 && $(this).scrollTop() < $('.blogs').offset().top - 510) { // Cách class .blogs 500px từ dưới lên thì mất
        $(".fixed-booking:hidden").fadeIn();
    } else {
        $(".fixed-booking").fadeOut("500");
    }
});

$(function () {
    $(document).scroll(function () {
        if ($(this).scrollTop() > $('.blogs').offset().top + 0) {
            $(".fixed-booking").fadeOut('500');
        }
    });
});