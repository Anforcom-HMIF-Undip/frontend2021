import config from "../../config/config.js";

let userName = null;

const user = async () => {
    const tokenAnforcom = await Cookies.get()["token-anforcom"];

    try {
        const response = await axios.get(config.local_user, {
            headers: {
                Authorization : `Bearer ${tokenAnforcom}`,
            }
        });
        axios.defaults.headers.post['X-CSRF-Token'] = response.data._csrf;

        if (response.data.status === "SUCCESS") {
            const getUserName = response.data.payload.name;
            userName = getUserName;
        }

    } catch(error) {
        return error;
    }
};

await user();
userName = document.getElementById("uname").innerHTML = userName;