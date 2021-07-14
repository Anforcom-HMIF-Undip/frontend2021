import config from "../../config/config.js";

const tokenAnforcom = Cookies.get()["token-anforcom"];
const event = sessionStorage.getItem('event');

if (event === 'uiux') {
    document.getElementById("event-name").innerHTML = "UI/UX Competition";
} else if (event === 'bussinessit') {
    document.getElementById("event-name").innerHTML = "Bussiness IT Case Competition";
} else if (event === "seminar") {
    document.getElementById("event-name").innerHTML = "Seminar";
} else {
    document.getElementById("event-name").innerHTML = "";
}

const enroll = async () => {
    const name = document.querySelector("#name").value;
    const univ = document.querySelector("#univ").value;
    const hp = document.querySelector("#hp").value;

    const data = {
        hp: `${hp}`,
        institusi: `${univ}`,
    };

    try {
        const response = await axios.post(`${config.local_enroll_lomba}/${event}`, data, {
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'application/json'
            }
        });

        if (response.data.status === "SUCCESS") {
            alert(response.data.message);
            return window.location.replace(config.local_frontend_terdaftar);
        }

        alert(response.data.message);
    } catch(error) {
        alert("Gagal mendaftar event. Silakan ulangi kembali atau hubungi panitia");
        return [error, window.location.href = "member-info.html"];
    }
};

document.getElementById("daftar-btn").addEventListener("click", (event) => {
    event.preventDefault();
    enroll();
});

