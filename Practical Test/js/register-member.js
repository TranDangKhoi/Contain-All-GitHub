var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
    btnSubmit.onclick = function(){
        validateForm();
    }
}
document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
    if(event.keyCode == 123) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
       return false;
    }
    if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
       return false;
    }
}
// $('#myForm input').blur(function (){
//     if($(this).val() == '')
//     {
//         $(this).next('.tick').addClass('hidden');
//         $(this).next('.tick').next('.cross').removeClass('hidden');
//     }
// });

// $('#myForm input').keypress(function (){
//     if($(this).val() != '')
//     {
//         $(this).next('.tick').next('.cross').addClass('hidden');
//         $(this).next('.tick').removeClass('hidden');
//     }
// });
//Text counter
var el;
function charCount(e){
    var textEntered, charDisplay, counter;
    textEntered = document.getElementById('self-introduce').value;//get values of el
    charDisplay = document.getElementById('charactersLeft');
    counter = (180 - (textEntered.length) +" characters left");
    charDisplay.textContent = counter;
}

el = document.getElementById('self-introduce');
el.addEventListener('keyup',charCount,false);//on keyup - call charCount() function
// username validation
var usernameInput = $("#username").val();
$('.form-field #username').blur(function (){
    if($("#username").val().length < 8)
    {
        $("#username-label").next('.tick1').addClass('hidden');
        $("#username-label").next('.tick1').next('.cross1').removeClass('hidden');
    }
});

$('.form-field #username').keypress(function (){
    if($("#username").val().length < 8)
    {
        $(".form-field #username-label").next('.tick1').next('.cross1').addClass('hidden');
        $(".form-field #username-label").next('.tick1').removeClass('hidden');
    }
});
// password validation
$('.form-field #password').blur(function (){
    if($("#password").val().length < 14)
    {
        $("#password-label").next('.tick2').addClass('hidden');
        $("#password-label").next('.tick2').next('.cross2').removeClass('hidden');
    }
});

$('.form-field #password').keypress(function (){
    if($("#password").val().length < 14)
    {
        $(".form-field #password-label").next('.tick2').next('.cross2').addClass('hidden');
        $(".form-field #password-label").next('.tick2').removeClass('hidden');
    }
});
//re-password validation
$('.form-field #re-password').blur(function (){
    if($("#re-password").val().length < 9)
    {
        $("#repassword-label").next('.tick3').addClass('hidden');
        $("#repassword-label").next('.tick3').next('.cross3').removeClass('hidden');
    }
});

$('.form-field #re-password').keypress(function (){
    if($("#re-password").val().length < 9)
    {
        $(".form-field #repassword-label").next('.tick3').next('.cross3').addClass('hidden');
        $(".form-field #repassword-label").next('.tick3').removeClass('hidden');
    }
});
// fullName validation
$('.form-field #fullName').blur(function (){
    if($("#fullName").val() == '')
    {
        $("#fullname-label").next('.tick3').addClass('hidden');
        $("#fullname-label").next('.tick3').next('.cross3').removeClass('hidden');
    }
});

$('.form-field #fullName').keypress(function (){
    if($("#fullName").val() != '')
    {
        $(".form-field #fullname-label").next('.tick3').next('.cross3').addClass('hidden');
        $(".form-field #fullname-label").next('.tick3').removeClass('hidden');
    }
});
// Email validation
$('.form-field #email').blur(function (){
    if($("#email").val() == '')
    {
        $("#email-label").next('.tick3').addClass('hidden');
        $("#email-label").next('.tick3').next('.cross3').removeClass('hidden');
    }
});

$('#reset').onclick(function (){
    if($("#email").val() != '')
    {
        $(".form-field #email-label").next('.tick3').next('.cross3').addClass('hidden');
        $(".form-field #email-label").next('.tick3').removeClass('hidden');
    }
});
// Reset
$('#reset').click(function (){
        $(".form-field label").next('.tick1').addClass('hidden');
        $(".form-field label").next('.tick1').next('.cross1').addClass('hidden');
});

$('#reset').click(function (){
        $(".form-field label").next('.tick1').next('.cross1').addClass('hidden');
        $(".form-field label").next('.tick1').addClass('hidden');
});

// $('.form-field input').blur(function (){
//     if($(this).val() == '')
//     {
//         $(".form-field label").next('.tick2').addClass('hidden');
//         $(".form-field label").next('.tick2').next('.cross2').removeClass('hidden');
//     }
// });

// $('.form-field input').keypress(function (){
//     if($(this).val() != '')
//     {
//         $("label").next('.tick2').next('.cross2').addClass('hidden');
//         $("label").next('.tick2').removeClass('hidden');
//     }
// });

function validateForm(){
    // L???y gi?? tr??? c??c ph???n t??? trong form
    // Validate username.
    var usernameInput = document.getElementById("username")
    var username = usernameInput.value;
    var object = {
        "data":{
            "type" : "Member",
            "attributes":{
                "username": username,
                "password": password,
                "email": email,
                "birthDay": 15066499900231,
                "gender":1
            }
        }
    }
    // construct an HTTP request
    var xhr = new XMLHttpRequest(); // ?????i t?????ng c?? s???n
    // M??? k???t n???i t???i server v???i ?????a ch??? cho tr?????c, ph????ng th???c POST
    xhr.open("POST",MEMBER_API,true);
    // G???i d??? li???u theo ?????nh d???ng json.
    xhr.send(JSON.stringify(object)); // g???i c??i g??
    xhr.onreadystatechange == function() { // g???i xong th?? sao
        // G???i th??nh c??ng r???i th?? sao
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201){
            document.getElementById("total-msg").classList = "error-msg";
            document.getElementById("total-msg").innerHTML =
            responseObject.errors[0].title + "" + responseObject.errors[0].detail;
        }
    }
}