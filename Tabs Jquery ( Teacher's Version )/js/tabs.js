$('.tab-list').each(function(){ // Find lists of tabs
    var $this = $(this); // Store this list
    var $tab = $this.find('li.active'); // Get the active list item (currently by default it's the Description)
    var $link = $tab.find('a'); // Get link from active tab
    var $panel = $($link.attr('href')); // Get active panel


$this.on('click','.tab-control', function(e){ // When click on a tab
    e.preventDefault(); // Prevent link behavior
    var $link = $(this); // Store the current link
    id = this.hash; // Get href of clicked tab (hash)


if (id && !$link.is('active')) { // If change tabs (if the tab is not active)
    $panel.removeClass('active'); // Change the css property by remove the class of it
    $tab.removeClass('active'); // Make tab inactive (just like the above)

$panel = $(id).addClass('active'); // Make the new panel you clicked on have a class 'active'
$tab = $link.parent().addClass('active'); // Make new tab active
}
})
})