$('.toggle-tickets').click(function () {
    $tickets = $(this).parent().siblings('.collapse');

    if ($tickets.hasClass('in')) {
        $tickets.collapse('hide');
        $(this).html('Hiện chi tiết');
        $(this).closest('.ticket-card').removeClass('active');
    } else {
        $tickets.collapse('show');
        $(this).html('Ẩn chi tiết');
        $(this).closest('.ticket-card').addClass('active');
    }
});