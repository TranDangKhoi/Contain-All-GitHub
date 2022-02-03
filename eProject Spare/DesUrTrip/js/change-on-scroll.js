$(document).scroll(function () {
    if ($(window).scrollTop() > 154 && $(window).scrollTop() < 600) {
        $(".destrip-form-container").css("position", "fixed");
    } else if ($(window).scrollTop() > 600 && $(window).scrollTop() < 1000) {

        $(".step-2").css("background", "#20abe2");
        $(".destrip-form-container").css("position", "fixed");
        $(".step-1").css("background", "grey");
        $(".step-3").css("background", "grey");
    } else if ($(window).scrollTop() < 600) {

        $(".step-2").css("background", "grey");
        $(".destrip-form-container").css("position", "relative");
        $(".step-1").css("background", "#20abe2");
        $(".step-3").css("background", "grey");
    } else if ($(window).scrollTop() > 1000 && $(window).scrollTop() < 1400) {

        $(".step-2").css("background", "grey");
        $(".destrip-form-container").css("position", "fixed");
        $(".step-3").css("background", "#20abe2");
        $(".step-4").css("background", "grey");
    } else if ($(window).scrollTop() > 1400) {
        $(".step-3").css("background", "grey");
        $(".destrip-form-container").css("position", "fixed");
        $(".step-4").css("background", "#20abe2");
    }
});