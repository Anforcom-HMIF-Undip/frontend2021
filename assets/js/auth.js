function validateForm() {
    //collect form data in JavaScript variables
    var name = document.getElementById("fname").value;
    var email = document.getElementById("femail").value;
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;
    
    //check empty name field
    if(name == "") {
      document.getElementById("nameMsg").innerHTML = "Fill the full name";
      return false;
    }
    
    //character data validation
    if(!isNaN(name)){
      document.getElementById("nameMsg").innerHTML = "Only characters are allowed";
      return false;
    }else{
      document.getElementById("nameMsg").innerHTML = "";
    }

    //check empty email field
    if(email ==""){
      document.getElementById("emailMsg").innerHTML = "Fill the email";
      return false;
    }
  
    //check empty password field
    if(pw1 == "") {
      document.getElementById("pw1Msg").innerHTML = "Fill the password, please!";
      return false;
    }

    //minimum and maximum password length validation
    if(pw1.length < 8 || pw1.length > 15) {
      document.getElementById("pw1Msg").innerHTML = "Password length must be between 8 - 15 characters";
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
    } 
}