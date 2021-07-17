import config from "../../config/config.js";

const validateForm = () => {
    let email = document.getElementById("femail").value;

    if(email === ""){
        document.getElementById("femailMsg").innerHTML = "Fill in the email, please!";
        return false;
    }
    return true;
};

const forgotPassword = async () => {
    let email = document.getElementById("femail").value;

    let data = {
        email: `${email}`,
    };

    try {
        const response = await axios.post(config.local_forgot_password, data);
        axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;

        if (response.data.status === "SUCCESS") {
            alert(response.data.message);
            return;
        }

        alert(response.data.message);
    } catch(error) {
        alert("Link reset password gagal dikirim. Silakan hubungi panitia!");
        return window.location.href = "forgot-password.html";
    }
};

document.getElementById("forgot-password-btn").addEventListener("click", (event) => {
    event.preventDefault();
    const isCorrect = validateForm();
    if (isCorrect) forgotPassword()
});