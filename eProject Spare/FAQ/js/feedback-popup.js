function togglePopup3() {
    document.getElementById("popup-3").classList.toggle("active3");

}

function disableScrolling2() {
    $('body').addClass('stop-scrolling');
}

function enableScrolling2() {
    $('body').removeClass('stop-scrolling');
}


document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("popup-3").classList.remove("active3");
        $('body').removeClass('stop-scrolling');
    }
});