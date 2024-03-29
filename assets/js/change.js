function validateForm() {
    //collect form data in JavaScript variables
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
    var pw3 = document.getElementById("pswd3").value;

    //check empty confirm password field
    if(pw3 == "") {
      document.getElementById("pw3Msg").innerHTML = "Enter the password, please!";
      return false;
    }

    //minimum and maximum password length validation
    if(pw3.length < 8) {
      document.getElementById("pw3Msg").innerHTML = "Password length must be at least 8 characters";
      return false;
    }else{
      document.getElementById("pw3Msg").innerHTML = "";
    }

    //password confirmation
    if(pw1 == pw3) {
      document.getElementById("pw1Msg").innerHTML = "Passwords can not be same!";
      return false;
    }else{
      document.getElementById("pw1Msg").innerHTML = "";
    }

    //check empty password field
    if(pw1 == "") {
      document.getElementById("pw1Msg").innerHTML = "Fill the password, please!";
      return false;
    }

    //minimum and maximum password length validation
    if(pw1.length < 8) {
      document.getElementById("pw1Msg").innerHTML = "Password length must be at least 8 characters";
      return false;
    }else{
      document.getElementById("pw1Msg").innerHTML = "";
    }

    //check empty confirm password field
    if(pw2 == "") {
      document.getElementById("pw2Msg").innerHTML = "Enter the password, please!";
      return false;
    }

    //password confirmation
    if(pw1 != pw2) {
      document.getElementById("pw2Msg").innerHTML = "Passwords are not same!";
      return false;
    }else{
      document.getElementById("pw2Msg").innerHTML = "";
    }

}
