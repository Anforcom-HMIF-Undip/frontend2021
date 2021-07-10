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

        if (response.data.status === "SUCCESS") {
            userName = response.data.payload.name;
        }

    } catch(error) {
        return error;
    }
};

await user();
userName = document.getElementById("uname").innerHTML = userName;