import config from "../../config/config.js";

const validateForm = () => {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("femail").value;
    var pw1 = document.getElementById("pswd1").value;
    var pw2 = document.getElementById("pswd2").value;

    if(name == "") {
        document.getElementById("nameMsg").innerHTML = "Fill in the full name";
        return false;
    }

    if(!isNaN(name)){
        document.getElementById("nameMsg").innerHTML = "Only characters are allowed";
        return false;
    }else{
        document.getElementById("nameMsg").innerHTML = "";
    }

    if(email ==""){
        document.getElementById("emailMsg").innerHTML = "Fill in the email";
        return false;
    }

    if(pw1 == "") {
        document.getElementById("pw1Msg").innerHTML = "Fill in the password, please!";
        return false;
    }

    if(pw1.length < 8) {
        document.getElementById("pw1Msg").innerHTML = "Password length must be at least 8 characters";
        return false;
    }else{
        document.getElementById("pw1Msg").innerHTML = "";
    }

    if(pw2 == "") {
        document.getElementById("pw2Msg").innerHTML = "Enter the password, please!";
        return false;
    }

    if(pw1 != pw2) {
        document.getElementById("pw2Msg").innerHTML = "Passwords are not the same!";
        return false;
    }else{
        document.getElementById("pw2Msg").innerHTML = "";
    }

    return true;
}

const register = async () => {
    const fname = await document.getElementById("fname").value;
    const femail = await document.getElementById("femail").value;
    const pswd2 = await document.getElementById("pswd2").value;

    const data = {
        name: `${fname}`,
        email: `${femail}`,
        password: `${pswd2}`,
    };

    try {
        const response = await axios.post(config.local_register, data);
        axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;

        if (response.data.status === "SUCCESS") {
            alert("Register berhasil!");
            return window.location.replace(config.local_frontend_login);
        }

        const errMessage = response.data.message;
        alert(`${errMessage}. Register gagal. Silakan ulangi kembali`);
        return window.location.replace(config.local_frontend_register);
    } catch(error) {
        alert("Register gagal. Silakan ulangi kembali");
        return [error, window.location.replace(config.local_frontend_register)];
    }
}

document.getElementById("regis-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const isCorrect = validateForm();
    if (isCorrect) register()
});
