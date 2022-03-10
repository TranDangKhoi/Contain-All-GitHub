function togglePopup2() {
    document.getElementById("popup-2").classList.toggle("active3");

}

function togglePopup4() {
    document.getElementById("popup-4").classList.toggle("active4");
}


function disableScrolling2() {
    $('body').addClass('stop-scrolling');
}

function enableScrolling2() {
    $('body').removeClass('stop-scrolling');
}

function myFunction() {
    console.log("Yay");
}



document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("popup-2").classList.remove("active3");
        $('body').removeClass('stop-scrolling');
    }
});