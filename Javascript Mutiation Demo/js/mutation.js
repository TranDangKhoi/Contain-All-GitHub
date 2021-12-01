var elList, addLink, newEl, counter, listItem, newText;
elList = document.getElementById("list");
addLink = document.querySelector('a');
counter = document.getElementById("counter");

function addItem(e){
    e.preventDefault();
    newEl = document.createElement("li");
    newText = document.createTextNode("NewListItem");
    newEl.appendChild(newText);
    elList.appendChild(newEl);
}

function updateCount(){
    listItem = elList.getElementsByTagName('li').length;
    counter.innerHTML = listItem;
}

addLink.addEventListener('click',addItem,false);
elList.addEventListener('DOMNodeInserted',updateCount,false);