import config from "../../config/config.js";

const validateForm = () => {
    var email = document.getElementById("femail").value;
    var pw1 = document.getElementById("pswd1").value;

    if(email ==""){
        document.getElementById("emailMsg").innerHTML = "Fill in the email, please!";
        return false;
    }

    if(pw1 == "") {
        document.getElementById("pw1Msg").innerHTML = "Fill in the password, please!";
        return false;
    }

    if(pw1.length < 8) {
        document.getElementById("pw1Msg").innerHTML = "Password length must be at least 8 characters!";
        return false;
    }else{
        document.getElementById("pw1Msg").innerHTML = "";
    }

    return true;
}

const login = async () => {
    const femail = await document.getElementById("femail").value;
    const pswd1 = await document.getElementById("pswd1").value;

    const data = {
        email: `${femail}`,
        password: `${pswd1}`,
    };

    try {
        const response = await axios.post(config.local_login, data);
        axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;

        if (response.data.status === "SUCCESS") {
            const tokenAnforcom = Cookies.set('token-anforcom', response.data.payload.token);
            alert("Login berhasil!");
            return [tokenAnforcom, window.location.replace(config.local_frontend_dashboard)];
        }

        const errMessage = response.data.message;
        alert(`${errMessage}. Silakan ulangi kembali!`);
        return window.location.replace(config.local_frontend_login);
    } catch(error) {
        alert("Login gagal. Silakan ulangi kembali!");
        return [error, window.location.replace(config.local_frontend_login)];
    }
}

document.getElementById("login-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const isCorrect = validateForm();
    if (isCorrect) login()
});