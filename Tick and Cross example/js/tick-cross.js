$('#myForm input').blur(function (){
    if($(this).val() == '')
    {
        $(this).next('.tick').addClass('hidden');
        $(this).next('.tick').next('.cross').removeClass('hidden');
    }
});

$('#myForm input').keypress(function (){
    if($(this).val() != '')
    {
        $(this).next('.tick').next('.cross').addClass('hidden');
        $(this).next('.tick').removeClass('hidden');
    }
});