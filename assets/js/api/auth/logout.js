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

        return window.location.replace(config.local_frontend_dashboard);    // TODO: fix href to "ACTUAL" dashboard
    } catch(error) {
        return [error, window.location.replace(config.local_frontend_dashboard)];
    }
}

document.getElementById("logout-btn").addEventListener("click", (event) => {
    event.preventDefault();
    logout()
});