$(document).scroll(function () {
    if ($(window).scrollTop() > 144 && $(window).scrollTop() < 200) {
        $(".destrip-form-container").css("position", "fixed");
    } else if ($(window).scrollTop() > 200 && $(window).scrollTop() < 400) {

        $(".step-2").css("background", "#20abe2");
        $(".destrip-form-container").css("position", "fixed");
        $(".step-1").css("background", "grey");
        $(".step-3").css("background", "grey");
    } else if ($(window).scrollTop() < 200) {

        $(".step-2").css("background", "grey");
        $(".destrip-form-container").css("position", "relative");
        $(".step-1").css("background", "#20abe2");
        $(".step-3").css("background", "grey");
    } else if ($(window).scrollTop() > 400) {

        $(".step-2").css("background", "grey");
        $(".destrip-form-container").css("position", "fixed");
        $(".step-3").css("background", "#20abe2");
    }


});