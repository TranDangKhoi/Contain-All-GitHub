var el;
function charCount(e){
    var textEntered, charDisplay, counter, lastkey;
    textEntered = document.getElementById('message').value;//get values of el
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length));
    charDisplay.textContent = counter;
    lastkey = document.getElementById('lastKey');
    lastkey.textContent = 'Last key in ACSII code: ' + e.keyCode;

}

el = document.getElementById('message');
el.addEventListener('keyup',charCount,false);//on keyup - call charCount() function
