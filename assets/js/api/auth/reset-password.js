
const params = new URLSearchParams(window.location.search);
const resetToken = params.get("token");

const validateForm = () => {
    let email = document.getElementById("femail").value;
    let pw1 = document.getElementById("pswd1").value;
    let pw2 = document.getElementById("pswd2").value;

    if (email === ""){
        document.getElementById("femailMsg").innerHTML = "Fill in the email, please!";
        return false;
    }

    if (pw1 === "") {
        document.getElementById("pw1Msg").innerHTML = "Fill in the password, please!";
        return false;
    }

    if (pw1.length < 8) {
        document.getElementById("pw1Msg").innerHTML = "Password length must be at least 8 characters!";
        return false;
    } else {
        document.getElementById("pw1Msg").innerHTML = "";
    }

    if (pw2 === "") {
        document.getElementById("pw2Msg").innerHTML = "Fill in the password, please!";
        return false;
    }

    if (pw1 !== pw2) {
        document.getElementById("pw2Msg").innerHTML = "Passwords are not the same!";
        return false;
    } else {
        document.getElementById("pw2Msg").innerHTML = "";
    }

    return true;
};

const resetPassword = async () => {
    const email = await document.getElementById("femail").value;
    const pswd1 = await document.getElementById("pswd1").value;
    const pswd2 = await document.getElementById("pswd2").value;

    let data = {
        token: `${resetToken}`,
        email: `${email}`,
        password: `${pswd1}`,
        password_confirmation: `${pswd2}`,
    };

    try {
        const response = await axios.post("https://asw.masuk.id/ppp/api/auth/reset-password", data);
        axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;

        if (response.data.status === "SUCCESS") {
            alert(response.data.message);
            return window.location.replace("https://anforcom.com/public/login.html");
        }

        alert(response.data.message);
    } catch(error) {
        alert("Password gagal diganti. Silakan hubungi panitia!");
    }
};

document.getElementById("change-password-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const isCorrect = validateForm();
    if (isCorrect) resetPassword()
});