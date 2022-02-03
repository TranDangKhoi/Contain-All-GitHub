$(":radio").click(function () {
    if ($('.radio-1').is(':checked')) {
        $(".defined").css("display", "block");
    } else {
        $(".defined").css("display", "none");
    }
});