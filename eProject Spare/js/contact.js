function togglePopup(){
    document.getElementById("popup-1").classList.toggle("active2");
    
}

function disableScrolling(){
    $('body').addClass('stop-scrolling');
}

function enableScrolling(){
    $('body').removeClass('stop-scrolling');
}


document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-1").classList.remove("active2");
$('body').removeClass('stop-scrolling');
	}
});

