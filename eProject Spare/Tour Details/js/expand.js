// Toggle Collapse
$('.faq li .question').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
});
$('.faq li .question-2').click(function () {
    $(this).find('.plus-minus-toggle').toggleClass('collapsed');
    $(this).parent().toggleClass('active');
});

$(document).ready(function () {
    $("#auto-expand").click();
    $("#auto-expand-2").click();
});