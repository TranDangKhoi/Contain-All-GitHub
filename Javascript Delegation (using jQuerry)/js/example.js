$(":header").addClass('headline');
$('li:lt(4)').hide().fadeIn(600);
$('li').on('click',function(){
  $(this).remove();
})