import config from "../../config/config.js";

const logout = async () => {
    const tokenAnforcom = await Cookies.get()["token-anforcom"];

    try {
        const response = await axios.get(config.local_logout, {
            headers: {
                Authorization : `Bearer ${tokenAnforcom}`
            }
        });

        if (response.data.status === "SUCCESS") {
            Cookies.remove('token-anforcom');
            return window.location.replace("https://anforcom.com/");
        }

        alert(response.data.message);
        // return window.location.replace(config.local_frontend_dashboard);    // TODO: fix href to "ACTUAL" dashboard
    } catch(error) {
        alert("Logout gagal. Silakan hubungi panitia");
        window.location.assign(config.local_frontend_terdaftar);
    }
}

document.getElementById("logout-btn").addEventListener("click", (event) => {
    event.preventDefault();
    logout()
});