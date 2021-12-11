$('.slider').each(function () { // For every slider
    var $this = $(this); // Current slider
    var $group = $this.find('.slide-group'); // Get the slide-group (container)
    var $slides = $this.find('.slide'); // Create jQuery object to hold all slides
    var buttonArray = []; // Create array to hold navigation buttons
    var currentIndex = 0; // Hold index number of the current slide
    var timeout; // Sets gap between auto-sliding

    function move(newIndex) { // Creates the slide from old to new one
        var animateLeft, slideLeft; // Declare variables

        advance(); // When slides move, call function advance() again
        // If it is the current slide / animating do nothing
        if ($group.is(':animated') || currentIndex === newIndex) {
            return;
        }

        buttonArray[currentIndex].removeClass('active'); // Remove class from item
        buttonArray[newIndex].addClass('active'); // Add class to new item

        if (newIndex > currentIndex) { // If new item > current item (there are 4 items total)
            slideLeft = '100%'; // Set the new slide to the right
            animateLeft = '-100%'; // Animate the current group to the left
        } else {
            slideLeft = '-100%'; // Set the new slide to the left 
            animateLeft = '100%'; // Animate the current group to the right
        }
        // Position new slide to left ( if less ) or right (if more) of current
        $slides.eq(newIndex).css({
            left: slideLeft,
            display: 'block'
        });

        $group.animate({
            left: animateLeft
        }, function () { // Animate slides and
            $slides.eq(currentIndex).css({
                display: 'none'
            }); // Hide previous slide

            $slides.eq(newIndex).css({
                left: 0
            }); // Set position of the new item

            $group.css({
                left: 0
            }); // Set position of group of slides

            currentIndex = newIndex;
        });
    }

    function advance() { // Set timeout for slide changing automatically
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            if (currentIndex < ($slides.length -1)) { 
                move(currentIndex +1); // Move to the right 1 time (+1 index) (0,1,2,3)
            } else {
                move(0); // Move to the first index
            }
        }, 3000); // the speed (milisecond)
    }

    $.each($slides, function(index) {

        var $button = $('<button type="button" class="slide-btn">&bull;</button>');
        if (index === currentIndex) {
            $button.addClass('active'); // add class acive to the pressed button
        }

        $button.on('click', function () {
            move(index); // move to the on-pressed index

        }).appendTo('.slide-buttons');
        buttonArray.push($button);
    });
    advance();
});