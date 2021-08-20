import config from "../../config/config.js";

const tokenAnforcom = Cookies.get()["token-anforcom"];
const event = sessionStorage.getItem('event');
const preloader = document.getElementById('preloader-active');
preloader.style.display = 'none';

// if (event === 'uiux') {
//     document.getElementById("event-name").innerHTML = "UI/UX Competition";
// } else if (event === 'bussinessit') {
//     document.getElementById("event-name").innerHTML = "Bussiness IT Case Competition";
// } else if (event === "seminar") {
//     document.getElementById("event-name").innerHTML = "Seminar";
// } else {
//     document.getElementById("event-name").innerHTML = "";
// }

console.log(tokenAnforcom)

const enroll = async () => {
    const name = document.querySelector("#name").value;
    const hp = document.querySelector("#hp").value;

    const data = {
        name: `${name}`,
        hp: `${hp}`,
    };

    try {
        preloader.style.display = 'block';
        const response = await axios.post(`${config.local_enroll_seminar}`, data, {
            headers : {
                Authorization : `Bearer ${tokenAnforcom}`,
                'Content-Type' : 'application/json'
            }
        });

        if (response.data.status === "SUCCESS") {
            preloader.style.display = 'none';
            alert(response.data.message);
            return window.location.replace(config.local_frontend_terdaftar);
        }

        alert(response.data.message);
        preloader.style.display = 'none';
    } catch(error) {
        preloader.style.display = 'none';
        alert("Gagal mendaftar event. Silakan ulangi kembali atau hubungi panitia");
        window.location.href = "daftar-seminar.html";
    }
};

document.getElementById("daftar-btn").addEventListener("click", (event) => {
    event.preventDefault();
    enroll();
});

