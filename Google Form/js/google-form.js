function showPassword() {
    var x = document.getElementsByClassName("password");
    if (x[1].type === "password") {
      x[1].type = "text";
    } else {
      x[1].type = "password";
    }
    if (x[0].type === "password") {
        x[0].type = "text";
      } else {
        x[0].type = "password";
      }
}

function validationForm(){
  var elMsg = document.getElementById
  var firstName = document.reg_form.fname;
  var lastName = document.reg_form.lname;
  if(firstName.value.length == 0){
    fname.focus();
    return false;
  }
}