var inputText = document.getElementById("username");
var inputPassword = document.getElementById("password");

$('#myForm input').blur(function (){
    if(inputText.value.length > 9)
    {
        $(this).next('.tick').addClass('hidden');
        $(this).next('.tick').next('.cross').removeClass('hidden');
    }
});
$('#myForm input').keypress(function (){
    if(inputText.value.length < 9)
    {
        $(this).next('.tick').next('.cross').addClass('hidden');
        $(this).next('.tick').removeClass('hidden');
    }
});


$('#myForm input').blur(function (){
    if(inputPassword.value.length > 9)
    {
        $(this).next('.tick').addClass('hidden');
        $(this).next('.tick').next('.cross').removeClass('hidden');
    }
});
$('#myForm input').keypress(function (){
    if(inputPassword.value.length < 9)
    {
        $(this).next('.tick').next('.cross').addClass('hidden');
        $(this).next('.tick').removeClass('hidden');
    }
});