function copyToClipboard(text, el) {
    var copyTest = document.queryCommandSupported('copy');
    var elOriginalText = el.attr('data-original-title');

    if (copyTest === true) {
        var copyTextArea = document.createElement("textarea");
        copyTextArea.value = text;
        document.body.appendChild(copyTextArea);
        copyTextArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Đã sao chép!' : 'Sao chép không thành công!';
            el.attr('data-original-title', msg).tooltip('show');
        } catch (err) {
            console.log('Không copy được!');
        }
        document.body.removeChild(copyTextArea);
        el.attr('data-original-title', elOriginalText);
    } else {
        // Fallback if browser doesn't support .execCommand('copy')
        window.prompt("Trình duyệt của bạn không hỗ trợ copy hãy sử dụng Ctrl+C và Ctrl+V", text);
    }
}

$(document).ready(function () {
    $('.js-tooltip').tooltip();
    $('.js-copy').click(function () {
        var text = $(this).attr('data-copy');
        var el = $(this);
        copyToClipboard(text, el);
    });
});